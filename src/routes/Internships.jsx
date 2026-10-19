
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  GraduationCap,
  Laptop,
  Lightbulb,
  Rocket,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { useState } from "react";

import Button from "../components/Button";
import { Section, SectionHeading } from "../components/Section";
import { company } from "../data/site";

export const Route = createFileRoute("/Internships")({
  head: () => ({
    meta: [
      {
        title: "Internships | Nexbyta Technologies",
      },
      {
        name: "description",
        content:
          "Explore technology internship learning paths at Nexbyta Technologies. Develop practical skills, build projects, and prepare for your technology career.",
      },
    ],
  }),
  component: InternshipPage,
});

const internships = [
  {
    id: "01",
    title: "Full Stack Development",
    category: "Web Development",
    description:
      "Explore frontend and backend development by learning how modern web applications are designed, developed, and connected to databases.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    icon: Code2,
    accent: "blue",
    level: "Beginner friendly",
  },
  {
    id: "02",
    title: "Java Development",
    category: "Programming",
    description:
      "Strengthen your Java fundamentals, understand object-oriented programming, and practise building structured applications.",
    technologies: ["Core Java", "OOP", "Collections", "JDBC"],
    icon: Workflow,
    accent: "cyan",
    level: "Programming fundamentals",
  },
  {
    id: "03",
    title: "Python Development",
    category: "Programming",
    description:
      "Learn Python programming concepts, problem-solving techniques, and application development through guided practical exercises.",
    technologies: ["Python", "Functions", "OOP", "Projects"],
    icon: Laptop,
    accent: "violet",
    level: "Beginner friendly",
  },
  {
    id: "04",
    title: "Frontend Development",
    category: "Web Development",
    description:
      "Learn to create responsive, accessible, and engaging web interfaces with modern frontend development tools.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    icon: Sparkles,
    accent: "pink",
    level: "UI development",
  },
  {
    id: "05",
    title: "Backend Development",
    category: "Software Development",
    description:
      "Understand server-side development, REST APIs, database integration, and the fundamentals of application security.",
    technologies: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
    icon: Workflow,
    accent: "green",
    level: "Server-side development",
  },
  {
    id: "06",
    title: "Software Development",
    category: "Application Development",
    description:
      "Develop your programming logic, practise software development techniques, and learn to approach coding problems systematically.",
    technologies: ["Programming", "OOP", "Git", "Problem Solving"],
    icon: Target,
    accent: "orange",
    level: "Core development",
  },
];

const benefits = [
  {
    icon: Code2,
    title: "Practical coding",
    description:
      "Apply programming concepts through hands-on exercises and development tasks.",
  },
  {
    icon: Rocket,
    title: "Project experience",
    description:
      "Build projects that help you understand how software features work together.",
  },
  {
    icon: Users,
    title: "Guided learning",
    description:
      "Strengthen your technical understanding through structured learning activities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career preparation",
    description:
      "Develop problem-solving, communication, and technical presentation skills.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Explore programs",
    description:
      "Review the available technology tracks and identify your area of interest.",
  },
  {
    number: "02",
    title: "Submit an enquiry",
    description:
      "Share your contact details, learning goals, and preferred internship domain.",
  },
  {
    number: "03",
    title: "Discuss the details",
    description:
      "Confirm eligibility, duration, learning format, fees if applicable, and program availability with the team.",
  },
  {
    number: "04",
    title: "Begin learning",
    description:
      "Start the confirmed program and work towards your practical learning goals.",
  },
];

const faqs = [
  {
    question: "Who can enquire about an internship?",
    answer:
      "Students, fresh graduates, and aspiring developers can enquire about suitable programs. Eligibility depends on the specific internship track.",
  },
  {
    question: "Do I need previous coding experience?",
    answer:
      "Some tracks may suit beginners, while others require programming fundamentals. Tell the team about your current skill level before choosing a program.",
  },
  {
    question: "How long does an internship last?",
    answer:
      "The duration depends on the specific program. Contact Nexbyta Technologies to confirm the available duration, schedule, and learning format.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Ask the team to confirm the certificate eligibility, completion requirements, and exact certificate details for your selected program before enrolling.",
  },
  {
    question: "How can I apply?",
    answer:
      "Choose a technology track and use the enquiry button to share your interest. The team can then discuss the next steps and current availability.",
  },
];

