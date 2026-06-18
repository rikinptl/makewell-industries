import { company, catalogues, industries } from "./site";
import { categories, products } from "./products";

export type FaqEntry = {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  link?: { href: string; label: string };
};

export const faqEntries: FaqEntry[] = [
  {
    id: "about",
    question: "Who is Makewell Industries?",
    answer: `${company.name} (${company.legalName}) has been manufacturing hydraulic presses and woodworking machinery in Ahmedabad, Gujarat since ${company.founded}. We serve factories across India and export-ready installations.`,
    keywords: ["who", "about", "company", "makewell", "history", "since", "1993", "manufacturer"],
    link: { href: "/about", label: "About us" },
  },
  {
    id: "location",
    question: "Where are you located?",
    answer: `Our factory and office are in Ahmedabad, Gujarat: ${company.address}`,
    keywords: ["where", "location", "address", "ahmedabad", "gujarat", "factory", "visit", "office"],
    link: { href: "/contact", label: "Contact & map" },
  },
  {
    id: "contact",
    question: "How can I contact you?",
    answer: `Call ${company.phone} or ${company.phones[2]}, WhatsApp ${company.whatsapp}, or email ${company.email}. Our team typically responds within 12 hours.`,
    keywords: ["contact", "phone", "call", "email", "whatsapp", "reach", "number", "talk"],
    link: { href: "/contact", label: "Contact page" },
  },
  {
    id: "products",
    question: "What machines do you manufacture?",
    answer: `We build ${products.length} models across two lines: ${categories[0].name} (${getProductsByCategoryCount("hydraulic-hot-press-machine")} models) and ${categories[1].name} (${getProductsByCategoryCount("wood-working-machine")} models) — including hot presses, cold presses, CNC routers, panel saws, and edge banders.`,
    keywords: ["product", "machine", "machines", "make", "manufacture", "range", "catalogue", "catalog", "list"],
    link: { href: "/products", label: "All products" },
  },
  {
    id: "hydraulic",
    question: "What is a hydraulic hot press?",
    answer:
      "Hydraulic hot presses apply heat and pressure to bond plywood, laminates, rubber, fiberglass, HPL, and similar materials. Makewell builds single-daylight, multi-daylight, and specialized presses for plywood, flush doors, rubber sheets, metal doors, and more.",
    keywords: ["hydraulic", "hot press", "hotpress", "plywood press", "laminate", "bonding"],
    link: { href: "/hydraulic-hot-press-machine", label: "Hydraulic presses" },
  },
  {
    id: "woodworking",
    question: "Do you make woodworking machines?",
    answer:
      "Yes. Our woodworking line includes CNC router machines, panel saws, beam saws, auto edge banding machines, multiboring machines, and cold presses for panel processing.",
    keywords: ["wood", "woodworking", "cnc", "router", "panel saw", "edge band", "edgebander", "boring"],
    link: { href: "/wood-working-machine", label: "Woodworking machines" },
  },
  {
    id: "quote",
    question: "How do I request a quote?",
    answer:
      "Share your machine type, capacity requirements, and city on our contact form. Our sales engineers prepare a tailored quotation — usually within 12 hours on business days.",
    keywords: ["quote", "quotation", "price", "pricing", "cost", "rate", "how much", "enquiry", "inquiry"],
    link: { href: "/contact#quote", label: "Request a quote" },
  },
  {
    id: "catalogue",
    question: "Can I download product catalogues?",
    answer: `Yes. We have PDF catalogues for ${catalogues.map((c) => c.name).join(" and ")} available for instant download.`,
    keywords: ["catalogue", "catalog", "catalogues", "pdf", "brochure", "download"],
    link: { href: "/catalogues", label: "Download catalogues" },
  },
  {
    id: "industries",
    question: "Which industries do you serve?",
    answer: `Our presses and machines are used in ${industries.map((i) => i.name).join(", ")}, and related manufacturing sectors across India.`,
    keywords: ["industry", "industries", "application", "applications", "laminate", "plywood", "rubber", "paper"],
    link: { href: "/applications", label: "Applications" },
  },
  {
    id: "delivery",
    question: "Do you deliver and install machines?",
    answer:
      "Yes. We arrange delivery across India and provide installation support and operator guidance. Lead time depends on machine type and customization — our team confirms timelines with your quote.",
    keywords: ["delivery", "deliver", "install", "installation", "shipping", "dispatch", "lead time", "timeline"],
  },
  {
    id: "support",
    question: "What after-sales support do you offer?",
    answer:
      "We provide post-installation support, spare parts assistance, and responsive service. Clients recognize our 24/7 customer support and prompt on-site help when needed.",
    keywords: ["support", "service", "after sales", "warranty", "spare", "maintenance", "repair", "help"],
  },
  {
    id: "custom",
    question: "Can you build custom presses?",
    answer:
      "Yes. Many of our hydraulic presses are custom-designed for specific materials, daylight configurations, and production volumes. Describe your application in an enquiry and our engineers will advise.",
    keywords: ["custom", "customized", "bespoke", "special", "requirement", "capacity", "size"],
    link: { href: "/contact#quote", label: "Discuss your needs" },
  },
  {
    id: "gallery",
    question: "Can I see your machines and installations?",
    answer:
      "Our gallery shows real machines and factory installations — hot presses, cold presses, edge banders, CNC routers, and more from customer sites.",
    keywords: ["gallery", "photos", "images", "pictures", "see", "look", "installation"],
    link: { href: "/gallery", label: "View gallery" },
  },
];

function getProductsByCategoryCount(slug: string) {
  return products.filter((p) => p.categories.includes(slug)).length;
}

export const suggestedQuestions = [
  "What machines do you make?",
  "How do I get a quote?",
  "Where are you located?",
  "Download catalogues",
];
