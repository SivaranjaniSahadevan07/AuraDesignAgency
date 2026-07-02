export interface ProjectItem {
  id: string;
  title: string;
  category: "UI/UX Design" | "Web Development" | "Branding" | "Digital Art";
  image: string;
  link: string;
  tags: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "nova-smart-home",
    title: "Nova Smart Ecosystem",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80",
    link: "#",
    tags: ["Mobile App", "IoT Dashboard", "Dark Mode UI"],
  },
  {
    id: "helix-brand-identity",
    title: "Helix Spatial Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    link: "#",
    tags: ["Visual System", "Stationery", "Packaging"],
  },
  {
    id: "solaria-ecommerce",
    title: "Solaria Custom Storefront",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: "#",
    tags: ["Next.js 15", "Three.js", "Headless Commerce"],
  },
  {
    id: "vortex-web3",
    title: "Vortex Cryptographic App",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    link: "#",
    tags: ["Crypto Wallet", "Interaction Design", "Framer Motion"],
  },
  {
    id: "zenith-saas",
    title: "Zenith SaaS Suite",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "#",
    tags: ["React 19", "Tailwind v3", "Analytics Dashboard"],
  },
  {
    id: "aether-editorial",
    title: "Aether Immersive Fashion",
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
    link: "#",
    tags: ["Typography Editorial", "Creative Code", "Branding"],
  },
];
