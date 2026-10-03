import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Check, Code2, ExternalLink, GraduationCap, Rocket, Sparkles } from "lucide-react";

import Brand from "../components/Brand";
import Button from "../components/Button";
import MediaPlaceholder from "../components/MediaPlaceholder";
import CourseRail from "../components/CourseRail";
import ProjectVisual from "../components/ProjectVisual";
import Icon from "../components/icons";
import { Section, SectionHeading } from "../components/Section";
import { company, courses, services, trustPoints, whyNexbyta, learningProcess, deliveredWork } from "../data/site";
import { siteImages } from "../data/siteImages";
import StatsSection from "../components/StatsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Nexbyta Technologies | Build skills and digital products in Chennai",
      },
      {
        name: "description",
        content:
          "Nexbyta Technologies helps students build career-ready skills and helps businesses launch websites, apps, and custom software solutions.",
      },
      {
        property: "og:title",
        content: "Nexbyta Technologies",
      },
      {
        property: "og:description",
        content:
          "Technology training, career preparation, and modern digital solutions for learners and businesses.",
      },
      {
        property: "og:url",
        content: "/",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const featuredCourses = courses.slice(0, 5);
  const featuredServices = services.slice(0, 3);
  const courseImages = [siteImages.courses.java, siteImages.courses.python, siteImages.courses.cCpp, siteImages.courses.javascript, siteImages.courses.fullStack];
  const serviceImages = [siteImages.services.web, siteImages.services.fullStack, siteImages.services.backend];

  return (
    <>
<section className="relative overflow-hidden bg-shell px-5 py-14 text-shell-foreground sm:px-8 sm:py-20 lg:py-20">
  {/* Background */}
  <div
    className="surface-grid pointer-events-none absolute inset-0 opacity-[0.07]"
    aria-hidden="true"
  />

  <div
    className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan/10 blur-[120px]"
    aria-hidden="true"
  />

  <div
    className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-cyan/5 blur-[120px]"
    aria-hidden="true"
  />

  <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">

    {/* CONTENT */}
    <div className="animate-rise">

      {/* Small label */}
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-10 bg-cyan" />

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan">
          Nexbyta Technologies
        </span>
      </div>

      {/* Heading */}
      <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[4.5rem]">
        Building the Next Byte of{" "}
        <span className="text-cyan">
          Technology
        </span>
      </h1>

      {/* Description */}
      <p className="mt-7 max-w-xl text-base leading-8 text-shell-muted sm:text-lg">
        Delivering industry-focused technology education and innovative, scalable digital solutions that empower individuals, strengthen businesses, and drive sustainable growth.
      </p>

      {/* Buttons */}
      <div className="mt-9 flex flex-wrap gap-3">
        <Button
          to="/courses"
          variant="accent"
          className="group gap-2 rounded-lg px-6 py-3"
        >
          Explore Courses

          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Button>

        <Button
          to="/enquiry"
          variant="light"
          className="rounded-lg px-6 py-3"
        >
          Start a Conversation
        </Button>
      </div>

      {/* Trust points */}
      <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
        {trustPoints.slice(0, 3).map((point) => (
          <div
            key={point}
            className="flex items-center gap-2 text-sm text-shell-muted"
          >
            <BadgeCheck
              className="size-4 text-cyan"
              aria-hidden="true"
            />

            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>

    {/* IMAGE */}
    <div className="relative animate-rise [animation-delay:120ms]">

      {/* Very subtle glow */}
      <div
        className="pointer-events-none absolute inset-8 rounded-[2rem] bg-cyan/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Image frame */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-1.5">

        <MediaPlaceholder
          src={siteImages.hero}
          alt="Nexbyta team collaborating on technology training and digital products"
          loading="eager"
          className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
        />

        {/* Image overlay */}
        <div
          className="pointer-events-none absolute inset-x-1.5 bottom-1.5 h-32 rounded-b-[1.5rem] bg-gradient-to-t from-black/40 to-transparent"
          aria-hidden="true"
        />
      </div>

     
    </div>

  </div>
</section>

      <section className="border-b border-border bg-surface-soft px-5 py-8 sm:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-5 sm:grid-cols-3">
          {[{ label: "Learn by building", icon: GraduationCap }, { label: "Work with modern tools", icon: Code2 }, { label: "Prepare for real opportunities", icon: Rocket }].map(({ label, icon: Icon }) => <div key={label} className="flex items-center gap-3 text-sm font-semibold text-ink"><Icon className="size-5 text-primary" aria-hidden="true" />{label}</div>)}
        </div>
      </section>

       {/* Statistics */}
      <StatsSection />


  <Section tone="light" className="relative overflow-hidden">
  {/* Background decoration */}
  <div
    className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
    aria-hidden="true"
  />

  <div
    className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan/10 blur-3xl"
    aria-hidden="true"
  />

  <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

    {/* ==================== LEFT CONTENT ==================== */}
    <div>
      {/* Eyebrow */}
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />

        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
          Our Approach
        </p>
      </div>

      {/* Heading */}
      <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        Turning technology into
        <span className="text-primary"> meaningful progress.</span>
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        Nexbyta combines industry-focused technology education with innovative
        digital solutions. We help individuals develop practical skills and
        help businesses transform ideas into reliable, scalable technology.
      </p>

      {/* Features */}
      <div className="mt-8 space-y-4">
        {whyNexbyta.slice(0, 4).map((item, index) => (
          <div
            key={item.title}
            className="group flex gap-4 rounded-xl border border-border/60 bg-background/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
          >
            {/* Number */}
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Content */}
            <div>
              <h3 className="font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-9 flex flex-wrap items-center gap-5">
        <Button
          to="/about"
          className="group gap-2 px-6 shadow-sm transition-all duration-300 hover:shadow-lg"
        >
          Discover Nexbyta

          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Button>

        <span className="text-sm font-medium text-muted-foreground">
          Learn. Build. Grow.
        </span>
      </div>
    </div>

    {/* ==================== RIGHT VISUAL ==================== */}
    <div className="relative">
      {/* Main card */}
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-xl sm:p-8">

        {/* Top gradient */}
        <div
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/10 to-transparent"
          aria-hidden="true"
        />

        <div className="relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            Technology for learning & business
          </div>

          {/* Visual heading */}
          <h3 className="mt-7 text-2xl font-bold tracking-tight sm:text-3xl">
            From ideas to
            <span className="text-primary"> real-world impact.</span>
          </h3>

          {/* Visual description */}
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Practical education, modern technology, and scalable digital
            solutions designed to create meaningful value for individuals
            and businesses.
          </p>

          {/* ==================== PILLARS ==================== */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {/* Learn */}
            <div className="rounded-2xl border border-border/60 bg-muted/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="text-2xl font-bold text-foreground">
                Learn
              </div>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Industry-focused technology education
              </p>
            </div>

            {/* Build */}
            <div className="rounded-2xl border border-border/60 bg-muted/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="text-2xl font-bold text-foreground">
                Build
              </div>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Modern software and digital solutions
              </p>
            </div>

            {/* Grow */}
            <div className="rounded-2xl border border-border/60 bg-muted/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="text-2xl font-bold text-foreground">
                Grow
              </div>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Skills, careers, and professional opportunities
              </p>
            </div>

            {/* Scale */}
            <div className="rounded-2xl border border-border/60 bg-muted/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="text-2xl font-bold text-foreground">
                Scale
              </div>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Reliable technology for growing businesses
              </p>
            </div>
          </div>

          {/* ==================== BOTTOM STATEMENT ==================== */}
          <div className="mt-7 flex items-center gap-3 rounded-2xl bg-primary/5 p-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <ArrowRight
                className="size-5"
                aria-hidden="true"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">
                From learning to real-world impact
              </p>

              <p className="mt-0.5 text-xs text-muted-foreground">
                We turn knowledge into practical skills and ideas into
                working solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== FLOATING CARD ==================== */}
      <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border/60 bg-background/95 px-5 py-4 shadow-lg backdrop-blur sm:block">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Nexbyta Technologies
        </p>

        <p className="mt-1 text-sm font-bold text-foreground">
          Technology • Education • Innovation
        </p>
      </div>
    </div>
  </div>
</Section>


        {/* Learning tracks */}
      <Section tone="soft">
  <SectionHeading
    eyebrow="Learning Programs"
    title="Build skills for the real world"
    subtitle="Develop industry-relevant technical skills through structured learning, hands-on projects, and practical experience designed to prepare you for today's technology landscape."
  />

  <CourseRail
    courses={featuredCourses}
    images={courseImages}
  />

  <Button
    to="/courses"
    variant="outline"
    className="mt-8"
  >
    Explore All Programs
  </Button>
</Section>

      <Section tone="light">
  <SectionHeading
    eyebrow="Digital Services"
    title="Technology solutions designed to move your business forward"
    subtitle="We help organizations build credible digital experiences and scalable software solutions that streamline operations, strengthen their digital presence, and support sustainable growth."
  />

  <div className="grid gap-6 lg:grid-cols-3">
    {featuredServices.map((service, index) => {
      const serviceImage = [
        "/images/services/1.png",
        "/images/services/2.png",
        "/images/services/3.png",
      ][index];

      return (
        <article
          key={service.title}
          className="group overflow-hidden rounded-2xl border border-border bg-surface-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-(--shadow-card)"
        >
          {/* Service Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={serviceImage}
              alt={service.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Image Overlay */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
              aria-hidden="true"
            />

            {/* Service Number */}
            <div className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-white/30 bg-black/30 text-sm font-bold text-white backdrop-blur-md">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Digital Service
            </p>

            <h3 className="mt-2 text-xl font-semibold text-foreground">
              {service.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            <Link
              to="/enquiry"
              search={{ interest: service.title }}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Discuss your project

              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </article>
      );
    })}
  </div>

  <Button
    to="/services"
    variant="outline"
    className="mt-8"
  >
    Explore All Services
  </Button>
</Section>

      <Section tone="dark">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <MediaPlaceholder src={siteImages.why} alt="Learner working through a practical technology project" className="aspect-4/3 rounded-3xl border border-border" />
          <div><p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">Why Nexbyta</p><h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">A clearer route from curiosity to capability.</h2><p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">The work is structured, current and grounded in the things people actually need to build, explain and ship.</p><div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">{whyNexbyta.slice(0, 4).map((item, index) => <div key={item.title} className="border-l border-cyan/50 pl-4"><p className="font-mono text-xs text-cyan">0{index + 1}</p><h3 className="mt-2 font-semibold">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p></div>)}</div></div>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="Our process" title="A clear path from idea to momentum" subtitle="Whether you're preparing for a career or launching a digital product, our process keeps work practical, structured, and transparent." />
        <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">{learningProcess.map((step, index) => <li key={step.step} className="relative border-l-2 border-primary/25 pl-5 md:border-l-0 md:border-t-2 md:pt-5 md:pl-0"><span className="font-mono text-sm font-semibold text-primary">{step.step}</span><h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>{index < learningProcess.length - 1 && <span className="absolute -bottom-5 -left-1.75 size-3 rounded-full border-2 border-surface-light bg-primary md:bottom-auto md:left-auto md:-right-1.75 md:-top-1.75" aria-hidden="true" />}</li>)}</ol>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="What we build" title="Digital products designed around real business needs." subtitle="From business websites and web applications to custom software, Nexbyta turns practical requirements into clear, usable digital experiences." />
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[{ icon: "Globe", title: "Business Websites", description: "Professional websites that make your organisation easier to understand and trust." }, { icon: "Layers", title: "Web Applications", description: "Responsive products that bring important workflows into one useful place." }, { icon: "Settings2", title: "Custom Software", description: "Solutions shaped around the way your team works, rather than a fixed template." }, { icon: "GraduationCap", title: "Technical Training", description: "Practical learning and career preparation grounded in real development work." }].map((item) => <article key={item.title} className="group bg-surface-light p-6 transition-colors hover:bg-accent/45"><Icon name={item.icon} className="size-5 text-primary" /><h3 className="mt-5 text-base font-semibold text-foreground">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p></article>)}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Real client / project work" title="Selected digital products built for real-world needs." subtitle="From business websites to community platforms, we design and build digital experiences that are practical, responsive and ready for real users." />
        <div className="space-y-24">
          {[{ project: "prPower", data: deliveredWork[0], image: siteImages.projects.prPower, alt: "PR Power and Infrastructure website project visual" }, { project: "church", data: deliveredWork[1], image: siteImages.projects.stJosephsChurch, alt: "St. Joseph's Church website project visual" }].map(({ project, data, image, alt }, index) => <ProjectVisual key={data.title} project={project} src={image} alt={alt} projectName={data.title} projectUrl={data.url} reverse={index === 1} />)}
        </div>
      </Section>

      <Section tone="dark" className="pb-20">
        <div className="rounded-3xl border border-border bg-[linear-gradient(135deg,rgba(21,48,114,0.96),rgba(23,34,72,0.96))] p-8 text-shell-foreground shadow-(--shadow-elevated) sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">Ready to begin?</p>
              <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                Let’s turn your next step into a real advantage.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button to="/enquiry" variant="light">
                Enquire now
              </Button>
              <a href={company.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15">
                WhatsApp us
                <Sparkles className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
