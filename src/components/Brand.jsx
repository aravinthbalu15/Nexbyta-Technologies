
import { Link } from "@tanstack/react-router";
import mark from "../assets/nexbyta2.png";

export default function Brand({
  size = "md",
  showDescriptor = true,
  onDark = false,
}) {
  const compact = size === "sm";

  return (
    <Link
      to="/"
      aria-label="Nexbyta Technologies home"
      className={`group inline-flex shrink-0 items-center rounded-xl transition-opacity duration-300 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
        onDark ? "text-white" : "text-slate-900"
      }`}
    >
      <span
        className={`relative flex shrink-0 items-center justify-start ${
          compact
            ? "h-[60px] w-[150px]"
            : "h-[82px] w-[220px] sm:h-[88px] sm:w-[240px]"
        }`}
      >
        <img
          src={mark}
          alt="Nexbyta Technologies"
          className="block h-full w-full object-contain object-left transition-transform duration-300 ease-out group-hover:scale-[1.025]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </span>
    </Link>
  );
}
