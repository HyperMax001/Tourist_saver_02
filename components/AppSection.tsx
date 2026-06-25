"use client";
import Image from "next/image";

export default function AppSection() {
  return (
    <section className="w-full relative overflow-hidden">
      <Image
        src="/cta/cta_section.jpeg"
        alt="Tourist Saver App"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
        quality={100}
        unoptimized
      />
    </section>
  );
}
