import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Play,
  GraduationCap,
  Code2,
  Users,
  Globe2,
  Sparkles,
  Layers3,
  Terminal,
} from "lucide-react";

const technologies = [
  { name: "Java", detail: "Backend Development", symbol: "☕", position: "left-0 top-[27%] md:top-[24%]" },
  { name: "Python", detail: "Programming & AI", symbol: "Py", position: "left-[25%] top-[8%] md:left-[28%] md:top-[11%]" },
  { name: "Web Development", detail: "Modern Web Experiences", symbol: "◎", position: "right-0 top-[6%] md:top-[7%]" },
  { name: "C / C++", detail: "Core Programming", symbol: "C", position: "right-0 top-[39%] md:top-[34%]" },
  { name: "Projects", detail: "Build Real Products", symbol: "⌘", position: "right-0 bottom-[18%] md:bottom-[23%]" },
  { name: "Internships", detail: "Career Experience", symbol: "↗", position: "left-0 bottom-[11%] md:left-[7%] md:bottom-[15%]" },
];

const benefits = [
  { Icon: GraduationCap, title: "Industry Focused", second: "Learning" },
  { Icon: Code2, title: "Hands-on", second: "Projects" },
  { Icon: Users, title: "Career", second: "Preparation" },
];

const nodes = [
  [18, 30], [31, 18], [43, 34], [58, 17], [72, 29], [84, 42],
  [28, 57], [46, 66], [65, 53], [77, 72],
];

