import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phoenix School | Nurturing Young Minds for a Brighter Future",
  description:
    "Phoenix School offers academic excellence, character development, and future-ready education. Join us for a transformative learning experience.",
  keywords: "school, education, phoenix school, CBSE, best school, nursery, primary school",
  openGraph: {
    title: "Phoenix School | Nurturing Young Minds for a Brighter Future",
    description:
      "Academic Excellence • Character Development • Future Ready Education",
    type: "website",
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
      className={`${poppins.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Phoenix School",
              description:
                "Nurturing Young Minds for a Brighter Future",
              url: "https://phoenixschool.edu",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Your City",
                addressRegion: "Your State",
                addressCountry: "IN",
              },
              telephone: "+91-XXXXXXXXXX",
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
