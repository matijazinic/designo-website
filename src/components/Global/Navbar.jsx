import React, { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const hamburgerLine = `h-1 w-8 my-1 rounded-full bg-black transition ease transform duration-300`;
  return (
    <nav className="py-8 sm:py-10 md:py-12 lg:py-16 container mx-auto px-4 sm:px-0 flex flex-row items-center justify-between relative">
      <div>
        <a href="/">
          <img
            src="/assets/shared/desktop/logo-dark.png"
            className="object-cover h-[27px]"
          />
        </a>
      </div>
      <button
        onClick={() => setMobileOpen((prev) => !prev)}
        className="flex flex-col h-12 w-16 justify-center items-end group md:hidden"
      >
        <div
          className={`${hamburgerLine} ${
            mobileOpen
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`h-1 w-4  my-1 rounded-full bg-black transition ease transform duration-300 ${
            mobileOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${hamburgerLine} ${
            mobileOpen
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
      <div
        className={`${
          mobileOpen ? "flex" : "hidden"
        } absolute md:relative top-24 right-0 w-full md:w-auto md:inset-0 shadow-xl md:shadow-none rounded-lg md:rounded-none  bg-white p-10 md:p-0 md:flex flex-col md:flex-row gap-10`}
      >
        <ul className="flex flex-col md:flex-row gap-10">
          <li>
            <a
              href="/about"
              className="uppercase text-sm tracking-[2px] hover:underline hover:underline-offset-2"
            >
              Our Company
            </a>
          </li>
          <li>
            <a
              href="/locations"
              className="uppercase text-sm tracking-[2px] hover:underline hover:underline-offset-2"
            >
              Locations
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="uppercase text-sm tracking-[2px] hover:underline hover:underline-offset-2"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
