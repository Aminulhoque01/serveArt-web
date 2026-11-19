import { Code, Palette, Gem, Megaphone, Rocket, LayoutDashboard, Smartphone, type LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  from: string;
  to: string;
}

export const services: ServiceItem[] = [
  {
    id: "web",
    title: "Web development",
    description: "Fast, secure and scalable websites and web apps, built to turn visitors into customers.",
    points: ["React Next.js and Node.js builds", " php laravel and angular", "E-commerce and booking systems", "Admin dashboards and APIs"],
    icon: Code,
    from: "#1B75BC",
    to: "#0F4C81",
  },
  {
    id: "graphic",
    title: "Graphic design",
    description: "Posters, social media creatives and print material that look sharp and say one clear thing.",
    points: ["Social media post design", "Brochures, flyers and banners", "Packaging and print-ready files"],
    icon: Palette,
    from: "#DB2777",
    to: "#EA580C",
  },
  {
    id: "brand",
    title: "Brand design",
    description: "A complete identity for your business: logo, colors, fonts and rules to use them well.",
    points: ["Logo and visual identity", "Brand guideline document", "Stationery and business cards"],
    icon: Gem,
    from: "#9333EA",
    to: "#C026D3",
  },
  {
    id: "marketing",
    title: "Digital marketing",
    description: "Campaigns that reach the right people on Facebook, Google and beyond, with clear monthly reports.",
    points: ["Facebook and Google ads", "SEO and content planning", "Monthly performance reports"],
    icon: Megaphone,
    from: "#EA6A0A",
    to: "#C2410C",
  },
  {
    id: "promotion",
    title: "Brand promotion",
    description: "Launch and grow awareness with campaigns, influencer partnerships and promotional content.",
    points: ["Launch campaigns", "Influencer and partner outreach", "Promo video and reels"],
    icon: Rocket,
    from: "#DC2626",
    to: "#9F1239",
  },
  {
    id: "uiux",
    title: "UX/UI design",
    description: "Interfaces people understand on the first try, tested and refined before a line of code is written.",
    points: ["User research and wireframes", "High-fidelity Figma designs", "Design systems"],
    icon: LayoutDashboard,
    from: "#0D9488",
    to: "#047857",
  },
  {
    id: "apps",
    title: "App development",
    description: "Android and iOS apps with smooth performance, from first sketch to store release.",
    points: ["Cross-platform mobile apps", "API and backend integration", "Store publishing and updates"],
    icon: Smartphone,
    from: "#4F46E5",
    to: "#312E81",
  },
];