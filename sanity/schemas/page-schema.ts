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
    },
    {
      name: "linkTextTwo",
      title: "Link text #2",
      type: "string",
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
