
import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

import Brand from "./Brand";
import Button from "./Button";
import { navLinks } from "../data/site";

const desktopLinkClass =
  "group relative inline-flex items-center px-3.5 py-3 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:text-cyan-300 after:absolute after:bottom-1.5 after:left-3.5 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-[width] after:duration-300 after:ease-out hover:after:w-[calc(100%-1.75rem)]";

const desktopActiveLinkClass =
  "group relative inline-flex items-center px-3.5 py-3 text-sm font-bold text-cyan-300 transition-colors duration-300 after:absolute after:bottom-1.5 after:left-3.5 after:h-[2px] after:w-[calc(100%-1.75rem)] after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500";

const mobileLinkClass =
  "group relative flex min-h-12 w-full items-center justify-between px-3 py-3 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-cyan-300 focus-visible:outline-none focus-visible:text-cyan-300 after:absolute after:bottom-1 after:left-3 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-[width] after:duration-300 hover:after:w-12";

const mobileActiveLinkClass =
  "group relative flex min-h-12 w-full items-center justify-between px-3 py-3 text-sm font-semibold text-cyan-300 after:absolute after:bottom-1 after:left-3 after:h-[2px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  // Navbar shadow on scroll.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu after navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock background scrolling and support Escape.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b text-white transition-all duration-300 ${
        scrolled
          ? "border-cyan-400/15 bg-[#020B20] shadow-[0_12px_40px_-20px_rgba(0,0,0,0.8)]"
          : "border-white/[0.08] bg-[#020B20]"
      }`}
    >
      {/* Subtle cyan accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent"
      />

      <nav
        className="relative mx-auto flex min-h-[96px] w-full max-w-[1760px] items-center justify-between gap-4 px-4 sm:px-7 lg:min-h-[104px] lg:px-10 xl:px-12"
        aria-label="Main navigation"
      >
        {/* Brand logo */}
        <div className="flex shrink-0 items-center">
          <Brand onDark size="md" />
        </div>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{
                  exact: link.to === "/",
                }}
                activeProps={{
                  className: desktopActiveLinkClass,
                  "aria-current": "page",
                }}
                className={desktopLinkClass}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Get Started button */}
        <div className="hidden shrink-0 xl:block">
          <Button
            to="/enquiry"
            variant="accent"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-600 to-blue-500 px-6 font-semibold text-white shadow-[0_8px_28px_-10px_rgba(37,99,235,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-500 hover:shadow-[0_12px_32px_-10px_rgba(34,211,238,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Get Started
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.08] hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={
            open ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {open ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Responsive mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={`absolute left-0 right-0 top-full overflow-hidden border-b border-cyan-400/15 bg-[#020B20] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.85)] transition-[max-height,opacity,visibility] duration-300 ease-in-out xl:hidden ${
          open
            ? "visible max-h-[80vh] overflow-y-auto opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-[1760px] px-5 pb-6 pt-5 sm:px-8">
          <div className="mb-4 flex items-center gap-2 px-3">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Learn. Build. Grow.
            </p>
          </div>

          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{
                    exact: link.to === "/",
                  }}
                  activeProps={{
                    className: mobileActiveLinkClass,
                    "aria-current": "page",
                  }}
                  className={mobileLinkClass}
                  onClick={() => setOpen(false)}
                >
                  <span>{link.label}</span>

                  <ChevronRight
                    size={17}
                    className="opacity-60 transition-transform duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Get Started button */}
          <div className="mt-5 border-t border-white/[0.08] pt-5">
            <Button
              to="/enquiry"
              variant="accent"
              className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-blue-400/30 bg-gradient-to-r from-blue-600 to-blue-500 px-5 font-semibold text-white transition-all duration-300 hover:from-blue-500 hover:to-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Get Started
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              Start building your future in technology.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
