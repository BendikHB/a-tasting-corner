import DrinkCard from "@/components/drink-card";
import { getDrinks, getPage } from "@/sanity/sanity-utils";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/public/icons/arrow-right";
import { PortableText } from "next-sanity";
import SearchFilterDrinks from "@/components/search-filter-drinks";

export default async function Page() {
  const page = await getPage("drinks");
  const drinks = await getDrinks();

  const { image, alt, url, linkText, heading, intro } = page;

  return (
    <div className="mx-auto">
      <section className="flex gap-5 p-5 bg-black h-[50vh]">
        <div className="w-1/2 bg-black p-12 pb-16 h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-5xl mb-5 max-w-md font-Raleway">{heading}</h1>
          <div className="text-xl">
            <PortableText value={intro} />
          </div>
        </div>
        {image && (
          <Link href={url} className="relative w-1/2 cursor-pointer h-full">
            <Image
              src={image}
              alt={alt}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {url && (
              <div className="px-12 py-8 bg-black absolute bottom-0 left-0">
                <button className={`text-white text-3xl flex items-end`}>
                  {linkText}
                  <div className="pb-2 pl-3">
                    <ArrowRight width={48} height={10} color={"#FFF"} />
                  </div>
                </button>
              </div>
            )}
          </Link>
        )}
      </section>
      <section className="max-w-4xl mx-auto pt-20">
        <SearchFilterDrinks />
        {drinks && (
          <div className="flex gap-4">
            {drinks.map((d) => {
              return (
                <div key={d.name}>
                  <DrinkCard data={d} />
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
