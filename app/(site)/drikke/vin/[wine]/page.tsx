import WineCard from "@/components/wine-card";
import { ArrowRight } from "@/public/icons/arrow-right";
import { getWine } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  params: { wine: string };
};

export default async function Wine({ params }: Props) {
  const slug = params.wine;
  const wine = await getWine(slug);

  return (
    <>
      <section className="w-full">
        <div className="h-[600px]">
          <div className="h-full w-full relative">
            {wine?.background && (
              <Image
                src={wine.background}
                alt={wine.bgAlt}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            )}
          </div>
        </div>
        <div className="bg-light max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:px-[5%]">
          <h1 className="text-4xl md:text-5xl py-10 text-center md:text-left ">
            {wine.name}
          </h1>
          {wine.url && (
            <Link href={wine.url} className="mb-10 md:mb-0">
              <div className="px-6 md:px-8  py-4 md:py-6 bg-black ">
                <div className={`text-white text-xl md:text-xl flex items-end`}>
                  kjøp på vinmonopolet
                  <div className="pb-2 pl-3">
                    <ArrowRight width={38} height={8} color={"#FFF"} />
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>
      <section className="my-16 px-5 md:pl-[10%] max-w-7xl mx-auto">
        <div className="flex gap-8 flex-col md:flex-row">
          <div>
            <Image
              src={wine.bottle}
              alt={wine.bottleAlt}
              width={100}
              height={300}
            />
          </div>
          <div className="pt-4">
            {wine.recommended && <p>Vi anbefaler denne vinen</p>}
            <h2 className="text-3xl">Kort om vinen:</h2>
            <div className="mt-4 md:w-3/4">
              <PortableText value={wine.content} />
              {wine.recommendation && (
                <div className="mt-4">
                  <h3 className="font-semibold">
                    Hvorfor vi vil anbefale denne vinen
                  </h3>
                  <PortableText value={wine.recommendation} />
                </div>
              )}
            </div>
            <div className="flex text-center gap-12 mt-8">
              <div>
                <h3 className="font-medium">Type</h3>
                <p className="text-xl">{wine.type}</p>
              </div>
              <div>
                <h3 className="font-medium">Land</h3>
                <p className="text-xl">{wine.region}</p>
              </div>
              <div>
                <h3 className="font-medium">Årgang</h3>
                <p className="text-xl">{wine.vintage}</p>
              </div>
              <div>
                <h3 className="font-medium">Score</h3>
                <p className="text-xl">{wine.rating}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {wine.similar && wine.similar.length && (
        <section className="mb-16 mt-2 pl-[10%] max-w-7xl mx-auto">
          <div className="w-16 border-t-2"></div>
          <div className="flex">
            <h2 className="text-3xl mt-3">Lignende viner</h2>

            <div className="flex gap-6 pt-6">
              {wine.similar.map((d) => {
                return (
                  <WineCard key={d._id} data={d} basePath="/drikke/vin/" />
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
