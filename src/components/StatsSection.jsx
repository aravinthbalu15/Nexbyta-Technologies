import { useEffect, useRef, useState } from "react";
import { GraduationCap, FolderKanban, BriefcaseBusiness } from "lucide-react";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Students Trained",
    description: "Learning through practical technology programs",
    icon: GraduationCap,
  },
  {
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    description: "Real-world projects built with modern technologies",
    icon: FolderKanban,
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of Experience",
    description: "Delivering quality technology and education",
    icon: BriefcaseBusiness,
  },
];

function AnimatedNumber({ value, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const duration = 1800;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return (
    <span>
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

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-72
          w-[min(900px,100%)]
          -translate-x-1/2
          rounded-full
          bg-primary/[0.05]
          blur-3xl
        "
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div
          className={`
            mx-auto
            mb-10
            max-w-2xl
            text-center
            transition-all
            duration-1000
            ease-[cubic-bezier(0.22,1,0.36,1)]
            sm:mb-12
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }
          `}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Nexbyta in numbers
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Building skills.
            <span className="text-gradient-brand">
              {" "}
              Building the future.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            Empowering students and organizations through practical
            technology, real-world projects, and industry-focused learning.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-card
                  p-6
                  shadow-[var(--shadow-card)]
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-1.5
                  hover:border-primary/25
                  hover:shadow-[var(--shadow-elevated)]
                  sm:p-7
                  lg:p-8
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                {/* Hover gradient */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-primary/[0.07]
                    via-transparent
                    to-cyan/[0.06]
                    opacity-0
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* Decorative glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    size-32
                    rounded-full
                    bg-primary/10
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="
                      mb-6
                      flex
                      size-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-primary/10
                      bg-primary/[0.07]
                      text-primary
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:border-primary/20
                      group-hover:bg-primary/10
                    "
                  >
                    <Icon
                      className="size-5"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Number */}
                  <div
                    className="
                      text-4xl
                      font-bold
                      leading-none
                      tracking-[-0.04em]
                      text-foreground
                      sm:text-5xl
                    "
                  >
                    <AnimatedNumber
                      value={stat.value}
                      suffix={stat.suffix}
                      start={isVisible}
                    />
                  </div>

                  {/* Accent line */}
                  <div
                    className="
                      my-5
                      h-px
                      w-12
                      bg-primary/30
                      transition-all
                      duration-500
                      group-hover:w-20
                      group-hover:bg-primary/60
                    "
                  />

                  {/* Label */}
                  <h3
                    className="
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-foreground
                    "
                  >
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2
                      max-w-xs
                      text-sm
                      leading-5
                      text-muted-foreground
                    "
                  >
                    {stat.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className="
                    absolute
                    inset-x-6
                    bottom-0
                    h-px
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-primary
                    to-cyan
                    transition-transform
                    duration-700
                    group-hover:scale-x-100
                    sm:inset-x-7
                    lg:inset-x-8
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}