import React from "react";
import { useForm } from "react-hook-form";
import Form from "./Form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({ mode: "onTouched" });
  const onSubmit = (data) => {
    console.log(data);
  };

  const displayError = (message) => {
    return (
      <div className="absolute right-0 top-[50%] translate-y-[-50%] flex flex-row gap-2">
        <p role="alert" className="text-white text-sm italic">
          {message}
        </p>
        <img className="h-5 w-5" src="/assets/contact/desktop/icon-error.svg" />
      </div>
    );
  };

  return (
    <div className="bg-hero-pattern bg-cover bg-brand lg:min-h-[600px] bg-right sm:rounded-xl grid grid-cols-1 lg:grid-cols-2 container mx-auto">
      <div className="text-center text-white py-20 sm:px-12 md:py-10 px-6 md:px-16 xl:px-24 bg-[url(/assets/about/mobile/bg-pattern-hero-about-mobile.svg)] lg:text-left my-auto md:rounded-br-lg md:rounded-bl-lg sm:min-h-[300px] flex flex-col items-center justify-center lg:items-start lg:gap-8">
        <h1 className="text-3xl sm:text-4xl font-medium mb-8 md:text-5xl">
          Contact Us
        </h1>
        <p className="text-base">
          Ready to take it to the next level? Let's talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that's relatable to your users,
          drop us a line.
        </p>
      </div>
      <div className="px-8 flex flex-col justify-center pb-16 lg:py-16">
        {isSubmitted ? (
          <>
            <div className="text-center pt-10">
              <p className="text-white text-3xl">
                Your message was sent successfully!
              </p>
              <a
                href="/designo-website/"
                className="inline-block mt-6 bg-white text-[#1d1c1e] hover:text-white hover:bg-[#FFAD9B] px-8 py-4 transition-all rounded-md uppercase font-medium mx-auto lg:mx-0"
              >
                Go to homepage
              </a>
            </div>
          </>
        ) : (
          <Form
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            displayError={displayError}
          />
        )}
      </div>
    </div>
  );
}
