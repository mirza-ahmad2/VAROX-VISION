import { motion } from "framer-motion";

interface StatCalloutProps {
  eyebrow?: string;
  headline: string;
  body?: string;
}

export function StatCallout({ eyebrow, headline, body }: StatCalloutProps) {
  return (
    <section className="relative py-32 md:py-40 bg-graphite overflow-hidden">
      <div className="container-varox text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-[11px] tracking-[0.4em] uppercase text-soft-gray mb-8"
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl md:text-5xl lg:text-6xl text-bronze italic leading-[1.1] max-w-4xl mx-auto text-balance"
        >
          {headline}
        </motion.h2>
        {body && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 max-w-xl mx-auto text-sm md:text-base text-soft-gray leading-relaxed"
          >
            {body}
          </motion.p>
        )}
      </div>
    </section>
  );
}
