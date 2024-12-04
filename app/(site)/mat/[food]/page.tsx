import FoodCard from "@/components/food-card";
import { getFood } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";

type Props = {
  params: { food: string };
};

export default async function Food({ params }: Props) {
  const slug = params.food;
  const food = await getFood(slug);

  return (
    <>
      <section className="w-full">
        <div className="h-[600px]">
          <div className="h-full w-full relative">
            {food?.image && (
              <Image
                src={food.image}
                alt={food.alt}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            )}
            <div className="absolute left-[10%] top-1/3">
              <p className="text-5xl w-3/5 text-white">{food.heading}</p>
              {/* cta comming here */}
            </div>
          </div>
        </div>
        <div className="bg-light pl[10%]">
          <h1 className="text-5xl py-10 ml-[10%]">{food.name}</h1>
        </div>
      </section>
      <section className="flex my-16 max-w-7xl mx-auto">
        <div className="w-1/3 border-r px-6 text-right">
          <h2 className="text-3xl mt-5 mb-4">Ingredients:</h2>
          <div className="text-xl"></div>
        </div>
        <div className="w-2/3 px-6">
          <h2 className="text-3xl pt-6">How to make it:</h2>
          <div className="mt-4">
            <PortableText value={food.how} />
          </div>
        </div>
      </section>
      <section className="flex mb-16 mt-2 max-w-7xl mx-auto justify-end">
        <div className="w-2/3 px-6">
          <h2 className="text-3xl mt-3">Similar options:</h2>
          {food.similar && (
            <div className="flex gap-6 pt-6">
              {food.similar.map((f) => {
                return <FoodCard key={f._id} data={f} basePath="/mat/" />;
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
