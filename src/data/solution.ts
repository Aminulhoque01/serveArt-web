import {
  Globe,
  Smartphone,
  Tablet,
  LayoutDashboard,
  Palette,
  Gem,
  Megaphone,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface SolutionsItem {
  id: string;
  title: string;
  category: string;
  short: string;
  points: string[];
  icon: LucideIcon;
  from: string;
  to: string;
}

export const solutions: SolutionsItem[] = [
  {
    id: "web",
    title: "Web development",
    category: "Development",
    short: "Fast, secure websites and web apps that turn visitors into customers.",
    points: ["React Next.js and Node.js builds", "Php Larval and angular builds", "E-commerce and booking systems", "Admin dashboards and APIs"],
    icon: Globe,
    from: "#3B82F6",
    to: "#1D4ED8",
  },
  {
    id: "graphic",
    title: "Graphic design",
    category: "Design",
    short: "Posters, social media creatives and print material that say one thing clearly.",
    points: ["Social media post design", "Brochures, flyers, banners", "Print-ready files"],
    icon: Palette,
    from: "#EC4899",
    to: "#EA580C",
  },
  {
    id: "android",
    title: "Android app development",
    category: "Development",
    short: "From first idea to Google Play, built to run smoothly on every phone.",
    points: ["Native and cross-platform apps", "API and backend integration", "Play Store publishing"],
    icon: Smartphone,
    from: "#10B981",
    to: "#047857",
  },
  {
    id: "ios",
    title: "iOS app development",
    category: "Development",
    short: "Polished iPhone and iPad apps, ready for the App Store.",
    points: ["iPhone and iPad support", "Smooth animations", "App Store publishing"],
    icon: Tablet,
    from: "#0EA5E9",
    to: "#1D4ED8",
  },
  {
    id: "uiux",
    title: "UX/UI design",
    category: "Design",
    short: "Clear, modern interfaces designed around how people use them.",
    points: ["Research and wireframes", "High-fidelity Figma screens", "Design systems"],
    icon: LayoutDashboard,
    from: "#14B8A6",
    to: "#0F766E",
  },
  
  {
    id: "brand",
    title: "Brand design",
    category: "Branding",
    short: "Logo, colors and fonts, plus the rules to use them well.",
    points: ["Logo and visual identity", "Brand guideline document", "Stationery and business cards"],
    icon: Gem,
    from: "#A855F7",
    to: "#7E22CE",
  },
  {
    id: "marketing",
    title: "Digital marketing",
    category: "Marketing",
    short: "Social media, ads and content that reach the right customers.",
    points: ["Facebook and Google ads", "SEO and content planning", "Monthly performance reports"],
    icon: Megaphone,
    from: "#F43F5E",
    to: "#BE123C",
  },
  {
    id: "promotion",
    title: "Brand promotion",
    category: "Marketing",
    short: "Launch campaigns and promotions that make people remember you.",
    points: ["Launch campaigns", "Influencer and partner outreach", "Promo video and reels"],
    icon: Rocket,
    from: "#F59E0B",
    to: "#EA580C",
  },
];