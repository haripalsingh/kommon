// =====================================================================
// SERVICES DATA — yahin se mega menu aur saare service pages bante hain.
// Kuch bhi edit karna ho (title, text, images) sirf is file me karo.
// Images: /public/services/ folder me daalo aur path yahan likho
// (example: "/services/packaging-1.jpg"). Image khali ho toh placeholder dikhega.
// =====================================================================

export type Work = {
  title: string;
  description: string;
  image?: string;
};

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  offerings: string[];
  works: Work[];
};

export type ServiceGroup = {
  number: string;
  label: string;
  items: Service[];
};

// Dummy portfolio cards — har service ke liye apne projects aur images yahan badal sakte ho.
const defaultWorks: Work[] = [
  {
    title: "1AM",
    description:
      "Canned Cold Coffee Brand. From logo and identity to website and social media, we brewed a bold and pretty cool brand that Gen Z love vibing with.",
    image: "",
  },
  {
    title: "iOrganic",
    description:
      "For the organic dairy & food brand, iOrganic, we created a vibrant and engaging packaging design and professional photography for e-commerce and advertising.",
    image: "",
  },
  {
    title: "Mr. Bomzy",
    description:
      "We delivered comprehensive services to the cocktail bombs brand Mr. Bomzy, from identity and brand guidelines to packaging, UI/UX design and social media strategy.",
    image: "",
  },
  {
    title: "Miatra",
    description:
      "For Miatra, a makhana brand from the Mithila region of Bihar, we crafted a complete visual identity and label design inspired by the famous Mithila art.",
    image: "",
  },
];

