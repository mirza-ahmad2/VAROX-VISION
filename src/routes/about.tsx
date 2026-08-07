import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-about.jpg";
import { Hero } from "@/components/Hero";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Target, Diamond, Compass, Infinity as InfinityIcon } from "lucide-react";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageSeo({
      title: "About Eugenia Nita — Founder, VAROX Capital · 13+ Years Dubai Luxury Real Estate",
      description:
        "Eugenia Nita founded VAROX Capital after 13+ years advising HNI clients on Dubai's luxury market — previously Senior Luxury Property Consultant at Luxvant Properties and Senior Client Advisor at Barnes Dubai.",
      path: "/about",
      keywords:
        "Eugenia Nita, VAROX Capital founder, Luxvant Properties, Barnes Dubai, luxury property consultant Dubai",
    }),
  component: AboutPage,
});

const values = [
  {
    icon: Target,
    title: "Investment-First Thinking",
    body: "Every property is a position. We underwrite thesis, exit, and downside — not just lifestyle appeal.",
  },
  {
    icon: Diamond,
    title: "Exceptional Service",
    body: "Discreet, senior-level engagement. One principal, one strategy, one point of contact — from first call to closing.",
  },
  {
    icon: Compass,
    title: "Tailored Strategy",
    body: "No pipelines. No push. Portfolios are built asset by asset around each client's mandate and horizon.",
  },
  {
    icon: InfinityIcon,
    title: "Long-Term Value",
    body: "We advise for the hold — capital preservation and multi-decade compounding, not transactional churn.",
  },
];

function AboutPage() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Eugenia Nita, Founder and CEO of VAROX Capital"
        eyebrow="Founder & CEO"
        title={<>Eugenia Nita.</>}
        subtitle="Thirteen years advising HNI investors and luxury buyers on the emirate's most sought-after addresses."
        minHeight="min-h-svh"
        overlayIntensity="heavy"
      />

      <section className="py-24 md:py-32" aria-labelledby="about-story-heading">
        <div className="container-varox grid gap-16 lg:grid-cols-[1fr_1.3fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="text-[11px] tracking-[0.4em] uppercase text-bronze mb-6">The Story</div>
            <h2
              id="about-story-heading"
              className="font-display text-3xl md:text-5xl text-warm-white leading-[1.1] text-balance"
            >
              An advisor built for the way capital actually thinks.
            </h2>
            <div className="mt-8 h-px w-16 bg-bronze" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="space-y-6 text-base md:text-lg text-soft-gray leading-relaxed"
          >
            <p>
              Eugenia Nita founded VAROX Capital to bring an investment-first philosophy to Dubai
              and Abu Dhabi's luxury real estate market — a market she's spent the last
              thirteen-plus years navigating from the inside.
            </p>
            <p>
              Previously{" "}
              <span className="text-warm-white">
                Senior Luxury Property Consultant at Luxvant Properties
              </span>
              , and before that{" "}
              <span className="text-warm-white">Senior Client Advisor at Barnes Dubai</span>,
              Eugenia has advised HNI clients across trophy residences, off-plan waterfront
              releases, land acquisitions, and commercial holdings.
            </p>
            <p>
              VAROX Capital was built on a specific conviction: that serious investors deserve an
              advisor who explains the <em className="text-bronze not-italic">why</em> behind every
              asset class — not a broker chasing the next listing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-graphite" aria-labelledby="principles-heading">
        <div className="container-varox">
          <div className="max-w-2xl mb-16">
            <div className="text-[11px] tracking-[0.4em] uppercase text-bronze mb-5">
              The Principles
            </div>
            <h2
              id="principles-heading"
              className="font-display text-3xl md:text-5xl text-warm-white leading-[1.1] text-balance"
            >
              Four commitments that shape every mandate.
            </h2>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="bg-graphite p-8 md:p-10 transition-colors duration-500 hover:bg-[#252525]"
              >
                <v.icon size={24} className="text-bronze" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-6 font-display text-xl text-warm-white">{v.title}</h3>
                <p className="mt-3 text-sm text-soft-gray leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA title="Speak with Eugenia directly." cta="Schedule a Consultation" />
    </>
  );
}
