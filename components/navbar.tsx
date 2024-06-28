import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-24  px-10 ">
      <img
        src="/public/logo.svg"
        width="40"
        height="40"
        alt="Hero"
        className=""
      />
      <nav className="flex gap-4  items-center">
        <Link
          href="#"
          className="text-sm font-medium text-muted-foreground hover:text-black/40 text-[#3b82f6]  transition-colors"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-muted-foreground hover:text-black/40 text-[#3b82f6]  transition-colors"
        >
          Features
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-muted-foreground hover:text-black/40 text-[#3b82f6]  transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-muted-foreground hover:text-black/40 text-[#3b82f6]  transition-colors"
        >
          Contact
        </Link>
      </nav>
      <div>
        <button className="inline-flex h-10 items-center bg-[#3b82f6] text-white hover:bg-[#3b82f6]/80  justify-center rounded-md  px-8 text-sm font-medium  shadow-2xl transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          <Link href="#">Log In</Link>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
