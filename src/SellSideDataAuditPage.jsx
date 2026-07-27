import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags, { PAGE_META } from './components/MetaTags.jsx';
import Footer from './components/Footer.jsx';

/**
 * Sell-Side Data Audit service page (new).
 * Layout/content/styling from the design mockup (sell-side-data-audit.html),
 * integrated into the SPA: global <Navigation /> supplies the nav, <Footer />
 * the shared footer, MetaTags the per-page title/description. All mockup
 * styling is scoped under `.sda-page` so it cannot leak into the rest of the app.
 */

const styles = `
.sda-page{
  --navy:#0d2231;--navy-deep:#091a26;--ink:#13293a;--gold:#eab836;--blue:#2d5be3;
  --red:#b23a48;--green:#2e6b46;--gray-bg:#f4f4f2;--gray-line:#e3e3df;
  --gray-text:#5d6b76;--gray-light:#8fa0ab;--serif:Georgia,'Times New Roman',serif;
  --sans:'Segoe UI',-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;
  font-family:var(--sans);color:var(--ink);background:#fff;line-height:1.55;
  -webkit-font-smoothing:antialiased;padding-top:64px;overflow-x:clip}
.sda-page *{margin:0;padding:0;box-sizing:border-box}
.sda-page a{color:inherit;text-decoration:none}
.sda-page .wrap{max-width:1220px;margin:0 auto;padding:0 32px}

.sda-page .hero{display:grid;grid-template-columns:2fr 1fr;min-height:560px}
.sda-page .hero-left{background:
  linear-gradient(115deg, rgba(6,18,28,.9) 0%, rgba(9,26,38,.6) 55%, rgba(9,26,38,.38) 100%),
  url('/images/hero-bg.jpg') center/cover no-repeat,
  repeating-linear-gradient(105deg,#16303f 0 46px,#1b3a4c 46px 92px,#12293a 92px 150px);
  background-color:var(--navy-deep);
  display:flex;flex-direction:column;justify-content:center;padding:80px 64px;color:#fff}
.sda-page .eyebrow{font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:#c3ccd3;margin-bottom:16px;font-weight:600}
.sda-page .hero h1{font-size:52px;line-height:1.08;font-weight:700;margin-bottom:18px;max-width:640px}
.sda-page .hero .tagline{font-family:var(--serif);font-style:italic;font-size:21px;color:var(--gold);margin-bottom:14px}
.sda-page .hero p.sub{font-size:18px;color:#dbe2e7;max-width:560px;margin-bottom:34px;font-weight:300}
.sda-page .hero-ctas{display:flex;gap:14px;flex-wrap:wrap}
.sda-page .btn{display:inline-block;padding:14px 26px;font-size:14.5px;font-weight:600;border-radius:3px}
.sda-page .btn-solid{background:#fff;color:var(--navy)}
.sda-page .btn-outline{border:1px solid rgba(255,255,255,.6);color:#fff}
.sda-page .btn-gold{background:var(--gold);color:var(--navy)}
.sda-page .hero-proof{display:flex;margin-top:44px;border-top:1px solid rgba(255,255,255,.18);padding-top:22px;max-width:620px}
.sda-page .proof{padding-right:34px;margin-right:34px;border-right:1px solid rgba(255,255,255,.18)}
.sda-page .proof:last-child{border-right:none}
.sda-page .proof b{display:block;font-size:26px;color:var(--gold);font-weight:700;line-height:1.1}
.sda-page .proof span{font-size:12.5px;color:#b9c4cc}

.sda-page .hero-right{background:var(--gray-bg);padding:56px 44px;display:flex;flex-direction:column;justify-content:center}
.sda-page .rail-item{border-left:3px solid var(--blue);padding:2px 0 2px 16px;margin-bottom:26px}
.sda-page .rail-item:last-child{margin-bottom:0}
.sda-page .rail-item .t{font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;font-weight:700;color:var(--navy);border-bottom:2px solid var(--gold);display:inline-block;padding-bottom:3px;margin-bottom:8px}
.sda-page .rail-item p{font-size:14px;color:var(--gray-text)}
.sda-page .rail-item p b{color:var(--ink)}

.sda-page section{padding:88px 0}
.sda-page .sec-eyebrow{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--gray-light);font-weight:600;margin-bottom:12px}
.sda-page .sec-title{font-size:40px;font-weight:700;color:var(--navy);line-height:1.12;margin-bottom:10px}
.sda-page .sec-sub{font-size:17px;color:var(--gray-text);max-width:780px}
.sda-page .sec-sub.it{font-family:var(--serif);font-style:italic}

.sda-page .dark-sec{background:var(--navy);color:#fff}
.sda-page .dark-sec .sec-eyebrow{color:var(--gold)}
.sda-page .dark-sec .sec-title{color:#fff}
.sda-page .dark-sec .sec-sub{color:#b9c4cc}
.sda-page .chart{margin-top:46px;max-width:860px}
.sda-page .bar-row{display:grid;grid-template-columns:220px 1fr;align-items:center;gap:16px;margin-bottom:16px}
.sda-page .bar-label{font-size:13.5px;font-weight:600;text-align:right;color:#dfe6ea}
.sda-page .bar-track{position:relative;height:30px}
.sda-page .bar{height:100%;display:flex;align-items:center;border-radius:2px}
.sda-page .bar span{margin-left:10px;font-size:13px;font-weight:700;white-space:nowrap}
.sda-page .bar.cost{background:var(--gold);width:2%;min-width:8px}
.sda-page .bar.cost span{color:var(--gold);margin-left:14px}
.sda-page .bar.r1{background:#4a6373;width:25%}
.sda-page .bar.r2{background:#c26b6b;width:50%}
.sda-page .bar.r3{background:#c14f4f;width:100%}
.sda-page .bar.r3 span{margin-left:-64px;color:#fff}
.sda-page .chart-note{font-family:var(--serif);font-style:italic;text-align:center;color:#dfe6ea;font-size:14.5px;margin-top:26px}
.sda-page .chart-note b{color:var(--gold);font-style:normal;font-family:var(--sans)}

.sda-page .thesis-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:44px}
.sda-page .thesis-card{background:#fff;border:1px solid var(--gray-line);border-top:3px solid var(--navy);padding:28px 26px}
.sda-page .thesis-card:nth-child(odd){border-top-color:var(--gold)}
.sda-page .tc-eyebrow{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--gray-light);font-weight:700;margin-bottom:6px}
.sda-page .thesis-card h3{font-size:20px;color:var(--navy);margin-bottom:6px}
.sda-page .thesis-card .thesis-line{font-family:var(--serif);font-style:italic;font-size:14px;color:var(--gray-text);padding-bottom:14px;border-bottom:1px solid var(--gray-line);margin-bottom:14px}
.sda-page .pa-h{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--gray-light);font-weight:700;margin-bottom:10px}
.sda-page .pa{margin-bottom:12px}
.sda-page .pa b{display:block;font-size:14.5px;color:var(--ink);position:relative;padding-left:18px}
.sda-page .pa b::before{content:"";position:absolute;left:0;top:7px;width:8px;height:8px;background:var(--navy)}
.sda-page .thesis-card:nth-child(odd) .pa b::before{background:var(--gold)}
.sda-page .pa span{display:block;font-size:12.5px;color:var(--gray-text);padding-left:18px}
.sda-page .thesis-foot{text-align:center;font-family:var(--serif);font-style:italic;font-size:15.5px;color:var(--gray-text);margin-top:32px}
.sda-page .thesis-foot b{font-family:var(--sans);font-style:normal;color:var(--navy)}

.sda-page .tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:44px}
.sda-page .tile{background:var(--navy);color:#fff;text-align:center;padding:26px 14px}
.sda-page .tile b{display:block;font-size:38px;color:var(--gold);font-weight:700;line-height:1.1}
.sda-page .tile span{font-size:13px;color:#c3ccd3}
.sda-page .register{margin-top:40px}
.sda-page .reg-head{display:grid;grid-template-columns:44px 1.1fr 1.3fr 100px 80px;background:var(--navy);color:#fff;font-size:12px;letter-spacing:.1em;text-transform:uppercase;font-weight:600}
.sda-page .reg-head div{padding:13px 16px}
.sda-page .reg-row{display:grid;grid-template-columns:44px 1.1fr 1.3fr 100px 80px;border:1px solid var(--gray-line);border-top:none;background:#fff}
.sda-page .reg-row:nth-child(odd){background:#fafaf8}
.sda-page .reg-row>div{padding:13px 16px;font-size:14px;color:#3c4a55}
.sda-page .reg-row .num{color:var(--gray-light);font-weight:700}
.sda-page .reg-row .issue{font-weight:600;color:var(--ink)}
.sda-page .sev{font-weight:700;font-size:13px}
.sda-page .sev.h{color:var(--red)} .sda-page .sev.m{color:#b58a12} .sda-page .sev.l{color:var(--green)}
@media(max-width:860px){
  .sda-page .reg-head{display:none}
  .sda-page .reg-row{grid-template-columns:1fr;padding:6px 0}
  .sda-page .reg-row>div{padding:3px 16px}
  .sda-page .reg-row .num{display:none}
  .sda-page .reg-row .issue{padding-top:12px}
  .sda-page .reg-row .meta-line{padding-bottom:12px}
}
.sda-page .reg-row .meta-line{display:contents}
@media(max-width:860px){
  .sda-page .reg-row .meta-line{display:flex;gap:18px;align-items:center}
  .sda-page .reg-row .meta-line .eff::before{content:"Effort: ";color:var(--gray-light);font-weight:400}
}
.sda-page .eff{font-size:14px;color:#3c4a55}
.sda-page .stake{margin-top:34px;background:var(--navy);border-left:5px solid var(--gold);padding:26px 32px;color:#fff}
.sda-page .stake .t{font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);font-weight:700;margin-bottom:10px;text-align:center}
.sda-page .stake p{font-family:var(--serif);font-style:italic;font-size:16.5px;text-align:center;color:#e8edf0;max-width:820px;margin:0 auto}

.sda-page .gray-sec{background:var(--gray-bg)}
.sda-page .gg{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:44px}
.sda-page .panel{background:#fff;border:1px solid var(--gray-line);padding:30px 28px}
.sda-page .panel.gold-top{border-top:3px solid var(--gold)}
.sda-page .panel.navy-top{border-top:3px solid var(--navy)}
.sda-page .panel h3{font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:var(--navy);margin-bottom:16px}
.sda-page .panel ul{list-style:none}
.sda-page .panel ul li{font-size:14.5px;color:#3c4a55;padding:9px 0 9px 26px;position:relative;border-bottom:1px solid #f0f0ec}
.sda-page .panel ul li:last-child{border-bottom:none}
.sda-page .panel ul li::before{content:"";position:absolute;left:4px;top:16px;width:8px;height:8px;background:var(--navy)}
.sda-page .panel.gold-top ul li::before{background:var(--gold)}
.sda-page .panel ul li small{display:block;color:var(--gray-light);font-size:12.5px}
.sda-page .profile{display:grid;grid-template-columns:1fr 1fr 1fr;border:1px solid var(--gold);margin-top:34px;background:#fff}
.sda-page .profile div{padding:18px;text-align:center;border-right:1px solid var(--gray-line)}
.sda-page .profile div:last-child{border-right:none}
.sda-page .profile small{display:block;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--gray-light);font-weight:700;margin-bottom:4px}
.sda-page .profile b{font-size:16px;color:var(--navy)}

.sda-page .cta{background:var(--navy);color:#fff;text-align:center;padding:96px 0}
.sda-page .cta .t{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);font-weight:700;margin-bottom:14px}
.sda-page .cta h2{font-size:38px;font-weight:700;margin-bottom:10px}
.sda-page .cta p{font-size:16.5px;color:#c3ccd3;margin-bottom:34px}
.sda-page .cta .hero-ctas{justify-content:center}

@media(max-width:1000px){
  .sda-page .hero{grid-template-columns:1fr}
  .sda-page .hero h1{font-size:40px}
  .sda-page .thesis-grid,.sda-page .gg{grid-template-columns:1fr}
  .sda-page .tiles{grid-template-columns:1fr 1fr}
  .sda-page .bar-row{grid-template-columns:130px 1fr}
}
@media(max-width:640px){
  .sda-page .tiles,.sda-page .profile{grid-template-columns:1fr}
  .sda-page .wrap{padding:0 18px}
}
@media(max-width:760px){
  .sda-page .hero-left{padding:56px 24px}
  .sda-page .hero-right{padding:40px 24px}
  .sda-page .hero-proof{flex-wrap:wrap;max-width:100%;gap:14px 0}
  .sda-page .proof{padding-right:22px;margin-right:22px}
  .sda-page .proof:nth-child(2){border-right:none}
}
`;

