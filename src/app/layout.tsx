import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Amandya Tech | Smart Interactive Photobooth Software System",
  description: "Revolusi bisnis photobooth lo dengan software interaktif Amandya Tech. Dilengkapi fitur Live Mode, Dual Camera, otomatis form consent, dan management dashboard cloud terpusat.",
  keywords: ["Software photobooth Indonesia", "Photobooth Software", "Amandya Tech", "Live Gallery Photobooth", "Automasi Photobooth", "Digital Consent"],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://amandya.tech",
    siteName: "Amandya Tech",
    title: "Amandya Tech | Next-Gen Photobooth Software",
    description: "Sistem photobooth all-in-one paling fleksibel buat operator zaman now.",
    images: [{ url: "/og-image.jpg" }] // assuming there will be an og-image later
  },
  twitter: {
    card: "summary_large_image",
    title: "Amandya Tech | Next-Gen Photobooth Software",
    description: "Sistem photobooth all-in-one paling mulus buat operator zaman now.",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
