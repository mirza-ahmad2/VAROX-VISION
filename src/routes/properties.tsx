import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-properties.jpg";
import { Hero } from "@/components/Hero";
import { PropertyCard } from "@/components/PropertyCard";
import { ClosingCTA } from "@/components/ClosingCTA";
import { properties } from "@/data/properties";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/properties")({
  head: () =>
    pageSeo({
      title: "Properties — VAROX Capital · Dubai & Abu Dhabi Luxury Portfolio",
      description:
        "A curated portfolio of Dubai and Abu Dhabi luxury properties — branded residences, private-island estates, off-plan waterfront releases, and master-planned communities.",
      path: "/properties",
      keywords:
        "Dubai luxury properties, Abu Dhabi villas, Six Senses Residences, Hudayriat Island, private island mansion Dubai",
    }),
  component: PropertiesPage,
});

function PropertiesPage() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Curated luxury properties across Dubai and Abu Dhabi"
        eyebrow="Curated Portfolio"
        title={
          <>
            The Emirate's <em className="italic text-bronze font-normal">Finest</em> Addresses.
          </>
        }
        subtitle="Branded residences, trophy estates, master-planned communities, and off-plan opportunities — each selected for a defined investment thesis."
        minHeight="min-h-svh"
      />

      <section className="py-24 md:py-32" aria-label="Property listings">
        <div className="container-varox">
          <div className="grid gap-8 md:grid-cols-2">
            {properties.map((p, i) => (
              <PropertyCard key={p.name} property={p} index={i} />
            ))}
          </div>

          <p className="mt-16 text-center text-sm text-soft-gray max-w-xl mx-auto">
            Additional off-market opportunities available under NDA. Enquire for a discreet
            portfolio review.
          </p>
        </div>
      </section>

      <ClosingCTA title="Interested in a specific asset? Let's talk investment." />
    </>
  );
}
