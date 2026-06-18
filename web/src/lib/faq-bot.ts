import { company } from "./site";
import { products } from "./products";
import { faqEntries, type FaqEntry } from "./faq";

export type BotReply = {
  text: string;
  link?: { href: string; label: string };
  matchedQuestion?: string;
};

const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "do", "does", "can", "i", "we", "you", "your",
  "my", "me", "to", "for", "of", "in", "on", "at", "and", "or", "what", "how",
  "where", "when", "why", "about", "please", "tell", "know", "get",
]);

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text: string) {
  return normalize(text)
    .split(" ")
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w));
}

function scoreFaq(query: string, entry: FaqEntry): number {
  const q = normalize(query);
  const qTokens = tokenize(query);
  let score = 0;

  if (q.includes(normalize(entry.question))) score += 20;

  for (const keyword of entry.keywords) {
    const kw = normalize(keyword);
    if (q.includes(kw)) score += kw.includes(" ") ? 6 : 4;
  }

  for (const token of qTokens) {
    if (entry.keywords.some((k) => normalize(k).includes(token))) score += 2;
    if (normalize(entry.question).includes(token)) score += 1;
    if (normalize(entry.answer).includes(token)) score += 0.5;
  }

  return score;
}

function matchProduct(query: string): BotReply | null {
  const q = normalize(query);
  let best: (typeof products)[number] | undefined;
  let bestScore = 0;

  for (const product of products) {
    const name = normalize(product.name);
    const slug = product.slug.replace(/-/g, " ");
    let score = 0;
    if (q.includes(name)) score += 15;
    if (q.includes(slug)) score += 12;
    for (const part of name.split(" ")) {
      if (part.length > 3 && q.includes(part)) score += 2;
    }
    if (score > bestScore) {
      bestScore = score;
      best = product;
    }
  }

  if (!best || bestScore < 4) return null;

  return {
    text: `We manufacture the ${best.name}. Specifications and images are on the product page. For pricing and delivery to your city, request a quote — our team shares details within 12 hours.`,
    link: { href: `/products/${best.slug}`, label: `View ${best.shortName}` },
    matchedQuestion: best.name,
  };
}

export function getFaqReply(query: string): BotReply {
  const trimmed = query.trim();
  if (!trimmed) {
    return {
      text: "Ask me anything about our machines, quotes, location, or catalogues.",
    };
  }

  const greetings = /^(hi|hello|hey|good morning|good afternoon|good evening|namaste)\b/;
  if (greetings.test(normalize(trimmed))) {
    return {
      text: `Hello! I'm the ${company.name} assistant. I can help with products, quotes, catalogues, delivery, and contact details. What would you like to know?`,
    };
  }

  const productMatch = matchProduct(trimmed);
  if (productMatch) return productMatch;

  let bestEntry: FaqEntry | undefined;
  let bestScore = 0;

  for (const entry of faqEntries) {
    const score = scoreFaq(trimmed, entry);
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  if (bestEntry && bestScore >= 4) {
    return {
      text: bestEntry.answer,
      link: bestEntry.link,
      matchedQuestion: bestEntry.question,
    };
  }

  return {
    text: `I don't have a specific answer for that yet. For detailed help, call ${company.phone}, WhatsApp ${company.whatsapp}, or send an enquiry — our team responds within 12 hours.`,
    link: { href: "/contact#quote", label: "Contact us" },
  };
}
