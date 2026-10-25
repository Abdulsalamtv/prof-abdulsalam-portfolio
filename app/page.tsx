"use client";

import { ArrowDownRight, ArrowRight, ArrowUpRight, BadgeCheck, BriefcaseBusiness, CheckCircle2, ExternalLink, Globe2, MessageCircle, Sparkles, TrendingUp, Users, Zap } from "lucide-react";

const stats = [
  { value: "544.7K", label: "Impressions", note: "Content reach" },
  { value: "17K+", label: "Engagements", note: "Audience activity" },
  { value: "24.5K", label: "Profile visits", note: "People checking in" },
  { value: "5K", label: "Verified followers", note: "Creator audience" },
];

const projects = [
  { number: "01", name: "STBL", category: "Stablecoins · Real-world assets", description: "Creating clear, research-led content around stablecoin infrastructure, tokenized real-world assets, and the next generation of onchain finance.", tag: "Ambassador recognition", href: "https://x.com/stbl_official/status/2084612774274257050", label: "View recognition", accent: "blue" },
  { number: "02", name: "RebateLaunch", category: "Token launches · Holder rewards", description: "Breaking down launch mechanics and holder rewards into content that people can actually understand and discuss.", tag: "Campaign content", href: "https://x.com/Prof_Abdulsalam", label: "View content", accent: "lime" },
  { number: "03", name: "1win", category: "Gaming · Creator campaigns", description: "Campaign-focused posts and creator content built around real platform experiences, clear calls to action, and audience participation.", tag: "Creator campaigns", href: "https://x.com/Prof_Abdulsalam", label: "Explore posts", accent: "purple" },
  { number: "04", name: "NewSight", category: "Web3 · Community", description: "Supporting project visibility with community-oriented content and consistent communication across crypto social channels.", tag: "Ambassador work", href: "https://x.com/NewSightHQ/status/2092991818531291348", label: "View recognition", accent: "blue" },
];

