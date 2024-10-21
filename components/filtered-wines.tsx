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
    const contains = [
      c.type.toLowerCase(),
      c.region.toLowerCase(),
      c.vintage.toLowerCase(),
    ];
    const filter: string[] = [];

    if (type.includes(c.type.toLowerCase()) || type.length == 0)
      filter.push(c.type.toLowerCase());
    if (region.includes(c.region.toLowerCase()) || region.length == 0)
      filter.push(c.region.toLowerCase());
    if (vintage.includes(c.vintage.toLowerCase()) || vintage.length == 0)
      filter.push(c.vintage.toLowerCase());

    const intersection = arrayEquals(contains, filter);

    if (intersection && search) {
      if (c.name.toLowerCase().includes(search.toLowerCase())) filtered.push(c);
    } else if (intersection && !search) filtered.push(c);
  });

  return (
    <div className="flex gap-4 pt-5 flex-wrap max-w-full justify-center">
      {filtered &&
        filtered.map((d) => {
          return (
            <div key={d.name} className="basis-[46%] md:basis-auto flex">
              <WineCard data={d} basePath={"/beverages/wines/"} />
            </div>
          );
        })}
    </div>
  );
};

export default FilteredWines;
