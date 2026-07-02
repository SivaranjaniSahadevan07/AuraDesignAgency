export interface ServiceItem {
  id: string;
  iconName: "Layout" | "Code" | "Layers" | "TrendingUp";
  title: string;
  description: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "ui-ux",
    iconName: "Layout",
    title: "UI/UX Design",
    description: "Creating highly intuitive, visually stunning, and user-centric digital interfaces that drive engagement and retention.",
    features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
  },
  {
    id: "web-dev",
    iconName: "Code",
    title: "Web Development",
    description: "Building production-grade, fast, scalable, and responsive web applications using the modern cutting-edge tech stack.",
    features: ["Next.js & React SPA/SSR", "Tailwind CSS Integration", "Headless CMS Solutions", "Performance Optimization"],
  },
  {
    id: "brand-identity",
    iconName: "Layers",
    title: "Brand Identity",
    description: "Crafting memorable and cohesive brand experiences including logo design, color typography systems, and brand guidelines.",
    features: ["Logo Design", "Brand Strategy", "Typography & Palettes", "Marketing Assets Design"],
  },
  {
    id: "digital-marketing",
    iconName: "TrendingUp",
    title: "Digital Marketing",
    description: "Designing data-driven growth strategies, SEO marketing campaigns, and content to position your company at the top.",
    features: ["Search Engine Optimization", "Content Strategy", "Conversion Rate Optimization", "Social Media Kits"],
  },
];
