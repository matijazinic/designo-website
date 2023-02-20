import React from "react";

export default function Workflow() {
  const data = [
    {
      title: "passionate",
      description:
        "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
      image: "/designo-website/assets/home/desktop/illustration-passionate.svg",
    },
    {
      title: "resourceful",
      description:
        "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.",
      image:
        "/designo-website/assets/home/desktop/illustration-resourceful.svg",
    },
    {
      title: "friendly",
      description:
        "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
      image: "/designo-website/assets/home/desktop/illustration-friendly.svg",
    },
  ];
  return data.map((item) => {
    return (
      <div className="text-center md:text-left flex flex-col items-center justify-center gap-10 md:grid md:grid-cols-[1fr_2fr] lg:flex lg:text-center">
        <img
          src={item.image}
          className="h-52 w-52 bg-gradient-to-r from-[#f0e8e8] to-[#fdfcfc] rounded-full mix-blend-normal bg-opacity-20 m"
        />
        <div className="flex flex-col  gap-6">
          <h2 className="uppercase font-medium text-xl tracking-[5px]">
            {item.title}
          </h2>
          <p className="text-base">{item.description}</p>
        </div>
      </div>
    );
  });
}
