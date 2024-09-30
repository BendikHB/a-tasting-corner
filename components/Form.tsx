"use client";

import { useState } from "react";

interface FormComponent {
  formDestination: string | null;
}

export default function FormComponent({ formDestination }: FormComponent) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //@ts-ignore
  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    if (!formDestination) {
      alert("Error, please try again later");
      return;
    }
    try {
      const response = await fetch("/api/forms/" + { formDestination }, {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full my-6 text-md text-black mr-auto ml-5 px-8"
    >
      <input
        id="contact-name"
        type="name"
        name="name"
        autoComplete="name"
        maxLength={50}
        placeholder="name"
        className="min-w-full p-2 bg-transparent placeholder:text-black rounded-none border-b focus:bg-opacity-75"
      />
      <input
        id="contact-email"
        type="email"
        name="email"
        required
        autoComplete="email"
        maxLength={80}
        placeholder="email&#42;"
        className="min-w-full mt-2 p-2 bg-transparent placeholder:text-black rounded-none border-b focus:bg-opacity-75"
      />
      <input
        id="contact-message"
        type="text"
        name="message"
        required
        autoComplete="email"
        maxLength={300}
        placeholder="message&#42;"
        className="min-w-full min-h-24 mt-2 p-2 bg-transparent placeholder:text-black rounded-none border-b focus:bg-opacity-75"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="p-3 text-left max-w-52 text-xl bg-white mt-4 transition duration-200 border border-black hover:bg-black hover:text-white"
      >
        {isLoading ? "loading..." : "send"}
      </button>
    </form>
  );
}
