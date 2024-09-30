import { defineType } from "sanity";

export const textSection = defineType({
  name: "textSection",
  title: "Text Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "url",
      title: "Url",
      type: "string",
    },
    {
      name: "linkText",
      title: "Link",
      type: "string",
    },
    {
      name: "level",
      title: "Heading level",
      type: "number",
    },
    {
      name: "align",
      title: "Align",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "text-left" },
          { title: "Center", value: "text-center" },
          { title: "Right", value: "text-right" },
        ],
      },
    },
    {
      name: "bg",
      title: "Background color",
      type: "boolean",
    },
  ],
});

export const textPhoto = defineType({
  name: "textPhoto",
  title: "Text and photo",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "Url",
      type: "string",
    },
    {
      name: "linkText",
      title: "Link",
      type: "string",
    },
    {
      name: "level",
      title: "Heading level",
      type: "number",
    },
  ],
});

export const cta = defineType({
  name: "cta",
  title: "Cta",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "link",
      type: "string",
    },
  ],
});

export const buttonList = defineType({
  name: "buttonList",
  title: "CTA list",
  type: "object",
  fields: [{ name: "items", type: "array", of: [{ type: "cta" }] }],
});

export const formWithText = defineType({
  name: "formWithText",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "form",
      type: "string",
      description: "Select form",
      options: {
        list: [
          { title: "Contact", value: "contact" },
          { title: "Newsletter", value: "newsletter" },
        ],
      },
    },
    {
      name: "bg",
      title: "Background color",
      type: "boolean",
    },
  ],
});
