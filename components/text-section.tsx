import Link from "next/link";
import { PortableText, PortableTextBlock } from "next-sanity";
import React from "react";

export type TText = {
  title?: string;
  text: PortableTextBlock[];
  url?: string;
  linkText?: string;
  level?: number;
  align?: string;
  bg?: boolean;
};

interface IText {
  data: TText;
}

const TextSection = ({ data }: IText) => {
  const { title, text, url, linkText, level, align, bg } = data;
  const type = level;
  const cta = url
    ? {
        url: url,
        text: linkText,
      }
    : null;

  const background = bg ? "bg-light" : "bg-white";

  return (
    <section className={background + " w-full"}>
      <div className="mx-auto max-w-6xl md:w-3/4 px-8 md:px-12 py-10 md:py-20">
        <div className="text-3xl pb-4">
          {title && (
            <>
              {type === 1 && <h1 className={align + " "}>{title}</h1>}
              {type === 2 && <h2 className={align + " "}>{title}</h2>}
              {type === 3 && <h3 className={align + " "}>{title}</h3>}
            </>
          )}
        </div>

        <div>
          <PortableText value={text} />
          {cta && (
            <Link href={cta.url}>
              <button>{cta.text}</button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextSection;
