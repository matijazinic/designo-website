import React from "react";

export default function Projects({ data }) {
  return data.map((item) => {
    return (
      <div className="mt-16 lg:mt-0 px-8 sm:px-0 ">
        <a
          href="#"
          className="block  md:grid md:grid-cols-2 lg:block bg-brand-alt hover:bg-brand rounded-xl group transition-all"
        >
          <img
            src={item.image}
            className="max-h-[320px] m w-full object-cover rounded-tr-xl rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none lg:rounded-tr-xl lg:rounded-tl-xl lg:rounded-bl-none"
          />
          <div className="text-center flex flex-col gap-6 justify-center lg:justify-start py-10 sm:py-16 lg:py-12 px-5  rounded-br-xl rounded-bl-xl md:rounded-tr-xl md:rounded-bl-none lg:rounded-br-xl lg:rounded-bl-xl lg:rounded-tr-none lg:min-h-[15rem]">
            <h2 className="text-brand group-hover:text-white text-xl font-medium tracking-[5px] uppercase">
              {item.title}
            </h2>
            <p className="group-hover:text-white">{item.description}</p>
          </div>
        </a>
      </div>
    );
  });
}
