const page = {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "type",
      title: "Page type",
      type: "string",
      options: {
        list: [
          { title: "Frontpage", value: "frontpage" },
          { title: "Main", value: "main" },
          { title: "Sub", value: "sub" },
        ],
      },
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
        {
          name: "dark",
          title: "Image is dark",
          type: "boolean",
        },
      ],
    },
    {
      name: "imageTwo",
      title: "ImageTwo",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
        {
          name: "dark",
          title: "Image is dark",
          type: "boolean",
        },
      ],
      //@ts-ignore
      hidden: ({ document }) =>
        document?.type !== "main" && document?.type !== "frontpage",
    },
    {
      name: "url",
      title: "Url",
      type: "string",
    },
    {
      name: "linkText",
      title: "Link text",
      type: "string",
    },
    {
      name: "urlTwo",
      title: "Url # 2",
      type: "string",
      //@ts-ignore
      hidden: ({ document }) => document?.type === "sub",
    },
    {
      name: "linkTextTwo",
      title: "Link text #2",
      type: "string",
      //@ts-ignore
      hidden: ({ document }) => document?.type === "sub",
    },
    {
      name: "heading",
      title: "Title",
      type: "string",
    },
    {
      name: "intro",
      title: "Intro",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "modules",
      title: "Content",
      type: "array",
      of: [
        { type: "textSection" },
        { type: "textPhoto" },
        { type: "buttonList" },
        { type: "formWithText" },
      ],
    },
  ],
};

export default page;
