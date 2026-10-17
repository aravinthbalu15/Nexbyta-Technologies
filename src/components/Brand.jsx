import { Link } from "@tanstack/react-router";
import mark from "../assets/nexbyta-mark.png";

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
      className={`group inline-flex shrink-0 items-center gap-3 rounded-lg
        transition-opacity duration-300 hover:opacity-90
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-cyan-400
        ${onDark ? "text-white" : "text-slate-900"}`}
    >
      <img
        src={mark}
        alt="Nexbyta Technologies logo"
        width={816}
        height={816}
        className={`shrink-0 object-contain transition-transform
          duration-300 group-hover:scale-105
          ${compact ? "h-9 w-9" : "h-11 w-11"}`}
      />

      <span className="flex flex-col gap-1 leading-none">
        <span
          className={`font-orbitron font-extrabold tracking-[0.08em]
            ${compact ? "text-sm" : "text-[17px]"}`}
        >
          NEXBYTA
        </span>

        {showDescriptor && (
          <span
            className={`text-[9px] font-semibold uppercase
              tracking-[0.24em]
              ${onDark ? "text-cyan-400" : "text-slate-500"}`}
          >
            Technologies
          </span>
        )}
      </span>
    </Link>
  );
}
