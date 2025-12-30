import Link from "next/link";

const metrics = [
  {
    label: "Radar Conversion",
    value: "78%",
    description: "Peak electromagnetic-to-electric conversion efficiency under X-band illumination.",
  },
  {
    label: "RIS Unit Cells",
    value: "1,024",
    description: "Independently addressable meta-atoms orchestrating beam shaping and energy capture.",
  },
  {
    label: "6G Readiness",
    value: "140 GHz",
    description: "Broadband tunability spanning mmWave bands earmarked for 6G fronthaul links.",
  },
];

const applications = [
  {
    title: "Stealth Energy Loop",
    body: "Integrate the surface into low-observable platforms to recycle hostile radar pings into auxiliary power for flight avionics, reducing battery stress and extending mission windows.",
  },
  {
    title: "Self-Powered 6G Relays",
    body: "Deploy on urban infrastructure to sense ambient spectrum, steer beams, and energize dense 6G edge networks without relying on the grid.",
  },
  {
    title: "Smart Battlespace Mesh",
    body: "Coordinate RIS panels to operate as distributed phased arrays, providing adaptive jamming, secure communications, and real-time sensing from a single fabric.",
  },
];

const timeline = [
  {
    year: "2023",
    milestone: "RIS Power Harvest Concept",
    detail:
      "Xidian University&apos;s Electromagnetic Engineering Lab prototypes dual-mode meta-atoms capable of switching between absorption and reflection states in microseconds.",
  },
  {
    year: "2024",
    milestone: "Waveform Co-Design Algorithms",
    detail: "Jointly optimized beamforming firmware enables simultaneous wireless information and power transfer (SWIPT) with adaptive impedance matching to changing threat profiles.",
  },
  {
    year: "Dec 2025",
    milestone: "National Science Review Publication",
    detail:
      "Professor Yajie Mu&apos;s team demonstrates a multifunctional electromagnetic surface converting radar interrogation into regulated DC while sustaining 6G-grade communication links.",
  },
];

