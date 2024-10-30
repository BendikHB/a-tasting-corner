import { PortableTextBlock } from "sanity";

export type Food = {
  _id: string;
  _createdAt: Date;
  heading: string;
  name: string;
  slug: string;
  how: PortableTextBlock[];
  ingredients: PortableTextBlock[];
  image: string;
  alt: string;
  similar: Food[];
  characteristics: string[];
  type: string;
  dessert: string;
  mainIngredient: string;
  cuisine: string;
  time: string;
  recommended: boolean;
  rating: string;
  recommendation: PortableTextBlock[];
};
