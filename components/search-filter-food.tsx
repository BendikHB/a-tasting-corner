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

const SearchFilterFood = () => {
  const [foodType, setfoodType] = useState("");
  const [taste, settaste] = useState("");
  const [cuisine, setcuisine] = useState("");
  const [mainIngredient, setmainIngredient] = useState("");

  const router = useRouter();
  const params = useSearchParams();

  function setFilter(obj: IFilter) {
    let filter = null;
    let foodTypeString = foodType;
    let tasteString = taste;
    let cuisineString = cuisine;
    let mainIngredientString = mainIngredient;
    const searchString = params.get("search");

    if (!foodType.includes(obj.tag) && obj.type === "foodType") {
      if (foodTypeString) {
        foodTypeString = foodTypeString + "+" + obj.tag;
        setfoodType(foodTypeString);
      } else {
        foodTypeString = obj.tag;
        setfoodType(foodTypeString);
      }
    }
    if (!taste.includes(obj.tag) && obj.type === "taste") {
      if (tasteString) {
        tasteString = tasteString + "+" + obj.tag;
        settaste(tasteString);
      } else {
        tasteString = obj.tag;
        settaste(tasteString);
      }
    }
    if (!cuisine.includes(obj.tag) && obj.type === "cuisine") {
      if (cuisineString) {
        cuisineString = cuisineString + "+" + obj.tag;
        setcuisine(cuisineString);
      } else {
        cuisineString = obj.tag;
        setcuisine(cuisineString);
      }
    }
    if (!mainIngredient.includes(obj.tag) && obj.type === "ingredient") {
      if (mainIngredientString) {
        mainIngredientString = mainIngredientString + "+" + obj.tag;
        setmainIngredient(mainIngredientString);
      } else {
        mainIngredientString = obj.tag;
        setmainIngredient(mainIngredientString);
      }
    }
    if (obj.active === false) {
      if (foodTypeString.includes(obj.tag)) {
        foodTypeString = foodTypeString.replace(obj.tag, "");
        if (foodTypeString.charAt(foodTypeString.length - 1) === "+")
          foodTypeString = foodTypeString.replace(/.$/, "");
        if (foodTypeString.charAt(0) === "+")
          foodTypeString = foodTypeString.substring(1);
        setfoodType(foodTypeString);
      }
      if (tasteString.includes(obj.tag)) {
        tasteString = tasteString.replace(obj.tag, "");
        if (tasteString.charAt(tasteString.length - 1) === "+")
          tasteString = tasteString.replace(/.$/, "");
        if (tasteString.charAt(0) === "+")
          tasteString = tasteString.substring(1);
        settaste(tasteString);
      }
      if (cuisineString.includes(obj.tag)) {
        cuisineString = cuisineString.replace(obj.tag, "");
        if (cuisineString.charAt(cuisineString.length - 1) === "+")
          cuisineString = cuisineString.replace(/.$/, "");
        if (cuisineString.charAt(0) === "+")
          cuisineString = cuisineString.substring(1);
        setcuisine(cuisineString);
      }
      if (mainIngredientString.includes(obj.tag)) {
        mainIngredientString = mainIngredientString.replace(obj.tag, "");
        if (
          mainIngredientString.charAt(mainIngredientString.length - 1) === "+"
        )
          mainIngredientString = mainIngredientString.replace(/.$/, "");
        if (mainIngredientString.charAt(0) === "+")
          mainIngredientString = mainIngredientString.substring(1);
        setmainIngredient(mainIngredientString);
      }
    }

    if (foodTypeString) foodTypeString = "foodType=" + foodTypeString;
    if (tasteString) tasteString = "taste=" + tasteString;
    if (cuisineString) cuisineString = "cuisine=" + cuisineString;
    if (mainIngredientString)
      mainIngredientString = "ingredient=" + mainIngredientString;

    filter =
      foodTypeString +
      "&" +
      tasteString +
      "&" +
      cuisineString +
      "&" +
      mainIngredientString;

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
      router.push("/food");
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
      router.push("/food");
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
    dropDown(false, undefined, ["food-type", "taste", "ingredient", "cuisine"]);
    setDropcuisine(false);
    setDropingredient(false);
    setDroptaste(false);
    setDropBase(false);
  });

  const [dropBase, setDropBase] = useState(false);
  const [droptaste, setDroptaste] = useState(false);
  const [dropingredient, setDropingredient] = useState(false);
  const [dropcuisine, setDropcuisine] = useState(false);

  const foodTypeOptions = ["gin", "vodka", "rum", "tequila", "whiskey"];
  const tasteOptions = ["sweet", "bitter", "sour", "fruity", "savory"];
  const ingredientOptions = ["high", "medium", "low", "no"];
  const cuisineOptions = ["2", "3", "4", "5", "6", "0"];

  return (
    <div className="flex gap-3 py-2 flex-wrap justify-center" ref={domNode}>
      <div className="relative">
        <div>
          <button
            className="border rounded-sm p-2 duration-300 hover:bg-light min-w-48"
            onClick={() => {
              dropDown(!dropBase, "food-type");
              setDropBase(!dropBase);
            }}
          >
            Type
          </button>
        </div>
        <div
          id="food-type"
          className="hidden bg-white absolute z-10 p-4 min-w-48 shadow-md"
        >
          {foodTypeOptions.map((c) => {
            return (
              <div className="flex items-center mb-4" key={c + " base spirit"}>
                <input
                  id={c + "-checkbox"}
                  type="checkbox"
                  value=""
                  onClick={() => {
                    setFilter({
                      type: "foodType",
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
              dropDown(!droptaste, "taste");
              setDroptaste(!droptaste);
            }}
          >
            Taste
          </button>
        </div>
        <div
          id="taste"
          className="hidden bg-white absolute z-10 p-4 min-w-48 shadow-md"
        >
          {tasteOptions.map((c) => {
            return (
              <div className="flex items-center mb-4" key={c + " taste"}>
                <input
                  id={c + "-checkbox"}
                  type="checkbox"
                  value=""
                  onClick={() => {
                    setFilter({
                      type: "taste",
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
              dropDown(!dropingredient, "ingredient");
              setDropingredient(!dropingredient);
            }}
          >
            Main ingredient
          </button>
        </div>
        <div
          id="ingredient"
          className="hidden bg-white absolute z-10 p-4 min-w-48 shadow-md"
        >
          {ingredientOptions.map((c) => {
            const prettyName = c === "no" ? "Non-alcoholic" : c;
            return (
              <div className="flex items-center mb-4" key={c + " ingredient"}>
                <input
                  id={c + "-checkbox"}
                  type="checkbox"
                  value=""
                  onClick={() => {
                    setFilter({
                      type: "ingredient",
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
              dropDown(!dropcuisine, "cuisine");
              setDropcuisine(!dropcuisine);
            }}
          >
            Cuisine
          </button>
        </div>
        <div
          id="cuisine"
          className="hidden bg-white absolute z-10 p-4 min-w-48 shadow-md"
        >
          {cuisineOptions.map((c) => {
            return (
              <div className="flex items-center mb-4" key={c + " cuisine"}>
                <input
                  id={c + "-checkbox"}
                  type="checkbox"
                  value=""
                  onClick={() => {
                    setFilter({
                      type: "cuisine",
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

export default SearchFilterFood;
