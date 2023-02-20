import React from "react";

export default function TheRealDeal() {
  return (
    <div className="bg-brand-alt sm:rounded-xl container mx-auto">
      <div className="lg:grid lg:grid-cols-[3fr_2fr] sm:rounded-lg">
        <img
          src="/designo-website/assets/about/mobile/image-real-deal.jpg"
          className="w-full object-cover block sm:hidden"
        />
        <img
          src="/designo-website/assets/about/tablet/image-real-deal.jpg"
          className="w-full max-h-80 object-cover hidden sm:block lg:hidden rounded-tr-lg rounded-tl-lg"
        />
        <img
          src="/designo-website/assets/about/desktop/image-real-deal.jpg"
          className="w-full lg:h-[640px] object-cover hidden lg:block lg:order-2 rounded-tr-lg rounded-br-lg"
        />
        <div className="text-center  py-20 md:py-20 px-6 sm:px-12 md:px-16 xl:px-24 lg:text-left my-auto md:rounded-br-lg md:rounded-bl-lg min-h-[480px] sm:min-h-[300px] flex flex-col items-center justify-center lg:items-start lg:gap-8">
          <h1 className="text-3xl text-brand sm:text-4xl lg:text-5xl font-medium mb-8">
            The real deal
          </h1>
          <p className="text-base ">
            As strategic partners in our clients' businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
            <br /> <br /> We are visual storytellers in appealing and
            captivating ways. By combining business and marketing strategies, we
            inspire audiences to take action and drive real results.
          </p>
        </div>
      </div>
    </div>
  );
}
