import React from "react";

export default function Design({ isBig, title, imageName, href }) {
  const Content = () => {
    return (
      <a
        href={`/projects/${href}`}
        className="h-full w-full py-20 md:py-12 lg:py-20 xl:py-24 px-8 my-auto bg-black/70 rounded-lg hover:bg-brand/70 flex flex-col justify-center items-center transition-all"
      >
        <h2 className="tracking-[1.4px] md:tracking-[2px] text-3xl md:text-4xl xl:text-5xl text-center font-medium">
          {title}
        </h2>
        <div className="flex flex-row justify-center mt-8">
          <p className="tracking-[5px]">View Projects</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#E7816B"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </div>
      </a>
    );
  };

  const BigSection = () => {
    return (
      <div
        className="bg-cover text-white rounded-lg uppercase lg:row-span-2 lg:h-full"
        style={{
          backgroundImage: `url(/designo-website/assets/home/desktop/image-${imageName}.jpg`,
        }}
      >
        <Content />
      </div>
    );
  };

  const NormalSection = () => {
    return (
      <div
        className="bg-cover text-white rounded-lg uppercase"
        style={{
          backgroundImage: `url(/designo-website/assets/home/desktop/image-${imageName}.jpg`,
        }}
      >
        <Content />
      </div>
    );
  };
  return isBig ? <BigSection /> : <NormalSection />;
}
