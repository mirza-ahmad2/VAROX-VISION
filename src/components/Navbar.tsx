import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/insights", label: "Market Insights" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "backdrop-blur-xl bg-background/80 border-b border-border shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-bronze focus:px-4 focus:py-2 focus:text-background focus:text-xs focus:tracking-widest focus:uppercase"
      >
        Skip to content
      </a>
      <div className="container-varox flex items-center justify-between py-4 md:py-5">
        <Logo height={42} />

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-[12px] tracking-[0.18em] uppercase text-soft-gray transition-colors duration-300 hover:text-warm-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-bronze after:transition-all after:duration-300 hover:after:w-full"
              activeProps={{
                className:
                  "relative text-[12px] tracking-[0.18em] uppercase text-warm-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-bronze",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase border border-bronze text-warm-white transition-all duration-300 hover:bg-bronze hover:text-background hover:shadow-[0_0_20px_rgba(184,129,90,0.2)]"
        >
          Schedule Consultation
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-warm-white p-2 -mr-2 transition-transform duration-300 active:scale-95"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-400 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <nav className="container-varox py-8 flex flex-col gap-5" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-[0.2em] uppercase text-soft-gray transition-colors duration-300 hover:text-warm-white"
              activeProps={{ className: "text-sm tracking-[0.2em] uppercase text-bronze" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 inline-flex items-center justify-center px-5 py-3.5 text-[11px] tracking-[0.25em] uppercase border border-bronze text-warm-white transition-colors duration-300 hover:bg-bronze hover:text-background min-h-[44px]"
          >
            Schedule Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
