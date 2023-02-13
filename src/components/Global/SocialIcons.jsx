import React from "react";

export default function SocialIcons() {
  return (
    <div className="flex flex-row gap-4 justify-center md:justify-end md:items-end">
      <a href="#">
        <img
          className="h-6 w-6 transition-all hover:brightness-125"
          src="/assets/shared/desktop/icon-facebook.svg"
          alt="Facebook icon"
        />
      </a>
      <a href="#">
        <img
          className="h-6 w-6 transition-all hover:brightness-125"
          src="/assets/shared/desktop/icon-youtube.svg"
          alt="Youtube icon"
        />
      </a>
      <a href="#">
        <img
          className="h-6 w-6 transition-all hover:brightness-125"
          src="/assets/shared/desktop/icon-twitter.svg"
          alt="Twitter icon"
        />
      </a>
      <a href="#">
        <img
          className="h-6 w-6 transition-all hover:brightness-125"
          src="/assets/shared/desktop/icon-pinterest.svg"
          alt="Pinterest icon"
        />
      </a>
      <a href="#">
        <img
          className="h-6 w-6 transition-all hover:brightness-125"
          src="/assets/shared/desktop/icon-instagram.svg"
          alt="Instagram icon"
        />
      </a>
    </div>
  );
}
