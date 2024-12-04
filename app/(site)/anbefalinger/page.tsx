import { getDrinks, getFoods, getPage, getWines } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import React, { Suspense } from "react";
import { ArrowRight } from "@/public/icons/arrow-right";
import FilteredRecommendations from "@/components/filtered-recommendations";
import SearchFilterRecommendations from "@/components/search-filter-recommendations/search-filter-posts";

export default async function Page() {
  const page = await getPage("anbefalinger");
  const drinks = await getDrinks();
  const wines = await getWines();
  const food = await getFoods();

  const {
    image,
    alt,
    imageTwo,
    altTwo,
    url,
    linkText,
    urlTwo,
    linkTextTwo,
    name,
    intro,
  } = page;

  return (
    <div className="mx-auto">
      <section className="flex flex-col md:flex-row gap-5 p-5 bg-black h-[80vh] md:h-[50vh]">
        {image && url && (
          <Link href={url} className="relative md:w-1/2 cursor-pointer h-full">
            <Image
              src={image}
              alt={alt}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {url && (
              <div className="px-6 md:px-12 py-4 md:py-8 bg-black absolute bottom-0 left-0">
                <button
                  className={`text-white text-2xl md:text-3xl flex items-end`}
                >
                  {linkText}
                  <div className="pb-2 pl-3">
                    <ArrowRight width={48} height={10} color={"#fff"} />
                  </div>
                </button>
              </div>
            )}
          </Link>
        )}
        {imageTwo && urlTwo && (
          <Link
            href={urlTwo}
            className="relative md:w-1/2 h-full cursor-pointer"
          >
            <Image
              src={imageTwo}
              alt={altTwo}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {urlTwo && (
              <div className="px-6 md:px-12 py-4 md:py-8 bg-black absolute bottom-0 left-0">
                <button
                  className={`text-white text-2xl md:text-3xl flex items-end`}
                >
                  {linkTextTwo}
                  <div className="pb-2 pl-3">
                    <ArrowRight width={48} height={10} color={"#fff"} />
                  </div>
                </button>
              </div>
            )}
          </Link>
        )}
      </section>
      <section className="max-w-4xl mx-auto pt-20 px-4">
        <h1 className="text-center text-6xl mb-5 max-w-md mx-auto">{name}</h1>
        <div className="text-center text-xl">
          <PortableText value={intro} />
        </div>
      </section>

      <section className="flex flex-col items-center mx-auto pt-8 md:pt-16 px-5 md:px-10 max-w-screen-2xl">
        <Suspense>
          <SearchFilterRecommendations />
          <FilteredRecommendations drinks={drinks} food={food} wines={wines} />
        </Suspense>
      </section>
    </div>
  );
}
