import FilteredFood from "@/components/filtered-food";
import SearchFilterFood from "@/components/search-filter-food";
import { ArrowRight } from "@/public/icons/arrow-right";
import { getFoods, getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
  const page = await getPage("mat");
  const food = await getFoods();

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
  } = page;

  return (
    <div className="mx-auto">
      <section className="flex flex-col md:flex-row gap-5 p-5 bg-black h-[85vh] md:h-[50vh]">
        {image && (
          <Link href={url} className="relative md:w-1/2 cursor-pointer h-full">
            <Image
              src={image}
              alt={alt}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {url && (
              <div className="px-6 md:px-12  pt-4 pb-2 md:py-8 bg-black absolute bottom-0 left-0">
                <button
                  className={`text-white text-xl md:text-3xl flex items-end`}
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
        {imageTwo && (
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
              <div className="px-6 md:px-12  pt-4 pb-2 md:py-8 bg-black absolute bottom-0 left-0">
                <button
                  className={`text-white text-xl md:text-3xl flex items-end`}
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
      <section className="max-w-4xl mx-auto pt-20">
        <h1 className="text-center text-6xl mb-5 max-w-md mx-auto">
          {heading}
        </h1>
        <div className="text-center text-xl">
          <PortableText value={intro} />
        </div>
      </section>
      <section className="flex flex-col items-center mx-auto pt-16 px-5 md:px-10">
        <Suspense>
          <SearchFilterFood />
          {food && <FilteredFood food={food} />}
        </Suspense>
      </section>
    </div>
  );
}
