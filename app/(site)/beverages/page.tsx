import { Module } from "@/components/Module";
import { ArrowRight } from "@/public/icons/arrow-right";
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const page = await getPage("/beverages");
  const {
    image,
    alt,
    altTwo,
    dark,
    darkTwo,
    imageTwo,
    url,
    linkText,
    urlTwo,
    linkTextTwo,
    heading,
    intro,
    modules,
  } = page;
  const textStyles = {
    dark1: dark ? "text-white" : "text-black",
    dark2: darkTwo ? "text-white" : "text-black",
  };
  const iconColor = {
    color1: dark ? "#FFF" : "#000",
    color2: darkTwo ? "#FFF" : "#000",
  };

  return (
    <div className="mx-auto">
      <section className="flex gap-5 p-5 bg-black h-[50vh]">
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
                <button
                  className={`${textStyles.dark1} text-3xl flex items-end`}
                >
                  {linkText}
                  <div className="pb-2 pl-3">
                    <ArrowRight
                      width={48}
                      height={10}
                      color={iconColor.color1}
                    />
                  </div>
                </button>
              </div>
            )}
          </Link>
        )}
        {imageTwo && (
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
                <button
                  className={`${textStyles.dark2} text-3xl flex items-end`}
                >
                  {linkTextTwo}
                  <div className="pb-2 pl-3">
                    <ArrowRight
                      width={48}
                      height={10}
                      color={iconColor.color2}
                    />
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
      {modules &&
        modules.map((m) => {
          return <Module module={m} key={m._type} />;
        })}
    </div>
  );
}