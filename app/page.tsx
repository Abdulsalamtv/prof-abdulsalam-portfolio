"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ExternalLink,
  Globe,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const projects = [
  {
    name: "STBL",
    category: "STABLECOINS · RWA",
    description:
      "Creating educational content around stablecoins, real-world assets, and the next generation of onchain finance.",
    tag: "AMBASSADOR",
    url: "https://x.com/stbl_official/status/2084612774274257050",
    number: "01",
  },
  {
    name: "RebateLaunch",
    category: "TOKEN LAUNCHES",
    description:
      "Breaking down holder rewards, launch mechanics, and how communities can participate in token launches.",
    tag: "CONTENT CREATION",
    url: "https://x.com/search?q=%40RebateLaunch&src=typed_query",
    number: "02",
  },
  {
    name: "1win",
    category: "WEB3 · ENTERTAINMENT",
    description:
      "Creating engaging campaign content that connects platform features with the crypto community.",
    tag: "CAMPAIGN CONTENT",
    url: "https://x.com/search?q=%401win&src=typed_query",
    number: "03",
  },
  {
    name: "NewSight",
    category: "WEB3 COMMUNITY",
    description:
      "Contributing to project visibility and community awareness through ambassador content.",
    tag: "AMBASSADOR",
    url: "https://x.com/NewSightHQ/status/2092991818531291348",
    number: "04",
  },
];

const metrics = [
  { value: "544.7K", label: "IMPRESSIONS", icon: TrendingUp },
  { value: "17K", label: "ENGAGEMENTS", icon: Zap },
  { value: "24.5K", label: "PROFILE VISITS", icon: Users },
  { value: "5,000", label: "VERIFIED FOLLOWERS", icon: BadgeCheck },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070c] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-1/3 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute top-[650px] -right-40 h-[350px] w-[350px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:55px_55px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <header className="flex items-center justify-between border-b border-white/[0.08] py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 font-black text-blue-300">
              P.
            </div>
            <div>
              <p className="text-sm font-bold tracking-wide">
                PROF_ABDULSALAM
              </p>
              <p className="text-[10px] tracking-[0.22em] text-gray-500">
                WEB3 CREATOR
              </p>
            </div>
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-4 py-2.5 text-xs font-semibold transition hover:border-blue-400 hover:bg-blue-500/10"
          >
            Let&apos;s work together ↗
          </a>
        </header>

        <section className="grid min-h-[620px] items-center gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2 text-xs text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              WEB3 CONTENT CREATOR & COMMUNITY BUILDER
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.04] tracking-[-0.055em] sm:text-7xl lg:text-[82px]">
              Turning
              <br />
              attention into
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                impact.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              I help Web3 projects tell better stories, reach the right
              communities, and turn complex ideas into content people
              actually want to read.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold transition hover:bg-blue-500"
              >
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-4 text-sm font-semibold transition hover:border-blue-400/60"
              >
                Hire me <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-gray-500">
              <span className="flex items-center gap-2">
                <Globe size={15} className="text-blue-400" />
                Web3 & Crypto
              </span>
              <span className="flex items-center gap-2">
                <Users size={15} className="text-blue-400" />
                Community Growth
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={15} className="text-blue-400" />
                Campaign Content
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[400px]">
            <div className="absolute inset-8 rounded-full bg-blue-600/20 blur-[90px]" />

            <div className="relative rounded-[30px] border border-white/10 bg-[#0b101b] p-3 shadow-2xl shadow-blue-950/30">
              <div className="absolute -right-3 top-12 z-20 rounded-xl border border-blue-400/20 bg-[#101a2c] px-4 py-3 shadow-xl sm:-right-8">
                <p className="text-[10px] tracking-widest text-gray-500">
                  CONTENT REACH
                </p>
                <p className="mt-1 text-xl font-bold text-blue-300">
                  544.7K+
                </p>
              </div>

              <div className="absolute -left-3 bottom-16 z-20 rounded-xl border border-white/10 bg-[#101521] px-4 py-3 shadow-xl sm:-left-8">
                <p className="text-[10px] tracking-widest text-gray-500">
                  FOCUS
                </p>
                <p className="mt-1 text-sm font-bold">Web3 Growth ↗</p>
              </div>

              <div className="overflow-hidden rounded-[23px] border border-white/5 bg-gradient-to-b from-[#111d34] to-[#080b12]">
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-xs font-semibold text-gray-300">
                    CREATOR PROFILE
                  </span>
                  <span className="text-xs text-blue-300">01 / 01</span>
                </div>

                <div className="px-5 pb-5 pt-3">
                  <div className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-[#0c1424]">
                    <img
                      src="/avatar.jpg"
                      alt="Prof Abdulsalam avatar"
                      className="h-[330px] w-full object-cover object-center"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#05070c] via-[#05070c]/60 to-transparent p-5 pt-20">
                      <p className="text-2xl font-black tracking-tight">
                        Prof_Abdulsalam
                      </p>
                      <p className="mt-1 text-sm text-gray-300">
                        Crypto storyteller. Community builder.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                      <p className="text-[10px] tracking-widest text-gray-500">
                        SPECIALTY
                      </p>
                      <p className="mt-2 text-sm font-semibold">
                        Web3 Campaigns
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                      <p className="text-[10px] tracking-widest text-gray-500">
                        AVAILABLE FOR
                      </p>
                      <p className="mt-2 text-sm font-semibold">
                        Partnerships
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/[0.08] py-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-semibold tracking-[0.2em] text-gray-500">
              SOCIAL PERFORMANCE
            </p>
            <p className="text-xs text-gray-600">
              Based on supplied analytics
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-blue-400/30 hover:bg-blue-500/[0.04] sm:p-6"
                >
                  <Icon size={19} className="mb-5 text-blue-400" />
                  <p className="text-2xl font-black tracking-tight sm:text-3xl">
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
