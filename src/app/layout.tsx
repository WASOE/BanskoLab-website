import type {Metadata} from "next";
import {
  Fraunces,
  IBM_Plex_Mono,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false, // Not critical, can load later
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false, // Not critical, can load later
});

export const metadata: Metadata = {
  title: {
    default: "BanskoLab Foundation | Rural transformation delivered end-to-end",
    template: "%s | BanskoLab Foundation",
  },
  description:
    "We deliver measurable rural transformation by combining digital systems and hands-on field implementation across Bulgaria. Partner with BanskoLab.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://banskolab.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["bg_BG"],
    siteName: "BanskoLab Foundation",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fraunces.variable} ${ibmPlexMono.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

