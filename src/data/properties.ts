import propSixSenses from "@/assets/property-sixsenses.jpg";
import propIsland from "@/assets/property-island.jpg";
import propHudayriat from "@/assets/property-hudayriat.jpg";
import propExpo from "@/assets/property-expo.jpg";
import type { Property } from "@/components/PropertyCard";

export const properties: Property[] = [
  {
    image: propSixSenses,
    name: "Six Senses Residences Dubai Marina",
    location: "Dubai Marina",
    type: "Branded Residence",
    details: "3BR + Maid's · 3,406 sq.ft. · Golf Course Views",
    highlight:
      "Ultra-branded wellness residence in the world's tallest residential tower — a rare position for capital appreciation and long-term rental performance.",
  },
  {
    image: propIsland,
    name: "Private Island Mansion",
    location: "Dubai, Off-Market",
    type: "Trophy Asset",
    details: "20,000+ sq.ft. built · Private Beach · Dock · Helipad",
    highlight:
      "A $24.5M sovereign-scale estate. Truly finite supply, negligible comparables, and generational hold potential for HNI portfolios.",
  },
  {
    image: propHudayriat,
    name: "Al Naseem, Hudayriat Island",
    location: "Abu Dhabi",
    type: "Off-Plan · Waterfront",
    details: "Beachfront villas · Master-planned community",
    highlight:
      "Abu Dhabi's most anticipated off-plan release. Early-buyer pricing on the emirate's next flagship waterfront district.",
  },
  {
    image: propExpo,
    name: "Expo City Dubai",
    location: "Dubai South",
    type: "Master Community",
    details: "Mixed-use · Sustainability-led · Long-term hold",
    highlight:
      "A government-backed master community with infrastructure-grade tailwinds — the closest thing Dubai has to a captive growth corridor.",
  },
];
