export type Project = {
  slug: string;
  name: string;
  category: string;
  image: string;
  client: string;
  year: string;
  services: string[];
  summary: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "tmug",
    name: "TMUG",
    category: "Brand Identity & Packaging",
    image: "/projects/tmug/tmug.png",
    client: "TMUG",
    year: "2024",
    services: ["Brand Identity", "Packaging Design", "Social Media Design", "Print Design"],
    summary:
      "A clean, nature-inspired identity and packaging system for a premium herbal tea brand.",
    description:
      "TMUG redefines the premium tea experience with a clean, nature-inspired identity focused on purity, wellness, and everyday ritual. Rooted in authenticity, the brand blends traditional herbal ingredients with a contemporary visual language that feels calming and memorable. Soft curves and a warm, earthy palette create a sense of comfort and approachability — just like a soothing cup of herbal tea — while every package is designed for maximum shelf appeal and instant recognition.",
  },
  {
    slug: "sugar-whisk",
    name: "Sugar Whisk",
    category: "Brand Identity & Packaging",
    image: "/projects/sugar-wiskey/sugar-wiskey.png",
    client: "Sugar Whisk",
    year: "2024",
    services: ["Brand Identity", "Packaging Design", "Illustration"],
    summary: "A delicate, elegant identity for a premium cake and pastry brand.",
    description:
      "Sugar Whisk is a brand dedicated to delivering delicate, beautifully crafted pastries with a touch of elegance and precision. Inspired by the art of baking and the finesse of a whisk, the identity balances sweetness with craftsmanship through a soft color palette and a refined, hand-drawn logotype. With a focus on innovative packaging and premium presentation, every touchpoint invites customers to indulge, enjoy, and repeat.",
  },
  {
    slug: "gola-gully",
    name: "Gola Gully",
    category: "Brand Identity",
    image: "/projects/branding-gola-gully/branding-gola-gully.png",
    client: "Gola Gully",
    year: "2024",
    services: ["Brand Identity", "Packaging Design", "Illustration"],
    summary: "A loud, nostalgic identity for a modern take on Indian sharbat ice.",
    description:
      "Gola Gully brings nostalgia into the present with a bold, playful identity for a modern Indian sharbat-ice brand. Built for a young, urban audience craving fun, shareable food experiences, the system uses hand-lettered type, saturated gradients, and festival-poster-inspired ornamentation that feels vibrant, trendy, and instantly shareable on social media.",
  },
  {
    slug: "golki",
    name: "Golki",
    category: "Brand Identity & Packaging",
    image: "/projects/golki-project-artboard/golki-project-artboard.png",
    client: "Golki",
    year: "2023",
    services: ["Brand Identity", "Packaging Design", "Illustration"],
    summary: "A bold, contemporary identity for a naturally refreshing soda brand.",
    description:
      "Golki reimagines traditional refreshment with a bold, contemporary identity rooted in natural goodness. Inspired by the vibrancy of citrus fruits and Indian flavors, the brand blends authenticity with a vibrant, modern appeal across a full flavor range — from classic lemonade to kokum jeera. The result is a soda brand that feels fresh, flavorful, and visually irresistible on shelf.",
  },
  {
    slug: "ram-fool",
    name: "Ram Fool",
    category: "Brand Identity",
    image: "/projects/ram-fool/ram-fool.png",
    client: "Ram Fool",
    year: "2023",
    services: ["Brand Identity", "Logo Design", "Packaging Design"],
    summary: "A bold packaging and brand identity system for Ram Fool.",
    description:
      "We developed a distinctive visual identity and packaging system for Ram Fool, translating the brand's personality into a cohesive design language across labels, structure, and shelf presence.",
  },
  {
    slug: "speed-nutrition",
    name: "Speed Nutrition",
    category: "Packaging Design",
    image: "/projects/speed-nutrition/speed-nutrition.png",
    client: "Speed Nutrition",
    year: "2023",
    services: ["Packaging Design", "Brand Identity", "Label Design"],
    summary: "Performance-driven packaging for a sports nutrition brand.",
    description:
      "Speed Nutrition needed packaging that communicates performance and trust at a glance. We designed a bold, high-energy label system with clear nutritional callouts and a strong brand mark, built to stand out on gym shelves and e-commerce alike.",
  },
  {
    slug: "clump-maxx",
    name: "Clump Maxx",
    category: "Brand Identity & Packaging",
    image: "/projects/clump-maxx/clump-maxx.png",
    client: "Clump Maxx",
    year: "2024",
    services: ["Brand Identity", "Packaging Design", "Logo Design"],
    summary: "A premium identity and packaging system for a clumping cat litter brand.",
    description:
      "Clump Maxx needed packaging that felt premium and trustworthy on a crowded pet-care shelf. We designed a clean, confident identity and label system that highlights the product's clumping performance and odor control, giving pet owners an easy, reassuring choice at a glance.",
  },
  {
    slug: "re-peel",
    name: "Re'Peel",
    category: "Brand Identity & Packaging",
    image: "/projects/re-peel/re-peel.png",
    client: "Re'Peel",
    year: "2024",
    services: ["Brand Identity", "Packaging Design", "Illustration"],
    summary: "A fresh, modern identity for the Re'Peel brand.",
    description:
      "We built a fresh, modern identity and packaging system for Re'Peel, balancing bold typography with a clean visual language to give the brand clear shelf presence and a distinct personality.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
