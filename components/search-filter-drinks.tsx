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
  /* const [amountIngredients, setAmountIngredients] = useState("");
    const [alcoholStrength, setAlcoholStrength] = useState("");
    const [search, setSearch] = useState("");
 */
  const router = useRouter();

  function setFilter(obj: IFilter) {
    let filter = null;
    let baseSpiritString = baseSpirit;
    let tastesString = tastes;

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

    if (baseSpiritString) baseSpiritString = "basespirit=" + baseSpiritString;
    if (tastesString) tastesString = "tastes=" + tastesString;

    filter = baseSpiritString + "&" + tastesString;

    if (filter.length < 3) filter = null;
    if (filter?.charAt(filter.length - 1) === "&")
      filter = filter.replace(/.$/, "");

    console.log(filter, "filter");

    if (filter?.indexOf("&") == 0) filter = filter.substring(1);

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
