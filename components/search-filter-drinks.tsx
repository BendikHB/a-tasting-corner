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
      } else {
        baseSpiritString = "basespirit=" + obj.tag;
      }
    }
    if (!tastes.includes(obj.tag) && obj.type === "tastes") {
      if (tastesString) {
        tastesString = tastesString + "+" + obj.tag;
      } else {
        tastesString = "tastes=" + obj.tag;
      }
    }

    let temp = baseSpiritString + "&" + tastesString;

    if (temp.length < 3) filter = null;
    if (temp?.charAt(temp.length - 1) === "&") filter = temp.replace(/.$/, "");

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
          setBaseSpirit("gin");
          setFilter({ type: "baseSpirit", tag: "gin" });
        }}
      >
        Gin
      </button>
      <button
        type="button"
        className="border rounded-sm py-2 px-5 text-xl min-w-60 min-h-20 duration-300 hover:bg-light"
        onClick={() => {
          setTastes("sweet");
          setFilter({ type: "tastes", tag: "sweet" });
        }}
      >
        Sweet
      </button>
    </div>
  );
};

export default SearchFilterDrinks;
