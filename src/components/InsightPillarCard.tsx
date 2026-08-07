import { motion } from "framer-motion";

interface InsightPillarProps {
  index: number;
  image: string;
  imageAlt?: string;
  eyebrow: string;
  title: string;
  body: string;
  stat?: { value: string; label: string };
  reverse?: boolean;
}

export function InsightPillarCard({
  index,
  image,
  imageAlt,
  eyebrow,
  title,
  body,
  stat,
  reverse,
}: InsightPillarProps) {
  return (
    <section
      className={`py-24 md:py-32 ${index % 2 === 1 ? "bg-graphite" : "bg-background"}`}
      aria-labelledby={`pillar-${index}-title`}
    >
      <div className="container-varox">
        <div
          className={`grid gap-12 lg:gap-20 lg:grid-cols-2 items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden group"
          >
            <img
              src={image}
              alt={imageAlt || title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out will-change-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-[10px] tracking-[0.4em] uppercase text-bronze">
              0{index}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.12 }}
          >
            <div className="text-[11px] tracking-[0.4em] uppercase text-bronze">{eyebrow}</div>
            <h2
              id={`pillar-${index}-title`}
              className="mt-5 font-display text-3xl md:text-5xl text-warm-white leading-[1.1] text-balance"
            >
              {title}
            </h2>
            <div className="mt-6 h-px w-16 bg-bronze" />
            <p className="mt-6 text-base md:text-lg text-soft-gray leading-relaxed max-w-lg">
              {body}
            </p>
            {stat && (
              <div className="mt-10 flex items-baseline gap-4">
                <div className="font-display text-5xl text-bronze italic">{stat.value}</div>
                <div className="text-xs text-soft-gray tracking-[0.2em] uppercase max-w-[180px]">
                  {stat.label}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