export const serviceGroups: ServiceGroup[] = [
  {
    number: "01",
    label: "Creative",
    items: [
      {
        slug: "brand-identity-logo-design",
        title: "Brand Identity & Logo Design",
        tagline: "Identities people remember",
        description:
          "Your brand is more than a logo. We build complete identity systems — logo, colours, typography and guidelines — so your business looks and feels consistent everywhere it shows up.",
        offerings: [
          "Logo design & variations",
          "Colour palette & typography",
          "Brand guidelines",
          "Stationery & brand assets",
        ],
        works: defaultWorks,
      },
      {
        slug: "packaging-design",
        title: "Packaging Design",
        tagline: "Packs that win the shelf",
        description:
          "From pouches and cans to gift boxes, we design packaging that stands out on the shelf, tells your story in seconds and is ready for print.",
        offerings: [
          "Label & pouch design",
          "Box & carton design",
          "Packaging concept & mockups",
          "Print-ready artwork",
        ],
        works: defaultWorks,
      },
      {
        slug: "print-marketing-collateral",
        title: "Print & Marketing Collateral",
        tagline: "Print that still impresses",
        description:
          "Brochures, catalogues, flyers, standees and more. We design print material that is consistent with your brand and gets your message across clearly.",
        offerings: [
          "Brochures & catalogues",
          "Flyers, posters & standees",
          "Visiting cards & stationery",
          "Editorial layouts",
        ],
        works: defaultWorks,
      },
      {
        slug: "illustration-custom-graphics",
        title: "Illustration & Custom Graphics",
        tagline: "Visuals made only for you",
        description:
          "Custom illustrations, icons and graphics that give your brand its own personality — no stock look, just original artwork.",
        offerings: [
          "Custom illustrations",
          "Icons & infographics",
          "Pattern & graphic elements",
          "Mascots & characters",
        ],
        works: defaultWorks,
      },
    ],
  },
  {
    number: "02",
    label: "Digital",
    items: [
      {
        slug: "amazon-listing-content",
        title: "Amazon Listing Content",
        tagline: "Listings that convert",
        description:
          "Better images and content mean better sales. We create Amazon listing visuals, infographics and A+ content that explain your product and push buyers to checkout.",
        offerings: [
          "Main & secondary images",
          "Infographics",
          "A+ / EBC content",
          "Listing copy support",
        ],
        works: defaultWorks,
      },
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        tagline: "Easy to use, nice to look at",
        description:
          "We design clean, intuitive interfaces for websites and apps, focused on how real people use them.",
        offerings: [
          "Wireframes & user flows",
          "Website & app UI",
          "Design systems",
          "Clickable prototypes",
        ],
        works: defaultWorks,
      },
      {
        slug: "landing-pages",
        title: "Landing Pages",
        tagline: "Pages built to get action",
        description:
          "Focused, fast and mobile-first landing pages for campaigns and product launches that turn visitors into leads and customers.",
        offerings: [
          "Campaign landing pages",
          "Product launch pages",
          "Mobile-first layouts",
          "Conversion-focused copy blocks",
        ],
        works: defaultWorks,
      },
      {
        slug: "ecommerce-banners",
        title: "E-commerce Banners",
        tagline: "Banners that drive clicks",
        description:
          "Homepage banners, sale creatives and category banners for your online store that match your brand and boost click-through.",
        offerings: [
          "Homepage & sale banners",
          "Category banners",
          "Festive & offer creatives",
          "Marketplace banner sets",
        ],
        works: defaultWorks,
      },
      {
        slug: "digital-banners-creatives",
        title: "Digital Banners & Creatives",
        tagline: "Creatives for every screen",
        description:
          "Display ads, email headers and web creatives designed in all the sizes you need, ready to run.",
        offerings: [
          "Display ad banners",
          "Email & newsletter headers",
          "Web creatives",
          "Multi-size adaptations",
        ],
        works: defaultWorks,
      },
    ],
  },
  {
    number: "03",
    label: "Social",
    items: [
      {
        slug: "social-media-management",
        title: "Social Media Management",
        tagline: "We run it, you grow",
        description:
          "Planning, content, posting and community handling — we manage your social media end to end so your brand stays active and consistent.",
        offerings: [
          "Content calendar & planning",
          "Post design & captions",
          "Scheduling & posting",
          "Community management",
        ],
        works: defaultWorks,
      },
      {
        slug: "social-media-campaigns",
        title: "Social Media Campaigns",
        tagline: "Ideas that get shared",
        description:
          "Creative campaign ideas with strong visuals and clear goals, built to create buzz and engagement around your brand.",
        offerings: [
          "Campaign concept & strategy",
          "Creative & content series",
          "Influencer collaborations",
          "Performance reporting",
        ],
        works: defaultWorks,
      },
      {
        slug: "product-launch-campaigns",
        title: "Product Launch Campaigns",
        tagline: "Launch with a bang",
        description:
          "From teaser to launch day, we plan and design complete launch campaigns that build anticipation and drive first sales.",
        offerings: [
          "Teaser & countdown creatives",
          "Launch day content",
          "Launch visuals & videos",
          "Post-launch follow-up",
        ],
        works: defaultWorks,
      },
      {
        slug: "ad-creatives",
        title: "Ad Creatives",
        tagline: "Ads people actually stop for",
        description:
          "Scroll-stopping static and video ad creatives for Meta, Google and other platforms, made to perform.",
        offerings: [
          "Static & carousel ads",
          "Video & motion ads",
          "A/B creative variations",
          "Platform-specific sizes",
        ],
        works: defaultWorks,
      },
      {
        slug: "monthly-creative-support",
        title: "Monthly Creative Support",
        tagline: "Your in-house team, on retainer",
        description:
          "A dedicated monthly plan for all your design and creative needs — fast turnarounds and a team that already knows your brand.",
        offerings: [
          "Fixed monthly deliverables",
          "Priority turnaround",
          "Dedicated creative team",
          "Flexible plans",
        ],
        works: defaultWorks,
      },
    ],
  },
];

export const allServices: Service[] = serviceGroups.flatMap((g) => g.items);

export const getService = (slug: string) =>
  allServices.find((s) => s.slug === slug);

export const getServiceGroup = (slug: string) =>
  serviceGroups.find((g) => g.items.some((s) => s.slug === slug));
