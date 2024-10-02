"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface IFilter {
  type: string;
  tag: string;
}

const SearchFilterDrinks = () => {
  const [baseSpirit, setBaseSpirit] = useState("");
  const [tastes, setTastes] = useState("");
  const [amountIngredients, setAmountIngredients] = useState("");
  const [alcoholStrength, setAlcoholStrength] = useState("");

  const router = useRouter();

  function setFilter(obj: IFilter) {
    let filter = null;
    let baseSpiritString = baseSpirit;
    let tastesString = tastes;
    let amountIngredientsString = amountIngredients;
    let alcoholStrengthString = alcoholStrength;

    if (!baseSpirit.includes(obj.tag) && obj.type === "baseSpirit") {
      if (baseSpiritString) {
        baseSpiritString = baseSpiritString + "+" + obj.tag;
        setBaseSpirit(baseSpiritString);
      } else {
        baseSpiritString = obj.tag;
        setBaseSpirit(baseSpiritString);
      }
    }
    if (!tastes.includes(obj.tag) && obj.type === "tastes") {
      if (tastesString) {
        tastesString = tastesString + "+" + obj.tag;
        setTastes(tastesString);
      } else {
        tastesString = obj.tag;
        setTastes(tastesString);
      }
    }
    if (
      !amountIngredients.includes(obj.tag) &&
      obj.type === "amountIngredients"
    ) {
      if (amountIngredientsString) {
        amountIngredientsString = amountIngredientsString + "+" + obj.tag;
        setAmountIngredients(amountIngredientsString);
      } else {
        amountIngredientsString = obj.tag;
        setAmountIngredients(amountIngredientsString);
      }
    }
    if (!alcoholStrength.includes(obj.tag) && obj.type === "alcoholStrength") {
      if (alcoholStrengthString) {
        alcoholStrengthString = alcoholStrengthString + "+" + obj.tag;
        setAlcoholStrength(alcoholStrengthString);
      } else {
        alcoholStrengthString = obj.tag;
        setAlcoholStrength(alcoholStrengthString);
      }
    }

    if (baseSpiritString) baseSpiritString = "basespirit=" + baseSpiritString;
    if (tastesString) tastesString = "tastes=" + tastesString;
    if (amountIngredientsString)
      amountIngredientsString = "tastes=" + amountIngredientsString;
    if (alcoholStrengthString)
      alcoholStrengthString = "tastes=" + alcoholStrengthString;

    filter =
      baseSpiritString +
      "&" +
      tastesString +
      "&" +
      amountIngredientsString +
      "&" +
      alcoholStrengthString;

    if (filter.length < 3) filter = null;
    for (let i = 0; i < 3; i++) {
      if (filter?.charAt(filter.length - 1) === "&")
        filter = filter.replace(/.$/, "");
    }

    for (let i = 0; i < 3; i++) {
      if (filter?.indexOf("&") == 0) filter = filter.substring(1);
    }

    if (filter) {
      router.push("?" + filter);
    }
    if (!filter) {
      router.push("/beverages/drinks");
    }
  }

  return (
    <div>
      <button
        type="button"
        className="border rounded-sm py-2 px-5 text-xl min-w-60 min-h-20 duration-300 hover:bg-light"
        onClick={() => {
          setFilter({ type: "baseSpirit", tag: "gin" });
        }}
      >
        Gin
      </button>
      <button
        type="button"
        className="border rounded-sm py-2 px-5 text-xl min-w-60 min-h-20 duration-300 hover:bg-light"
        onClick={() => {
          setFilter({ type: "baseSpirit", tag: "vodka" });
        }}
      >
        Vodka
      </button>
      <button
        type="button"
        className="border rounded-sm py-2 px-5 text-xl min-w-60 min-h-20 duration-300 hover:bg-light"
        onClick={() => {
          setFilter({ type: "tastes", tag: "sweet" });
        }}
      >
        Sweet
      </button>
    </div>
  );
};

export default SearchFilterDrinks;
