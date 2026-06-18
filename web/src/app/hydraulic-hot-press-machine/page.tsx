import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Hydraulic Hot Press Machine",
  description:
    "Hydraulic hot press machines for plywood, HPL, rubber, fiberglass, metal doors, and more.",
};

export default function HydraulicHotPressPage() {
  return <CategoryPage slug="hydraulic-hot-press-machine" />;
}
