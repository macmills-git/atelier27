import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const dmSans = localFont({
  variable: "--font-dm-sans",
  display: "swap",
  adjustFontFallback: "Arial",
  src: [
    {
      path: "./fonts/dm-sans-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/dm-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/dm-sans-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/dm-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/dm-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/dm-sans-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const cormorant = localFont({
  variable: "--font-cormorant",
  display: "swap",
  adjustFontFallback: "Times New Roman",
  src: [
    {
      path: "./fonts/cormorant-garamond-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-garamond-latin-300-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/cormorant-garamond-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-garamond-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/cormorant-garamond-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-garamond-latin-500-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/cormorant-garamond-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-garamond-latin-600-italic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "ATELIER 27 — Independent Creative Studio | Ideas, Made Distinct.",
  description:
    "ATELIER 27 is an independent creative studio based in Accra, Ghana, operating at the intersection of brand strategy, identity design, digital experiences, visual production, and physical craft.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0B0B0C] text-white selection:bg-[#1A4BFF] selection:text-white">
        <SmoothScrollProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
