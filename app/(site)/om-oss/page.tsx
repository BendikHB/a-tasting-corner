import { Module } from "@/components/Module";
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Page() {
  const page = await getPage("om-oss");
  const {
    image,
    alt,
    url,
    linkText,
    urlTwo,
    linkTextTwo,
    heading,
    intro,
    modules,
  } = page;

  return (
    <>
      {page && (
        <div className="mx-auto">
          <div className="bg-black flex flex-col md:flex-row gap-5 p-5 h-[75dvh]">
            <div className="h-full md:w-1/2 flex flex-col justify-center text-white px-8">
              <h1 className="text-5xl md:w-4/5">{heading}</h1>
              <div className="text-xl md:w-4/5 mt-5">
                <PortableText value={intro} />
              </div>
              {url && (
                <Link href={url} className="mt-4">
                  <button className="py-4 px-6 bg-white text-black">
                    {linkText}
                  </button>
                </Link>
              )}
            </div>
            {image && (
              <Link
                href={urlTwo}
                className="relative h-full md:w-1/2 w-full cursor-pointer"
              >
                <Image
                  src={image}
                  alt={alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <button className="text-2xl md:text-3xl absolute bottom-0 left-0 p-6 bg-black text-white">
                  {linkTextTwo}
                </button>
              </Link>
            )}
          </div>
          {modules &&
            modules.map((m) => {
              return <Module module={m} key={m._type} />;
            })}
        </div>
      )}
    </>
  );
}
