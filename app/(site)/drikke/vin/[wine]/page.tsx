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

  let typeString;
  switch (wine.type) {
    case "rod":
      typeString = "Rød";
      break;
    case "rose":
      typeString = "Rosé";
      break;
    default:
      typeString = wine.type;
      break;
  }

  let regionString;
  switch (wine.region) {
    case "sor-afrika":
      regionString = "Sør Afrika";
      break;
    default:
      regionString = wine.region;
      break;
  }

  return (
    <>
      <section className="w-full">
        <div className="h-64 md:h-[600px]">
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
        <div className="bg-light max-w-7xl mx-auto flex justify-between items-center md:px-[5%]">
          <div className="bg-white px-2 py-2 h-full w-[90px] md:w-[0px] flex-shrink-0 md:hidden ">
            <Image
              src={wine.bottle}
              alt={wine.bottleAlt}
              width={100}
              height={300}
            />
          </div>
          <div className="mx-auto flex flex-col md:flex-row justify-center md:justify-between w-full items-center px-6 md:px-[2%] ">
            <h1 className="text-3xl md:text-5xl py-4 md:py-10 text-center md:text-left ">
              {wine.name}
            </h1>
            {wine.url && (
              <Link href={wine.url}>
                <div className="px-6 md:px-8  py-4 md:py-6 bg-black ">
                  <div
                    className={`text-white text-base md:text-xl flex items-end`}
                  >
                    kjøp på vinmonopolet
                    <div className="pb-2 pl-3">
                      <ArrowRight width={38} height={8} color={"#FFF"} />
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
      <section className="my-8 md:my-16 px-5 md:pl-[10%] max-w-7xl mx-auto">
        <div className="flex md:gap-8 flex-col md:flex-row">
          <div className="w-[0px] md:w-[100px] flex-shrink-0">
            <Image
              src={wine.bottle}
              alt={wine.bottleAlt}
              width={100}
              height={300}
            />
          </div>
          <div className="pt-4">
            {wine.recommended && <p>Vi anbefaler denne vinen</p>}
            <h2 className="text-2xl md:text-3xl">Kort om vinen:</h2>
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
            <div className="flex text-center gap-12 mt-8 px-4">
              <div>
                <h3 className="font-medium text-xs">Type</h3>
                <p className="text-base capitalize">{typeString}</p>
              </div>
              <div>
                <h3 className="font-medium text-xs">Land</h3>
                <p className="text-base capitalize">{regionString}</p>
              </div>
              <div>
                <h3 className="font-medium text-xs">Årgang</h3>
                <p className="text-base">{wine.vintage}</p>
              </div>
              <div>
                <h3 className="font-medium text-xs">Score</h3>
                <p className="text-base">{wine.rating}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {wine.similar && wine.similar.length && (
        <section className="mb-16 mt-2 px-6 md:pl-[10%] max-w-7xl mx-auto">
          <div className="w-16 border-t-2"></div>
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl mt-3">Lignende viner</h2>

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
