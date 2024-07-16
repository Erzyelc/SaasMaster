"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { Toggle } from "./toggle";
// import Dialogs from "./ui/dialog";

const SCROLL_BOUNDARY = 120;

export function Navbaralt() {
  const [scrollY, setScrollY] = useState(0);
  const fixedNavRef = useRef<HTMLElement>(null);

  const { theme } = useTheme();

  const getBreakpoint = (width: number) => {
    if (width < 640) return "xs";
    if (width < 768) return "sm";
    if (width < 1024) return "md";
    if (width < 1280) return "lg";
    if (width < 1536) return "xl";
    return "2xl";
  };

  const [breakpoint, setBreakpoint] = useState("xl"); // Default to 'xl' or any other default value

  useEffect(() => {
    // This function will only run in the client-side environment
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    // Set the initial value when the component mounts
    handleResize();

    // Optionally, update the breakpoint on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const active =
    scrollY >= SCROLL_BOUNDARY ||
    breakpoint === "xs" ||
    breakpoint === "sm" ||
    breakpoint === "md";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={fixedNavRef}
      className="mx-auto flex z-50 w-full max-w-5xl items-center justify-between bg-transparent px-10 py-7 dark:bg-transparent"
    >
      <div className="hidden flex-row items-center justify-center gap-2 z-50 lg:flex">
        <a href="/" className="flex h-8 w-8 z-50 cursor-pointer">
          <img src="/logo.svg" className="h-full w-full" />
        </a>

        {/* <Link href="/" className="text-[#3b82f6] font-bold cursor-pointer z-50">
          <button className="cursor-pointer z-50">SaasMaster</button>
        </Link> */}
        <button className=" text-[#3b82f6] font-bold cursor-pointer z-50">
          <a href="/" className="z-50">
            SaasMaster
          </a>
        </button>
      </div>

      <div className="fixed inset-x-0 top-6 z-50 flex items-center justify-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{
            boxShadow: active
              ? theme === "dark"
                ? "0 0 0 1px rgba(255,255,255,.08), 0 1px 2px -1px rgba(255,255,255,.08), 0 2px 4px rgba(255,255,255,.04)"
                : "0 0 0 1px rgba(17,24,28,.08), 0 1px 2px -1px rgba(17,24,28,.08), 0 2px 4px rgba(17,24,28,.04)"
              : "none",
          }}
          transition={{
            ease: "linear",
            duration: 0.05,
            delay: 0.05,
          }}
          className={cn(
            "supports-backdrop-blur:bg-white/90 mx-4 flex w-full items-center justify-center overflow-hidden rounded-full bg-white bg-white/40 px-3 py-2.5 backdrop-blur-md transition-all dark:bg-black/20 lg:w-auto lg:p-1.5 lg:py-2"
          )}
        >
          <ul className="flex h-full w-full flex-row justify-between gap-6 lg:flex-row lg:justify-start lg:gap-1">
            <li className="flex items-center justify-center px-2 py-0.5">
              <a href="/" className="flex h-8 w-8 lg:hidden">
                <img src="/logo.svg" className="h-full w-full" />
              </a>
            </li>
            {/* <li className="hidden items-center justify-center px-2 py-0.5 lg:flex hover:text-black/40 text-[#3b82f6] dark:hover:text-neutral-400">
              <a href="/">Home</a>
            </li> */}
            <li className="hidden items-center justify-center px-2 py-0.5 lg:flex hover:text-black/40 text-[#3b82f6] dark:hover:text-neutral-400">
              <a href="/Blog">Blog</a>
            </li>
            <li className="hidden items-center justify-center px-2 py-0.5 lg:flex hover:text-black/40 text-[#3b82f6] dark:hover:text-neutral-400">
              <a href="/Pricing">Pricing</a>
            </li>
            <li className="hidden items-center justify-center px-2 py-0.5 lg:flex hover:text-black/40 text-[#3b82f6] dark:hover:text-neutral-400">
              <a href="/Contact">Contact</a>
            </li>
            <li className="flex items-center justify-center px-2 py-0.5 lg:hidden">
              <Toggle />
            </li>
            <AnimatePresence>
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: active ? "auto" : 0,
                }}
                transition={{
                  ease: "easeOut",
                  duration: 0.25,
                  delay: 0.05,
                }}
              >
                <AnimatePresence>
                  {active && (
                    <motion.a
                      initial={{ x: "125%" }}
                      animate={{ x: "0" }}
                      exit={{
                        x: "125%",
                        transition: { ease: "easeOut", duration: 2.2 },
                      }}
                      transition={{ ease: "easeOut", duration: 0.5 }}
                      className="cursor-pointer relative inline-flex w-fit shrink-0 items-center justify-center gap-x-1.5 overflow-hidden whitespace-nowrap rounded-full  bg-[#3b82f6]  hover:bg-[#3b82f6]/80 px-3 py-1.5 text-white outline-none dark:bg-white dark:text-black"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                        />
                      </svg>
                    </motion.a>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </ul>
        </motion.div>
        {/* <Dialogs /> */}
      </div>
      <div className="z-50 flex items-center justify-center gap-6">
        {/* <div className="hidden lg:inline-flex">
          <Toggle />
        </div> */}

        <button className="z-50 flex items-center justify-center gap-6">
          <a
            href="/Contact"
            className="relative hidden w-fit bg-[#3b82f6] text-white hover:bg-[#3b82f6]/80  items-center justify-center gap-x-1.5 overflow-hidden rounded-full  px-3 py-1.5 dark:bg-[#3b82f6] dark:text-white lg:inline-flex"
          >
            Get Started
          </a>
        </button>
      </div>
    </header>
  );
}
