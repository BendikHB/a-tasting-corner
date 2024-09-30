import { Module } from "@/components/Module";
import { getPage } from "@/sanity/sanity-utils";
import { log } from "console";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const page = await getPage("/");
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
  const styles = {
    dark1: dark ? "text-white" : "text-black",
    dark2: darkTwo ? "text-white" : "text-black",
  }
  
  

  return (
    <div className="mx-auto">
      <section className="flex gap-5 p-5">
        {image && (
          <Link href={url} className="relative max-w-1/2 cursor-pointer">
            <Image src={image} alt={alt} width={1080} height={1080} />
            {url && (
              <button className={`${styles.dark1} text-3xl  absolute bottom-7 left-8`}>
                {linkText}
              </button>
            )}
          </Link>
        )}
        {imageTwo && (
          <Link href={urlTwo} className="relative max-w-1/2 cursor-pointer">
            <Image
              src={imageTwo}
              alt={altTwo}
              width={1080}
              height={1080}
            />
            {urlTwo && (
              <button className={`${styles.dark2} text-3xl absolute bottom-7 left-8`}>
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
