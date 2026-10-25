"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CircleDot,
  ExternalLink,
  MessageCircle,
  Send,
  Users,
  Eye,
  Bookmark,
  Trophy,
  Sparkles,
  Terminal
} from "lucide-react";

const projects = [
  {
    tag: "STABLECOINS · RWA · DEFI",
    title: "STBL",
    description:
      "Content and ecosystem storytelling around stablecoins, real-world assets, and on-chain finance.",
    role: "Content & community contribution",
    color: "blue",
    href: "https://x.com/stbl_official"
  },
  {
    tag: "CREATOR CAMPAIGN",
    title: "RebateLaunch",
    description:
      "Explainers focused on holder rewards, launch mechanics, and how the product works for everyday users.",
    role: "Web3 content",
    color: "violet",
    href: "https://x.com/RebateLaunch"
  },
  {
    tag: "WEB3 GAMING",
    title: "1win",
    description:
      "Campaign content built around platform activity, creator participation, and clear calls to action.",
    role: "Campaign content",
    color: "cyan",
    href: "https://x.com/1win"
  }
];

const services = [
  {
    icon: <MessageCircle size={20} />,
    title: "X content & threads",
    text: "Clear, natural posts and explainers that make a project's value easier to understand."
  },
  {
    icon: <ChartNoAxesCombined size={20} />,
    title: "KOL campaigns",
    text: "Creator partnerships, campaign deliverables, and content tailored to the project's goals."
  },
  {
    icon: <Blocks size={20} />,
    title: "Community growth",
    text: "Community engagement, onboarding support, and consistent communication."
  },
  {
    icon: <BrainCircuit size={20} />,
    title: "Research & storytelling",
    text: "Product research and practical narratives that help audiences understand what is being built."
  }
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <nav className="nav shell">
        <a href="#home" className="brand" aria-label="Prof Abdulsalam home">
          <span className="brand-mark">P<span>.</span></span>
          <span>Prof_Abdulsalam</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#achievements">Results</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
      </nav>

      <section className="hero shell" id="home">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="availability"><span className="status-dot" /> OPEN TO SELECT PARTNERSHIPS</div>
          <p className="eyebrow">WEB3 CREATOR <span>·</span> RESEARCHER <span>·</span> COMMUNITY BUILDER</p>
          <h1>Making Web3<br />make <span className="gradient-text">sense.</span></h1>
          <p className="hero-description">
            I turn complex crypto products and ideas into clear content people can understand,
            care about, and act on.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowRight size={17} /></a>
            <a className="button button-secondary" href="#contact">Work with me <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-proof">
            <div className="proof-icon"><Sparkles size={17} /></div>
            <p><strong>Content with a purpose.</strong><br /><span>Useful stories. Clear ideas. Real community.</span></p>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="profile-card">
            <div className="card-top"><span className="live-label"><span className="status-dot" /> DIGITAL IDENTITY</span><span className="card-code">PA / 001</span></div>
            <div className="avatar-frame">
              <Image src="/avatar.jpg" alt="Prof_Abdulsalam profile avatar" width={420} height={420} priority />
              <div className="avatar-shine" />
            </div>
            <div className="profile-bottom">
              <div><p className="profile-label">CREATOR PROFILE</p><h2>Prof_Abdulsalam</h2></div>
              <span className="verified"><BadgeCheck size={20} /></span>
            </div>
            <div className="profile-tags"><span>WEB3</span><span>CONTENT</span><span>COMMUNITY</span></div>
          </div>
          <div className="float-chip chip-top"><span className="chip-icon"><Terminal size={16} /></span><span><b>Research</b><small>Understand the product</small></span></div>
          <div className="float-chip chip-bottom"><span className="chip-icon"><CircleDot size={16} /></span><span><b>Storytelling</b><small>Make the message land</small></span></div>
          <div className="hero-grid" />
        </motion.div>
      </section>

      <section className="ticker-wrap" aria-label="Areas of work">
        <div className="ticker">
          {["WEB3 CONTENT", "PROJECT RESEARCH", "KOL PARTNERSHIPS", "COMMUNITY BUILDING", "ECOSYSTEM STORYTELLING", "WEB3 CONTENT", "PROJECT RESEARCH", "KOL PARTNERSHIPS"].map((item, i) => (
            <span key={`${item}-${i}`}>{item}<i>✳</i></span>
          ))}
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">SELECTED EXPERIENCE</p><h2>Work that tells<br />a bigger story<span className="blue-dot">.</span></h2></div>
          <p className="section-intro">A selection of Web3 projects and content themes. Open a project to explore its public presence and related work.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, i) => (
            <motion.a
              className={`project-card ${project.color}`}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="project-card-top"><span className="project-index">0{i + 1}</span><span className="project-arrow"><ArrowUpRight size={18} /></span></div>
              <p className="project-tag">{project.tag}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-card-bottom"><span>{project.role}</span><ExternalLink size={15} /></div>
            </motion.a>
          ))}
        </div>
        <p className="note"><CircleDot size={13} /> Portfolio examples are a starting point. Add direct links to specific posts and confirm each role before publishing.</p>
      </section>


      <section className="section shell achievements-section" id="achievements">
        <div className="section-heading">
          <div><p className="eyebrow">PROOF, NOT JUST PROMISES</p><h2>Community work.<br />Measurable reach<span className="blue-dot">.</span></h2></div>
          <p className="section-intro">Selected milestones from ambassador programs, referral campaigns, and content performance. Metrics reflect the supplied screenshots and should be refreshed as results change.</p>
        </div>
        <div className="metrics-grid">
          <div className="metric-card"><span className="metric-icon"><Eye size={18} /></span><p>Impressions</p><strong>544.7K</strong><small>4-week X analytics snapshot</small></div>
          <div className="metric-card"><span className="metric-icon"><ChartNoAxesCombined size={18} /></span><p>Engagements</p><strong>17K</strong><small>4-week X analytics snapshot</small></div>
          <div className="metric-card"><span className="metric-icon"><Users size={18} /></span><p>Profile visits</p><strong>24.5K</strong><small>4-week X analytics snapshot</small></div>
          <div className="metric-card"><span className="metric-icon"><Bookmark size={18} /></span><p>Verified followers</p><strong>5.0K</strong><small>Shown in supplied analytics</small></div>
        </div>
        <div className="achievement-grid">
          <a className="achievement-card" href="https://x.com/stbl_official/status/2084612774274257050" target="_blank" rel="noreferrer">
            <div className="achievement-top"><span className="achievement-symbol"><Trophy size={19} /></span><span className="achievement-label">AMBASSADOR RECOGNITION</span><ArrowUpRight size={16} /></div>
            <h3>STBL</h3><p>Recognized for contributions to the STBL ecosystem. Open the official post to see the public announcement.</p>
            <span className="achievement-link">View STBL recognition <ArrowRight size={14} /></span>
          </a>
          <a className="achievement-card" href="https://x.com/NewSightHQ/status/2092991818531291348" target="_blank" rel="noreferrer">
            <div className="achievement-top"><span className="achievement-symbol"><BadgeCheck size={19} /></span><span className="achievement-label">AMBASSADOR PROGRAM</span><ArrowUpRight size={16} /></div>
            <h3>NewSight</h3><p>NewSight ambassador experience, with the announcement linked for visitors to verify the details.</p>
            <span className="achievement-link">View NewSight post <ArrowRight size={14} /></span>
          </a>
          <div className="achievement-card">
            <div className="achievement-top"><span className="achievement-symbol"><Users size={19} /></span><span className="achievement-label">REFERRAL GROWTH</span></div>
            <h3>Coinvid</h3><p>Referred 590+ people to the Coinvid trading platform, according to the supplied invitation dashboard.</p>
            <div className="proof-image"><img src="/proof/coinvid-invitation.jpg" alt="Coinvid invitation dashboard showing referral totals" /></div>
          </div>
          <div className="achievement-card">
            <div className="achievement-top"><span className="achievement-symbol"><Users size={19} /></span><span className="achievement-label">TRADING BOT AMBASSADOR</span></div>
            <h3>Blum</h3><p>Referred 600+ people as a Blum trading bot ambassador, based on the figures provided.</p>
            <p className="proof-disclaimer">Add a public proof link or dashboard screenshot before publishing this claim.</p>
          </div>
        </div>
        <div className="analytics-proof">
          <div className="analytics-copy"><p className="eyebrow">CONTENT PERFORMANCE</p><h3>Reach is useful.<br /><span className="gradient-text">Proof makes it credible.</span></h3><p>Selected X analytics supplied for this portfolio. Keep this snapshot current and share the original analytics view with prospective partners when needed.</p></div>
          <a className="analytics-image-link" href="/proof/x-analytics.png" target="_blank" rel="noreferrer" aria-label="Open full X analytics screenshot">
            <img src="/proof/x-analytics.png" alt="X analytics screenshot showing impressions, engagements, profile visits and other four-week metrics" />
            <span>Open analytics screenshot <ArrowUpRight size={14} /></span>
          </a>
        </div>
        <div className="content-links">
          <div><p className="eyebrow">SELECTED CONTENT</p><h3>Some work worth a look<span className="blue-dot">.</span></h3></div>
          <div className="content-link-list">
            <a href="https://x.com/Prof_Abdulsalam/status/2077126963009896513" target="_blank" rel="noreferrer"><span><small>FEATURED POST 01</small><b>Web3 content by Prof_Abdulsalam</b></span><ArrowUpRight size={17} /></a>
            <a href="https://x.com/i/status/2111320447895678980" target="_blank" rel="noreferrer"><span><small>FEATURED POST 02</small><b>Selected content / campaign post</b></span><ArrowUpRight size={17} /></a>
            <a href="https://x.com/Prof_Abdulsalam/status/2111380087979348069" target="_blank" rel="noreferrer"><span><small>FEATURED POST 03</small><b>Selected content / campaign post</b></span><ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="shell section">
          <div className="section-heading">
            <div><p className="eyebrow">HOW I CAN HELP</p><h2>Good projects deserve<br />clear communication<span className="blue-dot">.</span></h2></div>
            <p className="section-intro">From the first explanation to the campaign rollout, I help make your product easier to discover and understand.</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <motion.div className="service-item" key={service.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-line" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell about-section" id="about">
        <div className="about-symbol"><span>PA</span><div className="symbol-ring" /><div className="symbol-ring ring-two" /></div>
        <div className="about-copy">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Curiosity first.<br /><span className="gradient-text">Clarity always.</span></h2>
          <p>I work at the intersection of Web3 content, research, and community. My focus is on explaining what projects are building in a way that feels human, useful, and grounded in the product.</p>
          <p>This portfolio is a living record of the work, ideas, and collaborations behind the Prof_Abdulsalam brand.</p>
          <a className="text-link" href="https://x.com/Prof_Abdulsalam" target="_blank" rel="noreferrer">Follow my work on X <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <div className="shell contact-content">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let&apos;s make your<br /><span className="gradient-text">next move count.</span></h2>
          <p className="contact-description">Looking for a Web3 creator for a campaign, a clear product story, or a community-focused collaboration? Let&apos;s talk.</p>
          <div className="contact-actions">
            <a className="button button-primary" href="https://t.me/Prof_Abdulsalam" target="_blank" rel="noreferrer">Contact on Telegram <Send size={16} /></a>
            <a className="button button-secondary" href="https://x.com/Prof_Abdulsalam" target="_blank" rel="noreferrer">DM me on X <ArrowUpRight size={16} /></a>
          </div>
          <div className="contact-foot"><span><BriefcaseBusiness size={14} /> Paid campaigns · KOL partnerships · Ambassadorships</span><span>PROF_ABDULSALAM © 2026</span></div>
        </div>
      </section>

      <footer className="footer shell">
        <a href="#home" className="brand"><span className="brand-mark">P<span>.</span></span><span>Prof_Abdulsalam</span></a>
        <p>Built for clarity. Designed for the on-chain world.</p>
        <div className="footer-links"><a href="https://x.com/Prof_Abdulsalam" target="_blank" rel="noreferrer">X <ArrowUpRight size={13} /></a><a href="https://t.me/Prof_Abdulsalam" target="_blank" rel="noreferrer">Telegram <ArrowUpRight size={13} /></a></div>
      </footer>
    </main>
  );
    }