export default function Home() {
  const [activeCard, setActiveCard] = useState("");

  return (
    <main className="w-full overflow-hidden bg-[#030817] font-sans text-white">
      <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_72%_42%,rgba(0,100,255,.2),transparent_42%),radial-gradient(ellipse_at_100%_100%,rgba(0,216,255,.09),transparent_38%),#030817] px-5 py-10 sm:px-8 sm:py-14 lg:px-[4.2%] lg:py-12">
        {/* Futuristic grid and ambient light */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(42,119,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(42,119,255,.07)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:linear-gradient(to_bottom,#000_0%,#000_70%,transparent_100%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px] animate-pulse" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 right-0 -z-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px] animate-pulse" />

        <div className="mx-auto grid min-h-[560px] w-full max-w-[1600px] grid-cols-1 items-center gap-5 lg:grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)] lg:gap-4">
          {/* Hero copy */}
          <div className="relative z-30 mx-auto w-full max-w-[640px] animate-[pulse_1s_ease-out_1] lg:mx-0">
            <div className="mb-5 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-cyan-300/25 bg-cyan-400/[0.06] px-3.5 py-2 text-[9px] font-extrabold tracking-[.16em] text-cyan-300 shadow-[inset_0_0_15px_rgba(0,190,255,.04)] backdrop-blur-xl sm:text-[10px]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_#00dfff] animate-pulse" />
              <span>LEARN</span><i className="not-italic text-cyan-400">•</i>
              <span>BUILD</span><i className="not-italic text-cyan-400">•</i>
              <span>GROW</span><i className="not-italic text-cyan-400">•</i>
              <span>SUCCEED</span>
            </div>

            <h1 className="m-0 text-[clamp(2.65rem,7vw,4.7rem)] font-black leading-[.99] tracking-[-.055em] text-slate-50 [text-wrap:balance] sm:text-[clamp(3.1rem,6vw,4.7rem)] lg:text-[clamp(2.8rem,4.45vw,4.7rem)]">
              Building the<br />Next Byte of<br />
              <span className="inline-block bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text pb-1 text-transparent drop-shadow-[0_0_20px_rgba(0,173,255,.16)]">Technology</span>
            </h1>

            <p className="mt-5 max-w-[540px] text-sm font-normal leading-7 text-slate-300 sm:text-base sm:leading-8">
              Industry-focused training, real-world projects and innovative digital solutions to empower students and businesses for a brighter future.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/courses" className="group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-sm font-bold text-white shadow-[0_8px_25px_rgba(0,105,255,.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_34px_rgba(0,143,255,.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Explore Courses</span><ArrowRight size={19} className="relative transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/enquiry" className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-slate-300/30 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-white backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-cyan-400/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
                <span className="grid h-6 w-6 place-items-center"><Play size={14} fill="currentColor" /></span>
                Start a Conversation
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-4 sm:gap-x-6">
              {benefits.map(({ Icon, title, second }) => (
                <div className="flex items-center gap-2.5 text-xs leading-5 text-slate-300" key={title}>
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-400/20 bg-gradient-to-br from-sky-400/20 to-blue-700/10 text-cyan-300 shadow-[inset_0_0_15px_rgba(0,195,255,.06)]">
                    <Icon size={21} strokeWidth={2.2} />
                  </div>
                  <div className="flex flex-col"><span>{title}</span><span>{second}</span></div>
                </div>
              ))}
            </div>
          </div>

          {/* CSS/SVG 3D scene */}
          <div className="relative mx-auto min-h-[390px] w-full max-w-[700px] [perspective:1100px] sm:min-h-[490px] lg:min-h-[590px]">
            <div className="absolute left-1/2 top-[38%] -z-10 aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[75px]" />

            {/* Region labels */}
            <div className="absolute left-[5%] top-[2%] z-[2] rounded border border-blue-400/25 bg-[#041533]/75 px-2 py-1.5 text-[7px] font-semibold tracking-wide text-blue-300 backdrop-blur-md sm:text-[9px]">NORTH AMERICA</div>
            <div className="absolute left-[39%] top-[7%] z-[2] rounded border border-blue-400/25 bg-[#041533]/75 px-2 py-1.5 text-[7px] font-semibold tracking-wide text-blue-300 backdrop-blur-md sm:text-[9px]">EUROPE</div>
            <div className="absolute right-[4%] top-[2%] z-[2] rounded border border-blue-400/25 bg-[#041533]/75 px-2 py-1.5 text-[7px] font-semibold tracking-wide text-blue-300 backdrop-blur-md sm:text-[9px]">ASIA</div>
            <div className="absolute left-0 top-[52%] z-[2] rounded border border-blue-400/25 bg-[#041533]/75 px-2 py-1.5 text-[7px] font-semibold tracking-wide text-blue-300 backdrop-blur-md sm:text-[9px]">SOUTH AMERICA</div>
            <div className="absolute right-0 top-[61%] z-[2] rounded border border-blue-400/25 bg-[#041533]/75 px-2 py-1.5 text-[7px] font-semibold tracking-wide text-blue-300 backdrop-blur-md sm:text-[9px]">AUSTRALIA</div>
            <div className="absolute right-0 top-[19%] z-[2] hidden rounded border border-blue-400/25 bg-[#041533]/75 px-2 py-1.5 text-[9px] font-semibold leading-4 tracking-wide text-blue-300 backdrop-blur-md sm:block">GLOBAL<br />OPPORTUNITIES</div>

            {/* Globe */}
            <div className="absolute left-1/2 top-[5%] aspect-square w-[66%] max-w-[430px] -translate-x-1/2 overflow-hidden rounded-full border border-sky-300/80 bg-[radial-gradient(ellipse_at_32%_24%,rgba(75,219,255,.24),transparent_34%),radial-gradient(ellipse_at_65%_72%,rgba(0,61,235,.52),transparent_58%),radial-gradient(circle_at_48%_44%,#07306d_0%,#041a4a_62%,#020b26_100%)] shadow-[inset_-30px_-20px_65px_rgba(0,17,90,.65),inset_12px_8px_34px_rgba(0,222,255,.17),0_0_35px_rgba(0,130,255,.35),0_0_95px_rgba(0,99,255,.22)] [animation:float_8s_ease-in-out_infinite]">
              <div className="absolute inset-0 rounded-full bg-[repeating-linear-gradient(0deg,transparent_0_22px,rgba(44,164,255,.15)_23px,transparent_24px_43px),repeating-linear-gradient(90deg,transparent_0_22px,rgba(44,164,255,.13)_23px,transparent_24px_43px)] opacity-70 [mask-image:radial-gradient(ellipse,#000_35%,transparent_77%)]" />
              <div className="absolute inset-[4%_-18%] rounded-[50%] border border-sky-300/40 [transform:rotate(-17deg)_scaleY(.5)]" />
              <div className="absolute inset-y-0 left-[23%] right-[23%] rounded-[50%] border border-sky-300/40 [transform:rotate(18deg)]" />
              <div className="absolute inset-y-0 left-[38%] right-[38%] rounded-[50%] border border-sky-300/30 [transform:rotate(-12deg)]" />
              <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full opacity-95 drop-shadow-[0_0_8px_rgba(0,174,255,.34)]">
                <g fill="rgba(39,151,255,.38)" stroke="rgba(104,216,255,.68)" strokeWidth="1.3" strokeLinejoin="round">
                  <path d="M68 92 L88 72 120 65 142 76 154 94 143 108 125 112 115 132 96 135 88 155 72 142 63 120 51 110Z" />
                  <path d="M105 147 L128 154 139 178 131 203 117 230 108 261 96 279 88 256 94 225 84 200 87 173Z" />
                  <path d="M176 86 L195 67 222 59 245 70 264 64 287 78 312 76 336 95 329 113 308 118 297 135 277 128 262 142 243 132 230 114 213 123 198 108 178 111Z" />
                  <path d="M205 128 L226 122 246 141 253 166 241 193 228 220 211 239 199 217 193 193 180 170 184 146Z" />
                  <path d="M275 173 L294 161 319 170 333 188 324 204 301 201 286 216 270 203Z" />
                  <path d="M326 239 L347 234 363 250 353 266 331 267 320 252Z" />
                  <path d="M153 56 L168 48 183 57 178 69 162 71Z" />
                </g>
                <g fill="rgba(255,205,116,.8)">
                  {[[112,105],[129,99],[108,119],[219,92],[239,100],[253,114],[231,149],[246,162],[214,173],[292,102],[308,113],[277,121],[105,186],[116,208],[227,199],[216,211],[320,186]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="2" />)}
                </g>
              </svg>
              {nodes.map(([x, y], i) => <span key={i} className="absolute z-[5] h-1 w-1 rounded-full bg-cyan-100 shadow-[0_0_7px_2px_#087dff,0_0_16px_#00dfff] animate-pulse" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.23}s` }} />)}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(128deg,rgba(255,255,255,.16),transparent_24%,transparent_67%,rgba(0,119,255,.22))]" />
            </div>

            {/* Orbit rings */}
            <div className="pointer-events-none absolute left-1/2 top-[43%] z-[3] aspect-square w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/50 shadow-[0_0_15px_rgba(0,178,255,.2)] [transform:translate(-50%,-50%)_rotateX(69deg)_rotateZ(-18deg)]" />
            <div className="pointer-events-none absolute left-1/2 top-[43%] z-[3] aspect-square w-[105%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-400/40 [transform:translate(-50%,-50%)_rotateX(70deg)_rotateZ(27deg)] animate-spin [animation-duration:45s]" />
            <div className="pointer-events-none absolute left-1/2 top-[43%] z-[3] aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/50 [transform:translate(-50%,-50%)_rotateX(67deg)_rotateZ(70deg)]" />
            <div className="pointer-events-none absolute left-1/2 top-[43%] z-[3] aspect-square w-[116%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/25 [transform:translate(-50%,-50%)_rotateX(74deg)_rotateZ(-45deg)]" />

            {/* 3D Nexbyta N core */}
            <div className="absolute left-1/2 top-[33%] z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center [transform-style:preserve-3d] animate-bounce [animation-duration:5s]">
              <div className="absolute -bottom-10 -left-[22%] -right-[22%] h-10 rounded-[50%] border border-cyan-300/60 bg-blue-500/20 shadow-[0_0_28px_rgba(0,174,255,.45)] [transform:perspective(250px)_rotateX(58deg)]" />
              <div className="absolute inset-2 -z-10 rounded-[25%] bg-blue-950 [transform:translate(9px,8px)_translateZ(-10px)]" />
              <div className="relative grid aspect-square w-[clamp(90px,12vw,150px)] place-items-center overflow-hidden rounded-[24%] border border-cyan-100/90 bg-gradient-to-br from-cyan-300 via-blue-500 to-indigo-800 shadow-[inset_0_2px_16px_rgba(255,255,255,.48),inset_-14px_-15px_30px_rgba(0,18,100,.42),10px_14px_0_-4px_rgba(14,55,170,.78),0_0_60px_rgba(0,140,255,.24)] [transform:rotateY(-12deg)_rotateX(7deg)] transition-transform duration-500 hover:rotate-0 hover:scale-105">
                <div className="absolute inset-1.5 rounded-[22%] border border-white/25" />
                <span className="relative z-10 pr-[.1em] text-[clamp(4.5rem,10vw,7rem)] font-black leading-none tracking-[-.1em] text-white drop-shadow-[0_4px_0_rgba(0,35,120,.45)]">N</span>
              </div>
              <span className="absolute top-[calc(100%+54px)] left-1/2 w-max -translate-x-1/2 text-[8px] font-extrabold tracking-[.17em] text-cyan-50 drop-shadow-[0_0_15px_rgba(0,207,255,.7)]">NEXBYTA TECHNOLOGIES</span>
            </div>

            {/* Floating technology cards */}
            {technologies.map((tech) => (
              <button type="button" key={tech.name} onMouseEnter={() => setActiveCard(tech.name)} onMouseLeave={() => setActiveCard("")} onFocus={() => setActiveCard(tech.name)} onBlur={() => setActiveCard("")}
                className={`absolute ${tech.position} z-30 flex min-h-[58px] w-[clamp(112px,16vw,180px)] max-w-[37%] items-center gap-2 overflow-hidden rounded-xl border px-2 py-2 text-left text-white shadow-[inset_0_1px_0_rgba(255,255,255,.11),0_14px_34px_rgba(0,0,0,.3),0_0_22px_rgba(0,112,255,.13)] backdrop-blur-xl transition duration-300 hover:brightness-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:gap-2.5 sm:px-2.5 ${activeCard === tech.name ? "border-cyan-300 bg-gradient-to-br from-blue-900/95 to-slate-950 shadow-[0_0_28px_rgba(0,193,255,.28)]" : "border-sky-300/60 bg-gradient-to-br from-blue-950/95 to-[#030f27]/95"}`}>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-sky-400/20 bg-sky-400/15 text-lg font-extrabold text-cyan-200 sm:h-9 sm:w-9 sm:text-xl">{tech.symbol}</span>
                <span className="relative flex min-w-0 flex-col gap-1"><strong className="text-[10px] leading-4 sm:text-xs">{tech.name}</strong><small className="text-[7px] leading-3 text-blue-200 sm:text-[9px]">{tech.detail}</small></span>
              </button>
            ))}

            {/* Floating information panels */}
            <div className="absolute left-0 top-[6%] z-[18] hidden items-center gap-2.5 rounded-xl border border-sky-300/25 bg-[#05142f]/90 p-3 shadow-xl backdrop-blur-xl sm:flex">
              <Globe2 size={23} className="shrink-0 text-cyan-300" /><div className="flex flex-col gap-1"><small className="text-[8px] font-extrabold tracking-[.13em] text-cyan-300">GLOBAL VISION</small><strong className="text-[10px] font-semibold">Technology without limits</strong></div>
            </div>
            <div className="absolute bottom-[10%] left-0 z-[18] hidden items-center gap-2.5 rounded-xl border border-sky-300/25 bg-[#05142f]/90 p-3 shadow-xl backdrop-blur-xl sm:flex">
              <Terminal size={22} className="shrink-0 text-cyan-300" /><div className="flex flex-col gap-1"><small className="text-[8px] font-extrabold tracking-[.13em] text-cyan-300">LEARN BY DOING</small><strong className="text-[10px] font-semibold">Turn ideas into projects</strong></div>
            </div>

           
           
            <Sparkles className="absolute right-[8%] top-[48%] z-20 text-cyan-200 drop-shadow-[0_0_12px_rgba(0,207,255,.8)]" size={22} />
          </div>
        </div>
      </section>
    </main>
  );
}
