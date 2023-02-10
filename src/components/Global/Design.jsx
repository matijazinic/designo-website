import React from "react";

export default function Design({ title, imageName }) {
  return (
    <div
      className={`bg-black/70 bg-blend-multiply bg-cover text-white rounded-lg py-20 md:py-12 px-8 my-auto gap-8 uppercase`}
      style={{
        backgroundImage: `url(/assets/home/desktop/image-${imageName}.jpg`,
      }}
    >
      <h2 className="tracking-[1.4px] md:tracking-[2px] text-3xl md:text-4xl text-center font-medium">
        {title}
      </h2>
      <div className="flex flex-row justify-center mt-8">
        <p className="tracking-[5px]">View Projects</p>
        <a href="#">
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
        </a>
      </div>
    </div>
  );
}
