import React from "react";

export default function Hero() {
  return (
    <div className="bg-brand sm:rounded-xl container mx-auto">
      <div className="lg:grid lg:grid-cols-[3fr_2fr] sm:rounded-lg">
        <img
          src="/assets/about/mobile/image-about-hero.jpg"
          className="w-full object-cover block sm:hidden"
        />
        <img
          src="/assets/about/tablet/image-about-hero.jpg"
          className="w-full max-h-80 object-cover hidden sm:block lg:hidden rounded-tr-lg rounded-tl-lg"
        />
        <img
          src="/assets/about/desktop/image-about-hero.jpg"
          className="w-full max-h-[480px] object-cover hidden lg:block lg:order-2 rounded-tr-lg rounded-br-lg"
        />
        <div className="text-center text-white py-20 sm:px-12 md:py-10 px-6 md:px-16 xl:px-24 bg-[url(/assets/about/mobile/bg-pattern-hero-about-mobile.svg)] lg:text-left my-auto md:rounded-br-lg md:rounded-bl-lg flex flex-col items-center justify-center lg:items-start lg:gap-8">
          <h1 className="text-3xl sm:text-4xl font-medium mb-8 md:text-5xl">
            About Us
          </h1>
          <p className="text-base ">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We've partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We're always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </p>
        </div>
      </div>
    </div>
  );
}
