import React from "react";

export default function LocationBlobs() {
  const data = [
    {
      country: "Canada",
      href: "/locations/#canada",
      image: "/assets/shared/desktop/illustration-canada.svg",
    },
    {
      country: "Australia",
      href: "/locations/#australia",
      image: "/assets/shared/desktop/illustration-australia.svg",
    },
    {
      country: "United Kingdom",
      href: "/locations/#united-kingdom",
      image: "/assets/shared/desktop/illustration-united-kingdom.svg",
    },
  ];
  return data.map((item) => {
    return (
      <div className="text-center flex flex-col items-center justify-center gap-10">
        <img
          src={item.image}
          className="h-52 w-52 bg-gradient-to-r from-[#f0e8e8] to-[#fdfcfc] rounded-full mix-blend-normal bg-opacity-20 m"
        />
        <div className="flex flex-col gap-6 items-center">
          <h2 className="uppercase font-medium text-xl tracking-[5px]">
            {item.country}
          </h2>
          <a
            href={item.href}
            className="bg-[#E7816B] text-white hover:bg-[#FFAD9B] px-8 py-4 transition-all rounded-md uppercase font-medium max-w-[180px] mx-auto lg:mx-0"
          >
            See Location
          </a>
        </div>
      </div>
    );
  });
}
