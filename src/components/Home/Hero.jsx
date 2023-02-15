import React from "react";

export default function Hero() {
  return (
    <>
      <div className="text-white flex flex-col gap-12 my-auto px-4 sm:px-8 md:px-16 lg:px-20 2xl:pl-32 lg:pr-0 pt-20 lg:pt-0 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium ">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="leading-6">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <a
          href="#projects"
          className="text-center bg-white text-[#1d1c1e] hover:text-white hover:bg-[#FFAD9B] px-8 py-4 transition-all rounded-md uppercase font-medium max-w-[180px] mx-auto lg:mx-0"
        >
          Learn More
        </a>
      </div>
      <div className="max-h-[640px] md:mx-auto overflow-hidden">
        <img
          src="/assets/home/desktop/image-hero-phone.png"
          className="mt-24 sm:mt-16 lg:mt-32 xl:mt-10 scale-150 sm:scale-125 xl:scale-110 2xl:scale-100 2xl:ml-12"
        />
      </div>
    </>
  );
}
