"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
}

const navs: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/Blog" },
  { name: "Pricing", href: "/Pricing" },
  { name: "Contact", href: "/Contact" },
];

export function Navbar() {
  const ref = useRef<HTMLUListElement>(null);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const node = e.currentTarget;
    const rect = node.getBoundingClientRect();
    setLeft(node.offsetLeft);
    setWidth(rect.width);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <header className="w-full pt-10 flex flex-row ">
      <ul
        onMouseLeave={handleMouseLeave}
        className="z-50 flex w-fit mx-auto relative rounded-full  border p-1.5 border-gray-300 dark:border-gray-700"
        ref={ref}
      >
        <Image
          src="/logo.svg"
          className="pl-4"
          width={35}
          height={20}
          alt="logo"
        />
        {navs.map((item) => (
          <li
            key={item.name}
            onMouseEnter={handleMouseEnter}
            className="z-10  block cursor-pointer px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary text-gray-700 dark:text-gray-300 tracking-tight"
          >
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
        <motion.li
          animate={{ left, width, opacity }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="absolute inset-0 my-1.5 rounded-full bg-secondary"
        />
      </ul>
    </header>
  );
}
