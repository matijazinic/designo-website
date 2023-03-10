import React from "react";

export default function Hero({ title, description }) {
  return (
    <div className="text-center bg-brand sm:rounded-xl text-white py-12 sm:px-12 md:py-10 px-6 md:px-16 xl:px-24 bg-[url(/designo-website/assets/about/mobile/bg-pattern-hero-about-mobile.svg)] my-auto md:rounded-br-lg md:rounded-bl-lg min-h-[300px] flex flex-col items-center justify-center lg:gap-8 container mx-auto">
      <h1 className="text-3xl sm:text-4xl font-medium mb-8 md:text-5xl">
        {title}
      </h1>
      <p className="text-base mx-auto max-w-md">{description}</p>
    </div>
  );
}
