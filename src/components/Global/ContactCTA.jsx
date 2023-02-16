import React from "react";

export default function ContactCTA() {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-[#E7816B] bg-right rounded-lg text-white py-16 lg:py-20 xl:py-24 px-6 lg:px-16 xl:px-28 flex flex-col gap-10 md:gap-16 lg:grid lg:grid-cols-2 lg:items-center">
        <div className="md:px-20 lg:px-0 text-center lg:text-left">
          <h2 className="text-3xl font-medium md:text-4xl md:px-20 lg:px-0">
            Let's talk about your project
          </h2>
          <p className="mt-10">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div className="text-center lg:text-right">
          <a
            href="/contact"
            className="bg-white text-[#1d1c1e] hover:text-white hover:bg-[#FFAD9B] px-8 py-4 transition-all rounded-md uppercase font-medium max-w-[180px] mx-auto lg:mx-0"
          >
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
}
