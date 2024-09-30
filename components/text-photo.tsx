import { PortableText, PortableTextBlock } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type TTextPhoto = {
  title?: string;
  text: PortableTextBlock[];
  image: string;
  alt: string;
  url?: string;
  linkText?: string;
  level?: number;
};
interface ITextPhoto {
  data: TTextPhoto;
}

const TextPhoto = ({ data }: ITextPhoto) => {
  const { title, text, image, alt, url, linkText, level } = data;
  const type = level;
  const cta = url
    ? {
        url: url,
        text: linkText,
      }
    : null;

  return (
    <section className="relative flex justify-center max-w-screen-xl mx-auto items-center py-24">
      <div className="bg-sand absolute py-8 px-12 text-3xl left-1/2 top-36">
        {title && (
          <>
            {type === 1 && <h1>{title}</h1>}
            {type === 2 && <h2>{title}</h2>}
            {type === 3 && <h3>{title}</h3>}
          </>
        )}
      </div>
      <Image src={image} alt={alt} width={600} height={600} />
      <div className="w-1/3 p-8">
        <PortableText value={text} />
        {cta && (
          <Link href={cta.url}>
            <button className="pt-6">{cta.text}</button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default TextPhoto;
