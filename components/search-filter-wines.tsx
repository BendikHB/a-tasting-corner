"use client";

import { ArrowRight } from "@/public/icons/arrow-right";
import { Close } from "@/public/icons/close";
import { dropDown } from "@/utils/dropDown";
import HandleClickOutside from "@/utils/handleClickOutside";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface IFilter {
  filterType: string;
  tag: string;
  active: boolean;
}

const SearchFilterWines = () => {
  const [type, setType] = useState("");
  const [region, setRegion] = useState("");
  const [vintage, setVintage] = useState("");

  const router = useRouter();
  const params = useSearchParams();

  function setFilter(obj: IFilter) {
    let filter = null;
    let typeString = type;
    let regionString = region;
    let vintageString = vintage;
    const searchString = params.get("search");

    if (!type.includes(obj.tag) && obj.filterType === "type") {
      if (typeString) {
        typeString = typeString + "+" + obj.tag;
        setType(typeString);
      } else {
        typeString = obj.tag;
        setType(typeString);
      }
    }
    if (!region.includes(obj.tag) && obj.filterType === "region") {
      if (regionString) {
        regionString = regionString + "+" + obj.tag;
        setRegion(regionString);
      } else {
        regionString = obj.tag;
        setRegion(regionString);
      }
    }
    if (!vintage.includes(obj.tag) && obj.filterType === "vintage") {
      if (vintageString) {
        vintageString = vintageString + "+" + obj.tag;
        setVintage(vintageString);
      } else {
        vintageString = obj.tag;
        setVintage(vintageString);
      }
    }

    if (obj.active === false) {
      if (typeString.includes(obj.tag)) {
        typeString = typeString.replace(obj.tag, "");
        if (typeString.charAt(typeString.length - 1) === "+")
          typeString = typeString.replace(/.$/, "");
        if (typeString.charAt(0) === "+") typeString = typeString.substring(1);
        setType(typeString);
      }
      if (regionString.includes(obj.tag)) {
        regionString = regionString.replace(obj.tag, "");
        if (regionString.charAt(regionString.length - 1) === "+")
          regionString = regionString.replace(/.$/, "");
        if (regionString.charAt(0) === "+")
          regionString = regionString.substring(1);
        setRegion(regionString);
      }
      if (vintageString.includes(obj.tag)) {
        vintageString = vintageString.replace(obj.tag, "");
        if (vintageString.charAt(vintageString.length - 1) === "+")
          vintageString = vintageString.replace(/.$/, "");
        if (vintageString.charAt(0) === "+")
          vintageString = vintageString.substring(1);
        setVintage(vintageString);
      }
    }

    if (typeString) typeString = "type=" + typeString;
    if (regionString) regionString = "region=" + regionString;
    if (vintageString) vintageString = "vintage=" + vintageString;

    filter = typeString + "&" + regionString + "&" + vintageString;

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
      router.push("/beverages/wines");
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
      router.push("/beverages/wines");
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
    dropDown(false, undefined, ["type", "region", "vintage"]);
    setDropVintage(false);
    setdropRegion(false);
    setDropType(false);
  });

  const [droptype, setDropType] = useState(false);
  const [dropRegion, setdropRegion] = useState(false);
  const [DropVintage, setDropVintage] = useState(false);

  const typeOptions = ["red", "white", "rose", "sparkling", "port"];
  const regionOptions = [
    "new-world",
    "old-world",
    "france",
    "italy",
    "usa",
    "south-africa",
  ];
  const vintageOptions = [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];

  return (
    <div className="flex gap-3 py-2 flex-wrap justify-center" ref={domNode}>
      <div className="relative">
        <div>
          <button
            className="border rounded-sm p-2 duration-300 hover:bg-light min-w-48"
            onClick={() => {
              dropDown(!droptype, "type");
              setDropType(!droptype);
            }}
          >
            Type
          </button>
        </div>
        <div
          id="type"
          className="hidden bg-white absolute z-10 p-4 min-w-48 shadow-md"
        >
          {typeOptions.map((c) => {
            return (
              <div className="flex items-center mb-4" key={c + " type"}>
                <input
                  id={c + "-checkbox"}
                  type="checkbox"
                  value=""
                  onClick={() => {
                    setFilter({
                      filterType: "type",
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
              dropDown(!dropRegion, "region");
              setdropRegion(!dropRegion);
            }}
          >
            Region
          </button>
        </div>
        <div
          id="region"
          className="hidden bg-white absolute z-10 p-4 min-w-48 shadow-md"
        >
          {regionOptions.map((c) => {
            const prettyName = c.replace("-", " ");
            return (
              <div className="flex items-center mb-4" key={c + " region"}>
                <input
                  id={c + "-checkbox"}
                  type="checkbox"
                  value=""
                  onClick={() => {
                    setFilter({
                      filterType: "region",
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
              dropDown(!DropVintage, "vintage");
              setDropVintage(!DropVintage);
            }}
          >
            Vintage
          </button>
        </div>
        <div
          id="vintage"
          className="hidden bg-white absolute z-10 p-4 min-w-48 shadow-md"
        >
          {vintageOptions.map((c) => {
            let prettyName;
            switch (c) {
              case c:
                prettyName = c;
                break;
              default:
                prettyName = "no vintage";
                break;
            }

            return (
              <div className="flex items-center mb-4" key={c + " vintage"}>
                <input
                  id={c + "-checkbox"}
                  type="checkbox"
                  value=""
                  onClick={() => {
                    setFilter({
                      filterType: "vintage",
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

export default SearchFilterWines;
