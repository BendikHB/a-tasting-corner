import { Module } from "@/components/Module";
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const page = await getPage("/");
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
    <div className="mx-auto">
      <section className="bg-black flex gap-5 p-5 h-dvh">
        {image && (
          <Link href={url} className="relative h-full w-1/2 cursor-pointer">
            <Image src={image} alt={alt} layout="fill" objectFit="cover" />
            {url && (
              <button className="text-3xl absolute bottom-7 left-8">
                {linkText}
              </button>
            )}
          </Link>
        )}
        {imageTwo && (
          <Link href={urlTwo} className="relative h-full w-1/2 cursor-pointer">
            <Image
              src={imageTwo}
              alt={altTwo}
              layout="fill"
              objectFit="cover"
              objectPosition="50% 100%"
            />
            {urlTwo && (
              <button className="text-3xl absolute bottom-7 left-8 text-white">
                {linkTextTwo}
              </button>
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
