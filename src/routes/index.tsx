import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Landmark, LineChart, ShieldCheck } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import { Hero } from "@/components/Hero";
import { StatCallout } from "@/components/StatCallout";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { ClosingCTA } from "@/components/ClosingCTA";
import { properties } from "@/data/properties";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageSeo({
      title: "VAROX Capital — Investment-Minded Luxury Real Estate in Dubai & Abu Dhabi",
      description:
        "Tailored luxury real estate investment advisory across Dubai and Abu Dhabi. Trophy assets, off-plan opportunities, and portfolio strategy from Eugenia Nita.",
      path: "/",
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero
        image={heroHome}
        imageAlt="Luxury Dubai skyline at dusk — VAROX Capital investment advisory"
        eyebrow="VAROX Capital · Dubai & Abu Dhabi"
        title={
          <>
            Investment-Minded{" "}
            <em className="italic text-bronze font-normal">Luxury</em> Real Estate.
          </>
        }
        subtitle="Tailored investment opportunities and exceptional service across Dubai and Abu Dhabi's finest properties — advised by Eugenia Nita, 13+ years in the emirate's top-end market."
        cta={
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-9 py-4 bg-bronze text-background text-[11px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-bronze-soft hover:shadow-[0_0_28px_rgba(184,129,90,0.28)] active:scale-[0.98]"
          >
            Schedule a Consultation
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden
            />
          </Link>
        }
      />

      <StatCallout
        eyebrow="Market Insight · 2025"
        headline="Plots: The Standout Asset Class of 2025."
        body="Land in prime Dubai corridors is delivering outsized capital growth as branded density accelerates around it — a thesis we're positioning select clients around this cycle."
      />

      <FeaturedCarousel properties={properties} />

      <WhyVarox />

      <ClosingCTA
        eyebrow="Begin The Conversation"
        title="Schedule a private consultation with VAROX Capital."
        cta="Schedule a Consultation"
      />
    </>
  );
}

function WhyVarox() {
  const pillars = [
    {
      icon: LineChart,
      title: "Investment-First Thinking",
      body: "Every asset is underwritten as a position — yield, exit, and thesis, not lifestyle language.",
    },
    {
      icon: Compass,
      title: "13+ Years, Two Emirates",
      body: "Deep operator relationships across Dubai and Abu Dhabi's developer, off-plan, and off-market channels.",
    },
    {
      icon: Landmark,
      title: "Trophy & Off-Market Access",
      body: "Prime land, private-island estates, and quiet listings that never reach mainstream portals.",
    },
    {
      icon: ShieldCheck,
      title: "Long-Term Value",
      body: "We advise for the hold — capital preservation and generational compounding, not transactional velocity.",
    },
  ];

  return (
    <section className="py-28 md:py-40 bg-graphite" aria-labelledby="why-varox-heading">
      <div className="container-varox">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] items-start">
          <div>
            <div className="text-[11px] tracking-[0.4em] uppercase text-bronze mb-6">Why VAROX</div>
            <motion.h2
              id="why-varox-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="font-display text-3xl md:text-5xl text-warm-white leading-[1.1] text-balance"
            >
              A capital-markets mind, applied to the emirate's finest addresses.
            </motion.h2>
            <div className="mt-8 h-px w-16 bg-bronze" />
            <p className="mt-8 text-soft-gray leading-relaxed max-w-md">
              Founded by Eugenia Nita — formerly Senior Luxury Property Consultant at Luxvant
              Properties and Senior Client Advisor at Barnes Dubai — VAROX Capital is an
              investment-first advisory for HNI investors and discerning buyers.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-bronze transition-colors duration-300 hover:text-bronze-soft"
            >
              About Eugenia <ArrowUpRight size={14} aria-hidden />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="bg-graphite p-8 md:p-10 transition-colors duration-500 hover:bg-[#252525]"
              >
                <p.icon size={22} className="text-bronze" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-5 font-display text-xl text-warm-white">{p.title}</h3>
                <p className="mt-3 text-sm text-soft-gray leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
