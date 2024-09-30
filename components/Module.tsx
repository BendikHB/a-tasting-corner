import dynamic from "next/dynamic";
import { PortableTextBlock } from "next-sanity";

export type TModule = {
  _type: string;
  title: string;
  text: PortableTextBlock[];
  url: string;
  linkText: string;
  level: number;
  align: string;
  image: string;
  alt: string;
  bg: boolean;
  items: [];
  form: string;
  label: string;
};
interface IModule {
  module: TModule;
}

const Text = dynamic(() => import("./text-section"));
const TextPhoto = dynamic(() => import("./text-photo"));
const ButtonList = dynamic(() => import("./button-list"));
const Form = dynamic(() => import("./form-with-text"));

export const Module = ({ module }: IModule) => {
  switch (module._type) {
    case "textSection":
      return <Text data={module} />;
    case "textPhoto":
      return <TextPhoto data={module} />;
    case "buttonList":
      return <ButtonList data={module.items} />;
    case "formWithText":
      return <Form data={module} />;
    default:
      return null;
  }
};
