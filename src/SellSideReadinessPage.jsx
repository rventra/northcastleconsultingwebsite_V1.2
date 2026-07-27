import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags, { PAGE_META } from './components/MetaTags.jsx';
import Footer from './components/Footer.jsx';

/**
 * Sell-Side Readiness service page.
 * Layout/content/styling from the design mockup (sell-side-readiness.html),
 * integrated into the SPA: the global <Navigation /> (App.jsx) supplies the
 * real nav, <Footer /> supplies the shared footer, and MetaTags sets the
 * per-page title/description at runtime. All mockup styling is scoped under
 * `.ssr-page` so it cannot leak into the rest of the app.
 */

const styles = `
.ssr-page{
  --navy:#0d2231;--navy-deep:#091a26;--ink:#13293a;--gold:#eab836;--blue:#2d5be3;
  --gray-bg:#f4f4f2;--gray-line:#e3e3df;--gray-text:#5d6b76;--gray-light:#8fa0ab;
  --serif:Georgia,'Times New Roman',serif;
  --sans:'Segoe UI',-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;
  font-family:var(--sans);color:var(--ink);background:#fff;line-height:1.55;
  -webkit-font-smoothing:antialiased;padding-top:64px;overflow-x:clip}
.ssr-page *{margin:0;padding:0;box-sizing:border-box}
.ssr-page a{color:inherit;text-decoration:none}
.ssr-page .wrap{max-width:1220px;margin:0 auto;padding:0 32px}

.ssr-page .hero{display:grid;grid-template-columns:2fr 1fr;min-height:600px}
.ssr-page .hero-left{position:relative;background:
  linear-gradient(115deg, rgba(6,18,28,.88) 0%, rgba(9,26,38,.55) 55%, rgba(9,26,38,.35) 100%),
  url('/images/hero-bg.jpg') center/cover no-repeat,
  repeating-linear-gradient(105deg,#16303f 0 46px,#1b3a4c 46px 92px,#12293a 92px 150px);
  background-color:var(--navy-deep);
  display:flex;flex-direction:column;justify-content:center;padding:80px 64px;color:#fff}
.ssr-page .eyebrow{font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:#c3ccd3;margin-bottom:16px;font-weight:600}
.ssr-page .hero h1{font-size:64px;line-height:1.05;font-weight:700;margin-bottom:18px}
.ssr-page .hero .tagline{font-family:var(--serif);font-style:italic;font-size:21px;color:var(--gold);margin-bottom:12px}
.ssr-page .hero p.sub{font-size:19px;color:#dbe2e7;max-width:540px;margin-bottom:34px;font-weight:300}
.ssr-page .hero-ctas{display:flex;gap:14px;flex-wrap:wrap}
.ssr-page .btn{display:inline-block;padding:14px 26px;font-size:14.5px;font-weight:600;border-radius:3px;cursor:pointer}
.ssr-page .btn-solid{background:#fff;color:var(--navy)}
.ssr-page .btn-outline{border:1px solid rgba(255,255,255,.6);color:#fff}
.ssr-page .btn-gold{background:var(--gold);color:var(--navy)}
.ssr-page .hero-proof{display:flex;gap:0;margin-top:46px;border-top:1px solid rgba(255,255,255,.18);padding-top:22px;max-width:640px}
.ssr-page .proof{padding-right:34px;margin-right:34px;border-right:1px solid rgba(255,255,255,.18)}
.ssr-page .proof:last-child{border-right:none;margin-right:0;padding-right:0}
.ssr-page .proof b{display:block;font-size:26px;color:var(--gold);font-weight:700;line-height:1.1}
.ssr-page .proof span{font-size:12.5px;color:#b9c4cc;letter-spacing:.02em}

.ssr-page .hero-right{background:var(--gray-bg);padding:56px 44px;display:flex;flex-direction:column;justify-content:center}
.ssr-page .hero-right h2{font-size:26px;font-weight:700;color:var(--navy)}
.ssr-page .hero-right .sub2{color:var(--gray-text);font-size:15px;margin-bottom:26px}
.ssr-page .obstacle{border-left:3px solid var(--blue);padding:2px 0 2px 16px;margin-bottom:22px}
.ssr-page .obstacle .num{color:var(--blue);font-weight:700;font-size:17px;margin-right:8px}
.ssr-page .obstacle .t{font-weight:600;font-size:15.5px;color:var(--navy)}
.ssr-page .obstacle p{font-size:13.5px;color:var(--gray-text);margin-top:3px}
.ssr-page .obstacle p.fix{color:var(--ink);font-weight:600;margin-top:2px}

.ssr-page section{padding:88px 0}
.ssr-page .sec-eyebrow{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--gray-light);font-weight:600;margin-bottom:12px}
.ssr-page .sec-title{font-size:42px;font-weight:700;color:var(--navy);line-height:1.12;margin-bottom:10px}
.ssr-page .sec-sub{font-size:17px;color:var(--gray-text);max-width:760px}

.ssr-page .why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:44px}
.ssr-page .why-card{background:#fff;border:1px solid var(--gray-line);border-top:3px solid var(--gold);padding:26px 24px 24px}
.ssr-page .why-card:nth-child(n+4){border-top-color:var(--navy)}
.ssr-page .why-card .ck{width:34px;height:34px;border-radius:50%;background:var(--navy);color:var(--gold);display:flex;align-items:center;justify-content:center;font-size:15px;margin-bottom:14px}
.ssr-page .why-card h3{font-size:16.5px;color:var(--navy);margin-bottom:8px}
.ssr-page .why-card p{font-size:13.8px;color:var(--gray-text)}

.ssr-page .split{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:44px}
.ssr-page .panel{background:#fff;border:1px solid var(--gray-line);padding:30px 28px}
.ssr-page .panel.gold-top{border-top:3px solid var(--gold)}
.ssr-page .panel.navy-top{border-top:3px solid var(--navy)}
.ssr-page .panel h3{font-size:18px;color:var(--navy);margin-bottom:12px;display:flex;align-items:center;gap:12px}
.ssr-page .phase-num{flex:none;width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px}
.ssr-page .phase-num.g{background:var(--gold);color:var(--navy)}
.ssr-page .phase-num.n{background:var(--navy);color:#fff}
.ssr-page .panel p{font-size:14.5px;color:var(--gray-text)}
.ssr-page .panel ul{list-style:none;margin-top:10px}
.ssr-page .panel ul li{font-size:14px;color:#3c4a55;padding:7px 0 7px 24px;position:relative;border-bottom:1px solid #f0f0ec}
.ssr-page .panel ul li:last-child{border-bottom:none}
.ssr-page .panel ul li::before{content:"";position:absolute;left:4px;top:14px;width:7px;height:7px;background:var(--gold);border-radius:50%}
.ssr-page .panel.navy-top ul li::before{background:var(--navy)}
.ssr-page .who{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px}
.ssr-page .who .card{background:var(--gray-bg);padding:16px 18px;border-left:3px solid var(--gold)}
.ssr-page .who .card:last-child{border-left-color:var(--navy)}
.ssr-page .who b{display:block;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:var(--navy);margin-bottom:5px}
.ssr-page .who p{font-size:13.5px}

.ssr-page .dark-sec{background:var(--navy);color:#fff}
.ssr-page .dark-sec .sec-eyebrow{color:var(--gold)}
.ssr-page .dark-sec .sec-title{color:#fff}
.ssr-page .dark-sec .sec-sub{color:#b9c4cc}
.ssr-page .matrix{margin-top:46px;display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.ssr-page .stage-card{background:#122d40;border:1px solid rgba(255,255,255,.12);display:flex;flex-direction:column}
.ssr-page .stage-card h4{font-size:12px;letter-spacing:.14em;text-transform:uppercase;text-align:center;padding:14px 10px;border-bottom:2px solid var(--gold);color:#fff;font-weight:700}
.ssr-page .mgroup{padding:16px 14px}
.ssr-page .mgroup + .mgroup{border-top:1px solid rgba(255,255,255,.1);flex:1}
.ssr-page .mgroup-h{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;margin-bottom:9px}
.ssr-page .mgroup-h.banker{color:#9fb2bd}
.ssr-page .mgroup-h.ncc{color:var(--gold)}
.ssr-page .chips{display:flex;flex-direction:column;gap:6px}
.ssr-page .chip{font-size:13px;padding:9px 12px;border-radius:2px}
.ssr-page .chip.b{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.18);color:#dfe6ea}
.ssr-page .chip.n{background:#fff;color:var(--navy);font-weight:600;border-left:4px solid var(--gold);display:flex;justify-content:space-between;gap:8px;align-items:center}
.ssr-page .chip.n::after{content:"N";flex:none;background:var(--gold);color:var(--navy);font-size:10.5px;font-weight:800;width:17px;height:17px;display:flex;align-items:center;justify-content:center;border-radius:2px}
.ssr-page .matrix-foot{margin-top:18px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);padding:14px 18px;font-family:var(--serif);font-style:italic;font-size:14.5px;color:#dfe6ea}
.ssr-page .matrix-foot b{color:var(--gold);font-style:normal;font-family:var(--sans)}

.ssr-page .eng{margin-top:44px;border:1px solid var(--gray-line)}
.ssr-page .eng-head{display:grid;grid-template-columns:220px 1fr 200px;background:var(--navy);color:#fff;font-size:12px;letter-spacing:.14em;text-transform:uppercase;font-weight:600}
.ssr-page .eng-head div{padding:13px 20px}
.ssr-page .eng-row{display:grid;grid-template-columns:220px 1fr 200px;border-top:1px solid var(--gray-line);background:#fff}
.ssr-page .eng-row>div{padding:22px 20px}
.ssr-page .stage-name{font-weight:700;font-size:15px;display:flex;align-items:flex-start;gap:12px}
.ssr-page .stage-bar{flex:none;width:4px;align-self:stretch;border-radius:2px}
.ssr-page .eng-row ul{list-style:none}
.ssr-page .eng-row ul li{font-size:14px;color:#3c4a55;padding:4px 0 4px 20px;position:relative}
.ssr-page .eng-row ul li::before{content:"";position:absolute;left:2px;top:11px;width:6px;height:6px;background:var(--navy);border-radius:50%}
.ssr-page .timeline{font-weight:700;font-size:14.5px}
.ssr-page .intro-flag{display:inline-block;margin-top:8px;font-size:12px;background:#fdf1d7;color:#8a6a14;border:1px solid #ecd18a;padding:4px 10px;border-radius:3px;font-weight:600}

.ssr-page .scenario{background:var(--navy);color:#fff;padding:44px 48px;display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:44px;margin-top:28px}
.ssr-page .scenario:first-of-type{margin-top:44px}
.ssr-page .chip-label{display:inline-block;background:var(--gold);color:var(--navy);font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:7px 14px;border-radius:2px;margin-bottom:20px}
.ssr-page .scenario blockquote{font-family:var(--serif);font-style:italic;font-size:21px;line-height:1.45;color:#e8edf0}
.ssr-page .sc-h{font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--gray-light);font-weight:700;margin-bottom:12px}
.ssr-page .scenario ul{list-style:none}
.ssr-page .scenario ul li{font-size:13.8px;color:#cdd6dc;padding:5px 0 5px 16px;position:relative}
.ssr-page .scenario ul li::before{content:"";position:absolute;left:0;top:12px;width:6px;height:6px;background:var(--gray-light)}
.ssr-page .hurdle{font-size:15px;color:#fff;line-height:1.5}
.ssr-page .hurdle-box{margin-top:14px;background:rgba(234,184,54,.12);border:1px solid rgba(234,184,54,.4);padding:12px 14px;font-size:13px;color:var(--gold)}

.ssr-page .gray-sec{background:var(--gray-bg)}
.ssr-page .work-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:44px}
.ssr-page .work-card{background:#fff;border:1px solid var(--gray-line);display:flex;flex-direction:column}
.ssr-page .work-img{height:150px;background:linear-gradient(135deg,#122d40 0%, #0d2231 60%, #16354a 100%);position:relative}
.ssr-page .work-img .tag{position:absolute;left:16px;bottom:14px;background:var(--blue);color:#fff;font-size:11px;font-weight:700;letter-spacing:.08em;padding:5px 11px;border-radius:2px;text-transform:uppercase}
.ssr-page .work-body{padding:22px 22px 8px;flex:1}
.ssr-page .work-body h3{font-size:17.5px;color:var(--navy);margin-bottom:8px;line-height:1.3}
.ssr-page .work-body p{font-size:13.8px;color:var(--gray-text)}
.ssr-page .stats{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--gray-line);margin-top:18px}
.ssr-page .stats div{padding:13px 10px 13px 22px;border-right:1px solid var(--gray-line)}
.ssr-page .stats div:last-child{border-right:none}
.ssr-page .stats b{display:block;font-size:16px;color:var(--navy);font-weight:700;line-height:1.15}
.ssr-page .stats span{font-size:11px;color:var(--gray-light);letter-spacing:.03em}
.ssr-page .work-link{display:block;padding:14px 22px;font-size:13.5px;font-weight:700;color:var(--blue);border-top:1px solid var(--gray-line)}
.ssr-page .work-link:hover{background:#f8f8f6}

.ssr-page .cta{background:var(--navy);color:#fff;text-align:center;padding:96px 0}
.ssr-page .cta h2{font-size:40px;font-weight:700;margin-bottom:14px}
.ssr-page .cta p{font-size:17.5px;color:#c3ccd3;margin-bottom:34px;max-width:640px;margin-left:auto;margin-right:auto}
.ssr-page .cta p b{color:var(--gold)}
.ssr-page .cta .hero-ctas{justify-content:center}

@media(max-width:1000px){
  .ssr-page .hero{grid-template-columns:1fr}
  .ssr-page .hero h1{font-size:44px}
  .ssr-page .why-grid,.ssr-page .work-grid{grid-template-columns:1fr 1fr}
  .ssr-page .split,.ssr-page .scenario{grid-template-columns:1fr}
  .ssr-page .matrix{grid-template-columns:1fr 1fr}
  .ssr-page .eng-head{display:none}
  .ssr-page .eng-row{grid-template-columns:1fr}
}
@media(max-width:640px){
  .ssr-page .why-grid,.ssr-page .work-grid,.ssr-page .matrix{grid-template-columns:1fr}
  .ssr-page .wrap{padding:0 18px}
}
@media(max-width:760px){
  .ssr-page .hero-left{padding:56px 24px}
  .ssr-page .hero-right{padding:40px 24px}
  .ssr-page .hero-proof{flex-wrap:wrap;max-width:100%;gap:14px 0}
  .ssr-page .proof{padding-right:22px;margin-right:22px}
  .ssr-page .proof:nth-child(2){border-right:none}
}
`;

