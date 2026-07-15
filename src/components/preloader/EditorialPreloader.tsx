"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/assets";
import { cn } from "@/lib/utils";

/** Five editorial frames — salon imagery */
export const LOADER_IMAGES = [
  "/images/loader/salon-interior.jpg",
  "/images/loader/color-application.jpg",
  "/images/loader/stylist-client.jpg",
  "/images/loader/styling-tools.jpg",
  "/images/loader/scissors-cut.jpg",
];

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const TIMINGS = {
  initial: { intro: 1100, pause: 700, bloom: 750, exit: 320 },
  nav: { intro: 700, pause: 320, bloom: 560, exit: 280 },
} as const;

export type LoaderVariant = keyof typeof TIMINGS;

type Phase = "boot" | "enter" | "bloom" | "exit";

function useTileSize() {
  const [size, setSize] = useState({
    width: 180,
    height: 290,
    gap: 20,
    count: 5,
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      // Phone: 3 larger tiles that fill the width. Tablet+: full 5-up strip.
      const count = w < 640 ? 3 : 5;
      const pad = w < 640 ? 24 : 48;
      const gap = w < 640 ? 10 : w < 1100 ? 16 : 20;
      const available = w - pad * 2 - gap * (count - 1);
      const width = Math.max(
        72,
        Math.min(w < 640 ? 130 : 180, Math.floor(available / count)),
      );
      const height = Math.round(width * 1.62);
      setSize({ width, height, gap, count });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

function imgSrc(path: string) {
  return withBasePath(path);
}

type Props = {
  playId: number;
  variant?: LoaderVariant;
  /** Fired when exit fade begins — page should already be ready underneath */
  onReveal: () => void;
  /** Fired after exit fade completes — safe to unmount loader */
  onFinished: () => void;
  showBrand?: boolean;
};

export function EditorialPreloader({
  playId,
  variant = "initial",
  onReveal,
  onFinished,
  showBrand = true,
}: Props) {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const open = playId > 0;
  const timing = TIMINGS[variant];

  const [phase, setPhase] = useState<Phase>("boot");
  const [containerH, setContainerH] = useState(0);
  const [bloomRect, setBloomRect] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const revealedRef = useRef(false);
  const finishedRef = useRef(false);
  const { width: itemWidth, height: itemHeight, gap, count } = useTileSize();
  const images =
    count === 3
      ? [LOADER_IMAGES[1], LOADER_IMAGES[2], LOADER_IMAGES[3]]
      : LOADER_IMAGES;
  const centerIndex = Math.floor(images.length / 2);

  const totalWidth = itemWidth * images.length + gap * (images.length - 1);
  const gridLeft = (i: number) =>
    `calc(50% - ${totalWidth / 2}px + ${i * (itemWidth + gap)}px)`;
  const gridTop = `calc(50% - ${itemHeight / 2}px)`;
  const restingTopPx = containerH > 0 ? containerH / 2 - itemHeight / 2 : 0;

  const entryY = (i: number) => {
    const travel = Math.min(
      containerH > 0 ? containerH * 0.55 : 280,
      itemHeight + 80,
    );
    if (containerH === 0) return i % 2 === 0 ? travel : -travel;
    return i % 2 === 0
      ? containerH - restingTopPx + 8
      : -(restingTopPx + itemHeight + 8);
  };

  useLayoutEffect(() => {
    if (!open) return;
    const el = containerRef.current;
    if (!el) return;
    setContainerH(el.offsetHeight || window.innerHeight);
  }, [itemWidth, itemHeight, count, open, playId]);

  useEffect(() => {
    if (!open) return;

    revealedRef.current = false;
    finishedRef.current = false;
    setPhase("boot");
    setBloomRect(null);
    document.body.style.overflow = "hidden";

    // Warm cache in the background — do not block animation start
    LOADER_IMAGES.forEach((path) => {
      const img = new window.Image();
      img.src = imgSrc(path);
    });

    let cancelled = false;
    const timers: number[] = [];

    const reveal = () => {
      if (revealedRef.current || cancelled) return;
      revealedRef.current = true;
      document.body.style.overflow = "";
      onReveal();
    };

    const finish = () => {
      if (finishedRef.current || cancelled) return;
      finishedRef.current = true;
      document.body.style.overflow = "";
      onFinished();
    };

    const beginExit = () => {
      if (cancelled) return;
      setPhase("exit");
      // Unlock page immediately as fade starts — no black gap after loader
      reveal();
      timers.push(window.setTimeout(finish, timing.exit));
    };

    const run = () => {
      if (cancelled) return;

      if (reduce) {
        setPhase("enter");
        timers.push(window.setTimeout(beginExit, 400));
        return;
      }

      setPhase("enter");
      timers.push(
        window.setTimeout(() => {
          if (cancelled) return;
          if (centerRef.current && containerRef.current) {
            const tile = centerRef.current.getBoundingClientRect();
            const cont = containerRef.current.getBoundingClientRect();
            setBloomRect({
              top: tile.top - cont.top,
              left: tile.left - cont.left,
              width: tile.width,
              height: tile.height,
            });
          } else {
            const w = Math.min(180, window.innerWidth * 0.18);
            const h = w * 1.6;
            setBloomRect({
              top: window.innerHeight / 2 - h / 2,
              left: window.innerWidth / 2 - w / 2,
              width: w,
              height: h,
            });
          }
          setPhase("bloom");
          timers.push(
            window.setTimeout(beginExit, timing.bloom),
          );
        }, timing.intro + timing.pause),
      );
    };

    // Start on next frame — no preload wait, no artificial delay
    const raf = requestAnimationFrame(() => {
      if (!cancelled) run();
    });

    timers.push(window.setTimeout(beginExit, 5500));

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      timers.forEach((id) => window.clearTimeout(id));
      document.body.style.overflow = "";
    };
  }, [
    open,
    playId,
    reduce,
    timing.intro,
    timing.pause,
    timing.bloom,
    timing.exit,
    onReveal,
    onFinished,
  ]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key={playId}
          ref={containerRef}
          className="fixed inset-0 z-[100] overflow-hidden bg-[#080808] will-change-[opacity]"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "exit" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: timing.exit / 1000, ease: EASE }}
          aria-live="polite"
          aria-busy="true"
          role="status"
        >
          {images.map((path, i) => {
            const src = imgSrc(path);
            const isCenter = i === centerIndex;

            if (
              isCenter &&
              (phase === "bloom" || phase === "exit") &&
              bloomRect
            ) {
              return (
                <motion.div
                  key={`${playId}-bloom`}
                  className="absolute z-[30] overflow-hidden will-change-transform"
                  initial={{
                    top: bloomRect.top,
                    left: bloomRect.left,
                    width: bloomRect.width,
                    height: bloomRect.height,
                    borderRadius: 14,
                  }}
                  animate={{
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 0,
                  }}
                  transition={{ duration: timing.bloom / 1000, ease: EASE }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-deep/20" />
                  {showBrand ? (
                    <motion.div
                      className="absolute inset-x-0 bottom-10 flex flex-col items-center px-6 text-center"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.4, ease: EASE }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`${withBasePath(siteConfig.media.logo)}?v=5`}
                        alt={siteConfig.name}
                        className="h-12 w-auto object-contain md:h-14"
                      />
                      <p className="mt-3 text-[11px] uppercase tracking-[0.35em] text-paper/70">
                        {t.preloader.label}
                      </p>
                    </motion.div>
                  ) : null}
                </motion.div>
              );
            }

            return (
              <motion.div
                key={`${playId}-${path}`}
                ref={isCenter ? centerRef : undefined}
                className={cn(
                  "absolute overflow-hidden rounded-[14px] will-change-transform",
                  isCenter ? "z-20" : "z-10",
                )}
                style={{
                  left: gridLeft(i),
                  top: gridTop,
                  width: itemWidth,
                  height: itemHeight,
                }}
                initial={{ y: entryY(i), opacity: 0 }}
                animate={{
                  y: phase === "boot" ? entryY(i) : 0,
                  opacity:
                    (phase === "bloom" || phase === "exit") && !isCenter
                      ? 0
                      : 1,
                }}
                transition={
                  phase === "boot"
                    ? { duration: 0 }
                    : phase === "bloom" || phase === "exit"
                      ? {
                          duration: (timing.bloom * 0.35) / 1000,
                          ease: EASE,
                        }
                      : { duration: timing.intro / 1000, ease: EASE }
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  draggable={false}
                  className="h-full w-full object-cover"
                />
                {!isCenter ? (
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, transparent 36%, transparent 64%, rgba(0,0,0,0.32) 100%)",
                    }}
                  />
                ) : null}
              </motion.div>
            );
          })}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
