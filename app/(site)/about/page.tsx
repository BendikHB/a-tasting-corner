import { Module } from "@/components/Module";
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Page() {
  const page = await getPage("about");
  const {
    image,
    alt,
    altTwo,
    imageTwo,
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
          <div className="bg-black flex gap-5 p-5 h-[75dvh]">
            <div className="h-full w-1/2 flex flex-col justify-center text-white px-8">
              <h1 className="text-5xl w-4/5">{heading}</h1>
              <div className="text-xl w-4/5 mt-5">
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
                className="relative h-full w-1/2 cursor-pointer"
              >
                <Image src={image} alt={alt} layout="fill" objectFit="cover" />
                <button className="text-3xl absolute bottom-0 left-0 p-6 bg-black text-white">
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
