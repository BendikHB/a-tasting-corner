import DrinkCard from "@/components/drink-card";
import { getDrinks } from "@/sanity/sanity-utils";
import React from "react";
import Link from "next/link";

export default async function Page() {
  /* const page = await getPage("drinks"); */
  const drinks = await getDrinks();

  return (
    <>
      <h1>Test</h1>
      {drinks && (
        <div className="flex">
          {drinks.map((d) => {
            return (
              <div key={d.name}>
                <DrinkCard data={d} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
