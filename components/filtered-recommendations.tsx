"use client";

import { useSearchParams } from "next/navigation";
import { arrayEquals } from "@/utils/arrayEquals";
import { Post } from "@/types/Posts";
import Card from "./card";
import { Drink } from "@/types/Drinks";
import { Wines } from "@/types/Wines";
import { Food } from "@/types/Food";
import DrinkCard from "./drink-card";
import WineCard from "./wine-card";
import FoodCard from "./food-card";

interface IRecommendation {
  drinks: Drink[];
  wines: Wines[];
  food: Food[];
}
type TRecommendation = {
  drink?: Drink;
  wine?: Wines;
  food?: Food;
};

const FilteredRecommendations = ({ drinks, wines, food }: IRecommendation) => {
  const params = useSearchParams();
  const search = params.get("search");

  const category = params.get("category")?.split(" ")
    ? //@ts-ignore
      params.get("category").split(" ")
    : [];

  const recommended: TRecommendation[] = [];

  if (drinks) {
    drinks.forEach((d) => {
      if (d.recommended) recommended.push({ drink: d });
    });
  }
  if (wines) {
    wines.forEach((w) => {
      if (w.recommended) recommended.push({ wine: w });
    });
  }
  if (food) {
    food.forEach((f) => {
      if (f.recommended) recommended.push({ food: f });
    });
  }

  const filtered: TRecommendation[] = [];
  recommended.forEach((c) => {
    const filter: TRecommendation[] = [];
    if (
      (category.includes("drinks") && c.drink) ||
      (category.includes("wines") && c.wine) ||
      (category.includes("food") && c.food) ||
      category.length === 0
    ) {
      filter.push(c);
    }

    if (filter.length > 0 && search) {
      if (c.drink?.name.toLowerCase().includes(search.toLowerCase()))
        filtered.push(c);
      if (c.wine?.name.toLowerCase().includes(search.toLowerCase()))
        filtered.push(c);
      if (c.food?.name.toLowerCase().includes(search.toLowerCase()))
        filtered.push(c);
    } else if (!search) {
      if (c.drink && filter.length > 0) {
        const checkDrink = filter[0].drink?.name.toLowerCase()
          ? filter[0].drink?.name.toLowerCase()
          : "";
        if (c.drink.name.toLowerCase().includes(checkDrink)) filtered.push(c);
      }
      if (c.wine && filter.length > 0) {
        const temp = filter;
        const checkWine = filter[0].wine?.name.toLowerCase()
          ? filter[0].wine?.name.toLowerCase()
          : "";

        if (c.wine?.name.toLowerCase().includes(checkWine)) filtered.push(c);
      }
      if (c.food && filter.length > 0) {
        const checkFood = filter[0].food?.name.toLowerCase()
          ? filter[0].food?.name.toLowerCase()
          : "";

        if (c.food?.name.toLowerCase().includes(checkFood)) filtered.push(c);
      }
    }
  });

  return (
    <div className="flex gap-4 pt-5 flex-wrap max-w-full justify-center">
      {filtered &&
        filtered.map((c) => {
          if (c.drink) {
            return (
              <div
                key={c.drink?._id}
                className="basis-[46%] md:basis-auto flex"
              >
                <DrinkCard data={c.drink} basePath={"/beverages/drinks/"} />
              </div>
            );
          }
          if (c.wine) {
            return (
              <div key={c.wine?._id} className="basis-[46%] md:basis-auto flex">
                <WineCard data={c.wine} basePath={"/beverages/wines/"} />
              </div>
            );
          }
          if (c.food) {
            return (
              <div key={c.food._id} className="basis-[46%] md:basis-auto flex">
                <FoodCard data={c.food} basePath={"/food/"} />
              </div>
            );
          }
        })}
    </div>
  );
};

export default FilteredRecommendations;