const workLinks = [
  { label: "Content example 01", href: "https://x.com/Prof_Abdulsalam/status/2077126963009896513" },
  { label: "Content example 02", href: "https://x.com/i/status/2111320447895678980" },
  { label: "Content example 03", href: "https://x.com/Prof_Abdulsalam/status/2111380087979348069" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white selection:bg-lime-300 selection:text-black">
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-40" aria-hidden="true">
        <div className="absolute left-[-10rem] top-40 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-[-8rem] top-[42rem] h-96 w-96 rounded-full bg-lime-400/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-3" aria-label="Prof Abdulsalam home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-sm font-black tracking-tighter">PA<span className="text-lime-300">.</span></span>
          <span className="text-sm font-semibold tracking-wide">Prof_Abdulsalam<span className="text-lime-300">/</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a className="transition hover:text-white" href="#about">About</a>
          <a className="transition hover:text-white" href="#work">Selected work</a>
          <a className="transition hover:text-white" href="#proof">Impact</a>
        </nav>
        <a href="https://t.me/Prof_Abdulsalam" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-lime-300 px-4 py-2.5 text-xs font-bold text-black transition hover:bg-lime-200 sm:px-5 sm:text-sm">Let’s work <ArrowUpRight size={16} /></a>
      </header>

      <section id="home" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.12fr_.88fr] lg:px-12 lg:pb-28 lg:pt-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/[0.07] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-lime-200 sm:text-xs"><span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_12px_#bef264]" /> Independent Web3 creator & campaign partner</div>
          <h1 className="max-w-3xl text-[3.3rem] font-semibold leading-[0.98] tracking-[-0.065em] sm:text-7xl lg:text-[5.8rem]">Making crypto<br />make <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-lime-200 bg-clip-text text-transparent">sense.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">I help Web3 projects turn complex ideas into clear content, stronger communities, and campaigns people want to engage with.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="https://t.me/Prof_Abdulsalam" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-lime-200">Discuss a partnership <ArrowUpRight size={17} /></a>
            <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/80 transition hover:border-white/35 hover:text-white">Explore my work <ArrowDownRight size={17} /></a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/45 sm:text-sm"><span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-lime-300" /> Campaign content</span><span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-lime-300" /> Community growth</span><span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-lime-300" /> Web3 storytelling</span></div>
        </div>

        <div className="relative mx-auto w-full max-w-[490px] lg:ml-auto">
          <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#10141c] p-4 sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 px-2 pb-4"><div><p className="text-[10px] uppercase tracking-[0.22em] text-white/40">Creator dashboard</p><p className="mt-1 text-sm font-semibold">Prof_Abdulsalam / overview</p></div><span className="rounded-full border border-lime-300/20 bg-lime-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-lime-200">Live profile</span></div>
            <div className="grid grid-cols-[110px_1fr] gap-4 py-5 sm:grid-cols-[135px_1fr] sm:gap-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/30 via-[#141b2c] to-lime-300/10"><img src="/avatar.jpg" alt="Prof Abdulsalam avatar" className="h-full w-full object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3"><p className="text-xs font-bold">Prof_Abdulsalam</p><p className="mt-1 text-[10px] text-white/60">Web3 Creator</p></div></div>
              <div className="flex flex-col justify-between py-1"><div><div className="flex items-center gap-2 text-sm font-semibold">Creator profile <BadgeCheck size={15} className="text-sky-300" /></div><p className="mt-2 text-xs leading-5 text-white/45">Content, community, and campaign execution for Web3 teams.</p></div><div className="mt-5"><div className="mb-2 flex items-end justify-between"><span className="text-xs text-white/45">Reach snapshot</span><TrendingUp size={15} className="text-lime-300" /></div><div className="flex h-14 items-end gap-1.5">{[22, 35, 28, 50, 38, 65, 45, 78, 55, 88, 68, 100, 74, 91, 65, 83, 100, 72].map((h, i) => <span key={i} className={`flex-1 rounded-t-sm ${i > 13 ? "bg-lime-300" : "bg-blue-400/70"}`} style={{ height: `${h}%` }} />)}</div><p className="mt-2 text-[10px] text-white/35">Audience attention, built through content</p></div></div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{stats.map((stat, i) => <div key={stat.label} className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-3"><p className={`text-lg font-bold tracking-tight sm:text-xl ${i === 3 ? "text-lime-200" : "text-white"}`}>{stat.value}</p><p className="mt-1 text-[10px] font-semibold text-white/65 sm:text-[11px]">{stat.label}</p></div>)}</div>
            <div className="mt-4 flex items-center justify-between rounded-xl border border-blue-300/15 bg-blue-400/[0.06] px-4 py-3"><div className="flex items-center gap-2.5"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400/15 text-blue-200"><Zap size={16} /></span><div><p className="text-xs font-semibold">Built for meaningful reach</p><p className="mt-0.5 text-[10px] text-white/40">Clarity first. Hype last.</p></div></div><ArrowUpRight size={17} className="text-blue-200" /></div>
          </div>
          <div className="absolute -right-3 top-20 hidden rounded-2xl border border-white/10 bg-[#141922] p-3 shadow-2xl sm:block"><div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-lime-300/10 text-lime-200"><Sparkles size={16} /></span><div><p className="text-xs font-semibold">Creator-led</p><p className="text-[10px] text-white/40">Campaign thinking</p></div></div></div>
        </div>
      </section>

      <section id="proof" className="relative z-10 border-y border-white/[0.08] bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16"><div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-200">Numbers with context</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Attention is earned.</h2></div><p className="max-w-md text-sm leading-6 text-white/45">A snapshot of creator analytics. Metrics can change over time; campaign fit and audience trust matter just as much.</p></div><div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{stats.map((stat, i) => <div key={stat.label} className="group rounded-2xl border border-white/10 bg-[#0c1017] p-5 transition hover:border-blue-300/30 sm:p-6"><div className="mb-8 flex items-center justify-between"><span className="text-xs text-white/40">0{i + 1}</span><ArrowUpRight size={17} className="text-white/25 transition group-hover:text-lime-200" /></div><p className="text-3xl font-semibold tracking-tight sm:text-4xl">{stat.value}</p><p className="mt-2 text-sm font-semibold text-white/80">{stat.label}</p><p className="mt-1 text-xs text-white/35">{stat.note}</p></div>)}</div><p className="mt-4 text-[11px] text-white/30">Analytics figures are based on the supplied account snapshot and should be refreshed when new data is available.</p></div>
      </section>

      <section id="about" className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20 lg:px-12 lg:py-28"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">The approach</p><h2 className="mt-4 max-w-sm text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Good content should do more than fill a timeline.</h2></div><div><p className="max-w-2xl text-lg leading-8 text-white/65">Crypto moves fast. The projects that stand out are the ones that can explain what they are building, why it matters, and where the community fits in.</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10 text-blue-200"><Globe2 size={19} /></span><h3 className="mt-5 font-semibold">Explain the product</h3><p className="mt-2 text-sm leading-6 text-white/45">Turn technical features into useful, human language without losing the important details.</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300/10 text-lime-200"><Users size={19} /></span><h3 className="mt-5 font-semibold">Give people a reason to care</h3><p className="mt-2 text-sm leading-6 text-white/45">Connect project updates to real use cases, community participation, and clear next steps.</p></div></div></div></section>

      <section id="work" className="relative z-10 border-y border-white/[0.08] bg-[#0a0d13]"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-200">Selected collaborations</p><h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Work across Web3.</h2></div><p className="max-w-md text-sm leading-6 text-white/45">A selection of project themes and campaign contributions. Open the links to explore public examples and recognition.</p></div><div className="grid gap-4 md:grid-cols-2">{projects.map((project) => <article key={project.number} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#10141c] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:p-8"><div className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-[80px] ${project.accent === "lime" ? "bg-lime-300/10" : project.accent === "purple" ? "bg-purple-400/10" : "bg-blue-400/10"}`} /><div className="relative flex items-start justify-between"><span className="text-xs font-semibold tracking-[0.2em] text-white/30">/{project.number}</span><span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/55">{project.tag}</span></div><div className="relative mt-10"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200/70">{project.category}</p><h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}<span className="text-lime-200">.</span></h3><p className="mt-4 max-w-lg text-sm leading-7 text-white/50">{project.description}</p><a href={project.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-lime-200">{project.label}<ArrowUpRight size={16} /></a></div></article>)}</div></div></section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">Proof of work</p><h2 className="mt-4 max-w-md text-4xl font-semibold tracking-tight sm:text-5xl">See the work for yourself.</h2><p className="mt-5 max-w-md text-sm leading-7 text-white/50">Public posts give a better sense of the writing style, project angles, and content formats than a list of claims alone.</p><a href="https://x.com/Prof_Abdulsalam" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:border-lime-200/50 hover:text-lime-200">Visit my X profile <ExternalLink size={15} /></a></div><div className="space-y-3">{workLinks.map((link, i) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-blue-300/30 hover:bg-white/[0.04]"><div className="flex items-center gap-4"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-bold text-white/45">0{i + 1}</span><div><p className="font-semibold">{link.label}</p><p className="mt-1 text-xs text-white/35">Public post on X</p></div></div><ArrowUpRight size={18} className="shrink-0 text-white/30 transition group-hover:text-lime-200" /></a>)}</div></div></section>

      <section id="contact" className="relative z-10 px-5 pb-16 sm:px-8 lg:px-12"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-blue-300/20 bg-gradient-to-br from-[#111c30] via-[#10151f] to-[#11170f] p-7 sm:p-12 lg:p-16"><div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" /><div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-200"><BriefcaseBusiness size={15} /> Open to partnerships</div><h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Have a project worth talking about?</h2><p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">Let’s discuss paid campaigns, ambassador partnerships, content creation, or community activations.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href="https://t.me/Prof_Abdulsalam" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-lime-200"><MessageCircle size={17} /> Message on Telegram</a><a href="https://x.com/Prof_Abdulsalam" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/5">Connect on X <ArrowRight size={16} /></a></div></div></div></section>

      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-3 px-5 pb-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"><a href="#home" className="font-semibold tracking-wide text-white/65">Prof_Abdulsalam<span className="text-lime-300">.</span></a><p>Independent Web3 creator · Built around clarity, community, and proof of work.</p><a href="#home" className="transition hover:text-white/70">Back to top ↑</a></footer>
    </main>
  );
}
sm:text-3xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-[9px] font-semibold tracking-[0.13em] text-gray-500 sm:text-[10px]">
                    {metric.label}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="work" className="scroll-mt-10 py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.25em] text-blue-400">
                SELECTED EXPERIENCE
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Work that speaks.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-gray-400">
                Campaigns, communities, and stories across the Web3
                ecosystem.
              </p>
            </div>

            <a
              href="https://x.com/Prof_Abdulsalam"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-300 transition hover:text-white"
            >
              More on X <ExternalLink size={15} />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.045] to-transparent p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/[0.04] sm:p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-blue-400">
                    {project.number} / 04
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-gray-500 transition group-hover:text-blue-300"
                  />
                </div>

                <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-500">
                  {project.category}
                </p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-4 min-h-[72px] max-w-lg text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5">
                  <span className="rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3 py-1.5 text-[9px] font-bold tracking-widest text-blue-300">
                    {project.tag}
                  </span>
                  <span className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-white">
                    View details <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="pb-24">
          <div className="grid gap-5 lg:grid-cols-2">
            <a
              href="/x-analytics.png"
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b101b] transition hover:border-blue-400/40"
            >
              <div className="flex items-center justify-between p-5 sm:p-6">
                <div>
                  <p className="text-xs tracking-widest text-gray-500">
                    SOCIAL PROOF
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    X Analytics
                  </h3>
                </div>
                <ExternalLink
                  size={18}
                  className="text-gray-500 group-hover:text-blue-300"
                />
              </div>
              <img
                src="/x-analytics.png"
                alt="X analytics proof"
                className="max-h-[330px] w-full object-cover object-top"
              />
            </a>

            <a
              href="/coinvid-invitation.jpg"
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b101b] transition hover:border-blue-400/40"
            >
              <div className="flex items-center justify-between p-5 sm:p-6">
                <div>
                  <p className="text-xs tracking-widest text-gray-500">
                    COMMUNITY RESULTS
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    Referral Experience
                  </h3>
                </div>
                <ExternalLink
                  size={18}
                  className="text-gray-500 group-hover:text-blue-300"
                />
              </div>
              <img
                src="/coinvid-invitation.jpg"
                alt="Referral dashboard proof"
                className="max-h-[330px] w-full object-contain p-3"
              />
            </a>
          </div>
        </section>

        <section id="contact" className="scroll-mt-10 pb-20">
          <div className="relative overflow-hidden rounded-[28px] border border-blue-400/20 bg-gradient-to-br from-[#10234a] via-[#0b1325] to-[#080b12] p-7 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />

            <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-4 text-xs font-bold tracking-[0.25em] text-blue-300">
                  HAVE A CAMPAIGN IN MIND?
                </p>
                <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                  Let&apos;s build something
                  <span className="text-blue-300"> meaningful.</span>
                </h2>
                <p className="mt-5 max-w-xl leading-7 text-gray-400">
                  Open to paid campaigns, ambassador programs, content
                  partnerships, and long-term collaborations with Web3
                  teams.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://t.me/Prof_Abdulsalam"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold transition hover:bg-blue-500"
                >
                  <MessageCircle size={18} />
                  Contact on Telegram
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="https://x.com/Prof_Abdulsalam"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 px-6 py-4 text-sm font-semibold transition hover:border-blue-400/50"
                >
                  <BriefcaseBusiness size={17} />
                  Connect on X
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col justify-between gap-4 border-t border-white/[0.08] py-7 text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>© 2026 Prof_Abdulsalam. Built for the Web3 ecosystem.</p>
          <a
            href="https://x.com/Prof_Abdulsalam"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-300"
          >
            Follow @Prof_Abdulsalam ↗
          </a>
        </footer>
      </div>
    </main>
  );
      }
