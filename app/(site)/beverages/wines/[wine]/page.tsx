import WineCard from "@/components/wine-card";
import { getWine } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
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
        <div className="bg-light max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl py-10 text-center md:text-left md:ml-[10%]">
            {wine.name}
          </h1>
        </div>
      </section>
      <section className="my-16 pl-[10%] max-w-7xl mx-auto">
        <div className="flex gap-8 flex-col md:flex-row">
          <div>
            <Image src={wine.image} alt={wine.alt} width={100} height={300} />
          </div>
          <div className="pt-4">
            {wine.recommended && <p>We recommend this wine</p>}
            <h2 className="text-3xl">About this wine:</h2>
            <div className="flex text-center gap-12 mt-8">
              <div>
                <h3 className="font-medium">Type</h3>
                <p className="text-xl">{wine.type}</p>
              </div>
              <div>
                <h3 className="font-medium">Region</h3>
                <p className="text-xl">{wine.region}</p>
              </div>
              <div>
                <h3 className="font-medium">Vintage</h3>
                <p className="text-xl">{wine.vintage}</p>
              </div>
              <div>
                <h3 className="font-medium">Score</h3>
                <p className="text-xl">{wine.rating}</p>
              </div>
            </div>
            <div className="mt-4">
              <PortableText value={wine.content} />
              {wine.recommendation && (
                <div className="mt-4">
                  <h3 className="font-semibold">Why we recommend this wine</h3>
                  <PortableText value={wine.recommendation} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 mt-2 pl-[10%] max-w-7xl mx-auto">
        <div className="w-16 border-t-2"></div>
        <div className="flex">
          <h2 className="text-3xl mt-3">Similar options:</h2>
          {wine.similar && (
            <div className="flex gap-6 pt-6">
              {wine.similar.map((d) => {
                return (
                  <WineCard key={d._id} data={d} basePath="/beverages/wines/" />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
