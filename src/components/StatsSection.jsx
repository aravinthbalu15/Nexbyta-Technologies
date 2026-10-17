import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  FolderKanban,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Learners Trained",
    description: "Developing practical, industry-relevant technology skills",
    icon: GraduationCap,
  },
  {
    value: 5,
    suffix: "+",
    label: "Projects Delivered",
    description: "Building practical digital solutions with modern technologies",
    icon: FolderKanban,
  },
  {
    value: 1,
    suffix: "+",
    label: "Years of Experience",
    description: "Combining technology expertise with practical learning",
    icon: BriefcaseBusiness,
  },
];

function AnimatedNumber({ value, suffix, start, delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return undefined;
    }

    let frameId;
    let startTime = null;
    let delayTimer;
    const duration = 1600;

    const animate = (timestamp) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(eased * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    delayTimer = window.setTimeout(() => {
      frameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(delayTimer);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [start, value, delay]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-background px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
    >
      {/* Soft background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[min(900px,100%)] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-[10%] -z-10 size-64 rounded-full bg-cyan-400/[0.05] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div
          className={`mx-auto mb-10 max-w-2xl text-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mb-12 ${
            isVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-7 scale-[0.98] opacity-0"
          }`}
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.06] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <Sparkles size={14} aria-hidden="true" />
            Nexbyta in Numbers
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Building skills.
            <span className="text-gradient-brand"> Building the future.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
            Empowering individuals and organizations through practical technology,
            real-world projects, and industry-focused learning.
          </p>
        </div>

        {/* Statistics cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.label}
                className={`group relative flex min-h-[300px] flex-col items-center overflow-hidden rounded-2xl border border-border bg-card px-6 py-8 text-center shadow-[var(--shadow-card)] transition-[transform,opacity,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-primary/30 hover:shadow-[var(--shadow-elevated)] motion-reduce:transform-none motion-reduce:transition-none sm:px-5 sm:py-8 lg:px-8 lg:py-9 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${isVisible ? index * 150 : 0}ms` }}
              >
                {/* Hover gradient */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-cyan-400/[0.07] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-16 -left-12 size-36 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                />

                <div className="relative z-10 flex w-full flex-col items-center">
                  {/* Icon */}
                  <div className="mb-6 grid size-12 place-items-center rounded-2xl border border-primary/15 bg-primary/[0.07] text-primary shadow-sm transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] motion-reduce:transform-none">
                    <Icon
                      className="size-5 transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Centered animated number */}
                  <div className="flex min-h-[58px] items-center justify-center text-4xl font-extrabold leading-none tracking-[-0.045em] text-foreground sm:text-5xl">
                    <span className="bg-gradient-to-r from-foreground via-primary to-cyan-500 bg-clip-text text-transparent">
                      <AnimatedNumber
                        value={stat.value}
                        suffix={stat.suffix}
                        start={isVisible}
                        delay={index * 180}
                      />
                    </span>
                  </div>

                  {/* Animated accent line */}
                  <div className="my-5 h-px w-12 origin-center bg-gradient-to-r from-primary/40 via-primary to-cyan-400/40 transition-all duration-500 group-hover:w-20 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.3)]" />

                  <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-foreground transition-colors duration-300 group-hover:text-primary">
                    {stat.label}
                  </h3>

                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom animated accent */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-6 bottom-0 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-primary via-cyan-400 to-primary transition-transform duration-700 ease-out group-hover:scale-x-100 sm:inset-x-7 lg:inset-x-8"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
