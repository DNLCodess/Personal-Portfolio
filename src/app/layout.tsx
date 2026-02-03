import "@/assets/css/animate.min.css";
import "@/assets/css/bootstrap-icons.min.css";
import "@/assets/css/fontawesome.all.min.css";
import "@/assets/css/style.css";
import "@/assets/css/dark-mode.css";
import "@/assets/css/responsive.css";

import BackToTop from "@/components/backToTop";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Preloader from "@/components/preloader";
import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import CopylLayout from "./copylLayout";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pertest - Personal Portfolio Next.js Template",
  description:
    "Discover Pertest, a versatile personal portfolio Next.js template by Creativemela. Ideal for showcasing your work, Tawam offers sleek design, multiple layouts, and comprehensive UI/UX services. Perfect for designers, developers, and creatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <body>
        <CopylLayout>
          <Preloader />
          <BackToTop />
          <Header />
          {children}
          <Contact />
          <Footer />
        </CopylLayout>
      </body>
    </html>
  );
}
