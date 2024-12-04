"use client";

import { ArrowRight } from "@/public/icons/arrow-right";
import { Close } from "@/public/icons/close";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./custom-checkbox.css";

interface IFilter {
  tag: string;
  active: boolean;
}

const SearchFilterPosts = () => {
  const [category, setCategory] = useState("");

  const router = useRouter();
  const params = useSearchParams();

  function setFilter(obj: IFilter) {
    let filter = null;
    let categoryString = category;
    const searchString = params.get("search");

    if (!category.includes(obj.tag)) {
      if (categoryString) {
        categoryString = categoryString + "+" + obj.tag;
        setCategory(categoryString);
      } else {
        categoryString = obj.tag;
        setCategory(categoryString);
      }
    }

    if (obj.active === false) {
      if (categoryString.includes(obj.tag)) {
        categoryString = categoryString.replace(obj.tag, "");
        if (categoryString.charAt(categoryString.length - 1) === "+")
          categoryString = categoryString.replace(/.$/, "");
        if (categoryString.charAt(0) === "+")
          categoryString = categoryString.substring(1);
        setCategory(categoryString);
      }
    }

    if (categoryString) categoryString = "category=" + categoryString;
    filter = categoryString;

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
      router.push("/smak-og-behag");
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
      router.push("/smak-og-behag");
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

  const categoryOptions = ["mat", "vin", "drinker"];

  return (
    <div className="flex gap-3 py-2 flex-wrap justify-center">
      {categoryOptions.map((c) => {
        return (
          <label className="container-checkbox" key={c + " category"}>
            <input
              id={c + "-checkbox"}
              type="checkbox"
              value=""
              onClick={() => {
                setFilter({
                  tag: c,
                  active: checked(c + "-checkbox"),
                });
              }}
            />
            <span className="checkmark">{c}</span>
          </label>
        );
      })}
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
          className="border rounded-sm p-2 duration-300 hover:bg-black hover:text-white"
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

export default SearchFilterPosts;
