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
  title:
    "Kingsley Jerome Okechukwu | Creative Technologist & Digital Strategist",
  description:
    "Creative Technologist and Co-Founder of Blue Sands STEM Labs. Specializing in digital marketing, web development, branding, UI/UX design, and multimedia production. Helping brands, startups, and institutions build digital products, grow audiences, and create impact at scale.",
  keywords: [
    "Kingsley Jerome Okechukwu",
    "Creative Technologist",
    "Digital Strategist",
    "Digital Marketing Specialist",
    "Web Developer",
    "UI/UX Designer",
    "Brand Strategist",
    "Blue Sands STEM Labs",
    "SEO Specialist",
    "Content Marketing",
    "Social Media Marketing",
    "WordPress Developer",
    "Webflow Designer",
    "Graphic Designer",
    "Video Production",
    "Google Ads Certified",
    "Meta Marketing Certified",
    "Lagos Nigeria",
    "Digital Marketing Nigeria",
    "STEM Education",
  ],
  authors: [{ name: "Kingsley Jerome Okechukwu" }],
  creator: "Kingsley Jerome Okechukwu",
  publisher: "Kingsley Jerome Okechukwu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kingsleyokechukwu.com",
    title:
      "Kingsley Jerome Okechukwu | Creative Technologist & Digital Strategist",
    description:
      "Creative Technologist and Co-Founder of Blue Sands STEM Labs. 6+ years of experience in digital marketing, web development, branding, and multimedia production. Building digital products that drive growth and create impact.",
    siteName: "Kingsley Jerome Okechukwu Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kingsley Jerome Okechukwu - Creative Technologist & Digital Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kingsley Jerome Okechukwu | Creative Technologist & Digital Strategist",
    description:
      "Building digital products, growing audiences, and creating impact at scale. 6+ years in digital marketing, web development, and design.",
    images: ["/twitter-image.jpg"],
    creator: "@kingsleyokechukwu", // Replace with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://kingsleyokechukwu.com",
  },
  category: "Technology",
};

// Additional structured data for SEO (JSON-LD)
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kingsley Jerome Okechukwu",
  jobTitle: "Creative Technologist & Digital Strategist",
  url: "https://kingsleyokechukwu.com",
  image: "https://kingsleyokechukwu.com/profile-image.jpg",
  description:
    "Creative Technologist and Co-Founder of Blue Sands STEM Labs, specializing in digital marketing, web development, branding, and UI/UX design.",
  knowsAbout: [
    "Digital Marketing",
    "SEO",
    "Web Development",
    "UI/UX Design",
    "Brand Strategy",
    "Content Marketing",
    "Social Media Marketing",
    "WordPress",
    "Webflow",
    "Graphic Design",
    "Video Production",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "University of Calabar",
      degree: "B.Sc. Computer Science",
    },
    {
      "@type": "EducationalOrganization",
      name: "International Business Management Institute",
      degree: "Diploma in Project Management",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Blue Sands STEM Labs",
    url: "https://bluesandsstem.com",
  },
  sameAs: [
    "https://linkedin.com/in/kingsleyokechukwu", // Replace with actual profiles
    "https://twitter.com/kingsleyokechukwu",
    "https://github.com/kingsleyokechukwu",
    "https://behance.net/kingsleyokechukwu",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressRegion: "Lagos State",
    addressCountry: "Nigeria",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Google Digital Marketing and E-commerce Certificate",
      credentialCategory: "certificate",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Meta Social Media Marketing Certification",
      credentialCategory: "certificate",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Google Analytics Individual Qualification (GAIQ)",
      credentialCategory: "certificate",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "HubSpot Inbound Marketing Certification",
      credentialCategory: "certificate",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Udacity Digital Marketing Nanodegree",
      credentialCategory: "degree",
    },
  ],
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
