import React from "react";

export default function Contact() {
  return (
    <>
      <div className="text-center text-white py-20 sm:px-12 md:py-10 px-6 md:px-16 xl:px-24 bg-[url(/assets/about/mobile/bg-pattern-hero-about-mobile.svg)] lg:text-left my-auto md:rounded-br-lg md:rounded-bl-lg sm:min-h-[300px] flex flex-col items-center justify-center lg:items-start lg:gap-8">
        <h1 className="text-3xl sm:text-4xl font-medium mb-8 md:text-5xl">
          Contact Us
        </h1>
        <p className="text-base ">
          Ready to take it to the next level? Let's talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that's relatable to your users,
          drop us a line.
        </p>
      </div>
      <div className="px-8 flex flex-col justify-center pb-16">
        <form className="flex flex-col items-end">
          <div class="w-full mb-4">
            <input
              type="text"
              name="name"
              id="name"
              className="h-16 block py-3 px-6 w-full text-sm text-white bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:white focus:border-b-4 peer placeholder:text-white/50 "
              placeholder="Name"
              required
            />
          </div>
          <div class="w-full mb-4">
            <input
              type="email"
              name="email"
              id="email"
              className="h-16 block py-3 px-6 w-full text-sm text-white bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:white focus:border-b-4 peer placeholder:text-white/50 "
              placeholder="Email address"
              required
            />
          </div>
          <div class="w-full mb-4">
            <input
              type="text"
              name="phone"
              id="phone"
              className="h-16 block py-3 px-6 w-full text-sm text-white bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:white focus:border-b-4 peer placeholder:text-white/50 "
              placeholder="Phone number"
              required
            />
          </div>
          <div class="w-full mb-4">
            <textarea
              type="text"
              name="message"
              id="message"
              className="h-32 block py-3 px-6 w-full text-sm text-white bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:white focus:border-b-4 peer placeholder:text-white/50 "
              placeholder="Your message"
              required
            />
          </div>
          <button className="bg-white text-[#1d1c1e] hover:text-white hover:bg-[#FFAD9B] px-12 py-4 transition-all rounded-md uppercase font-medium mt-8 mx-auto lg:mx-0">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
