"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface IFilter {
  type: string;
  tag: string;
  active: boolean;
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
    if (!amountIngredients.includes(obj.tag) && obj.type === "amount") {
      if (amountIngredientsString) {
        amountIngredientsString = amountIngredientsString + "+" + obj.tag;
        setAmountIngredients(amountIngredientsString);
      } else {
        amountIngredientsString = obj.tag;
        setAmountIngredients(amountIngredientsString);
      }
    }
    if (!alcoholStrength.includes(obj.tag) && obj.type === "strength") {
      if (alcoholStrengthString) {
        alcoholStrengthString = alcoholStrengthString + "+" + obj.tag;
        setAlcoholStrength(alcoholStrengthString);
      } else {
        alcoholStrengthString = obj.tag;
        setAlcoholStrength(alcoholStrengthString);
      }
    }
    if (obj.active === false) {
      if (baseSpiritString.includes(obj.tag)) {
        baseSpiritString = baseSpiritString.replace(obj.tag, "");
        if (baseSpiritString.charAt(baseSpiritString.length - 1) === "+")
          baseSpiritString = baseSpiritString.replace(/.$/, "");
        if (baseSpiritString.charAt(0) === "+")
          baseSpiritString = baseSpiritString.substring(1);
        setBaseSpirit(baseSpiritString);
      }
      if (tastesString.includes(obj.tag)) {
        tastesString = tastesString.replace(obj.tag, "");
        if (tastesString.charAt(tastesString.length - 1) === "+")
          tastesString = tastesString.replace(/.$/, "");
        if (tastesString.charAt(0) === "+")
          tastesString = tastesString.substring(1);
        setTastes(tastesString);
      }
      if (amountIngredientsString.includes(obj.tag)) {
        amountIngredientsString = amountIngredientsString.replace(obj.tag, "");
        if (
          amountIngredientsString.charAt(amountIngredientsString.length - 1) ===
          "+"
        )
          amountIngredientsString = amountIngredientsString.replace(/.$/, "");
        if (amountIngredientsString.charAt(0) === "+")
          amountIngredientsString = amountIngredientsString.substring(1);
        setAmountIngredients(amountIngredientsString);
      }
      if (alcoholStrengthString.includes(obj.tag)) {
        alcoholStrengthString = alcoholStrengthString.replace(obj.tag, "");
        if (
          alcoholStrengthString.charAt(alcoholStrengthString.length - 1) === "+"
        )
          alcoholStrengthString = alcoholStrengthString.replace(/.$/, "");
        if (alcoholStrengthString.charAt(0) === "+")
          alcoholStrengthString = alcoholStrengthString.substring(1);
        setAlcoholStrength(alcoholStrengthString);
      }
    }

    if (baseSpiritString) baseSpiritString = "basespirit=" + baseSpiritString;
    if (tastesString) tastesString = "tastes=" + tastesString;
    if (amountIngredientsString)
      amountIngredientsString = "amount=" + amountIngredientsString;
    if (alcoholStrengthString)
      alcoholStrengthString = "strength=" + alcoholStrengthString;

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

  function checked(id: string) {
    const element = document.getElementById(id);
    //@ts-ignore
    return element.checked;
  }

  const params = useSearchParams();
  function search() {
    //@ts-ignore
    const input = document.getElementById("search").value;
    if (input && params.toString()) {
      const slug = "?" + "search=" + input + "&" + params.toString();
      router.push(slug);
    } else if (input) {
      const slug = "?" + "search=" + input;
      router.push(slug);
    } else if (!input && params.toString()) {
      if (params.toString().includes("search")) {
        const idx = params.toString().indexOf("&");
        const rmSearch = params.toString().substring(0, idx + 1);
        const newSlug = params.toString().replace(rmSearch, "");
        const slug = "?" + newSlug;
        router.push(slug);
      } else {
        const slug = "?" + params.toString();
        router.push(slug);
      }
    } else {
      router.push("/beverages/drinks");
    }
  }

  const baseSpiritOptions = ["gin", "vodka", "rum", "tequila", "whiskey"];
  const tasteOptions = ["sweet", "bitter", "sour", "fruity", "savory"];
  const strengthOptions = ["high", "medium", "low", "no"];
  const amountOptions = ["2", "3", "4", "5", "6", "0"];

  return (
    <div className="flex gap-3">
      <div>
        {baseSpiritOptions.map((c) => {
          return (
            <div className="flex items-center mb-4" key={c + " base spirit"}>
              <input
                id={c + "-checkbox"}
                type="checkbox"
                value=""
                onClick={() => {
                  setFilter({
                    type: "baseSpirit",
                    tag: c,
                    active: checked(c + "-checkbox"),
                  });
                }}
                className="w-4 h-4 accent-primary rounded"
              />
              <label
                htmlFor={c + "-checkbox"}
                className="ms-2 text-sm font-medium text-black dark:text-black capitalize"
              >
                {c}
              </label>
            </div>
          );
        })}
      </div>
      <div>
        {tasteOptions.map((c) => {
          return (
            <div className="flex items-center mb-4" key={c + " tastes"}>
              <input
                id={c + "-checkbox"}
                type="checkbox"
                value=""
                onClick={() => {
                  setFilter({
                    type: "tastes",
                    tag: c,
                    active: checked(c + "-checkbox"),
                  });
                }}
                className="w-4 h-4 accent-primary rounded"
              />
              <label
                htmlFor={c + "-checkbox"}
                className="ms-2 text-sm font-medium text-black dark:text-black capitalize"
              >
                {c}
              </label>
            </div>
          );
        })}
      </div>
      <div>
        {strengthOptions.map((c) => {
          const prettyName = c === "no" ? "Non-alcoholic" : c;
          return (
            <div className="flex items-center mb-4" key={c + " strength"}>
              <input
                id={c + "-checkbox"}
                type="checkbox"
                value=""
                onClick={() => {
                  setFilter({
                    type: "strength",
                    tag: c,
                    active: checked(c + "-checkbox"),
                  });
                }}
                className="w-4 h-4 accent-primary rounded"
              />
              <label
                htmlFor={c + "-checkbox"}
                className="ms-2 text-sm font-medium text-black dark:text-black capitalize"
              >
                {prettyName}
              </label>
            </div>
          );
        })}
      </div>
      <div>
        {amountOptions.map((c) => {
          let prettyName;
          switch (c) {
            case "2":
              prettyName = "two";
              break;
            case "3":
              prettyName = "three";
              break;
            case "4":
              prettyName = "four";
              break;
            case "5":
              prettyName = "five";
              break;
            case "6":
              prettyName = "six";
              break;
            case "0":
              prettyName = "Over six";
              break;
            default:
              prettyName = "default";
              break;
          }

          return (
            <div className="flex items-center mb-4" key={c + " amount"}>
              <input
                id={c + "-checkbox"}
                type="checkbox"
                value=""
                onClick={() => {
                  setFilter({
                    type: "amount",
                    tag: c,
                    active: checked(c + "-checkbox"),
                  });
                }}
                className="w-4 h-4 accent-primary rounded"
              />
              <label
                htmlFor={c + "-checkbox"}
                className="ms-2 text-sm font-medium text-black dark:text-black capitalize"
              >
                {prettyName}
              </label>
            </div>
          );
        })}
      </div>
      <div>
        <div className="">
          <input id="search" placeholder="Search" type="text" />
          <button
            type="button"
            className="border rounded-sm py-2 px-5 text-xl min-w-60 min-h-20 duration-300 hover:bg-light"
            onClick={() => {
              search();
            }}
          >
            Click
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterDrinks;
