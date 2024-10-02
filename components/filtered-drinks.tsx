"use client";

import { Drink } from "@/types/Drinks";
import { useSearchParams } from "next/navigation";

interface IDrinks {
  drinks: Drink[];
}

const FilteredDrinks = ({ drinks }: IDrinks) => {
  const params = useSearchParams();
};

export default FilteredDrinks;
