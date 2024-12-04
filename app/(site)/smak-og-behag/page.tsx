import { getPage, getPosts } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import React, { Suspense } from "react";
import { ArrowRight } from "@/public/icons/arrow-right";
import SearchFilterPosts from "@/components/search-filter-posts/search-filter-posts";
import FilteredPosts from "@/components/filtered-posts";

export default async function Page() {
  const page = await getPage("smak-og-behag");
  const posts = await getPosts();

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
      <section className="flex gap-5 p-5 bg-black h-[50vh]">
        {image && url && (
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
                    <ArrowRight width={48} height={10} color={"#fff"} />
                  </div>
                </button>
              </div>
            )}
          </Link>
        )}
        {imageTwo && urlTwo && (
          <Link href={urlTwo} className="relative w-1/2 h-full cursor-pointer">
            <Image
              src={imageTwo}
              alt={altTwo}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {urlTwo && (
              <div className="px-12 py-8 bg-black absolute bottom-0 left-0">
                <button className={`text-white text-3xl flex items-end`}>
                  {linkTextTwo}
                  <div className="pb-2 pl-3">
                    <ArrowRight width={48} height={10} color={"#fff"} />
                  </div>
                </button>
              </div>
            )}
          </Link>
        )}
        {image && !url && (
          <div className="relative w-1/2 h-full">
            <Image
              src={image}
              alt={alt}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        )}
        {imageTwo && !urlTwo && (
          <div className="relative w-1/2 h-full">
            <Image
              src={imageTwo}
              alt={altTwo}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
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
          <SearchFilterPosts />
          <FilteredPosts posts={posts} />
        </Suspense>
      </section>
    </div>
  );
}
