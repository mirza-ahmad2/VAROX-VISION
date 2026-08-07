import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero-contact.jpg";
import { Hero } from "@/components/Hero";
import { ConsultationEnquiryForm } from "@/components/ConsultationEnquiryForm";
import { pageSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageSeo({
      title: "Contact — VAROX Capital · Schedule a Luxury Real Estate Consultation",
      description:
        "Schedule a private consultation with VAROX Capital. Discreet investment advisory for Dubai and Abu Dhabi's luxury real estate market.",
      path: "/contact",
      keywords:
        "contact VAROX Capital, schedule consultation Dubai, luxury real estate advisor UAE, Eugenia Nita contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Private consultation for luxury real estate investment in Dubai and Abu Dhabi"
        eyebrow="Private Consultation"
        title={
          <>
            Let's Talk <em className="italic text-bronze font-normal">Investment.</em>
          </>
        }
        subtitle="Every conversation begins with your objectives, horizon, and mandate — not a listing."
        minHeight="min-h-svh"
        overlayIntensity="heavy"
      />

      <section className="py-20 md:py-28" aria-labelledby="contact-heading">
        <div className="container-varox grid gap-14 lg:grid-cols-[1fr_1.4fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:sticky lg:top-32"
          >
            <div className="text-[11px] tracking-[0.4em] uppercase text-bronze mb-6">
              Direct Contact
            </div>
            <h2
              id="contact-heading"
              className="font-display text-3xl md:text-4xl text-warm-white leading-[1.15]"
            >
              Discretion is the default.
            </h2>
            <p className="mt-6 text-soft-gray leading-relaxed max-w-md">
              Every enquiry is handled personally by Eugenia's team. Expect a response within 24
              hours, and a private consultation scheduled around your calendar.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={SITE.phoneHref}
                className="flex items-start gap-4 text-warm-white transition-colors duration-300 hover:text-bronze"
              >
                <Phone size={18} className="text-bronze mt-0.5 shrink-0" aria-hidden />
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-soft-gray">Phone</div>
                  <div className="mt-1 text-sm">{SITE.phone}</div>
                </div>
              </a>
              <div className="flex items-start gap-4 text-warm-white">
                <Mail size={18} className="text-bronze mt-0.5 shrink-0" aria-hidden />
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-soft-gray">Email</div>
                  <div className="mt-1 text-sm">{SITE.email}</div>
                </div>
              </div>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-warm-white transition-colors duration-300 hover:text-bronze"
              >
                <Linkedin size={18} className="text-bronze mt-0.5 shrink-0" aria-hidden />
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-soft-gray">
                    LinkedIn
                  </div>
                  <div className="mt-1 text-sm">VAROX Capital</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-bronze mt-0.5 shrink-0" aria-hidden />
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-soft-gray">
                    Based In
                  </div>
                  <div className="mt-1 text-sm text-warm-white">Dubai · Abu Dhabi · UAE</div>
                </div>
              </div>
              <div className="flex items-start gap-4 text-warm-white">
                <div className="w-[18px] shrink-0" aria-hidden />
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-soft-gray">
                    Other Social
                  </div>
                  <div className="mt-1 text-sm">{SITE.otherSocial}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <ConsultationEnquiryForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
