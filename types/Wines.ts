import { PortableTextBlock } from "next-sanity";

export type Wines = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  alt: string;
  url: string;
  content: PortableTextBlock[];
  type: string;
  region: string;
  vintage: string;
  similar: Wines[];
  recommended: boolean;
  rating: string;
  recommendation: PortableTextBlock[];
};
