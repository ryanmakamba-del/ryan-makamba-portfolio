import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Aegis Underwriting Command Center",
    category: "Insurance Analytics",
    description:
      "A multi-line P&C platform that automates risk scoring, pricing and expected-loss analysis while connecting underwriting decisions to portfolio performance.",
    tags: ["Next.js", "Risk Scoring", "Pricing Analytics", "P&C Insurance"],
    href: "https://aegis-underwriting-command-center.vercel.app",
    image: "/underwriting-preview.png",
  },
  {
    number: "02",
    title: "Aegis Claims Intelligence Center",
    category: "Claims Operations",
    description:
      "An operational claims workspace for monitoring severity, reserve adequacy, aging pressure, fraud indicators and leakage exposure across personal and commercial lines.",
    tags: ["Claims Analytics", "Fraud Indicators", "Reserve Monitoring"],
    href: "https://aegis-claims-intelligence-center-ge9zymxtq-aegis-da54.vercel.app/",
    image: "/claims-preview.png",
  },
  {
    number: "03",
    title: "Aegis Evidence Studio",
    category: "Governance & Compliance",
    description:
      "An audit-ready evidence platform connecting underwriting decisions, rule versions, cloud controls and policy-as-code mappings across major regulatory frameworks.",
    tags: ["NIST", "ISO 27001", "SOC 2", "SOX", "HIPAA", "GDPR", "COBIT"],
    href: "https://aegis-evidence-studio-tppi.vercel.app",
  },
];

const experience = [
  {
    dates: "Jun 2026 — Aug 2026",
    role: "Annual Fund & Database Specialist Intern",
    organization: "The Salvation Army — Southern New England Division",
    detail:
      "Managed and reconciled donor data across Salesforce and Raiser’s Edge, built reporting workflows in Power BI and Excel, and strengthened data quality across fundraising channels.",
  },
  {
    dates: "Apr 2025 — May 2026",
    role: "Research Assistant — Institutional Research & Strategy",
    organization: "Quinnipiac University",
    detail:
      "Integrated enrollment, student-record and financial-aid data for 9,200+ students while supporting IPEDS, NSLDS and FVT/GE reporting with governed, audit-ready datasets.",
  },
  {
    dates: "Jan 2023 — Dec 2024",
    role: "Client Solutions Specialist",
    organization: "Zimbabwe Insurance Brokers",
    detail:
      "Analyzed client exposures and claims histories to support coverage design, pricing, insurer selection and placement strategy, alongside pipeline and revenue reporting.",
  },
  {
    dates: "Nov 2020 — Dec 2022",
    role: "Claims Analyst",
    organization: "First Mutual Holdings",
    detail:
      "Analyzed loss drivers across auto, liability and property portfolios and developed reporting for cycle time, loss ratios, reserve adequacy and adjuster performance.",
  },
];

const skills = [
  ["Analytics & BI", "Excel · Power BI · DAX · Power Query · SQL · SPSS"],
  ["Programming & Automation", "Python · Linux · Power Automate · Cloud Custodian"],
  ["Insurance & Risk", "Underwriting · Claims · Pricing · Reserving · Compliance"],
  ["Business Systems", "Salesforce · HubSpot · Raiser’s Edge · SAP BW · SAP BusinessObjects"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Ryan Makamba home">RM</a>
        <nav aria-label="Primary navigation">
          <a href="#work">View My Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="mailto:ryanmakamba@gmail.com">
          Let’s connect <ArrowUpRight />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> New Haven, Connecticut</p>
          <h1>Ryan<br />Makamba</h1>
          <p className="specialization">Data Analytics <i /> Risk &amp; Insurance <i /> Business Operations</p>
          <p className="intro">
            I turn complex operational and risk data into clear, defensible decisions—across insurance, higher education and nonprofit organizations.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">View selected work <ArrowDownRight /></a>
            <a className="text-link" href="/Ryan-Makamba-Resume.docx" download>Download résumé</a>
          </div>
        </div>
        <aside className="hero-note">
          <span>Current focus</span>
          <strong>Applied AI &amp;<br />Business Analytics</strong>
          <p>Building practical systems for risk, reporting and operational intelligence.</p>
          <div className="hero-stat"><b>4+</b><span>years across analytics<br />and insurance</span></div>
        </aside>
      </section>

      <section className="work section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Featured Projects</p>
          <h2>Systems built around<br />real business decisions.</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="project-index">{project.number}</div>
              <div className="project-body">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href={project.href} target="_blank" rel="noreferrer">Open live project <ArrowUpRight /></a>
              </div>
              {project.image ? (
                <a className="project-visual" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                  <span className="preview-canvas">
                    <img src={project.image} alt={`${project.title} interface preview`} />
                  </span>
                </a>
              ) : (
                <div className="project-visual evidence-visual" aria-hidden="true">
                  <ShieldCheck />
                  <span>CONTROL<br />EVIDENCE</span>
                  <small>Traceable · Governed · Audit-ready</small>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-heading compact">
          <p className="eyebrow">Experience</p>
          <h2>Analytics grounded<br />in operations.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.role}>
              <time>{item.dates}</time>
              <div><h3>{item.role}</h3><h4>{item.organization}</h4><p>{item.detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2>Risk knowledge.<br />Analytical discipline.<br />Operational perspective.</h2>
          <p>
            My background spans insurance underwriting and claims, institutional research, regulatory reporting and nonprofit data operations. That range helps me see both the numbers and the decisions behind them.
          </p>
          <div className="contact-row">
            <a href="mailto:ryanmakamba@gmail.com"><Mail /> Email</a>
            <a href="https://www.linkedin.com/in/ryan-makamba/" target="_blank" rel="noreferrer"><ArrowUpRight /> LinkedIn</a>
          </div>
        </div>
        <div className="credentials">
          <div className="credential"><GraduationCap /><span><b>MS Applied AI &amp; Business Analytics</b><small>Quinnipiac University · Expected Dec 2026</small></span></div>
          <div className="credential"><BriefcaseBusiness /><span><b>BSc Risk Management &amp; Insurance</b><small>National University of Science and Technology · 2022</small></span></div>
          <div className="skill-list">
            {skills.map(([title, value]) => <div key={title}><b>{title}</b><span>{value}</span></div>)}
          </div>
        </div>
      </section>

      <footer>
        <div><span className="footer-mark">RM</span><p>Ryan Makamba<br /><small>Data Analytics | Risk &amp; Insurance | Business Operations</small></p></div>
        <p><MapPin /> New Haven, CT</p>
        <p>© 2026 Ryan Makamba. All rights reserved.</p>
      </footer>
    </main>
  );
}
