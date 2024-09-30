import { PortableTextBlock } from "sanity";

export type Drink = {
  _id: string;
  _createdAt: Date;
  heading: string;
  name: string;
  slug: string;
  how: PortableTextBlock[];
  additional: PortableTextBlock[];
  ingredientsCl: PortableTextBlock[];
  ingredientsOz: PortableTextBlock[];
  image: string;
  alt: string;
  similar: Drink[];
  taste: string;
  spirit: string;
  season: string;
  amount_ingredients: string;
  strength: string;
};
