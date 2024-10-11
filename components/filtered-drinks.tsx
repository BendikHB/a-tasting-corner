"use client";

import { Drink } from "@/types/Drinks";
import { useSearchParams } from "next/navigation";
import DrinkCard from "./drink-card";
import { arrayEquals } from "@/utils/arrayEquals";

interface IDrinks {
  drinks: Drink[];
}

const FilteredDrinks = ({ drinks }: IDrinks) => {
  const params = useSearchParams();
  const search = params.get("search");

  const baseSpirit = params.get("basespirit")?.split(" ")
    ? params.get("basespirit").split(" ")
    : [];
  const tastes = params.get("tastes") ? params.get("tastes").split(" ") : [];
  const amount = params.get("amount") ? params.get("amount").split(" ") : [];
  const strength = params.get("strength")
    ? params.get("strength").split(" ")
    : [];

  const filtered: Drink[] = [];
  drinks.forEach((c) => {
    const contains = [
      c.spirit.toLowerCase(),
      c.taste.toLowerCase(),
      c.amount_ingredients.toLowerCase(),
      c.strength.toLowerCase(),
    ];
    const filter: string[] = [];

    if (baseSpirit.includes(c.spirit.toLowerCase()) || baseSpirit.length == 0)
      filter.push(c.spirit.toLowerCase());
    if (tastes.includes(c.taste.toLowerCase()) || tastes.length == 0)
      filter.push(c.taste.toLowerCase());
    if (
      amount.includes(c.amount_ingredients.toLowerCase()) ||
      amount.length == 0
    )
      filter.push(c.amount_ingredients.toLowerCase());
    if (strength.includes(c.strength.toLowerCase()) || strength.length == 0)
      filter.push(c.strength.toLowerCase());

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
            <div key={d.name}>
              <DrinkCard data={d} basePath={"/beverages/drinks/"} />
            </div>
          );
        })}
    </div>
  );
};

export default FilteredDrinks;
