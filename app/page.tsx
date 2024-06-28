"use client";

import { Heroalt } from "@/components/Heroalt";
import { CallToAction } from "@/components/cta";
import Features from "@/components/features";
import { Footer } from "@/components/footer";

import { Logos } from "@/components/logos";
import Pricing from "@/components/pricing";

import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("#ffffff");

  return (
    // <main className="flex items-center justify-center ">
    <main className="">
      {/* <Particles
        className="absolute inset-0"
        quantity={600}
        ease={80}
        color={color}
        refresh
      /> */}
      <Heroalt />
      <Logos />
      <Features />
      <Pricing />
      <CallToAction />
      <Footer />
    </main>
  );
}
