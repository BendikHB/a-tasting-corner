"use client";

import { Drink } from "@/types/Drinks";
import { useSearchParams } from "next/navigation";
import DrinkCard from "./drink-card";

interface IDrinks {
  drinks: Drink[];
}

const FilteredDrinks = ({ drinks }: IDrinks) => {
  const params = useSearchParams();

  const baseSpirit = params.get("basespirit")?.split(" ")
    ? params.get("basespirit").split(" ")
    : [];
  const tastes = params.get("tastes") ? params.get("tastes").split(" ") : [];

  const filter = baseSpirit.concat(tastes);

  const filtered = drinks.map((c) => {
    const contains = [c.amount_ingredients, c.spirit, c.strength, c.taste];
    console.log(contains);
    console.log(filter, "filter");

    const intersection = filter.filter((x) =>
      contains.includes(x.toLowerCase()),
    );
    console.log(intersection, "intersection");
    return c;
  });

  return (
    <div className="flex gap-4">
      {filtered.map((d) => {
        return (
          <div key={d.name}>
            <DrinkCard data={d} />
          </div>
        );
      })}
    </div>
  );
};

export default FilteredDrinks;
