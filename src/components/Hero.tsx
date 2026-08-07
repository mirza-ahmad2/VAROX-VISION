import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroProps {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  cta?: ReactNode;
  overlayIntensity?: "light" | "medium" | "heavy";
  minHeight?: string;
}

export function Hero({
  image,
  imageAlt = "VAROX Capital luxury real estate",
  eyebrow,
  title,
  subtitle,
  cta,
  overlayIntensity = "medium",
  minHeight = "min-h-svh",
}: HeroProps) {
  const overlay = {
    light: "bg-gradient-to-b from-background/50 via-background/30 to-background/80",
    medium: "bg-gradient-to-b from-background/70 via-background/50 to-background",
    heavy: "bg-gradient-to-b from-background/85 via-background/70 to-background",
  }[overlayIntensity];

  return (
    <section
      className={`relative w-full ${minHeight} flex items-center justify-center overflow-hidden`}
    >
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className={`absolute inset-0 ${overlay}`} />
      </motion.div>

      <div className="container-varox relative z-10 text-center py-28 md:py-32 px-1">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-[11px] tracking-[0.4em] uppercase text-bronze mb-6"
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-warm-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance max-w-4xl mx-auto"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-soft-gray leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-10 flex justify-center"
          >
            {cta}
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden
      >
        <div className="text-[9px] tracking-[0.4em] text-soft-gray uppercase">Scroll</div>
        <div className="w-px h-10 bg-gradient-to-b from-bronze to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
