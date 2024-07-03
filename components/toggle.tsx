"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";
const lightVariant = {
  open: {
    opacity: 0,
    scale: 0,
    rotate: -360,
  },
  closed: {
    opacity: 1,
    scale: 1,
    rotate: 0,
  },
};

const darkVariant = {
  open: {
    opacity: 1,
    scale: 1,
    rotate: 0,
  },
  closed: {
    opacity: 0,
    scale: 0,
    rotate: 360,
  },
};

export function Toggle() {
  const { theme, setTheme } = useTheme();
  const oppositeTheme = theme === "dark" ? "light" : "dark";
  const [toggle, setToggle] = useState(theme === "dark");

  const handleToggle = () => {
    setToggle(!toggle);
    setTheme(oppositeTheme);
  };

  return (
    <>
      <motion.div
        variants={lightVariant}
        animate={toggle ? "open" : "closed"}
        className="dark:hidden"
      >
        <Image
          src={"/sun.svg"}
          height={18}
          width={18}
          alt={"line"}
          className="cursor-pointer dark:hidden md:h-[20px] md:w-[20px]"
          onClick={handleToggle}
        />
      </motion.div>
      <motion.div
        className="hidden dark:block"
        variants={darkVariant}
        animate={toggle ? "open" : "closed"}
      >
        <Image
          src={"/moon.svg"}
          height={20}
          width={20}
          alt={"line"}
          className="hidden cursor-pointer dark:block"
          onClick={handleToggle}
        />
      </motion.div>
    </>
  );
}

// "use client";

// import * as React from "react";
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
// import { useTheme } from "next-themes";

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export function Toggle() {
//   const { setTheme } = useTheme();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         {/* <Button className="bg-[#3b82f6] hover:bg-[#3b82f6]/90"> */}
//         <Button
//           // variant="ghost"
//           className="rounded-full bg-white hover:bg-white  dark:bg-black border-none ring-0"
//         >
//           <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[#3b82f6] hover:text-[#3b82f6]/80" />
//           <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[#3b82f6] hover:text-[#3b82f6]/80" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem
//           onClick={() => setTheme("light")}
//           className="text-[#3b82f6] hover:text-[#3b82f6]/90"
//         >
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem
//           onClick={() => setTheme("dark")}
//           className="text-[#3b82f6] hover:text-[#3b82f6]/90"
//         >
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem
//           onClick={() => setTheme("system")}
//           className="text-[#3b82f6] hover:text-[#3b82f6]/90"
//         >
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
