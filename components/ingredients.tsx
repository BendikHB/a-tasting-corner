"use client";

import { PortableText } from "next-sanity";
import { useEffect, useState } from "react";
import { PortableTextBlock } from "sanity";

interface IIngredients {
  data: TIngredients;
}

type TIngredients = {
  ingredientsCl: PortableTextBlock[];
  ingredientsOz: PortableTextBlock[];
};

//Have to clean up this, as of now it will be able to stackoverflow

export default function Ingredients({ data }: IIngredients) {
  const [mesurement, setMesureMent] = useState(true);
  const { ingredientsCl, ingredientsOz } = data;

  function initFunction() {
    const el = document.getElementById("measurement");
    el?.addEventListener(
      "change",
      function listenerFunc(this: HTMLElement, ev: Event) {
        ev.preventDefault();
        setMesureMent(!mesurement);
      },
    );
  }

  useEffect(initFunction, [mesurement]);

  return mesurement ? (
    <PortableText value={ingredientsCl} />
  ) : (
    <PortableText value={ingredientsOz} />
  );
}
