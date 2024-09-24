"use client";

import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import RetroGrid from "@/components/magicui/retro-grid";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Link } from "lucide-react";
import { useRef } from "react";

export function Heroalt() {
  const fadeInRef = useRef(null);
  const fadeInInView = useInView(fadeInRef, {
    once: true,
  });

  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="hero ">
      <div className="relative h-full overflow-hidden w-full py-14 ">
        <RetroGrid className="z-0" />
        <div className="z-10 flex flex-col">
          <div className="mt-20 grid grid-cols-1">
            <div className="flex flex-col items-center gap-6 pb-8 text-center">
              <motion.h1
                ref={fadeInRef}
                className="text-balance bg-gradient-to-br from-slate-700 to-blue-500 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter sm:tracking-normal text-transparent dark:from-neutral-400 dark:to-blue-500 sm:text-6xl md:text-6xl lg:text-8xl"
                animate={fadeInInView ? "animate" : "initial"}
                variants={fadeUpVariants}
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: "spring",
                }}
              >
                Streamline Your Workflow
                <br /> with Our SaaS Platform
                <br />
              </motion.h1>

              <motion.p
                className="text-balance text-lg tracking-tight text-gray-400 md:text-xl"
                animate={fadeInInView ? "animate" : "initial"}
                variants={fadeUpVariants}
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: "spring",
                }}
              >
                Boost productivity, enhance collaboration, and scale your
                business with our cutting-edge SaaS solution.
              </motion.p>

              <motion.div
                animate={fadeInInView ? "animate" : "initial"}
                variants={fadeUpVariants}
                className="flex  gap-4 lg:flex-row"
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: "spring",
                }}
              >
                <a
                  href="/SignUp"
                  className={cn(
                    // colors
                    "bg-[#3b82f6] text-white shadow-2xl hover:bg-[#3b82f6]/80 dark:bg-[#3b82f6] ",

                    // layout
                    "group relative inline-flex h-9 w-full items-center justify-center gap-2 overflow-hidden whitespace-pre rounded-md px-4 py-2 text-base font-semibold tracking-tighter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:flex",

                    // animation
                    "transform-gpu ring-offset-current transition-all duration-300 ease-out   "
                  )}
                >
                  Sign Up
                  <ChevronRight className="size-4 translate-x-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </a>
                <a
                  href="/LearnMore"
                  className={cn(
                    // colors
                    "border border-[#3b82f6] bg-white text-[#3b82f6] hover:text-white dark:text-white shadow-2xl dark:hover:bg-[#3b82f6] hover:bg-[#3b82f6] dark:bg-black ",

                    // layout
                    "group relative inline-flex h-9 w-full items-center justify-center gap-2 overflow-hidden whitespace-pre rounded-md px-4 py-2 text-base font-semibold tracking-tighter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:flex",

                    // animation
                    "transform-gpu ring-offset-current transition-all duration-300 ease-out   "
                  )}
                >
                  Learn More
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={fadeInInView ? "animate" : "initial"}
            variants={fadeUpVariants}
            initial={false}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.21, 0.47, 0.32, 0.98],
              type: "spring",
            }}
            // className="relative mx-auto mt-24 h-full w-full max-w-[1000px] rounded-xl border shadow-2xl"
            className="relative mt-24 mx-auto h-full w-full rounded-xl max-w-[1000px] after:absolute after:inset-0 after:z-10 after:[background:linear-gradient(to_top,#fff_30%,transparent)] dark:after:[background:linear-gradient(to_top,#000000_30%,transparent)]"
          >
            <div
              className={cn(
                "absolute inset-0 bottom-1/2 h-full w-full transform-gpu [filter:blur(120px)]",

                // light styles
                "[background-image:linear-gradient(to_bottom,#3b82f6,transparent_30%)]",

                // dark styles
                "dark:[background-image:linear-gradient(to_bottom,#ffffff,transparent_30%)]"
              )}
            />

            <img
              src="/header.jpg"
              className="relative block h-full w-full rounded-xl border dark:hidden"
            />
            <img
              src="/header.jpg"
              className="relative hidden h-full w-full rounded-xl border dark:block"
            />

            <BorderBeam />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
