import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-varox py-16 md:py-20">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo height={44} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-soft-gray">
              Investment-minded luxury real estate advisory across Dubai and Abu Dhabi.
              Tailored strategy, exceptional service, long-term value.
            </p>
          </div>

          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-bronze mb-5">Navigate</div>
            <ul className="space-y-3 text-sm text-soft-gray">
              <li>
                <Link to="/" className="transition-colors duration-300 hover:text-warm-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="transition-colors duration-300 hover:text-warm-white">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/insights" className="transition-colors duration-300 hover:text-warm-white">
                  Market Insights
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors duration-300 hover:text-warm-white">
                  About Eugenia
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors duration-300 hover:text-warm-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-bronze mb-5">Connect</div>
            <ul className="space-y-3 text-sm text-soft-gray">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-warm-white"
                >
                  <Phone size={14} aria-hidden />
                  <span>{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-warm-white"
                >
                  <Linkedin size={14} aria-hidden />
                  LinkedIn
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <Mail size={14} aria-hidden />
                  Email: {SITE.email}
                </span>
              </li>
              <li>
                <span className="inline-flex items-center gap-2">
                  Other social: {SITE.otherSocial}
                </span>
              </li>
              <li className="text-xs pt-2">Dubai · Abu Dhabi · UAE</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-soft-gray">
          <p>© {new Date().getFullYear()} VAROX Capital. All rights reserved.</p>
          <p>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bronze transition-colors duration-300 hover:underline"
            >
              The Innovations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
