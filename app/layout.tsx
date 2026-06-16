import type { Metadata } from "next";
import { Inter, Patrick_Hand } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";

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
    <html lang="en">
      <body className={`${inter.variable} ${patrickHand.variable} font-sans antialiased bg-white`}>
        <CustomCursor />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
