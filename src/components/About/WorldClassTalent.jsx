import React from "react";

export default function WorldClassTalent() {
  return (
    <div className="bg-[#fdf3f0] sm:rounded-xl">
      <div className="lg:grid lg:grid-cols-[2fr_3fr] sm:rounded-lg">
        <img
          src="/assets/about/mobile/image-world-class-talent.jpg"
          className="w-full object-cover block sm:hidden"
        />
        <img
          src="/assets/about/tablet/image-world-class-talent.jpg"
          className="w-full max-h-80 object-cover hidden sm:block lg:hidden rounded-tr-lg rounded-tl-lg"
        />
        <img
          src="/assets/about/desktop/image-world-class-talent.jpg"
          className="w-full lg:h-[640px] object-cover hidden lg:block rounded-tl-lg rounded-bl-lg"
        />
        <div className="text-center  py-20 md:py-20 px-6 sm:px-12 md:px-16 xl:px-24 lg:text-left my-auto md:rounded-br-lg md:rounded-bl-lg min-h-[480px] sm:min-h-[300px] flex flex-col items-center justify-center lg:items-start lg:gap-8">
          <h1 className="text-3xl text-[#E7816B] sm:text-4xl lg:text-5xl font-medium mb-8">
            World Class Talent
          </h1>
          <p className="text-base ">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
            <br /> <br /> Our team is multi-disciplinary and we are not merely
            interested in form — content and meaning are just as important. We
            give great importance to craftsmanship, service, and prompt
            delivery. Clients have always been impressed with our high-quality
            outcomes that encapsulates their brand's story and mission.
          </p>
        </div>
      </div>
    </div>
  );
}
