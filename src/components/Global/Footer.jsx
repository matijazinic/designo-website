import React from "react";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <>
      <div className="bg-[#1D1C1E] -mt-20 pt-40 lg:pt-48 pb-20">
        <div className="container mx-auto px-0 sm:px-4 md:px-8 lg:px-10 flex flex-col gap-10 text-white text-center md:text-left">
          <div className="flex flex-col max-md:items-center lg:items-center md:flex-row md:justify-between ">
            <a href="/">
              <img
                src="/assets/shared/desktop/logo-light.png"
                className="object-cover h-[27px]"
              />
            </a>
            <hr className="h-px my-10 border-1 border-white/10 w-full px-4 md:hidden" />
            <nav className="px-4 sm:px-0 flex flex-row items-center justify-between relative">
              <div>
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
          </div>
          <hr className="h-px my-2 border-1 border-white/10 w-full px-4 hidden md:block" />
          <div className="flex flex-col gap-10 md:gap-4 md:grid md:grid-cols-3">
            <div className="leading-8 text-white/50">
              <p className="font-bold">Designo Central Office</p>
              <p>
                3886 Wellington Street <br /> Toronto, Ontario M9C 3J5
              </p>
            </div>
            <div className="leading-8 text-white/50">
              <p className="font-bold">Contact Us (Central Office)</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
            <SocialIcons />
          </div>
        </div>
      </div>
    </>
  );
}