export default function SellSideReadinessPage() {
  return (
    <>
      <MetaTags {...PAGE_META.sellSideReadiness} />
      <div className="ssr-page">
        <style>{styles}</style>

        <header className="hero">
          <div className="hero-left">
            <div className="eyebrow">Private Equity Services</div>
            <h1>Sell-Side Readiness</h1>
            <div className="tagline">Maximize the multiple. Streamline the exit.</div>
            <p className="sub">Maximize valuation and ensure a seamless exit by addressing buyer concerns before they arise.</p>
            <div className="hero-ctas">
              <a className="btn btn-solid" href="mailto:consult@northcastleconsulting.com?subject=Sell-Side%20Readiness">Prepare Your Exit</a>
              <Link className="btn btn-outline" to="/services/sell-side-data-audit">Start with a Readiness Audit</Link>
            </div>
            <div className="hero-proof">
              <div className="proof"><b>12+</b><span>company-side workstreams owned per deal</span></div>
              <div className="proof"><b>2 wks</b><span>rapid sell-side data audit</span></div>
              <div className="proof"><b>Partner-led</b><span>every engagement, no bait-and-switch</span></div>
            </div>
          </div>
          <div className="hero-right">
            <h2>Common Obstacles</h2>
            <div className="sub2">&amp; How We Remove Them</div>
            <div className="obstacle"><span className="num">01</span><span className="t">Operational Disruption</span><p>Management balancing day-to-day while preparing for diligence.</p><p className="fix">We handle the heavy lifting so leadership stays focused.</p></div>
            <div className="obstacle"><span className="num">02</span><span className="t">Data Complexity</span><p>Disparate systems and unstructured data stall transactions.</p><p className="fix">We consolidate fragmented data into buyer-ready analytics.</p></div>
            <div className="obstacle"><span className="num">03</span><span className="t">Buyer Scrutiny</span><p>Investors demand accuracy; unexpected issues derail valuations.</p><p className="fix">Our PE experience means we anticipate questions before asked.</p></div>
            <div className="obstacle"><span className="num">04</span><span className="t">Resource Constraints</span><p>Understaffed F&amp;A teams struggle to meet diligence requirements.</p><p className="fix">We embed as an extension, filling bandwidth gaps seamlessly.</p></div>
          </div>
        </header>

        <section>
          <div className="wrap">
            <div className="sec-eyebrow">Why It Works</div>
            <h2 className="sec-title">Why Sell-Side Readiness drives better exits.</h2>
            <p className="sec-sub">Six reasons sponsors and CFOs engage us before going to market.</p>
            <div className="why-grid">
              <div className="why-card"><div className="ck">✓</div><h3>Transaction Success</h3><p>Increase the probability of a successful, attractive transaction. Preparation before going to market is consistently tied to cleaner processes and stronger outcomes.</p></div>
              <div className="why-card"><div className="ck">✓</div><h3>Management Bandwidth</h3><p>Let the management team keep running the business while we carry the process.</p></div>
              <div className="why-card"><div className="ck">✓</div><h3>Higher Valuation, Fewer Surprises</h3><p>Pre-sale diligence surfaces operational, tech, and HR issues early, cutting last-minute surprises and price adjustments.</p></div>
              <div className="why-card"><div className="ck">✓</div><h3>Buyer's Perspective</h3><p>Apply PE, IB, and transactional expertise to prepare management for buyer due diligence.</p></div>
              <div className="why-card"><div className="ck">✓</div><h3>Clean, Validated Data</h3><p>Organized financials that streamline the banker process and stand up to scrutiny on the value drivers buyers negotiate against.</p></div>
              <div className="why-card"><div className="ck">✓</div><h3>Management Credibility</h3><p>Professionalize deliverables to highlight management strength and reinforce a best-in-class impression.</p></div>
            </div>
          </div>
        </section>

        <section className="gray-sec" style={{ paddingTop: 80 }}>
          <div className="wrap">
            <div className="sec-eyebrow">The Offering</div>
            <h2 className="sec-title">Two phases. Pick one or both.</h2>
            <p className="sec-sub">All deliverables transition to your team at engagement end.</p>
            <div className="split">
              <div className="panel gold-top">
                <h3><span className="phase-num g">1</span> Preparation</h3>
                <p>We step into management's shoes and prepare for sale with a buyer's lens — so management doesn't have to.</p>
                <ul>
                  <li>Clean, reconcile, and validate data — merge acquired entities into one consolidated view</li>
                  <li>Assess profitability by product, service line, and customer segment; drill to transaction-level detail</li>
                  <li>Build structured data cubes to answer diligence queries quickly (e.g., revenue by contract)</li>
                  <li>Substantiate proposed add-backs and synergy adjustments</li>
                  <li>Surface potential diligence red flags — and the supporting analysis — before buyers do</li>
                  <li>Build the integrated forecast / projection model and historical pro-formas</li>
                  <li>Help craft the equity story, CIM, and other investor-facing materials; assist the sell-side QoE</li>
                  <li>Populate the VDR and ensure all numbers reconcile across schedules</li>
                </ul>
              </div>
              <div className="panel navy-top">
                <h3><span className="phase-num n">2</span> Diligence Support</h3>
                <p>We support management through initial and confirmatory diligence — all the way to close.</p>
                <ul>
                  <li>Act as the in-house deal QB — driving diligence workstreams and interfacing with external advisors</li>
                  <li>Project manage the company's side of the process between buyer, seller &amp; service providers</li>
                  <li>Produce on-demand analysis and timely responses to investor and buyer requests</li>
                  <li>Assist buy-side QoE; prepare supporting and roll-forward analysis</li>
                </ul>
                <div className="who">
                  <div className="card"><b>For Sponsors</b><p>A streamlined exit at attractive multiples, built on a proven sell-side readiness playbook.</p></div>
                  <div className="card"><b>For Management</b><p>Bandwidth and exit know-how — focus on the day-to-day and put your best foot forward.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dark-sec">
          <div className="wrap">
            <div className="sec-eyebrow">Where We Fit</div>
            <h2 className="sec-title">We play alongside the banker — not instead of one.</h2>
            <p className="sec-sub">The banker runs the sale process and manages buyers. We run the seller's internal workstreams that get the deal across the line.</p>
            <div className="matrix">
              <div className="stage-card">
                <h4>1 · Sell-Side Prep</h4>
                <div className="mgroup"><div className="mgroup-h banker">Banker · buyer &amp; process facing</div>
                  <div className="chips"><div className="chip b">Act as external advisor</div></div></div>
                <div className="mgroup"><div className="mgroup-h ncc">North Castle · company-side execution</div>
                  <div className="chips"><div className="chip n">Build equity story</div><div className="chip n">Trending financials / KPIs</div><div className="chip n">Pro-forma financials</div><div className="chip n">Validate / cleanse / reconcile data</div><div className="chip n">Profitability / transaction-level analysis</div><div className="chip n">Sell-side QoE support</div><div className="chip n">Build projection model</div></div></div>
              </div>
              <div className="stage-card">
                <h4>2 · Marketing</h4>
                <div className="mgroup"><div className="mgroup-h banker">Banker · buyer &amp; process facing</div>
                  <div className="chips"><div className="chip b">Develop CIM</div><div className="chip b">Contact potential buyers</div><div className="chip b">Market the deal</div><div className="chip b">Manage overall process</div></div></div>
                <div className="mgroup"><div className="mgroup-h ncc">North Castle · company-side execution</div>
                  <div className="chips"><div className="chip n">Support equity story</div><div className="chip n">Act as internal advisor</div></div></div>
              </div>
              <div className="stage-card">
                <h4>3 · Initial Diligence</h4>
                <div className="mgroup"><div className="mgroup-h banker">Banker · buyer &amp; process facing</div>
                  <div className="chips"><div className="chip b">Manage buyers + overall process</div><div className="chip b">Coordinate buyer DD</div></div></div>
                <div className="mgroup"><div className="mgroup-h ncc">North Castle · company-side execution</div>
                  <div className="chips"><div className="chip n">Populate &amp; stage data room</div><div className="chip n">Respond to buyer questions</div><div className="chip n">Support buy-side QoE</div></div></div>
              </div>
              <div className="stage-card">
                <h4>4 · Confirmatory Diligence</h4>
                <div className="mgroup"><div className="mgroup-h banker">Banker · buyer &amp; process facing</div>
                  <div className="chips"><div className="chip b">Negotiate price &amp; terms</div><div className="chip b">Close logistics</div></div></div>
                <div className="mgroup"><div className="mgroup-h ncc">North Castle · company-side execution</div>
                  <div className="chips"><div className="chip n">Project-manage diligence</div><div className="chip n">Roll-forwards + ad-hoc analysis</div></div></div>
              </div>
            </div>
            <div className="matrix-foot"><b>N</b>&nbsp; denotes a North Castle workstream. We own <b>12+ workstreams</b> across the deal, and support the banker where they lead.</div>
          </div>
        </section>

        <section id="assessment">
          <div className="wrap">
            <div className="sec-eyebrow">Engagement Structure</div>
            <h2 className="sec-title">Modular by design. Start with an audit.</h2>
            <p className="sec-sub">Three phases, engaged together or independently — with a low-commitment entry point.</p>
            <div className="eng">
              <div className="eng-head"><div>Deal Stage</div><div>North Castle Services</div><div>Timeline</div></div>
              <div className="eng-row">
                <div className="stage-name"><span className="stage-bar" style={{ background: '#b23a48' }}></span><div>Assessment<br /><span className="intro-flag">Available as an intro service</span></div></div>
                <div><ul><li>Rapid readiness audit of the business to gauge sale preparedness — <Link to="/services/sell-side-data-audit" style={{ color: 'var(--blue)', fontWeight: 700 }}>learn about the Sell-Side Data Audit →</Link></li></ul></div>
                <div className="timeline" style={{ color: '#b23a48' }}>1 – 2 Weeks</div>
              </div>
              <div className="eng-row">
                <div className="stage-name"><span className="stage-bar" style={{ background: 'var(--navy)' }}></span><div>Preparation</div></div>
                <div><ul>
                  <li>Detailed financial and operational diagnostic</li>
                  <li>KPI design and build-out</li>
                  <li>Transaction-level analysis</li>
                  <li>Populate and organize virtual data room</li>
                </ul></div>
                <div className="timeline">8 – 12 Weeks</div>
              </div>
              <div className="eng-row">
                <div className="stage-name"><span className="stage-bar" style={{ background: '#2e6b46' }}></span><div>Diligence Support</div></div>
                <div><ul>
                  <li>Coordinate the company's side of the sale process</li>
                  <li>Support management through preliminary and confirmatory due diligence</li>
                  <li>Handle ad hoc analysis and data requests</li>
                  <li>Support buy-side QoE, analysis roll-forwards, etc.</li>
                </ul></div>
                <div className="timeline" style={{ color: '#2e6b46' }}>Transaction Dependent</div>
              </div>
            </div>
          </div>
        </section>

        <section className="gray-sec" style={{ paddingTop: 80 }}>
          <div className="wrap">
            <div className="sec-eyebrow">Client Scenarios</div>
            <h2 className="sec-title">Real World Scenarios</h2>

            <div className="scenario">
              <div><span className="chip-label">Serial Acquirer</span>
                <blockquote>"I have helped scale our organization through five targeted acquisitions in just three years."</blockquote></div>
              <div><div className="sc-h">Business Challenges</div>
                <ul><li>Incomplete post-merger integration</li><li>Disparate data environment</li><li>Multiple ERP, CRM, CPM, and BI tools</li><li>Decentralized F&amp;A teams across BUs</li></ul></div>
              <div><div className="sc-h">The Ultimate Challenge</div>
                <p className="hurdle">Management is unable to address simple diligence requests (e.g., streamlined revenue pipeline by product, customer).</p>
                <div className="hurdle-box">Leadership struggles to handle even straightforward due-diligence inquiries.</div></div>
            </div>

            <div className="scenario">
              <div><span className="chip-label">Understaffed Finance Team</span>
                <blockquote>"I manage finance at a company where the F&amp;A team is currently running lean relative to operational demands."</blockquote></div>
              <div><div className="sc-h">Business Challenges</div>
                <ul><li>Management has significant bandwidth constraints</li><li>F&amp;A team struggling to keep up with day-to-day</li></ul></div>
              <div><div className="sc-h">The Ultimate Challenge</div>
                <p className="hurdle">Unable to produce anticipated diligence analysis (e.g., revenue/profitability by customer cohort).</p>
                <div className="hurdle-box">Management can't take on a transaction without risking the core business suffering.</div></div>
            </div>

            <div className="scenario">
              <div><span className="chip-label">Complex Data Environment</span>
                <blockquote>"I lead finance at a company where navigating a multi-layered, data-rich environment is critical."</blockquote></div>
              <div><div className="sc-h">Business Challenges</div>
                <ul><li>Insufficient systems</li><li>Millions of rows of unorganized transactional data</li><li>Management lacks skills to extract and manipulate data</li></ul></div>
              <div><div className="sc-h">The Ultimate Challenge</div>
                <p className="hurdle">Lacks bandwidth to tackle the transaction without the business being neglected.</p>
                <div className="hurdle-box">Difficult to produce basic diligence items that tie back to financials.</div></div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="sec-eyebrow">Featured Work</div>
            <h2 className="sec-title">Proof from the field.</h2>
            <div className="work-grid">
              <div className="work-card">
                <div className="work-img"><span className="tag">Manufacturing</span></div>
                <div className="work-body">
                  <h3>KPI Data Cube for a $250M Company Sale</h3>
                  <p>Auto parts manufacturer with six ERP systems from five acquisitions — unified into one diligence-ready view.</p>
                  <div className="stats"><div><b>2.7M+</b><span>data points integrated</span></div><div><b>Multiple</b><span>bidders engaged</span></div><div><b>Exit</b><span>completed</span></div></div>
                </div>
                <Link className="work-link" to="/case-studies/sell-side-kpi-data-cube">View Case Study →</Link>
              </div>
              <div className="work-card">
                <div className="work-img"><span className="tag">Hospitality</span></div>
                <div className="work-body">
                  <h3>Building Credibility &amp; Justifying Multiples</h3>
                  <p>Venue management company whose finance team lacked expertise to handle complex due diligence.</p>
                  <div className="stats"><div><b>Multiple</b><span>successfully justified</span></div><div><b>Adopted</b><span>contract model retained</span></div><div><b>CFO freed</b><span>for strategic work</span></div></div>
                </div>
                <Link className="work-link" to="/case-studies/sell-side-credibility-multiples">View Case Study →</Link>
              </div>
              <div className="work-card">
                <div className="work-img"><span className="tag">FinTech</span></div>
                <div className="work-body">
                  <h3>Growth &amp; Churn Analysis for a FinTech Sale</h3>
                  <p>PE-backed payments company lacking the critical growth, retention, and pipeline analysis buyers required.</p>
                  <div className="stats"><div><b>Data-backed</b><span>investment thesis</span></div><div><b>Cleaner</b><span>diligence answers</span></div><div><b>2 months</b><span>to buyer-ready</span></div></div>
                </div>
                <Link className="work-link" to="/case-studies/sell-side-investment-credibility">View Case Study →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="wrap">
            <h2>Ready to prepare for your exit?</h2>
            <p>Let's discuss how we can help maximize your transaction value. Not sure you're ready? <b>Start with a 2-week Sell-Side Data Audit.</b></p>
            <div className="hero-ctas">
              <a className="btn btn-gold" href="mailto:consult@northcastleconsulting.com?subject=Sell-Side%20Readiness">Start a Conversation</a>
              <Link className="btn btn-outline" to="/services/sell-side-data-audit">Request a Readiness Audit</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
