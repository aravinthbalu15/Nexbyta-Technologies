import { useEffect, useState } from "react";
import { ImageOff } from "lucide-react";

export default function MediaPlaceholder({
  src,
  alt = "Nexbyta Technologies",
  className = "",
  loading = "lazy",
  objectFit = "cover",
}) {
  const images = [
    "/images/hero/one.png",
    "/images/hero/two.png",
    "/images/hero/three.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  /*
   * Change image every 4 seconds.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % images.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /*
   * Reset fallback when image changes.
   */
  useEffect(() => {
    setFailed(false);
  }, [currentIndex]);

  return (
    <div
      className={`
        group
        relative
        isolate
        overflow-hidden
        bg-surface-soft
        ${className}
      `}
    >
      {/* ================================
          IMAGE SLIDER
          ================================ */}

      {!failed &&
        images.map((image, index) => {
          const isActive = index === currentIndex;
          const isPrevious =
            index ===
            (currentIndex - 1 + images.length) % images.length;

          return (
            <img
              key={image}
              src={image}
              alt={isActive ? alt : ""}
              loading={index === 0 ? loading : "lazy"}
              onError={() => {
                if (isActive) {
                  setFailed(true);
                }
              }}
              className={`
                absolute
                inset-0
                z-10
                size-full
                object-${objectFit}

                transform-gpu
                will-change-transform,opacity

                transition-[transform,opacity]
                duration-[900ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]

                ${
                  isActive
                    ? "translate-x-0 scale-100 opacity-100"
                    : isPrevious
                      ? "-translate-x-full scale-[1.015] opacity-0"
                      : "translate-x-full scale-100 opacity-0"
                }
              `}
            />
          );
        })}

      {/* ================================
          FALLBACK
          ================================ */}

      {failed && (
        <div
          className="
            absolute
            inset-0
            z-20
            grid
            place-items-center
            bg-surface-soft
            p-6
            text-center
            text-muted-foreground
          "
        >
          <span className="flex flex-col items-center gap-3">
            <ImageOff
              className="size-5 text-primary/60"
              aria-hidden="true"
            />

            <span
              className="
                text-[0.65rem]
                font-semibold
                uppercase
                tracking-[0.16em]
              "
            >
              Project preview coming soon
            </span>
          </span>
        </div>
      )}

      {/* ================================
          BOTTOM GRADIENT
          ================================ */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-28
          bg-gradient-to-t
          from-black/30
          via-black/5
          to-transparent
        "
        aria-hidden="true"
      />

      {/* ================================
          SLIDE INDICATORS
          ================================ */}

      {!failed && images.length > 1 && (
        <div
          className="
            absolute
            bottom-5
            left-1/2
            z-30
            flex
            -translate-x-1/2
            items-center
            gap-1.5
            rounded-full
            border
            border-white/10
            bg-black/20
            px-3
            py-2
            shadow-lg
            backdrop-blur-md
          "
          aria-hidden="true"
        >
          {images.map((_, index) => (
            <span
              key={index}
              className={`
                block
                h-1.5
                rounded-full

                transition-[width,background-color,opacity]
                duration-500
                ease-out

                ${
                  index === currentIndex
                    ? "w-7 bg-white opacity-100"
                    : "w-1.5 bg-white/40 opacity-70"
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
}