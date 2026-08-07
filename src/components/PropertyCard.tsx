import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

export interface Property {
  image: string;
  name: string;
  location: string;
  type: string;
  highlight: string;
  details?: string;
}

export function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full bg-graphite border border-border transition-all duration-500 hover:border-bronze/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={`${property.name} — ${property.location}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out will-change-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent transition-opacity duration-500 group-hover:from-background/50" />
        <div className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase text-bronze bg-background/60 backdrop-blur-md px-3 py-1.5 border border-bronze/40">
          {property.type}
        </div>
      </div>
      <div className="p-7 md:p-8">
        <div className="flex items-center gap-2 text-xs text-soft-gray">
          <MapPin size={12} className="text-bronze shrink-0" aria-hidden />
          {property.location}
        </div>
        <h3 className="mt-3 font-display text-2xl md:text-[26px] text-warm-white leading-tight">
          {property.name}
        </h3>
        {property.details && (
          <p className="mt-3 text-xs text-soft-gray tracking-wide">{property.details}</p>
        )}
        <p className="mt-5 text-sm text-warm-white/80 leading-relaxed">{property.highlight}</p>
        <Link
          to="/contact"
          className="mt-7 inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-bronze group/link transition-colors duration-300 hover:text-bronze-soft"
        >
          Enquire
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
            aria-hidden
          />
        </Link>
      </div>
    </motion.article>
  );
}
