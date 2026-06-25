import type { Metadata } from "next";
import { Inter, Patrick_Hand, Geist } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";
import { CountryProvider } from "@/context/CountryContext";
import BrandBackground from "@/components/BrandBackground";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-patrick-hand",
});

export const metadata: Metadata = {
  title: "Tourist Saver – Journey Beyond the Ordinary",
  description: "Australia's leading travel savings app. Discover destinations, save smart, explore more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} ${patrickHand.variable} font-sans antialiased bg-white`}>
        <BrandBackground />
        <CustomCursor />
        <CountryProvider>
          <SmoothScrolling>{children}</SmoothScrolling>
        </CountryProvider>
      </body>
    </html>
  );
}
