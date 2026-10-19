import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Play,
  GraduationCap,
  Code2,
  Users,
  MessageCircle,
} from "lucide-react";

const technologies = [
  {
    name: "Python",
    detail: "Programming & AI",
    symbol: "Py",
    className: "left-[14%] top-[12%]",
  },
  {
    name: "Web Development",
    detail: "Modern web experiences",
    symbol: "</>",
    className: "right-[3%] top-[14%]",
  },
  {
    name: "Java",
    detail: "Backend development",
    symbol: "J",
    className: "left-[4%] top-[40%]",
  },
  {
    name: "C / C++",
    detail: "Core programming",
    symbol: "C",
    className: "right-[0%] top-[56%]",
  },
  {
    name: "Internships",
    detail: "Practical experience",
    symbol: "↗",
    className: "left-[17%] bottom-[6%]",
  },
];

const benefits = [
  { Icon: GraduationCap, title: "Industry-focused", second: "Learning" },
  { Icon: Code2, title: "Hands-on", second: "Projects" },
  { Icon: Users, title: "Career", second: "Preparation" },
];


export default function Home() {
  const [activeCard, setActiveCard] = useState("");

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#030712] font-sans text-white">
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotateX(16deg) rotateY(-22deg) rotateZ(3deg); }
          50% { transform: translateY(-10px) rotateX(18deg) rotateY(-20deg) rotateZ(4deg); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes orbit-pulse {
          0%, 100% { opacity: 0.35; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.65; transform: translate(-50%, -50%) scale(1.02); }
        }
        .animate-ide {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-badge-slow {
          animation: float-badge 4s ease-in-out infinite;
        }
        .nx-grid {
          background-image: 
            linear-gradient(to right, rgba(28, 57, 110, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(28, 57, 110, 0.12) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      {/* Grid Pattern & Radiant Glows */}
      <div className="nx-grid pointer-events-none absolute inset-0 z-0 opacity-70" />
      <div className="pointer-events-none absolute right-[15%] top-[15%] z-0 h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(24,84,240,0.22)_0%,rgba(6,182,212,0.12)_35%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-0 z-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />

    

      {/* ================= HERO CONTENT ================= */}
      <section className="relative z-10 mx-auto max-w-[1550px] px-6 pb-20 pt-8 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.25fr]">
          {/* Left Column: Hero Details */}
          <div className="max-w-[560px]">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-[#071b35]/60 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              LEARN <span className="text-cyan-600">/</span> BUILD{" "}
              <span className="text-cyan-600">/</span> GROW
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-[clamp(2.6rem,5vw,4.8rem)] font-extrabold leading-[1.02] tracking-tight text-white">
              Building the
              <br />
              next byte of
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                technology.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-sm leading-relaxed text-slate-300 sm:text-base">
              Industry-focused training, practical projects, and innovative digital
              solutions that empower learners and help businesses move forward.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-xs font-bold text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition-all hover:scale-105 hover:shadow-[0_12px_30px_rgba(37,99,235,0.5)]"
              >
                <span>Explore Courses</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/enquiry"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#071329]/90 px-6 py-3.5 text-xs font-semibold text-white backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-[#0c1e3d]"
              >
                <Play className="h-3.5 w-3.5 fill-current text-white" />
                <span>Start a Conversation</span>
              </Link>
            </div>

            {/* Value Cards Row */}
            <div className="mt-12 grid grid-cols-3 gap-3.5">
              {benefits.map(({ Icon, title, second }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#091426]/70 p-3 shadow-lg backdrop-blur-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="text-[11px] leading-tight text-slate-300">
                    <p className="font-semibold text-white">{title}</p>
                    <p className="text-[10px] text-slate-400">{second}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Holographic Orbit Stage */}
          <div className="relative mx-auto flex h-[580px] w-full max-w-[720px] items-center justify-center">
            {/* Elliptical Orbital Rings */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20 shadow-[0_0_60px_rgba(37,99,235,0.12)]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15 [border-dasharray:6px]" />

            {/* Floating Orbit Dots */}
            <span className="absolute left-[28%] top-[12%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />
            <span className="absolute bottom-[20%] right-[32%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8]" />
            <span className="absolute right-[22%] top-[30%] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />

            {/* Interactive Tech Badge Pills */}
            {technologies.map((tech) => {
              const selected = activeCard === tech.name;
              return (
                <button
                  key={tech.name}
                  type="button"
                  onMouseEnter={() => setActiveCard(tech.name)}
                  onMouseLeave={() => setActiveCard("")}
                  onClick={() => setActiveCard(tech.name)}
                  className={`group absolute z-30 flex items-center gap-3 rounded-2xl border px-3.5 py-2.5 text-left transition-all duration-300 ${
                    tech.className
                  } ${
                    selected
                      ? "border-cyan-300 bg-[#0d2244] shadow-[0_0_24px_rgba(56,189,248,0.3)]"
                      : "border-white/10 bg-[#09152b]/90 shadow-[0_12px_30px_rgba(0,0,0,0.5)] hover:border-cyan-400/50 hover:bg-[#0c1c38]"
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#10294d] to-[#0a1830] text-xs font-bold text-cyan-300 border border-cyan-400/20 group-hover:border-cyan-400/60">
                    {tech.symbol}
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-white">{tech.name}</h3>
                    <p className="text-[10px] text-slate-400">{tech.detail}</p>
                  </div>
                </button>
              );
            })}

            {/* 3D Isometric Code Editor Window */}
            <div
              className="animate-ide relative z-20 w-[420px] rounded-2xl border border-cyan-400/40 bg-[#091326]/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.25)] backdrop-blur-xl"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 rounded-md bg-[#0f213d] px-2.5 py-1 text-[10px] font-medium text-cyan-300">
                  <span>◆ index.html</span>
                </div>
                <span className="text-[10px] text-slate-400">D script.js</span>
              </div>

              {/* Window Content */}
              <div className="mt-3 font-mono text-[11px] leading-relaxed">
                <div className="text-slate-400">
                  <span className="text-purple-400">function</span>{" "}
                  <span className="text-blue-400">nexbyta</span>() &#123;
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-purple-400">const</span> skills = [
                  <span className="text-amber-300">"Learn"</span>,{" "}
                  <span className="text-amber-300">"Build"</span>,{" "}
                  <span className="text-amber-300">"Grow"</span>];
                </div>
                <div className="pl-4 text-slate-300">
                  skills.<span className="text-blue-300">forEach</span>((skill)
                  =&gt; &#123;
                </div>
                <div className="pl-8 text-cyan-300">
                  console.<span className="text-blue-300">log</span>(`Nexbyta:
                  $&#123;skill&#125;`);
                </div>
                <div className="pl-4 text-slate-300">&#125;);</div>
                <div className="text-slate-400">&#125;</div>

                <div className="mt-2 text-slate-500">// Start your journey</div>
                <div className="text-blue-300">nexbyta();</div>

                {/* Simulated Terminal Status */}
                <div className="mt-3 rounded-lg border border-cyan-500/20 bg-[#060c18] p-2.5 text-[10px]">
                  <p className="text-slate-400">&gt; npm run dev</p>
                  <p className="text-emerald-400">✔ Compiled successfully!</p>
                  <p className="text-slate-300">
                    ✔ Local:{" "}
                    <span className="text-cyan-300">http://localhost:3000</span>
                  </p>
                  <p className="text-emerald-400">✔ Ready in 846ms</p>
                </div>
              </div>

              {/* Bottom Right Glowing Tag on Window */}
              <div className="absolute -bottom-3 -right-3 rounded-lg bg-blue-600 px-2 py-1 text-xs font-bold text-white shadow-[0_0_15px_#2563eb]">
                &lt;/&gt;
              </div>
            </div>

            {/* Isometric JS Cube (Floating Bottom-Left of the IDE) */}
            <div className="animate-badge-slow absolute bottom-[22%] left-[18%] z-30 flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/40 bg-gradient-to-br from-blue-700 via-indigo-900 to-[#071329] font-mono text-xl font-black text-amber-300 shadow-[0_10px_25px_rgba(0,0,0,0.7),0_0_20px_rgba(37,99,235,0.5)]">
              JS
            </div>

            {/* Glowing Icon Floating Pills */}
            <div className="animate-badge-slow absolute left-[22%] top-[34%] z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-[#0a1b38]/90 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              &lt;/&gt;
            </div>
            <div className="animate-badge-slow absolute left-[23%] top-[48%] z-20 flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/30 bg-[#071329]/90 text-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              &lt;&gt;
            </div>

            {/* Floating Wireframe Code Box (Top-Right of IDE) */}
            <div className="absolute right-[12%] top-[18%] z-20 w-32 rounded-lg border border-cyan-400/30 bg-[#07152b]/80 p-2 shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-md">
              <div className="h-1.5 w-16 rounded-full bg-cyan-400/70" />
              <div className="mt-1.5 h-1 w-24 rounded-full bg-cyan-400/30" />
              <div className="mt-1 h-1 w-20 rounded-full bg-cyan-400/30" />
            </div>

            {/* Floating Wireframe Code Box (Bottom-Right of IDE) */}
            <div className="absolute right-[8%] bottom-[24%] z-20 w-36 rounded-lg border border-cyan-400/30 bg-[#07152b]/80 p-2.5 shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-md">
              <div className="h-1.5 w-14 rounded-full bg-cyan-400/70" />
              <div className="mt-1.5 h-1 w-28 rounded-full bg-cyan-400/30" />
              <div className="mt-1 h-1 w-20 rounded-full bg-cyan-400/30" />
              <div className="mt-1 h-1 w-24 rounded-full bg-cyan-400/30" />
            </div>

            {/* Glowing Accent Brackets */}
            <span className="absolute right-[12%] top-[46%] text-xl font-bold text-cyan-400/60 drop-shadow-[0_0_10px_#22d3ee]">
              &#123;&#125;
            </span>
          </div>
        </div>
      </section>

      {/* ================= FLOATING WHATSAPP CTA ================= */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition hover:scale-105 hover:brightness-105"
      >
        <MessageCircle className="h-5 w-5 fill-current" />
        <span>WhatsApp</span>
      </a>
    </main>
  );
}