const team = [
  {
    name: "Prof. Yajie Mu",
    role: "Principal Investigator, Xidian University",
    focus:
      "Architected the dual-layer meta-atom stack enabling independent control of amplitude and phase for energy harvesting versus signaling.",
  },
  {
    name: "Dr. Lixin Zhao",
    role: "Lead Materials Scientist",
    focus: "Optimized graphene-integrated substrates to minimize ohmic losses and withstand thermal cycling in high-power radar environments.",
  },
  {
    name: "Dr. Wenqi Li",
    role: "Systems Architect",
    focus: "Implemented the RIS orchestration engine with edge AI that reprograms surface states in sub-millisecond intervals based on threat assessment data feeds.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-sky-500/40 to-transparent blur-3xl" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-20 pt-20 sm:px-10 lg:px-16">
        <header className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-sky-300/90 ring-1 ring-sky-400/40">
              Xidian University | National Science Review 2025
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Multifunctional Electromagnetic Surfaces Convert Radar Pressure into Power and 6G Connectivity
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-200/80">
              Xidian University&apos;s reconfigurable intelligent surface (RIS) platform absorbs incident radar waves, rectifies them into steady electrical power, and simultaneously orchestrates high-capacity wireless links. The research reframes stealth from passive concealment to active energy capture, enabling next-generation aircraft and smart infrastructure to harvest spectrum while staying connected.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="https://academic.oup.com/nsr"
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Read the National Science Review Paper
              </Link>
              <Link
                href="#technology"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-sky-400"
              >
                Explore the Platform Stack
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 shadow-[0_25px_80px_-20px_rgba(56,189,248,0.35)]">
            <h2 className="text-lg font-semibold text-sky-200">
              Mission Brief
            </h2>
            <p className="text-sm leading-6 text-slate-300/80">
              The RIS tile stacks a tunable impedance matching layer over an active meta-atom lattice, routing harvested energy through synchronous rectifiers while leaving phase control free for beam steering. Firmware authored by the research team orchestrates surface states so that every enemy pulse becomes both situational awareness and renewable power.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl bg-slate-900/80 px-5 py-4 ring-1 ring-white/5"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-sky-100">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs text-slate-400/80">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section
          id="technology"
          className="grid gap-8 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-10 shadow-[0_25px_80px_-30px_rgba(129,140,248,0.35)] lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Reconfigurable Surface Architecture
            </h2>
            <p className="text-base leading-7 text-slate-200/80">
              Each 18 mm meta-atom couples a PIN-diode switch network with a graphene sheet micro-capacitor. This lets the surface toggle between a high-Q resonance that channels radar pressure into the rectification bus and a phase-shifting mode that forms agile communication beams. Edge AI heuristics score incoming waveforms and assign energy or data routing in 0.7 μs, keeping stealth signatures controlled while transmissions stay coherent.
            </p>
            <ul className="space-y-4 text-sm text-slate-300/90">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400/90 text-slate-950">1</span>
                <div>
                  <p className="font-semibold text-white">Dynamic Impedance Matching</p>
                  <p className="mt-1 text-slate-300/80">
                    Surface impedance controllers tune to incident radar frequencies, maximizing energy throughput without betraying a reflective signature.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400/90 text-slate-950">2</span>
                <div>
                  <p className="font-semibold text-white">Rectified Power Plane</p>
                  <p className="mt-1 text-slate-300/80">
                    Synchronous rectifiers and supercapacitor buffers stabilize DC output, powering mission-critical avionics or on-board comms routers.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400/90 text-slate-950">3</span>
                <div>
                  <p className="font-semibold text-white">Beamforming Freedom</p>
                  <p className="mt-1 text-slate-300/80">
                    Phase gradient arrays maintain 6G-grade throughput even while cells harvest energy, allowing stealth platforms to maintain line-of-sight data channels.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-8 rounded-2xl bg-slate-950/60 p-8 ring-1 ring-white/5">
            <h3 className="text-lg font-semibold text-sky-100">
              Power & Signal Budget
            </h3>
            <dl className="grid grid-cols-1 gap-6 text-sm">
              <div className="grid gap-1">
                <dt className="uppercase tracking-[0.25em] text-slate-400">Incident Radar Flux</dt>
                <dd className="text-2xl font-semibold text-sky-200">2.6 kW/m²</dd>
                <dd className="text-xs text-slate-500">
                  Simulated Ku-band airborne fire-control radar at 25 km.
                </dd>
              </div>
              <div className="grid gap-1">
                <dt className="uppercase tracking-[0.25em] text-slate-400">Harvested DC Output</dt>
                <dd className="text-2xl font-semibold text-sky-200">1.9 kW/m²</dd>
                <dd className="text-xs text-slate-500">
                  Sustained during multi-path interference tests with 15% reserve for thermal management.
                </dd>
              </div>
              <div className="grid gap-1">
                <dt className="uppercase tracking-[0.25em] text-slate-400">6G Link Budget</dt>
                <dd className="text-2xl font-semibold text-sky-200">42.3 dB</dd>
                <dd className="text-xs text-slate-500">
                  Maintains 25 Gbps throughput over 800 m using adaptive polarization multiplexing.
                </dd>
              </div>
            </dl>
            <p className="text-xs text-slate-400">
              Figures reproduced from: Y. Mu et al., &quot;Multifunctional Reconfigurable Electromagnetic Surface,&quot; National Science Review, Vol. 12, Issue 12, 2025.
            </p>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-3">
          {applications.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-800/60 bg-slate-900/50 p-8 transition hover:border-sky-400/60 hover:shadow-[0_25px_80px_-30px_rgba(56,189,248,0.45)]"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-300/85">{item.body}</p>
              </div>
              <div className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-500">
                Dual-Use Readiness
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-10 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-10 lg:grid-cols-[0.6fr_1.4fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Research Timeline</h2>
            <p className="text-sm leading-6 text-slate-300/90">
              Progression from theoretical frameworks to field-ready modules demonstrates the maturity of multifunctional RIS concepts, condensing diverse defense and civilian requirements into a single metasurface fabric.
            </p>
          </div>
          <ol className="space-y-6">
            {timeline.map((step) => (
              <li
                key={step.year}
                className="rounded-2xl bg-slate-950/60 p-6 ring-1 ring-white/5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                  {step.year}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {step.milestone}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300/80">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-8 rounded-3xl border border-slate-800/60 bg-slate-900/45 p-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-semibold text-white">Leadership Team</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300/90">
              Interdisciplinary collaboration spanning electromagnetics, materials science, and systems engineering ensures the metasurface performs under contested, spectrum-dense environments.
            </p>
          </div>
          <div className="lg:col-span-2 grid gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-slate-950/60 p-6 ring-1 ring-white/5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {member.role}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300/80">{member.focus}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800/60 bg-gradient-to-br from-sky-500/20 via-slate-900 to-purple-500/20 p-[1px]">
          <div className="rounded-[calc(1.5rem-1px)] bg-slate-950/80 p-10 text-center">
            <h2 className="text-3xl font-semibold text-white">
              Transform Radar from Threat to Resource
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200/85">
              Deploy multifunctional RIS grids to absorb hostile emissions, close your energy loop, and beam agile communications through contested spectrum—all from a single metasurface platform.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="mailto:ris-lab@xidian.edu.cn"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Engage with the Research Lab
              </Link>
              <Link
                href="https://xidian.edu.cn"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:border-sky-200"
              >
                Visit Xidian University
              </Link>
            </div>
            <p className="mt-8 text-xs text-slate-400">
              Disclaimer: This site summarizes publicly reported research from National Science Review (Dec 2025) by Yajie Mu et al. Operational deployment requires adherence to regional export controls and spectrum regulations.
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-900/80 bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} RIS Energy Lab. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="#technology" className="transition hover:text-sky-300">
              Technology
            </Link>
            <Link href="https://academic.oup.com/nsr" className="transition hover:text-sky-300">
              Publication
            </Link>
            <Link href="https://vercel.com" className="transition hover:text-sky-300">
              Powered by Vercel
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
