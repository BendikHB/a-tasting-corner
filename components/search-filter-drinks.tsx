"use client";

import { ArrowRight } from "@/public/icons/arrow-right";
import { Close } from "@/public/icons/close";
import { dropDown } from "@/utils/dropDown";
import HandleClickOutside from "@/utils/handleClickOutside";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  const params = useSearchParams();

  function setFilter(obj: IFilter) {
    let filter = null;
    let baseSpiritString = baseSpirit;
    let tastesString = tastes;
    let amountIngredientsString = amountIngredients;
    let alcoholStrengthString = alcoholStrength;
    const searchString = params.get("search");

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

    if (filter && searchString) {
      router.push("?search=" + searchString + "&" + filter);
    }
    if (filter && !searchString) {
      router.push("?" + filter);
    }
    if (!filter && searchString) {
      router.push("?search=" + searchString);
    } else if (!filter) {
      router.push("/beverages/drinks");
    }
  }

  function checked(id: string) {
    const element = document.getElementById(id);
    //@ts-ignore
    return element.checked;
  }

  useEffect(() => {
    const input = document.getElementById("search");
    if (input) {
      input.addEventListener(
        "keyup",
        function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            search();
          }
        },
        true,
      );

      input.removeEventListener(
        "keyup",
        function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            search();
          }
        },
        true,
      );
    }
  }),
    [];

  function search() {
    //@ts-ignore
    const input = document.getElementById("search").value;
    const btn = document.getElementById("reset-btn");
    //@ts-ignore
    if (input && btn) {
      btn.style.display = "block";
    }
    const filterString = params.toString();

    if (input && filterString) {
      let newSlug = "";
      if (filterString.includes("search")) {
        const single = filterString.indexOf("&") > 0 ? "&" : null;
        if (single) {
          const idx = filterString.indexOf(single);
          const rmSearch = filterString.substring(0, idx + 1);
          newSlug = filterString.replace(rmSearch, "");
        }
        if (!single) newSlug = "";
      } else if (filterString) newSlug = filterString;
      if (newSlug) newSlug = "&" + newSlug;
      const slug = "?" + "search=" + input + newSlug;
      router.push(slug);
    } else if (input) {
      const slug = "?" + "search=" + input;
      router.push(slug);
    } else if (!input && filterString) {
      if (filterString.includes("search")) {
        const single = filterString.indexOf("&") > 0 ? "&" : null;
        let newSlug;
        if (single) {
          const idx = filterString.indexOf(single);
          const rmSearch = filterString.substring(0, idx + 1);
          newSlug = filterString.replace(rmSearch, "");
        }
        if (!single) newSlug = "";
        const slug = "?" + newSlug;
        router.push(slug);
      } else {
        const slug = "?" + filterString;
        router.push(slug);
      }
    } else {
      router.push("/beverages/drinks");
    }
  }

  function resetField(id: string) {
    const el = document.getElementById(id);
    const btn = document.getElementById("reset-btn");
    //@ts-ignore
    if (el) el.value = "";
    if (el && btn) btn.style.display = "none";
    search();
  }

  let domNode = HandleClickOutside(() => {
    dropDown(false, undefined, ["base-spirit", "tastes", "strength", "amount"]);
    setDropAmount(false);
    setDropStrength(false);
    setDropTastes(false);
    setDropBase(false);
  });

  const [dropBase, setDropBase] = useState(false);
  const [dropTastes, setDropTastes] = useState(false);
  const [dropStrength, setDropStrength] = useState(false);
  const [dropAmount, setDropAmount] = useState(false);

  const baseSpiritOptions = ["gin", "vodka", "rum", "tequila", "whiskey"];
  const tasteOptions = ["sweet", "bitter", "sour", "fruity", "savory"];
  const strengthOptions = ["high", "medium", "low", "no"];
  const amountOptions = ["2", "3", "4", "5", "6", "0"];

  return (
    <div className="flex gap-3 py-2 flex-wrap justify-center" ref={domNode}>
      <div className="relative">
        <div>
          <button
            className="border rounded-sm p-2 duration-300 hover:bg-light min-w-48"
            onClick={() => {
              dropDown(!dropBase, "base-spirit");
              setDropBase(!dropBase);
            }}
          >
            Base spirit
          </button>
        </div>
        <div
          id="base-spirit"
          className="hidden bg-white absolute z-10 p-4 min-w-48 shadow-md"
        >
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
                  className="w-4 h-4 accent-primary rounded-sm"
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
      </div>
      <div className="relative">
        <div>
          <button
            className="border rounded-sm p-2 duration-300 hover:bg-light min-w-48"
            onClick={() => {
              dropDown(!dropTastes, "tastes");
              setDropTastes(!dropTastes);
            }}
          >
            Tastes
          </button>
        </div>
        <div
          id="tastes"
          className="hidden bg-white absolute z-10 p-4 min-w-48 shadow-md"
        >
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
                  className="w-4 h-4 accent-primary rounded-sm"
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
      </div>
      <div className="relative">
        <div>
          <button
            className="border rounded-sm p-2 duration-300 hover:bg-light min-w-48"
            onClick={() => {
              dropDown(!dropStrength, "strength");
              setDropStrength(!dropStrength);
            }}
          >
            Alcohol strength
          </button>
        </div>
        <div
          id="strength"
          className="hidden bg-white absolute z-10 p-4 min-w-48 shadow-md"
        >
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
                  className="w-4 h-4 accent-primary rounded-sm"
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
      </div>
      <div className="relative">
        <div>
          <button
            className="border rounded-sm p-2 duration-300 hover:bg-light min-w-48"
            onClick={() => {
              dropDown(!dropAmount, "amount");
              setDropAmount(!dropAmount);
            }}
          >
            Amount of ingredients
          </button>
        </div>
        <div
          id="amount"
          className="hidden bg-white absolute z-10 p-4 min-w-48 shadow-md"
        >
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
                  className="w-4 h-4 accent-primary rounded-sm"
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
      </div>
      <div className="flex gap-2">
        <div className="relative">
          <input
            className="rounded-sm border border-black p-2 relative"
            id="search"
            placeholder="Search..."
            type="text"
          />
          <button
            id="reset-btn"
            type="button"
            className="p-2 absolute z-10 right-1 top-2/4 -translate-y-2/4 hidden"
            onClick={() => {
              resetField("search");
            }}
          >
            <Close width={10} height={10} color="#2A1D18" />
          </button>
        </div>
        <button
          type="button"
          className="border rounded-sm p-2 duration-300 hover:bg-light"
          onClick={() => {
            search();
          }}
        >
          <ArrowRight width={28} height={8} color="#000" />
        </button>
      </div>
    </div>
  );
};

export default SearchFilterDrinks;
