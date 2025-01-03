import DrinkCard from "@/components/drink-card";
import Ingredients from "@/components/ingredients";
import SwitchBtn from "@/components/switch-btn/switch-btn";
import { ArrowLeft } from "@/public/icons/arrow-left";
import { getDrink } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  params: { drink: string };
};

export default async function Drink({ params }: Props) {
  const slug = params.drink;
  const drink = await getDrink(slug);

  return (
    <>
      <section className="w-full">
        <div className="h-[600px]">
          <div className="h-full w-full relative">
            <Link
              href={"/drikke/drinker/"}
              className="absolute z-10 p-3 bg-black bottom-0 md:top-16 left-0 md:bottom-auto md:left-10 flex items-center"
            >
              <ArrowLeft color="#FFF" height={10} width={60} />
              <p className="pl-1 text-white">Back</p>
            </Link>
            {drink?.image && (
              <Image
                src={drink.image}
                alt={drink.alt}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            )}
            <div className="absolute left-[10%] top-1/3">
              <p className="text-5xl w-3/5 text-white">{drink.heading}</p>
              {/* cta comming here */}
            </div>
          </div>
        </div>
        <div className="bg-light pl[10%] max-w-7xl mx-auto">
          <h1 className="text-5xl py-10 ml-[10%]">{drink.name}</h1>
        </div>
      </section>
      <section className="flex flex-col md:flex-row my-16 max-w-7xl mx-auto">
        <div className="md:w-1/3 border-r px-6 md:text-right">
          <div className="md:ml-auto w-32 pr-2 mt-3">
            <SwitchBtn />
          </div>
          <h2 className="text-3xl mt-5 mb-4">Ingredienser:</h2>
          <div className="text-xl no-disc">
            <Ingredients
              data={{
                ingredientsCl: drink.ingredientsCl,
                ingredientsOz: drink.ingredientsOz,
              }}
            />
          </div>
        </div>
        <div className="md:w-2/3 px-6">
          <h2 className="text-3xl pt-6">Hvordan den lages:</h2>
          <div className="mt-4">
            <PortableText value={drink.how} />
          </div>
          {drink.additional && (
            <>
              <h2 className="text-3xl mt-16">Litt ekstra:</h2>
              <div className="mt-4 pb-6">
                <PortableText value={drink.additional} />
              </div>
            </>
          )}
        </div>
      </section>
      {drink.similar && (
        <section className="flex mb-16 mt-2 max-w-7xl mx-auto justify-end">
          <div className="w-2/3 px-6">
            <h2 className="text-3xl mt-3">Lignende:</h2>
            {drink.similar && (
              <div className="flex gap-6 pt-6">
                {drink.similar.map((d) => {
                  return (
                    <DrinkCard
                      key={d._id}
                      data={d}
                      basePath="/drikke/drinker/"
                    />
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
