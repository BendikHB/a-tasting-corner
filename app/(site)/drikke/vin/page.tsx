import { ArrowRight } from "@/public/icons/arrow-right";
import { getPage, getWines } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import React, { Suspense } from "react";
import SearchFilterWines from "@/components/search-filter-wines";
import FilteredWines from "@/components/filtered-wines";

export default async function Page() {
  const page = await getPage("vin");
  const wines = await getWines();
  const { image, alt, url, linkText, heading, intro } = page;

  return (
    <div className="mx-auto">
      <section className="flex flex-col md:flex-row gap-5 p-5 bg-black md:h-[50vh]">
        <div className="md:w-1/2 bg-black p-6 md:p-12 pb-8 md:pb-16 h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-5xl mb-5 max-w-md font-Raleway">{heading}</h1>
          <div className="text-xl">
            <PortableText value={intro} />
          </div>
        </div>
        {image && (
          <Link
            href={url}
            className="relative md:w-1/2 cursor-pointer h-72 md:h-full"
          >
            <Image
              src={image}
              alt={alt}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {url && (
              <div className="px-6 md:px-12 py-4 md:py-8 bg-black absolute bottom-0 left-0">
                <div
                  className={`text-white text-xl md:text-3xl flex items-end`}
                >
                  {linkText}
                  <div className="pb-2 pl-3">
                    <ArrowRight width={48} height={10} color={"#FFF"} />
                  </div>
                </div>
              </div>
            )}
          </Link>
        )}
      </section>
      <section className="flex flex-col items-center mx-auto pt-8 md:pt-16 px-5 md:px-10 max-w-screen-2xl">
        <Suspense>
          <SearchFilterWines />
          {wines && <FilteredWines wines={wines} />}
        </Suspense>
      </section>
    </div>
  );
}
