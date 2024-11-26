"use client";

import { Drink } from "@/types/Drinks";
import { useSearchParams } from "next/navigation";
import DrinkCard from "./drink-card";
import { arrayEquals } from "@/utils/arrayEquals";

interface IDrinks {
  drinks: Drink[];
}

const FilteredNonAlc = ({ drinks }: IDrinks) => {
  const params = useSearchParams();
  const search = params.get("search");

  //@ts-ignore
  const tastes = params.get("tastes") ? params.get("tastes").split(" ") : [];
  //@ts-ignore
  const amount = params.get("amount") ? params.get("amount").split(" ") : [];

  const filtered: Drink[] = [];
  drinks.forEach((c) => {
    if (c.strength.toLowerCase() !== "no") return;
    const contains = [
      c.taste.toLowerCase(),
      c.amount_ingredients.toLowerCase(),
    ];
    const filter: string[] = [];

    if (tastes.includes(c.taste.toLowerCase()) || tastes.length == 0)
      filter.push(c.taste.toLowerCase());
    if (
      amount.includes(c.amount_ingredients.toLowerCase()) ||
      amount.length == 0
    )
      filter.push(c.amount_ingredients.toLowerCase());

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
              <DrinkCard data={d} basePath={"/drikke/drinker/"} />
            </div>
          );
        })}
    </div>
  );
};

export default FilteredNonAlc;
