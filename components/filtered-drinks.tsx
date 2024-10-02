"use client";

import { Drink } from "@/types/Drinks";
import { useSearchParams } from "next/navigation";
import DrinkCard from "./drink-card";

interface IDrinks {
  drinks: Drink[];
}

const FilteredDrinks = ({ drinks }: IDrinks) => {
  const params = useSearchParams();

  const baseSpirit = params.get("basespirit");
  const tastes = params.get("tastes");

  console.log(baseSpirit, tastes, "params");

  const filtered = drinks;

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
