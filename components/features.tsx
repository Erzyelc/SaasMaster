"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";
import { AnimatedCard } from "./ui/animatedCard";
import { AnimatedCard3 } from "./ui/animatedCard3";
import { AnimatedCard4 } from "./ui/animatedCard4";
import { AnimatedCard2 } from "./ui/animatedCard2";
import { AnimatedCard6 } from "./ui/animatedCard6";

const Features = () => {
  return (
    // sm:h-[80vh]
    <div className="h-full relative  w-full flex items-center justify-center flex-col">
      <h1 className="text-center text-4xl font-bold tracking-tight text-[#3b82f6] sm:text-5xl pt-6">
        Some of our incredible features
      </h1>
      <div className="z-40 flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-4 h-full px-10 py-10">
        <AnimatedCard />
        <AnimatedCard2 />
        <AnimatedCard3 />
        {/* <AnimatedCard6 /> */}
        <div className="w-full grid  col-span-3">
          <AnimatedCard4 />
        </div>
      </div>

      <DotPattern className={cn("[]")} />
    </div>
  );
};

export default Features;
