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
    slug: "millet-matters",
    name: "Millet Matters",
    category: "Packaging Design",
    image: "/projects/pro-img01.png",
    client: "Millet Matters",
    year: "2024",
    services: ["Packaging Design", "Label Design", "Illustration"],
    summary:
      "A vibrant, shelf-ready packaging system for a range of instant millet mixes.",
    description:
      "Millet Matters needed packaging that could stand out in a crowded instant-food aisle while communicating the health benefits of millet-based cooking. We designed a color-coded system across the range — dosa, idli, khichdi, chilla, and pancake mixes — each with its own bold hue, friendly illustration of the finished dish, and clear callouts for dietary benefits, making the whole range instantly recognizable on shelf.",
  },
  {
    slug: "era-aura",
    name: "Era Aura",
    category: "Packaging Design",
    image: "/projects/pro-img02.png",
    client: "Era Aura",
    year: "2024",
    services: ["Packaging Design", "Structural Design"],
    summary:
      "Earthy, sustainable tube packaging for a wellness and supplements brand.",
    description:
      "Era Aura wanted packaging that felt premium and sustainable at the same time. We designed a recyclable paper-tube system in warm, earthy tones with minimal wordmark branding, letting the natural material do the talking. The result is a range that feels grounded, honest, and easy to shelf across weight, hair, and gummy product lines.",
  },
  {
    slug: "wild-orchard",
    name: "Wild Orchard",
    category: "Packaging Design",
    image: "/projects/pro-img03.png",
    client: "Wild Orchard",
    year: "2024",
    services: ["Packaging Design", "Label Design", "Brand Identity"],
    summary:
      "Playful, fruit-forward can designs for a sparkling water range.",
    description:
      "Wild Orchard's sparkling water needed to compete with big-name beverage brands on shelf and online. We built a flexible label system built around bold hand-lettered flavor names and vivid fruit illustrations, with a consistent white base so every new flavor slots straight into the family without a full redesign.",
  },
  {
    slug: "vamshi-farms",
    name: "Vamshi Farms",
    category: "Packaging Design",
    image: "/projects/pro-img04.png",
    client: "Vamshi Farms",
    year: "2023",
    services: ["Packaging Design", "Label Design", "Illustration"],
    summary:
      "Trust-building label design for raw, unprocessed farm honey and ghee.",
    description:
      "For Vamshi Farms, the challenge was communicating purity and traceability at a glance. We designed a label system anchored by a hand-drawn beekeeper illustration and a clear ingredient story, paired with a warm, farmhouse color palette that reassures shoppers they're buying something genuinely unprocessed.",
  },
  {
    slug: "one-tree",
    name: "One Tree",
    category: "Signage & Brand Identity",
    image: "/projects/pro-img05.png",
    client: "One Tree",
    year: "2023",
    services: ["Brand Identity", "Signage", "Logo Design"],
    summary: "A timeless, hand-forged signage identity for a boutique storefront.",
    description:
      "One Tree wanted an identity that felt crafted rather than corporate. We designed a simple, architectural mark and paired it with a hand-forged hanging sign, giving the storefront a sense of permanence and craft before a customer even steps inside.",
  },
  {
    slug: "gola-galore",
    name: "Gola Galore",
    category: "Brand Identity",
    image: "/projects/pro-img06.png",
    client: "Gola Galore",
    year: "2023",
    services: ["Brand Identity", "Packaging Design", "Illustration"],
    summary: "A loud, nostalgic identity for a modern take on Indian ice gola.",
    description:
      "Gola Galore is all about nostalgia with a modern twist, so the identity needed energy to match. We built a maximalist, festival-poster-inspired system with hand-lettered type, saturated color gradients, and playful ornamentation that makes the brand instantly shareable on social media.",
  },
  {
    slug: "loam",
    name: "Loam",
    category: "Brand Identity",
    image: "/projects/pro-img07.png",
    client: "Loam",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Signage"],
    summary: "A warm, editorial identity for a bistro and artisanal cheese counter.",
    description:
      "Loam needed an identity that felt as considered as its menu. We designed a soft, rounded wordmark paired with a terracotta palette and a minimal snail mark for the cheese counter, giving the brand a warm, editorial feel across coasters, signage, and print collateral.",
  },
  {
    slug: "swap",
    name: "Swap",
    category: "Brand Identity & Packaging",
    image: "/projects/pro-img08.png",
    client: "Swap",
    year: "2024",
    services: ["Brand Identity", "Packaging Design", "Illustration"],
    summary: "A bright, no-sugar beverage brand built to pop on shelf.",
    description:
      "Swap's promise is simple — skip the sugar, not the taste — so the branding needed to feel just as bold as a full-sugar competitor. We built a punchy can design with bright gradients, oversized flavor illustrations, and a friendly rounded logotype that reads clearly from across the aisle.",
  },
  {
    slug: "cumin-co",
    name: "Cumin Co.",
    category: "Packaging Design",
    image: "/projects/pro-img09.png",
    client: "Cumin Co.",
    year: "2023",
    services: ["Packaging Design", "Structural Design"],
    summary: "Premium cookware-style packaging for a ready-to-eat meal brand.",
    description:
      "Cumin Co. wanted their ready-to-eat meals to feel homemade, not mass-produced. We designed packaging inspired by traditional cookware — down to a debossed lid detail — so the unboxing experience feels closer to lifting the lid off a pot on the stove.",
  },
  {
    slug: "loam-bistro",
    name: "Loam Bistro",
    category: "Café Branding",
    image: "/projects/pro-img10.png",
    client: "Loam",
    year: "2024",
    services: ["Brand Identity", "Print Design", "Signage"],
    summary: "Extending the Loam identity across the café's everyday touchpoints.",
    description:
      "Once the core Loam identity was set, we extended it across the bistro's everyday touchpoints — coasters, table cards, and packaging for the artisanal cheese counter — keeping the warm, editorial tone consistent from the front door to the table.",
  },
  {
    slug: "vaaradhi-farms",
    name: "Vaaradhi Farms",
    category: "Packaging Design",
    image: "/projects/pro-img11.png",
    client: "Vaaradhi Farms",
    year: "2023",
    services: ["Packaging Design", "Label Design", "Illustration"],
    summary: "A heritage-inspired label system for raw, natural honey.",
    description:
      "Vaaradhi Farms' raw honey needed packaging that felt handcrafted and trustworthy. We designed a vintage-inspired label with a hand-illustrated beekeeper scene and a bold wordmark, giving the jar the same warmth and authenticity as the product inside.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
