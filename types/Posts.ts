import { PortableTextBlock } from "next-sanity";

export type Post = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  alt: string;
  heading: string;
  content: PortableTextBlock[];
};
