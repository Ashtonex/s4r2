import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Signs For Real | Premium Architectural Signage – Harare, Zimbabwe",
  description:
    "Harare's premier architectural signage company. We craft premium 3D lettering, illuminated signs, neon, large-format graphics, wayfinding systems, and vehicle branding for commercial and luxury clients across Zimbabwe.",
  keywords: [
    "signage company Harare",
    "architectural signage Zimbabwe",
    "vehicle branding Zimbabwe",
    "3D lettering",
    "neon signs",
    "illuminated signage",
    "large format printing",
    "sign board manufacturers",
    "commercial signage",
    "Signs For Real",
  ],
  openGraph: {
    title: "Signs For Real | Premium Architectural Signage – Harare, Zimbabwe",
    description:
      "Harare's premier architectural signage manufacturer. Turning spaces into landmarks.",
    url: "https://signsforreal.co.zw",
    siteName: "Signs For Real",
    locale: "en_ZW",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Signs For Real – Premium Architectural Signage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Signs For Real | Premium Architectural Signage",
    description:
      "Harare's premier architectural signage manufacturer. Turning spaces into landmarks.",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://signsforreal.co.zw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Signs For Real",
              description:
                "Premium architectural signage manufacturer in Harare, Zimbabwe",
              url: "https://signsforreal.co.zw",
              telephone: "+263777000000",
              email: "info@signsforreal.co.zw",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Samora Machel Ave",
                addressLocality: "Harare",
                addressCountry: "ZW",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "13:00",
                },
              ],
              areaServed: "Zimbabwe",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
