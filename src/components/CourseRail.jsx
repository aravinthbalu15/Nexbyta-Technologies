import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import Icon from "./icons";

const AUTOPLAY_INTERVAL = 2800;
const TRANSITION_DURATION = 450;
const SWIPE_THRESHOLD = 50;

export default function CourseRail({ courses = [], images = [] }) {
  const [slide, setSlide] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);

  const startX = useRef(null);
  const hasMoved = useRef(false);
  const isMoving = useRef(false);
  const autoplayRef = useRef(null);

  /* ==================================================
     No Courses
  ================================================== */

  if (!courses.length) {
    return null;
  }

  /* ==================================================
     Infinite Carousel
  ================================================== */

  const isInfinite = courses.length > 1;

  const items = isInfinite
    ? [courses[courses.length - 1], ...courses, courses[0]]
    : courses;

  /* ==================================================
     Move Carousel
  ================================================== */

  const move = useCallback(
    (direction) => {
      if (!isInfinite || isMoving.current) {
        return;
      }

      isMoving.current = true;
      setAnimate(true);

      setSlide((current) => {
        const next = current + direction;

        if (next > courses.length + 1) {
          return courses.length + 1;
        }

        if (next < 0) {
          return 0;
        }

        return next;
      });

      window.setTimeout(() => {
        isMoving.current = false;
      }, TRANSITION_DURATION);
    },
    [courses.length, isInfinite]
  );

  /* ==================================================
     Autoplay
  ================================================== */

  useEffect(() => {
    if (!isInfinite || paused || dragging) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reduceMotion.matches) {
      return undefined;
    }

    autoplayRef.current = window.setInterval(() => {
      move(1);
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
      }
    };
  }, [move, paused, dragging, isInfinite]);

  /* ==================================================
     Infinite Loop Correction
  ================================================== */

  useEffect(() => {
    if (!isInfinite) {
      return undefined;
    }

    if (slide !== 0 && slide !== courses.length + 1) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setAnimate(false);
      setSlide(slide === 0 ? courses.length : 1);
      isMoving.current = false;
    }, TRANSITION_DURATION);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [slide, courses.length, isInfinite]);

  /* ==================================================
     Swipe Start
  ================================================== */

  const handlePointerDown = (event) => {
    if (!isInfinite) {
      return;
    }

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    startX.current = event.clientX;
    hasMoved.current = false;

    setDragging(true);

    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  /* ==================================================
     Swipe Move
  ================================================== */

  const handlePointerMove = (event) => {
    if (startX.current === null) {
      return;
    }

    const distance = event.clientX - startX.current;

    if (Math.abs(distance) > 10) {
      hasMoved.current = true;
    }
  };

  /* ==================================================
     Swipe End
  ================================================== */

  const handlePointerUp = (event) => {
    if (startX.current === null) {
      setDragging(false);
      return;
    }

    const distance = event.clientX - startX.current;

    if (Math.abs(distance) >= SWIPE_THRESHOLD) {
      move(distance > 0 ? -1 : 1);
    }

    startX.current = null;
    setDragging(false);

    event.currentTarget.releasePointerCapture?.(event.pointerId);
  };

  /* ==================================================
     Swipe Cancel
  ================================================== */

  const handlePointerCancel = (event) => {
    startX.current = null;
    hasMoved.current = false;

    setDragging(false);

    event.currentTarget.releasePointerCapture?.(event.pointerId);
  };

  /* ==================================================
     Prevent Navigation After Swipe
  ================================================== */

  const handleCourseClick = (event) => {
    if (hasMoved.current) {
      event.preventDefault();
      event.stopPropagation();

      hasMoved.current = false;
    }
  };

  /* ==================================================
     Keyboard Navigation
  ================================================== */

  const handleKeyDown = (event) => {
    if (!isInfinite) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
  };

  /* ==================================================
     Active Pagination Index
  ================================================== */

  const activeIndex = isInfinite
    ? (slide - 1 + courses.length) % courses.length
    : 0;

  return (
    <div className="relative">
      {/* ==================================================
          CAROUSEL VIEWPORT
      ================================================== */}

      <div
        className="relative overflow-hidden px-[calc((100%-min(80vw,20rem))/2)] sm:px-[calc((100%-min(31vw,20rem))/2)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onKeyDown={handleKeyDown}
        style={{ touchAction: "pan-y" }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured learning programs"
        tabIndex={0}
      >
        {/* ==================================================
            SLIDE TRACK
        ================================================== */}

        <div
          className={`flex gap-4 ${
            animate
              ? "transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              : ""
          }`}
          style={{
            "--course-card-width": "min(80vw,20rem)",
            transform: isInfinite
              ? `translateX(calc(-${slide} * (var(--course-card-width) + 1rem)))`
              : "translateX(0)",
          }}
        >
          {items.map((course, index) => {
            const originalIndex = isInfinite
              ? (index - 1 + courses.length) % courses.length
              : index;

            const image = images[originalIndex];

            const isActive = isInfinite
              ? index === slide
              : index === 0;

            return (
              <div
                key={`${course.slug}-${index}`}
                className={`group flex w-[min(80vw,20rem)] shrink-0 flex-col overflow-hidden rounded-2xl border bg-surface-light shadow-(--shadow-card) transition-all duration-300 sm:w-[min(31vw,20rem)] ${
                  isActive
                    ? "scale-[1.04] border-primary/55 opacity-100 shadow-(--shadow-elevated)"
                    : "scale-[0.96] border-border opacity-55"
                }`}
              >
                {/* ==================================================
                    COURSE IMAGE
                ================================================== */}

                <div className="relative aspect-video overflow-hidden bg-[radial-gradient(circle_at_80%_20%,rgba(8,145,178,0.25),transparent_35%),linear-gradient(145deg,#0b1830,#071426)]">
                  {/* Fallback */}
                  <div className="absolute inset-0 grid place-items-center p-6 text-center text-white/90">
                    <div>
                      <Icon
                        name={course.icon}
                        className="mx-auto size-8 text-cyan"
                      />

                      <p className="mt-3 text-sm font-semibold">
                        {course.title}
                      </p>
                    </div>
                  </div>

                  {/* Course Image */}
                  {image && (
                    <img
                      src={image}
                      alt={`${course.title} course`}
                      loading="lazy"
                      draggable="false"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                      className="relative size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  )}

                  {/* Course Level */}
                  {course.level && (
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-shell/80 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                      {course.level}
                    </span>
                  )}
                </div>

                {/* ==================================================
                    COURSE CONTENT
                ================================================== */}

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {/* Icon */}
                  <span className="grid size-10 place-items-center rounded-xl bg-accent text-primary">
                    <Icon
                      name={course.icon}
                      className="size-5"
                    />
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {course.shortDescription}
                  </p>

                  {/* Tags */}
                  {course.tags?.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {course.tags.slice(0, 4).map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md bg-surface-soft px-2 py-1 text-xs text-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* ==================================================
                      EXPLORE PROGRAM LINK
                  ================================================== */}

                  <Link
                    to="/courses/$slug"
                    params={{
                      slug: course.slug,
                    }}
                    draggable="false"
                    onClick={handleCourseClick}
                    aria-label={`Explore ${course.title}`}
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    Explore Program

                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==================================================
          CAROUSEL CONTROLS
      ================================================== */}

      {isInfinite && (
        <div className="mt-7 flex items-center justify-center gap-4">
          {/* Previous */}
          <button
            type="button"
            onClick={() => move(-1)}
            className="grid size-11 place-items-center rounded-full border border-border bg-surface-light text-foreground shadow-sm transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-95"
            aria-label="Previous course"
          >
            <ChevronLeft
              className="size-5"
              aria-hidden="true"
            />
          </button>

          {/* Pagination */}
          <div
            className="flex items-center gap-1.5"
            role="tablist"
            aria-label="Course slides"
          >
            {courses.map((course, index) => {
              const active = activeIndex === index;

              return (
                <button
                  key={course.slug}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Go to ${course.title}`}
                  onClick={() => {
                    if (isMoving.current) {
                      return;
                    }

                    isMoving.current = true;

                    setAnimate(true);
                    setSlide(index + 1);

                    window.setTimeout(() => {
                      isMoving.current = false;
                    }, TRANSITION_DURATION);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                    active
                      ? "w-7 bg-primary"
                      : "w-1.5 bg-border hover:bg-primary/50"
                  }`}
                />
              );
            })}
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={() => move(1)}
            className="grid size-11 place-items-center rounded-full border border-border bg-surface-light text-foreground shadow-sm transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-95"
            aria-label="Next course"
          >
            <ChevronRight
              className="size-5"
              aria-hidden="true"
            />
          </button>
        </div>
      )}
    </div>
  );
}