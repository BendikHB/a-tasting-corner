"use client";

import { useSearchParams } from "next/navigation";
import { arrayEquals } from "@/utils/arrayEquals";
import { Wines } from "@/types/Wines";
import WineCard from "./wine-card";

interface IWines {
  wines: Wines[];
}

const FilteredWines = ({ wines }: IWines) => {
  const params = useSearchParams();
  const search = params.get("search");

  const type = params.get("type")?.split(" ")
    ? //@ts-ignore
      params.get("type").split(" ")
    : [];
  //@ts-ignore
  const region = params.get("region") ? params.get("region").split(" ") : [];
  //@ts-ignore
  const vintage = params.get("vintage") ? params.get("vintage").split(" ") : [];

  const filtered: Wines[] = [];
  wines.forEach((c) => {
    const currentType = c.type ? c.type.toLowerCase() : "";
    const currentRegion = c.region ? c.region.toLowerCase() : "";
    const currentVintage = c.vintage ? c.vintage.toLowerCase() : "";
    const contains = [currentType, currentRegion, currentVintage];

    const filter: string[] = [];

    if (type.includes(currentType) || type.length == 0)
      filter.push(currentType);
    if (region.includes(currentRegion) || region.length == 0)
      filter.push(currentRegion);
    if (vintage.includes(currentVintage) || vintage.length == 0)
      filter.push(currentVintage);

    const intersection = arrayEquals(contains, filter);

    if (intersection && search) {
      if (c.name.toLowerCase().includes(search.toLowerCase())) filtered.push(c);
    } else if (intersection && !search) filtered.push(c);
  });

  return (
    <div className="flex gap-2 md:gap-4 pt-5 flex-wrap max-w-full justify-center">
      {filtered &&
        filtered.map((d) => {
          return (
            <div key={d.name} className="basis-[48%] md:basis-auto flex">
              <WineCard data={d} basePath={"/drikke/vin/"} />
            </div>
          );
        })}
    </div>
  );
};

export default FilteredWines;
