export interface Client {
  name: string;
  color: string; // monogram color, used when there is no logo image
  logo?: string; // e.g. "/clients/nova-foods.png"
}

export const clients: Client[] = [
  { name: "Nova Foods", color: "#EA580C" },
  { name: "Terra Tiles", color: "#B45309" },
  { name: "Urban Cart", color: "#1B75BC" },
  { name: "Greenleaf Pharma", color: "#059669" },
  { name: "Skyline Realty", color: "#4F46E5" },
  { name: "Lotus Fashion", color: "#DB2777" },
  { name: "Pixel Hub", color: "#7C3AED" },
  { name: "Blue Ocean Travels", color: "#0284C7" },
  { name: "Spice Route", color: "#DC2626" },
  { name: "Alpha Learning", color: "#0D9488" },

  { name: "Crown Furniture", color: "#92400E" },
  { name: "Swift Logistics", color: "#2563EB" },
  { name: "Orbit Tech", color: "#9333EA" },
  { name: "Sunrise Bakery", color: "#F59E0B" },
  { name: "Delta Motors", color: "#475569" },
  { name: "Pearl Jewels", color: "#C026D3" },
  { name: "Zenith Academy", color: "#0F766E" },
  { name: "Kite Coffee", color: "#78350F" },
  { name: "Harbor Hotels", color: "#1D4ED8" },
  { name: "Maple Kids", color: "#EF4444" },

  { name: "Fresh Basket", color: "#16A34A" },
  { name: "Iron Gym", color: "#334155" },
  { name: "Quill Books", color: "#6D28D9" },
  { name: "Vista Optics", color: "#0891B2" },
  { name: "Ember Grill", color: "#C2410C" },
  { name: "Cloud Nine Spa", color: "#DB2777" },
  { name: "Rapid Print", color: "#2563EB" },
  { name: "Silverline Studio", color: "#64748B" },
  { name: "Wave Fitness", color: "#0EA5E9" },
  { name: "Atlas Consulting", color: "#059669" },
];

// Replace with your real numbers.
export const stats = [
  { value: 100, label: "Happy clients" },
  { value: 250, label: "Projects delivered" },
  { value: 40, label: "Corporate companies" },
  { value: 5, label: "Years of experience" },
];