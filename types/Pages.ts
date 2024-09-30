import { TModule } from "@/components/Module";
import { PortableTextBlock } from "next-sanity";

export type Page = {
  _id: string;
  _createdAt: Date;
  heading: string;
  slug: string;
  intro: PortableTextBlock[];
  image: string;
  alt: string;
  altTwo: string;
  imageTwo: string;
  url: string;
  urlTwo: string;
  linkText: string;
  linkTextTwo: string;
  modules: TModule[];
};
