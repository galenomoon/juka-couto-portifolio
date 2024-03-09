import React from "react";

//components
import FirstSection from "@/components/FirstSection";
import NextHeader from "@/components/NextHeader";

export default function Home() {
  return (
    <main className="flex flex-col md:px-64 sm:px-12 max-h-full h-fit min-h-screen clash-display bg-main-gradient font-normal text-typography-100">
      <NextHeader />
      <FirstSection />
    </main>
  );
}