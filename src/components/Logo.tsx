import { Link } from "@tanstack/react-router";

interface LogoProps {
  className?: string;
  /** Height of the logo image in pixels (CSS). */
  height?: number;
  asLink?: boolean;
}

export function Logo({ className = "", height = 40, asLink = true }: LogoProps) {
  const img = (
    <img
      src="/varox-logo.png"
      alt="VAROX Capital"
      width={Math.round(height * 1.82)}
      height={height}
      className={`h-auto w-auto object-contain transition-opacity duration-300 group-hover:opacity-90 ${className}`}
      style={{ height }}
      decoding="async"
    />
  );

  if (!asLink) return img;

  return (
    <Link
      to="/"
      className="group inline-flex items-center focus-visible:outline-none"
      aria-label="VAROX Capital — Home"
    >
      {img}
    </Link>
  );
}
