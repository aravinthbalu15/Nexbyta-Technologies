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
    <div className="relative mx-auto w-full">
      {/* Carousel viewport */}
      <div
        className="relative overflow-hidden px-[calc((100%-min(78vw,18.5rem))/2)] sm:px-[calc((100%-min(31vw,18.5rem))/2)]"
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
        {/* Slide track */}
        <div
          className={`flex items-stretch gap-4 pb-3 ${
            animate
              ? "transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              : ""
          }`}
          style={{
            "--course-card-width": "min(78vw,18.5rem)",
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
            const isActive = isInfinite ? index === slide : index === 0;

            return (
              <article
                key={`${course.slug}-${index}`}
                className={`group relative flex w-[min(78vw,18.5rem)] shrink-0 flex-col overflow-hidden rounded-[1.4rem] border bg-white transition-all duration-300 sm:w-[min(31vw,18.5rem)] ${
                  isActive
                    ? "z-10 scale-100 border-blue-200 shadow-[0_18px_48px_rgba(15,23,42,0.12)]"
                    : "scale-[0.97] border-slate-200/90 shadow-[0_5px_20px_rgba(15,23,42,0.045)]"
                }`}
              >
                {/* Compact visual header */}
                <div className="relative h-32 shrink-0 overflow-hidden bg-slate-950 sm:h-36">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(34,211,238,0.22),transparent_35%),linear-gradient(135deg,#0f172a,#102a43_60%,#082f49)]" />
                  <div className="pointer-events-none absolute -right-8 -top-10 size-32 rounded-full border border-cyan-300/10" />
                  <div className="pointer-events-none absolute -right-2 -top-4 size-20 rounded-full border border-cyan-300/10" />

                  {/* Fallback stays visible if there is no image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-4 text-center text-white">
                    <span className="grid size-12 place-items-center rounded-2xl border border-cyan-300/20 bg-white/[0.07] text-cyan-300 shadow-[0_8px_24px_rgba(0,0,0,0.14)]">
                      <Icon name={course.icon} className="size-6" />
                    </span>
                    <p className="mt-2.5 max-w-full text-sm font-semibold tracking-wide">
                      {course.title}
                    </p>
                  </div>

                  {/* Image contained in a compact thumbnail */}
                  {image && (
                    <img
                      src={image}
                      alt={`${course.title} course`}
                      loading="lazy"
                      draggable="false"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                      className="absolute inset-0 size-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}

                  {course.level && (
                    <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-slate-950/65 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white/95 backdrop-blur-md">
                      {course.level}
                    </span>
                  )}

                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
                </div>

                {/* Course details */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-base font-bold leading-snug tracking-tight text-slate-900 sm:text-lg">
                        {course.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 min-h-[4.25rem] text-sm leading-[1.55rem] text-slate-600">
                        {course.shortDescription}
                      </p>
                    </div>
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-50 group-hover:text-cyan-700">
                      <Icon name={course.icon} className="size-[18px]" />
                    </span>
                  </div>

                  {course.tags?.length > 0 && (
                    <ul className="mt-4 flex min-h-7 flex-wrap gap-1.5">
                      {course.tags.slice(0, 4).map((tag) => (
                        <li
                          key={tag}
                          className="rounded-lg border border-slate-200/80 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-600"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-5">
                    <Link
                      to="/courses/$slug"
                      params={{ slug: course.slug }}
                      draggable="false"
                      onClick={handleCourseClick}
                      aria-label={`Explore ${course.title}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                    >
                      Explore Program
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Carousel controls */}
      {isInfinite && (
        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => move(-1)}
            className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 active:scale-95"
            aria-label="Previous course"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>

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
                    if (isMoving.current) return;

                    isMoving.current = true;
                    setAnimate(true);
                    setSlide(index + 1);

                    window.setTimeout(() => {
                      isMoving.current = false;
                    }, TRANSITION_DURATION);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${
                    active
                      ? "w-7 bg-blue-600"
                      : "w-1.5 bg-slate-300 hover:bg-blue-400"
                  }`}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => move(1)}
            className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 active:scale-95"
            aria-label="Next course"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
