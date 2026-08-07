import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PropertyCard, type Property } from "./PropertyCard";

export function FeaturedCarousel({ properties }: { properties: Property[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const scroll = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.5;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  return (
    <section className="py-24 md:py-32" aria-labelledby="featured-heading">
      <div className="container-varox">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div className="min-w-0">
            <div className="text-[11px] tracking-[0.4em] uppercase text-bronze mb-4">
              Featured Portfolio
            </div>
            <motion.h2
              id="featured-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="font-display text-3xl md:text-5xl text-warm-white text-balance max-w-2xl leading-[1.1]"
            >
              Current opportunities across Dubai and Abu Dhabi.
            </motion.h2>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="p-3 border border-border text-warm-white transition-all duration-300 hover:border-bronze hover:bg-bronze/10 active:scale-95 min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
              aria-label="Previous properties"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="p-3 border border-border text-warm-white transition-all duration-300 hover:border-bronze hover:bg-bronze/10 active:scale-95 min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
              aria-label="Next properties"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          onScroll={onScroll}
          className="featured-carousel flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          role="region"
          aria-label="Featured properties carousel"
          tabIndex={0}
        >
          {properties.map((p, i) => (
            <div key={p.name} data-card className="featured-carousel-card snap-start">
              <PropertyCard property={p} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div
            className="h-px w-full bg-border relative overflow-hidden"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
            aria-label="Carousel progress"
          >
            <div
              className="absolute inset-y-0 left-0 bg-bronze transition-[width] duration-300 ease-out"
              style={{ width: `${Math.max(12, progress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
