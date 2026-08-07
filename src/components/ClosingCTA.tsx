import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function ClosingCTA({
  eyebrow = "Begin The Conversation",
  title = "Schedule a private consultation with VAROX Capital.",
  cta = "Schedule a Consultation",
}: {
  eyebrow?: string;
  title?: string;
  cta?: string;
}) {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-40 bg-gradient-to-b from-graphite via-background to-background border-t border-border"
      aria-labelledby="closing-cta-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze to-transparent" />
      <div className="container-varox text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="text-[11px] tracking-[0.4em] uppercase text-bronze mb-6">{eyebrow}</div>
          <h2
            id="closing-cta-heading"
            className="font-display text-3xl md:text-5xl lg:text-6xl text-warm-white text-balance max-w-3xl mx-auto leading-[1.1]"
          >
            {title}
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 px-9 py-4 bg-bronze text-background text-[11px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-bronze-soft hover:shadow-[0_0_28px_rgba(184,129,90,0.28)] active:scale-[0.98] group min-h-[48px]"
          >
            {cta}
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