export default function SellSideDataAuditPage() {
  return (
    <>
      <MetaTags {...PAGE_META.sellSideDataAudit} />
      <div className="sda-page">
        <style>{styles}</style>

        {/* HERO */}
        <header className="hero">
          <div className="hero-left">
            <div className="eyebrow">Private Equity Services · Sell-Side Data Audit</div>
            <h1>Buyers are using AI to find the holes in your story.</h1>
            <div className="tagline">A 2-week data audit catches them first.</div>
            <p className="sub">A rapid readiness audit that finds the gaps in your data before the buyer's AI does — so management walks into diligence with answers, not surprises.</p>
            <div className="hero-ctas">
              <a className="btn btn-gold" href="mailto:consult@northcastleconsulting.com?subject=Sell-Side%20Data%20Audit">Book Your Audit</a>
              <Link className="btn btn-outline" to="/services/sell-side-readiness">Explore Full Sell-Side Readiness</Link>
            </div>
            <div className="hero-proof">
              <div className="proof"><b>2 wks</b><span>end-to-end timeline</span></div>
              <div className="proof"><b>~$15K</b><span>vs. millions of EBITDA-turn risk</span></div>
              <div className="proof"><b>Zero</b><span>diligence surprises</span></div>
            </div>
          </div>
          <div className="hero-right">
            <div className="rail-item"><div className="t">Situation</div>
              <p>You've grown the business. EBITDA is up. The data underneath was built for operations — <b>not for diligence.</b></p></div>
            <div className="rail-item"><div className="t">Complication</div>
              <p>Today's buyer probes with AI-equipped checklists. Whatever you can't answer fast becomes a <b>0.25–1.0 turn of EBITDA haircut</b> to valuation.</p></div>
            <div className="rail-item"><div className="t">Resolution</div>
              <p>A 2-week NCC audit finds the holes in your data before the buyer's AI does. Management walks into diligence with <b>detailed answers that support the valuation story</b> — not a deer-in-the-headlights look.</p></div>
          </div>
        </header>

        {/* VALUE AT RISK */}
        <section className="dark-sec">
          <div className="wrap">
            <div className="sec-eyebrow">Value Creation · What the Audit Protects</div>
            <h2 className="sec-title">Audit cost vs. value at risk.</h2>
            <p className="sec-sub">Illustrative — for a $20M EBITDA business.</p>
            <div className="chart">
              <div className="bar-row"><div className="bar-label">NCC audit cost</div><div className="bar-track"><div className="bar cost"><span>$0.015M (~$15K)</span></div></div></div>
              <div className="bar-row"><div className="bar-label">Value at risk · 0.25x</div><div className="bar-track"><div className="bar r1"><span style={{ marginLeft: 'calc(100% + 10px)', color: '#dfe6ea' }}>$5M</span></div></div></div>
              <div className="bar-row"><div className="bar-label">Value at risk · 0.5x</div><div className="bar-track"><div className="bar r2"><span style={{ marginLeft: 'calc(100% + 10px)', color: '#dfe6ea' }}>$10M</span></div></div></div>
              <div className="bar-row"><div className="bar-label">Value at risk · 1.0x</div><div className="bar-track"><div className="bar r3"><span>$20M</span></div></div></div>
              <div className="chart-note">Audit pays for itself <b>many times over</b> at every scale.</div>
            </div>
          </div>
        </section>

        {/* SCOPE TO THESIS */}
        <section>
          <div className="wrap">
            <div className="sec-eyebrow">Step 1 · Scope to Your Thesis</div>
            <h2 className="sec-title">The audit starts by asking what your thesis needs to defend.</h2>
            <p className="sec-sub it">Different investment theses → different priority analyses → different data requirements.</p>
            <div className="thesis-grid">
              <div className="thesis-card">
                <div className="tc-eyebrow">Industrial · PE Roll-Up</div>
                <h3>Industrial Roll-Up</h3>
                <div className="thesis-line">Inorganic growth and margin pass-through underpin the thesis.</div>
                <div className="pa-h">Priority Analyses</div>
                <div className="pa"><b>Price-Volume-Mix (PVM)</b><span>Price Realization · Volume · Product Mix · M&amp;A · FX</span></div>
                <div className="pa"><b>Aftermarket &amp; Service Attach</b><span>Service Penetration · Gross Margin Mix</span></div>
                <div className="pa"><b>M&amp;A Synergy Capture</b><span>Pre-Deal Underwriting vs. Realized Run-Rate</span></div>
                <div className="pa"><b>Inflationary Pass-Through</b><span>SKU-Level Input Cost vs. Price Realization</span></div>
              </div>
              <div className="thesis-card">
                <div className="tc-eyebrow">SaaS · Growth Equity</div>
                <h3>Recurring Revenue Growth</h3>
                <div className="thesis-line">ARR durability and unit economics drive multiple expansion.</div>
                <div className="pa-h">Priority Analyses</div>
                <div className="pa"><b>ARR Performance Bridge</b><span>New Logo · Expansion · Contraction · Net Churn</span></div>
                <div className="pa"><b>Cohort Net Retention (NDR)</b><span>Customer Segment · Vintage · Contract Size</span></div>
                <div className="pa"><b>GTM Efficiency &amp; Payback</b><span>SaaS Magic Number · CAC Payback Velocity</span></div>
                <div className="pa"><b>Gross-to-Net Revenue Walk</b><span>Discounts · Credits · Net Realization Rate</span></div>
              </div>
              <div className="thesis-card">
                <div className="tc-eyebrow">Consumer · DTC</div>
                <h3>Repeat Customer Economics</h3>
                <div className="thesis-line">Brand LTV economics and omnichannel mix justify valuation.</div>
                <div className="pa-h">Priority Analyses</div>
                <div className="pa"><b>Cohort LTV:CAC Dynamics</b><span>Payback Velocity by Acquisition Vintage</span></div>
                <div className="pa"><b>Omnichannel Distribution</b><span>Paid Performance · Organic · Marketplace Contribution</span></div>
                <div className="pa"><b>Customer Concentration Risk</b><span>Top-Account Share · Attrition Risk</span></div>
                <div className="pa"><b>Purchase Frequency &amp; AOV</b><span>Order Velocity · Basket Size Trends</span></div>
              </div>
              <div className="thesis-card">
                <div className="tc-eyebrow">Healthcare Services</div>
                <h3>Multi-Site Healthcare Platform</h3>
                <div className="thesis-line">Same-store performance and payer diversification anchor valuation.</div>
                <div className="pa-h">Priority Analyses</div>
                <div className="pa"><b>Same-Store Sales (SSS) Growth</b><span>Organic Base vs. De Novo Clinic Performance</span></div>
                <div className="pa"><b>Payer Mix Optimization</b><span>Commercial · Government (Medicare/Medicaid) · Self-Pay</span></div>
                <div className="pa"><b>Four-Wall Site Economics</b><span>Clinic Margin Distribution · Outlier Remediation</span></div>
                <div className="pa"><b>Clinical Staff Productivity</b><span>Daily Patient Volume · Revenue per Provider</span></div>
              </div>
            </div>
            <div className="thesis-foot">Your scope is built from your thesis. <b>3–5 priority analyses</b> identified in the audit.</div>
          </div>
        </section>

        {/* WHAT IT PRODUCES */}
        <section className="gray-sec" style={{ paddingTop: 80 }}>
          <div className="wrap">
            <div className="sec-eyebrow">Step 2 · What the 2-Week Audit Produces</div>
            <h2 className="sec-title">Two weeks. A roadmap of every gap, surfaced before the buyer finds it.</h2>
            <p className="sec-sub it">Ready to act on — what's worth fixing, what's worth disclosing, what's worth living with.</p>
            <div className="tiles">
              <div className="tile"><b>10</b><span>Issues surfaced</span></div>
              <div className="tile"><b>8</b><span>With remediation plans</span></div>
              <div className="tile"><b>2 wks</b><span>End-to-end timeline</span></div>
              <div className="tile"><b>Zero</b><span>Diligence surprises</span></div>
            </div>
            <div className="register">
              <div className="reg-head"><div>#</div><div>Issue</div><div>Remediation Path</div><div>Severity</div><div>Effort</div></div>
              <div className="reg-row"><div className="num">1</div><div className="issue">Revenue cutoff inconsistent vs. shipping records</div><div>Re-cut Q1–Q4 revenue using bill-of-lading dates</div><div className="meta-line"><div><span className="sev h">High</span></div><div className="eff">1 wk</div></div></div>
              <div className="reg-row"><div className="num">2</div><div className="issue">Customer concentration not visible to buyer</div><div>Build top-20 customer waterfall with retention</div><div className="meta-line"><div><span className="sev h">High</span></div><div className="eff">3 days</div></div></div>
              <div className="reg-row"><div className="num">3</div><div className="issue">COGS allocation buries true product margins</div><div>Re-allocate using activity-based costing model</div><div className="meta-line"><div><span className="sev h">High</span></div><div className="eff">2 wks</div></div></div>
              <div className="reg-row"><div className="num">4</div><div className="issue">M&amp;A run-rate adjustments unsupported</div><div>Tie out synergy realization to GL entries</div><div className="meta-line"><div><span className="sev m">Medium</span></div><div className="eff">1 wk</div></div></div>
              <div className="reg-row"><div className="num">5</div><div className="issue">Working capital seasonality not normalized</div><div>Build 13-week rolling NWC bridge</div><div className="meta-line"><div><span className="sev m">Medium</span></div><div className="eff">5 days</div></div></div>
              <div className="reg-row"><div className="num">6</div><div className="issue">Add-back schedule lacks documentation</div><div>Source each add-back to invoice/contract</div><div className="meta-line"><div><span className="sev m">Medium</span></div><div className="eff">3 days</div></div></div>
              <div className="reg-row"><div className="num">7</div><div className="issue">FX impact on margin trends unexplained</div><div>Constant-currency walk with reconciliation</div><div className="meta-line"><div><span className="sev l">Low</span></div><div className="eff">2 days</div></div></div>
              <div className="reg-row"><div className="num">8</div><div className="issue">Pricing realization untested at SKU level</div><div>Build SKU pass-through analysis</div><div className="meta-line"><div><span className="sev l">Low</span></div><div className="eff">3 days</div></div></div>
            </div>
            <div className="stake">
              <div className="t">What's at Stake Without the Audit</div>
              <p>The buyer's diligence team finds these 10 gaps in week 3 of exclusivity. Management is reacting, not narrating. Each unresolved gap is a downward repricing lever — and they compound.</p>
            </div>
          </div>
        </section>

        {/* GIVE / GET */}
        <section>
          <div className="wrap">
            <div className="sec-eyebrow">Engagement Profile</div>
            <h2 className="sec-title">Run it before the deal lands.</h2>
            <p className="sec-sub it">An audit run pre-deal gives you runway — to fix what surfaces, build the narrative the data actually supports, and defend the investment thesis at sale with proof, not promises.</p>
            <div className="gg">
              <div className="panel navy-top">
                <h3>What You Give Us</h3>
                <ul>
                  <li>Trial balance + GL detail (3 yrs)</li>
                  <li>CIM — original deal + any acquisitions</li>
                  <li>Management reports (last 12 mo)</li>
                  <li>Board decks (last 12 mo)</li>
                  <li>ERP + CRM access (read-only)</li>
                  <li>30-min kickoff with CFO + ops lead <small>(30 min)</small></li>
                  <li>1 weekly check-in <small>(30 min × 2 wks)</small></li>
                </ul>
              </div>
              <div className="panel gold-top">
                <h3>What You Get</h3>
                <ul>
                  <li>Scoped analysis stack for your thesis</li>
                  <li>Data readiness scorecard with sub-tests</li>
                  <li>Prioritized issue list with remediation estimates</li>
                  <li>Standalone-shareable handoff materials</li>
                </ul>
              </div>
            </div>
            <div className="profile">
              <div><small>Industry</small><b>Sector-agnostic</b></div>
              <div><small>Duration</small><b>2 weeks</b></div>
              <div><small>Service</small><b>Sell-Side Data Audit</b></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="wrap">
            <div className="t">Ready to see what yours looks like?</div>
            <h2>Book your 2-week Sell-Side Data Audit.</h2>
            <p>Nicholas Citrin · Founder &nbsp;·&nbsp; consult@northcastleconsulting.com &nbsp;·&nbsp; 314-440-4931</p>
            <div className="hero-ctas">
              <a className="btn btn-gold" href="mailto:consult@northcastleconsulting.com?subject=Sell-Side%20Data%20Audit">Email Us to Get Started</a>
              <Link className="btn btn-outline" to="/services/sell-side-readiness">See the Full Sell-Side Readiness Offering</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
