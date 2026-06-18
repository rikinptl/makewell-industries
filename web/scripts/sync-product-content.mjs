import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const auditDir = path.resolve(__dirname, "../../site-audit/pages");
const dataPath = path.resolve(__dirname, "../src/lib/products-data.json");

function stripHtml(html) {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(text) {
  return text
    .replace(/&ge;/g, "≥")
    .replace(/&le;/g, "≤")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<sup>2<\/sup>/gi, "²")
    .replace(/<sup>/gi, "")
    .replace(/<\/sup>/gi, "");
}

function clean(text) {
  return decodeEntities(stripHtml(text));
}

function extractListAfterHeading(html, headingPattern) {
  const match = html.match(
    new RegExp(`${headingPattern}[\\s\\S]*?<ul>([\\s\\S]*?)<\\/ul>`, "i")
  );
  if (!match) return [];
  return [...match[1].matchAll(/<li>([\s\S]*?)<\/li>/gi)]
    .map((m) => clean(m[1]))
    .filter((t) => t.length > 2 && !t.startsWith("<"));
}

function parseTable(tableHtml) {
  const rows = [...tableHtml.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)]
    .map((r) =>
      [...r[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi)].map((c) => clean(c[1]))
    )
    .filter((r) => r.length > 0 && r.some((c) => c.length > 0));

  if (rows.length < 2) return null;

  return {
    headers: rows[0],
    rows: rows.slice(1),
  };
}

function extractTableAfter(html, marker) {
  const idx = html.search(marker);
  if (idx === -1) return null;
  const slice = html.slice(idx);
  const tableMatch = slice.match(/<table[^>]*>([\s\S]*?)<\/table>/i);
  if (!tableMatch) return null;
  return parseTable(tableMatch[1]);
}

function extractFromHtml(html, slug) {
  const result = { description: "", features: [], specTable: null };

  const descMatch = html.match(/<h5 class="des-title">[^<]*<\/h5>\s*<p>([\s\S]*?)<\/p>/i);
  if (descMatch) {
    result.description = clean(descMatch[1]);
  }

  const inlineTable = html.match(
    /<h5 class="des-title">[^<]*<\/h5>\s*<div class="table">\s*<table>([\s\S]*?)<\/table>/i
  );
  if (inlineTable) {
    result.specTable = parseTable(inlineTable[1]);
  }

  if (!result.specTable) {
    result.specTable = extractTableAfter(html, /<h5 class="mb-4">Specifications<\/h5>/i);
  }

  const featureSections = [
    ...extractListAfterHeading(html, '<h5 class="mb-4">Key Features<\\/h5>'),
    ...extractListAfterHeading(html, '<h5 class="mb-4">Key Features & Benefits<\\/h5>'),
    ...extractListAfterHeading(html, '<h5 class="mb-4">Why Choose Makewell'),
  ];

  result.features = [...new Set(featureSections)];

  if (slug === "auto-edge-banding-machine") {
    result.description =
      "Makewell Industries manufactures a complete range of auto edge banding machines — from compact models to high-capacity industrial lines including MEB 730 MPR, MEB 700 MPR, MEB 660, MEB 620 MPC, and more. Precision gluing, trimming, and finishing for modular furniture, kitchens, and panel manufacturing.";
    result.features = [
      "Full range of edge banders from entry-level to high-capacity MEB series",
      "Automatic gluing, trimming, and finishing in one pass",
      "Suitable for MDF, plywood, particle board, and laminated panels",
      "Built for continuous industrial use in Indian factory conditions",
    ];
  }

  if (slug === "rubber-press" && result.features.length === 0) {
    result.features = [
      "Hydraulic hot press for rubber conveyor belts",
      "Precured tread rubber production for tyres",
      "Cow mat and rubber moulding applications",
      "Uniform heat and pressure for durable rubber products",
    ];
  }

  if (slug === "hydraulic-press-for-waste-recycling-plastic-sheet") {
    result.features = [
      "Converts plastic waste into reusable sheets and products",
      "Designed for paper mills and industrial plastic waste streams",
      "Supports sustainable recycling with hydraulic pressing technology",
    ];
  }

  return result;
}

const products = JSON.parse(fs.readFileSync(dataPath, "utf8"));

for (const product of products) {
  const htmlPath = path.join(auditDir, `${product.slug}.html`);
  if (!fs.existsSync(htmlPath)) continue;

  const html = fs.readFileSync(htmlPath, "utf8");
  const extracted = extractFromHtml(html, product.slug);

  if (extracted.description) product.description = extracted.description;
  if (extracted.features.length > 0) product.features = extracted.features;
  if (extracted.specTable) {
    product.specTable = extracted.specTable;
    product.specs = [];
  } else if (product.specs?.length) {
    const headerLike = (row) =>
      /^(attribute|specification|product \(mm\)|capacity|details)$/i.test(row.label) &&
      /^(specification|capacity \(tons\)|details)$/i.test(row.value);
    product.specs = product.specs.filter((row) => !headerLike(row));
  }

  if (product.slug === "edge-bander") {
    product.description =
      "Makewell auto edge banders deliver fully automatic edge banding for panel furniture production — consistent bonding, trimming, and finishing for modular kitchens, wardrobes, and industrial wood panel lines.";
  }
}

fs.writeFileSync(dataPath, `${JSON.stringify(products, null, 2)}\n`);
console.log(`Updated ${products.length} products in products-data.json`);
