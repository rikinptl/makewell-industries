import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Wood Working Machine",
  description:
    "Woodworking machinery — CNC routers, panel saws, beam saws, edge banders, and multiboring machines.",
};

export default function WoodWorkingMachinePage() {
  return <CategoryPage slug="wood-working-machine" />;
}
