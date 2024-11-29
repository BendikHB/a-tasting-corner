import { getDrinks, getPage } from "@/sanity/sanity-utils";
import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/public/icons/arrow-right";
import { PortableText } from "next-sanity";
import SearchFilterDrinks from "@/components/search-filter-drinks";
import FilteredDrinks from "@/components/filtered-drinks";

export default async function Page() {
  const page = await getPage("drinker");
  const drinks = await getDrinks();

  const { image, alt, url, linkText, heading, intro } = page;

  return (
    <div className="mx-auto">
      <section className="flex flex-col md:flex-row items-center justify-center gap-5 p-5 bg-black md:h-[50vh]">
        {image && (
          <Link
            href={url}
            className="relative md:w-1/2 cursor-pointer h-72 md:h-full w-full"
          >
            <Image
              src={image}
              alt={alt}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {url && (
              <div className="px-6 md:px-12  py-4 md:py-8 bg-black absolute bottom-0 left-0">
                <button
                  className={`text-white text-xl md:text-3xl flex items-end`}
                >
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
      <section className="max-w-4xl mx-auto pt-20 px-4">
        <h1 className="text-center text-6xl mb-5 max-w-md mx-auto">
          {heading}
        </h1>
        <div className="text-center text-xl">
          <PortableText value={intro} />
        </div>
      </section>
      <section className="flex flex-col items-center mx-auto pt-16 px-5 md:px-10">
        <Suspense>
          <SearchFilterDrinks />
          {drinks && <FilteredDrinks drinks={drinks} />}
        </Suspense>
      </section>
    </div>
  );
}
