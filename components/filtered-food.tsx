"use client";

import { useSearchParams } from "next/navigation";
import { arrayEquals } from "@/utils/arrayEquals";
import { Food } from "@/types/Food";
import FoodCard from "./food-card";

interface IFood {
  food: Food[];
}

const FilteredFood = ({ food }: IFood) => {
  const params = useSearchParams();
  const search = params.get("search");

  const foodType = params.get("foodType")?.split(" ")
    ? //@ts-ignore
      params.get("foodType").split(" ")
    : [];

  // const characteristics = params.get("characteristics")
  //   ? params.get("characteristics").split(" ")
  //   : [];
  const mainIngredient = params.get("mainIngredient")
    ? //@ts-ignore
      params.get("mainIngredient").split(" ")
    : [];
  const cuisine = params.get("cuisine")
    ? //@ts-ignore
      params.get("cuisine").split(" ")
    : [];

  const filtered: Food[] = [];
  food.forEach((c) => {
    const contains = [
      c.type.toLowerCase(),
      // c.characteristics.toLowerCase(),
      c.mainIngredient.toLowerCase(),
      c.cuisine.toLowerCase(),
    ];
    const filter: string[] = [];

    if (foodType.includes(c.type.toLowerCase()) || foodType.length == 0)
      filter.push(c.type.toLowerCase());
    // if (
    //   characteristics.includes(c.characteristics.toLowerCase()) ||
    //   characteristics.length == 0
    // )
    //   filter.push(c.characteristics.toLowerCase());
    if (
      mainIngredient.includes(c.mainIngredient.toLowerCase()) ||
      mainIngredient.length == 0
    )
      filter.push(c.mainIngredient.toLowerCase());
    if (cuisine.includes(c.cuisine.toLowerCase()) || cuisine.length == 0)
      filter.push(c.cuisine.toLowerCase());

    const intersection = arrayEquals(contains, filter);

    if (intersection && search) {
      if (c.name.toLowerCase().includes(search.toLowerCase())) filtered.push(c);
    } else if (intersection && !search) filtered.push(c);
  });

  return (
    <div className="flex gap-4 pt-5 flex-wrap max-w-full justify-center">
      {filtered &&
        filtered.map((d) => {
          return (
            <div key={d.name} className="basis-[46%] md:basis-auto flex">
              <FoodCard data={d} basePath={"/food/"} />
            </div>
          );
        })}
    </div>
  );
};

export default FilteredFood;