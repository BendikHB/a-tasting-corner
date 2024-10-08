import DrinkCard from "@/components/drink-card";
import Ingredients from "@/components/ingredients";
import SwitchBtn from "@/components/switch-btn/switch-btn";
import { getDrink } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
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
        <div className="bg-light pl[10%]">
          <h1 className="text-5xl py-10 ml-[10%]">{drink.name}</h1>
        </div>
      </section>
      <section className="flex my-16 max-w-7xl mx-auto">
        <div className="w-1/3 border-r px-6 text-right">
          <div className="ml-auto w-32 pr-2 mt-3">
            <SwitchBtn />
          </div>
          <h2 className="text-3xl mt-5 mb-4">Ingredients:</h2>
          <div className="text-xl">
            <Ingredients
              data={{
                ingredientsCl: drink.ingredientsCl,
                ingredientsOz: drink.ingredientsOz,
              }}
            />
          </div>
        </div>
        <div className="w-2/3 px-6">
          <h2 className="text-3xl pt-6">How to make it:</h2>
          <div className="mt-4">
            <PortableText value={drink.how} />
          </div>
          {drink.additional && (
            <>
              <h2 className="text-3xl mt-16">More info:</h2>
              <div className="mt-4 pb-6">
                <PortableText value={drink.additional} />
              </div>
            </>
          )}
        </div>
      </section>
      <section className="flex mb-16 mt-2 max-w-7xl mx-auto justify-end">
        <div className="w-2/3 px-6">
          <h2 className="text-3xl mt-3">Similar options:</h2>
          {drink.similar && (
            <div className="flex gap-6 pt-6">
              {drink.similar.map((d) => {
                return (
                  <DrinkCard
                    key={d._id}
                    data={d}
                    basePath="/beverages/drinks/"
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
