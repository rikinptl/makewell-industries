import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileActionBar, StickySidebar, WhatsAppFloat } from "@/components/StickySidebar";
import { company } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${company.name} | Hydraulic Press & Hot Press Machine Manufacturer`,
    template: `%s | ${company.name}`,
  },
  description:
    "Leading manufacturer of hydraulic hot press machines, cold presses, and woodworking machinery in Ahmedabad, Gujarat since 1993",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: company.name,
    title: `${company.name} | Hydraulic Press & Hot Press Machine Manufacturer`,
    description:
      "Leading manufacturer of hydraulic hot press machines, cold presses, and woodworking machinery in Ahmedabad, Gujarat since 1993",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Hydraulic Press & Hot Press Machine Manufacturer`,
    description:
      "Leading manufacturer of hydraulic hot press machines, cold presses, and woodworking machinery in Ahmedabad, Gujarat since 1993",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable} h-full`}>
      <body className="flex min-h-full w-full max-w-[100vw] flex-col overflow-x-clip antialiased">
        <Header />
        <div className="flex-1 w-full min-w-0 overflow-x-clip">{children}</div>
        <Footer />
        <StickySidebar />
        <MobileActionBar />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
