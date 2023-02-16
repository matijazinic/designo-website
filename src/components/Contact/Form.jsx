import React from "react";

export default function Form({
  register,
  handleSubmit,
  errors,
  onSubmit,
  displayError,
}) {
  return (
    <form className="flex flex-col items-end" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full mb-4 relative">
        <input
          type="text"
          name="name"
          id="name"
          className="h-16 block py-3 px-6 w-full text-sm text-white bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:white focus:border-b-4 peer placeholder:text-white/50 "
          placeholder="Name"
          required
          {...register("name", {
            required: { value: true, message: "Can't be empty" },
            minLength: {
              value: 3,
              message: "Must be longer than 2 characters",
            },
          })}
        />
        {errors?.name && displayError(errors.name.message)}
      </div>
      <div className="w-full mb-4 relative">
        <input
          type="email"
          name="email"
          id="email"
          className="h-16 block py-3 px-6 w-full text-sm text-white bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:white focus:border-b-4 peer placeholder:text-white/50 "
          placeholder="Email address"
          required
          {...register("email", {
            required: { value: true, message: "Can't be empty" },
            pattern: {
              value:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors?.email && displayError(errors.email.message)}
      </div>
      <div className="w-full mb-4 relative">
        <input
          type="text"
          name="phone"
          id="phone"
          className="h-16 block py-3 px-6 w-full text-sm text-white bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:white focus:border-b-4 peer placeholder:text-white/50 "
          placeholder="Phone number"
          required
          {...register("phone", {
            required: { value: true, message: "Can't be empty" },
            pattern: {
              value:
                /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
              message: "Enter a valid phone number",
            },
          })}
        />
        {errors?.phone && displayError(errors.phone.message)}
      </div>
      <div className="w-full mb-4 relative">
        <textarea
          type="text"
          name="message"
          id="message"
          className="h-32 block py-3 px-6 w-full text-sm text-white bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:white focus:border-b-4 peer placeholder:text-white/50 "
          placeholder="Your message"
          required
          {...register("message", {
            required: { value: true, message: "Can't be empty" },
            minLength: {
              value: 10,
              message: "Message is too short",
            },
          })}
        />
        {errors?.message && displayError(errors.message.message)}
      </div>
      <button className="bg-white text-[#1d1c1e] hover:text-white hover:bg-[#FFAD9B] px-12 py-4 transition-all rounded-md uppercase font-medium mt-8 mx-auto lg:mx-0">
        Submit
      </button>
    </form>
  );
}
