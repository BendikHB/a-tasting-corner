"use client";

import { useSearchParams } from "next/navigation";
import { arrayEquals } from "@/utils/arrayEquals";
import { Post } from "@/types/Posts";
import Card from "./card";

interface IPosts {
  posts: Post[];
}

const FilteredPosts = ({ posts }: IPosts) => {
  const params = useSearchParams();
  const search = params.get("search");

  const category = params.get("category")?.split(" ")
    ? //@ts-ignore
      params.get("category").split(" ")
    : [];

  const filtered: Post[] = [];
  posts.forEach((c) => {
    const contains = c.category ? c.category.map((c) => c.toLowerCase()) : [];
    const filter: string[] = [];

    contains.forEach((cn) => {
      if (category.includes(cn.toLowerCase()) || category.length == 0)
        filter.push(cn.toLowerCase());
    });

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
              <Card data={d} basePath={"/matter-of-taste/"} />
            </div>
          );
        })}
    </div>
  );
};

export default FilteredPosts;