function InternshipPage() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-[#10182B] text-white">
        {/* Ambient background */}
        <div
          className="pointer-events-none absolute -left-40 top-0 -z-10 size-[28rem] rounded-full bg-blue-600/20 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 bottom-0 -z-10 size-[30rem] rounded-full bg-cyan-400/15 blur-[130px]"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
          {/* Hero content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-wide text-cyan-200 backdrop-blur-md sm:text-sm">
              <Sparkles className="size-4" />
              INTERNSHIPS AT NEXBYTA
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Turn your skills into
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                real-world experience.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Move beyond theory. Explore technology, practise coding, work on
              practical projects, and develop the skills that help you take
              your next step in software development.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                to="/enquiry"
                className="group gap-2 rounded-xl px-6 py-3 shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
              >
                Explore internship opportunities
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <a
                href="#internship-programs"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                View programs
                <ArrowDownRight className="size-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <Check className="size-4 text-cyan-300" />
                Practical learning
              </span>
              <span className="flex items-center gap-2">
                <Check className="size-4 text-cyan-300" />
                Technology-focused
              </span>
              <span className="flex items-center gap-2">
                <Check className="size-4 text-cyan-300" />
                Project-oriented
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-violet-500/20 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.025] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                    Your next chapter
                  </p>
                  <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                    Learn. Build. Grow.
                  </h2>
                </div>
                <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                  <GraduationCap className="size-6 text-cyan-200" />
                </div>
              </div>

              {/* Code window */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0A1020] shadow-xl">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="size-2.5 rounded-full bg-red-400/80" />
                  <span className="size-2.5 rounded-full bg-amber-300/80" />
                  <span className="size-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-xs text-slate-500">
                    your-next-project.js
                  </span>
                </div>

                <div className="space-y-3 p-5 font-mono text-xs leading-6 sm:p-6 sm:text-sm">
                  <p className="text-slate-500">
                    // Every developer starts somewhere
                  </p>
                  <p>
                    <span className="text-violet-300">const</span>{" "}
                    <span className="text-cyan-200">developer</span> = {"{"}
                  </p>
                  <p className="pl-5">
                    <span className="text-blue-300">learn</span>:{" "}
                    <span className="text-emerald-300">"continuously"</span>,
                  </p>
                  <p className="pl-5">
                    <span className="text-blue-300">build</span>:{" "}
                    <span className="text-emerald-300">"practically"</span>,
                  </p>
                  <p className="pl-5">
                    <span className="text-blue-300">grow</span>:{" "}
                    <span className="text-emerald-300">"every day"</span>,
                  </p>
                  <p>{"};"}</p>
                  <div className="mt-5 flex items-center gap-2 rounded-lg border border-emerald-300/10 bg-emerald-300/[0.06] px-3 py-2.5 text-emerald-300">
                    <Check className="size-4" />
                    <span>Ready to build something meaningful</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <Code2 className="size-5 text-cyan-300" />
                  <p className="mt-3 text-sm font-semibold">Technical skills</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Learn by doing
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <Rocket className="size-5 text-indigo-300" />
                  <p className="mt-3 text-sm font-semibold">Practical projects</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Put knowledge to work
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-20 hidden size-14 items-center justify-center rounded-2xl border border-white/10 bg-[#17233D] shadow-xl sm:flex lg:-right-5">
              <Sparkles className="size-6 text-cyan-300" />
            </div>

            <div className="absolute -bottom-5 -left-3 hidden size-14 items-center justify-center rounded-2xl border border-white/10 bg-[#17233D] shadow-xl sm:flex lg:-left-5">
              <BadgeCheck className="size-6 text-blue-300" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.08] bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-6 sm:px-8 md:grid-cols-4">
            {[
              { label: "Learning approach", value: "Hands-on" },
              { label: "Focus", value: "Technology" },
              { label: "Experience", value: "Project-based" },
              { label: "Goal", value: "Career growth" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-lg font-bold text-white sm:text-xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <Section
        tone="light"
        id="internship-programs"
        className="relative overflow-hidden"
      >
        <div
          className="pointer-events-none absolute -right-40 top-10 size-80 rounded-full bg-primary/[0.07] blur-3xl"
          aria-hidden="true"
        />

        <div className="relative">
          <SectionHeading
            eyebrow="Explore your path"
            title="Find your place in technology."
            subtitle="Choose a learning track that matches your interests. Explore the technologies, understand the learning objectives, and enquire about the available program details."
          />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {internships.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.id}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-background p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/[0.07] sm:p-7"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                      item.accent === "blue"
                        ? "from-blue-500 to-indigo-400"
                        : item.accent === "cyan"
                          ? "from-cyan-400 to-blue-500"
                          : item.accent === "violet"
                            ? "from-violet-500 to-fuchsia-400"
                            : item.accent === "pink"
                              ? "from-pink-500 to-rose-400"
                              : item.accent === "green"
                                ? "from-emerald-400 to-teal-500"
                                : "from-orange-400 to-amber-500"
                    }`}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/10 bg-primary/[0.07] text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-6" />
                    </div>

                    <span className="font-mono text-sm font-semibold text-muted-foreground/60">
                      {item.id}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-semibold text-foreground">
                      Technologies and focus areas
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-border/70 bg-muted/40 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:border-primary/15"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-border/70 pt-5">
                    <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <Lightbulb className="size-4 text-primary" />
                      {item.level}
                    </div>

                    <Link
                      to="/enquiry"
                      search={{ interest: item.title }}
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Enquire about this track
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-7 text-center text-sm leading-6 text-muted-foreground">
            Program availability, duration, eligibility, and learning format
            should be confirmed with our team before enrolment.
          </p>
        </div>
      </Section>

      {/* ================= BENEFITS ================= */}
      <Section tone="soft">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              The learning experience
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              More than just learning to code.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
              A technology career involves more than writing code. Learn to
              understand requirements, solve problems, develop applications,
              and communicate your work clearly.
            </p>

            <div className="mt-8">
              <Button
                to="/enquiry"
                className="group gap-2 rounded-xl px-6"
              >
                Discuss your interests
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="group rounded-2xl border border-border/70 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/[0.08] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>

                  <p className="mt-5 font-mono text-xs text-muted-foreground">
                    BENEFIT 0{index + 1}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-foreground">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ================= PROCESS ================= */}
      <Section tone="light">
        <SectionHeading
          eyebrow="How it works"
          title="Your journey starts with four simple steps."
          subtitle="Understand the process before you begin. Our team can help clarify the details of the internship track you are interested in."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold tracking-widest text-primary">
                  {step.number}
                </span>

                {index < processSteps.length - 1 && (
                  <ArrowRight
                    className="hidden size-5 text-border lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="mt-4 border-t-2 border-primary/20 pt-5 transition-colors duration-300 hover:border-primary">
                <h3 className="text-lg font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ================= FAQ ================= */}
      <Section tone="soft">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Questions before you begin?
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
              Get a clearer understanding of the internship process, program
              requirements, and the next steps.
            </p>

            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-border/70 bg-background p-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Need more information?
                </p>
                <Link
                  to="/enquiry"
                  search={{ interest: "Internship enquiry" }}
                  className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Contact our team
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <article
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border bg-background transition-all duration-300 ${
                    isOpen
                      ? "border-primary/30 shadow-sm"
                      : "border-border/70 hover:border-primary/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="text-sm font-semibold leading-6 text-foreground sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-7 text-muted-foreground sm:px-6 sm:pb-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ================= FINAL CTA ================= */}
      <Section tone="dark" className="pb-20">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[#10182B] p-7 text-white shadow-2xl sm:p-10 lg:p-14">
          <div
            className="pointer-events-none absolute -right-20 -top-32 -z-10 size-80 rounded-full bg-blue-500/25 blur-[100px]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-40 left-1/3 -z-10 size-80 rounded-full bg-cyan-400/15 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-1.5 text-xs font-semibold text-cyan-200">
                <Sparkles className="size-3.5" />
                YOUR NEXT STEP STARTS HERE
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Ready to build your future in technology?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Tell us what you want to learn, explore the available
                internship tracks, and discuss the next steps with Nexbyta
                Technologies.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button
                to="/enquiry"
                className="group gap-2 rounded-xl px-6 py-3 shadow-lg shadow-blue-500/20"
              >
                Enquire now
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                WhatsApp us
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:text-sm">
            <span className="flex items-center gap-2">
              <Check className="size-4 text-cyan-300" />
              Explore technology tracks
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-cyan-300" />
              Discuss program details
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-cyan-300" />
              Plan your next step
            </span>
          </div>
        </div>
      </Section>
    </main>
  );
}
