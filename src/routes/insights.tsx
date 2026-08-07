import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-insights.jpg";
import villas from "@/assets/insight-villas.jpg";
import commercial from "@/assets/insight-commercial.jpg";
import plots from "@/assets/insight-plots.jpg";
import abudhabi from "@/assets/insight-abudhabi.jpg";
import { Hero } from "@/components/Hero";
import { InsightPillarCard } from "@/components/InsightPillarCard";
import { StatCallout } from "@/components/StatCallout";
import { ClosingCTA } from "@/components/ClosingCTA";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/insights")({
  head: () =>
    pageSeo({
      title: "Market Insights — Dubai & Abu Dhabi Real Estate Investment Thesis",
      description:
        "Data-backed views on Dubai and Abu Dhabi real estate: villas & townhouses, commercial, land plots as an outsized capital-growth play, and Abu Dhabi's off-plan opportunity.",
      path: "/insights",
      keywords:
        "Dubai market insights, Abu Dhabi off-plan, land plots Dubai 2025, commercial real estate DIFC, villa yields Dubai",
    }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Dubai and Abu Dhabi skyline — market insights for luxury real estate investors"
        eyebrow="Market Insights"
        title={
          <>
            The <em className="italic text-bronze font-normal">Why</em> Behind Every Asset Class.
          </>
        }
        subtitle="Serious investors don't buy listings — they buy positions. Our views on where Dubai and Abu Dhabi's capital is actually moving this cycle."
        minHeight="min-h-svh"
      />

      <InsightPillarCard
        index={1}
        image={villas}
        imageAlt="Prime Dubai villa community representing yield and capital growth"
        eyebrow="Pillar One"
        title="Villas & Townhouses: Yield Meets Capital Growth."
        body="Prime-community villas in Dubai continue to combine strong rental yields with sustained capital appreciation as HNI demand outstrips supply. We advise on communities where both engines are still in motion — not those already fully priced in."
        stat={{ value: "7-9%", label: "Achievable Gross Rental Yield · Prime Villa Communities" }}
      />

      <InsightPillarCard
        index={2}
        image={commercial}
        imageAlt="Grade-A commercial real estate corridor in Dubai"
        eyebrow="Pillar Two"
        title="Commercial Real Estate: The Booming Asset Class."
        body="Occupier demand across DIFC, Business Bay, and emerging Grade-A corridors has re-rated Dubai commercial. For portfolios seeking institutional-style income, this is currently the emirate's most under-owned opportunity by private investors."
        reverse
      />

      <StatCallout
        eyebrow="Signal"
        headline="Plots — The Standout Asset Class of 2025."
        body="Finite supply, minimal carrying cost, and outsized upside as branded density accelerates around them."
      />

      <InsightPillarCard
        index={3}
        image={plots}
        imageAlt="Prime land plot opportunity in Dubai growth corridors"
        eyebrow="Pillar Three"
        title="Land Plots: Outsized Capital Growth."
        body="Well-selected land in prime Dubai corridors continues to deliver capital growth well above stabilised residential assets — a position typically reserved for developers, now increasingly accessible to informed private capital."
      />

      <InsightPillarCard
        index={4}
        image={abudhabi}
        imageAlt="Abu Dhabi waterfront off-plan development opportunity"
        eyebrow="Pillar Four"
        title="Abu Dhabi Off-Plan: The Early-Buyer Window."
        body="Abu Dhabi's off-plan market is entering a genuine emergence phase — Hudayriat, Saadiyat, and Yas releases are pricing at a meaningful discount to comparable Dubai communities. First-mover pricing has a limited runway."
        stat={{ value: "1st", label: "Cycle · Abu Dhabi Off-Plan Emergence" }}
        reverse
      />

      <ClosingCTA
        eyebrow="Get The Full Thesis"
        title="Position your capital around the moves that actually matter."
      />
    </>
  );
}
