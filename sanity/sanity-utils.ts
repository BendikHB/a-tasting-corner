import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Wines } from "@/types/Wines";
import { Drink } from "@/types/Drinks";
import { Post } from "@/types/Posts";
import { Page } from "@/types/Pages";
import { Food } from "@/types/Food";

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "alt": image.alt,
            heading,
            content,
            excerpt,
            category
        }`,
  );
}

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                "alt": image.alt,
                heading,
                content,
                category
            }`,
    { slug },
  );
}

export async function getDrinks(): Promise<Drink[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "drink"]{
      _id,
      _createdAt,
      title,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      taste,
      strength,
      spirit,
      amount_ingredients,
      recommended,
      rating,
    }`,
  );
}

export async function getDrink(slug: string): Promise<Drink> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "drink" && slug.current == $slug][0]{
      _id,
      _createdAt,
      heading,
      name,
      "slug": slug.current,
      how,
      additional,
      ingredientsCl,
      ingredientsOz,
      "image": image.asset->url,
      "alt": image.alt,
      taste,
      spirit,
      season,
      amount_ingredients,
      strength,
      "similar": similar[]->{
          _id, 
          name, 
          "slug": slug.current, 
          "image": image.asset->url, 
          "alt": image.alt,
          strength, 
          taste, 
          amount_ingredients, 
        }, 
    recommended,
    rating,
    recommendation,
    }`,
    { slug },
  );
}

export async function getWines(): Promise<Wines[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "wine"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "alt": image.alt,
            type,
            region,
            vintage,
            recommended,
            rating,   
        }`,
  );
}

export async function getWine(slug: string): Promise<Wines> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "wine" && slug.current == $slug][0]{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                "alt": image.alt,
                url,
                content,
                type,
                region,
                vintage,
                "similar": similar[]->{
                  _id,
                  name,
                  "slug": slug.current,
                  "image": image.asset->url,
                  "alt": image.alt,
                  type,
                  region,
                  vintage,
                },
                recommended,
                rating,
                recommendation,
            }`,
    { slug },
  );
}

export async function getFoods(): Promise<Food[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "food"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "alt": image.alt,
            type,
            cuisine,
            characteristics,
            mainIngredient,
            category,
            recommended,
            rating,
        }`,
  );
}

export async function getFood(slug: string): Promise<Food> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "food" && slug.current == $slug][0]{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                "alt": image.alt,
                url,
                how,
                ingredients,
                type,
                cuisine,
                category,
                "similar": similar[]->{
                  _id,
                  name,
                  "slug": slug.current,
                  "image": image.asset->url,
                  "alt": image.alt,
                  type,
                  characteristics,
                  cuisine,
                  category,
                  recommended,
                  rating,
                },
                time,
                characteristics,
                mainIngredient,
                recommended,
                rating,
                recommendation,
            }`,
    { slug },
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
        }`,
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                "alt": image.alt,
                "dark": image.dark,
                "imageTwo": imageTwo.asset->url,
                "altTwo": imageTwo.alt,
                "darkTwo": image.dark,
                url,
                urlTwo,
                linkText,
                linkTextTwo,
                heading,
                intro,
                modules[]{
                  _key,
                  _type,
                  _type == 'textSection' => {
                    title,
                    text,
                    url,
                    linkText,
                    level,
                    align,
                    bg,
                  },
                  _type == 'textPhoto' => {
                    title,
                    text,
                    "image": image.asset->url,
                    "alt": image.asset->alt,
                    url,
                    linkText,
                    level,
                  },
                  _type == 'buttonList' => {
                    items[]{
                      title,
                      link,
                    }
                  },
                  _type == 'formWithText' => {
                    label,
                    title,
                    text,
                    form,
                    bg,
                  }
                }
            }`,
    { slug },
  );
}
