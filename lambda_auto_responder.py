"""
Lambda function for auto-responding to Roundup Sample Report requests
Triggered by API Gateway or form submission
"""

import json
import boto3
import os

# SES Configuration
SES_REGION = 'us-east-2'
SENDER_EMAIL = 'consult@northcastleconsulting.com'
TEMPLATE_NAME = 'RoundupSampleReportResponse'
INTERNAL_EMAIL = 'consult@northcastleconsulting.com'

# CC RECIPIENTS - Using only verified emails
CC_EMAILS = [
    'consult@northcastleconsulting.com'  # You - MUST be verified in SES
]

ses_client = boto3.client('ses', region_name=SES_REGION)

def lambda_handler(event, context):
    """
    Handle form submission and send auto-response email
    """
    try:
        # Parse request
        if 'body' in event:
            body = json.loads(event['body']) if isinstance(event['body'], str) else event['body']
        else:
            body = event
        
        name = body.get('name', 'Valued Prospect')
        email = body.get('email', '')
        firm = body.get('firm', '')
        phone = body.get('phone', '')
        case_count = body.get('caseCount', '')
        message = body.get('message', '')
        
        if not email or '@' not in email:
            return {
                'statusCode': 400,
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type'
                },
                'body': json.dumps({'error': 'Valid email required'})
            }
        
        # Send email to requester with CC to team
        ses_client.send_templated_email(
            Source=SENDER_EMAIL,
            Destination={
                'ToAddresses': [email],
                'CcAddresses': CC_EMAILS  # CC Nick and you
            },
            Template=TEMPLATE_NAME,
            TemplateData=json.dumps({'name': name.split()[0] if ' ' in name else name})
        )
        
        # Send notification to internal team (separate email with full details)
        internal_msg = f"""New Roundup Sample Report Request

Name: {name}
Email: {email}
Firm: {firm}
Phone: {phone}
Case Count: {case_count}

Message: {message}

---
Auto-response with Sample Audit Report was sent to {email}
CC'd: {', '.join(CC_EMAILS)}"""
        
        ses_client.send_email(
            Source=SENDER_EMAIL,
            Destination={
                'ToAddresses': [INTERNAL_EMAIL]
            },
            Message={
                'Subject': {'Data': f'New Request: {name} - {firm}'},
                'Body': {'Text': {'Data': internal_msg}}
            }
        )
        
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Report sent! Check your email.',
                'cc': CC_EMAILS
            })
        }
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Failed to send', 'details': str(e)})
        }
