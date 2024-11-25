const wine = {
  name: "wine",
  title: "Wines",
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
      ],
    },
    {
      name: "bottle",
      title: "Bottle",
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
      name: "background",
      title: "Background",
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
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "similar",
      title: "Similar",
      type: "array",
      of: [{ type: "reference", to: [{ type: "wine" }] }],
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Rød", value: "rod" },
          { title: "Hvit", value: "hvit" },
          { title: "Rosé", value: "Rose" },
          { title: "Muserende", value: "muserende" },
          { title: "Port", value: "Port" },
        ],
      },
    },
    {
      name: "region",
      title: "Region",
      type: "string",
      options: {
        list: [
          { title: "Frankrike", value: "frankrike" },
          { title: "Italia", value: "Italia" },
          { title: "Usa", value: "Usa" },
          { title: "Sør Afrika", value: "sor-afrika" },
          { title: "Aregentina", value: "argentina" },
          { title: "Australia", value: "australia" },
          { title: "Tyskland", value: "tyskland" },
        ],
      },
    },
    {
      name: "vintage",
      title: "Vintage",
      type: "string",
    },
    {
      name: "recommended",
      title: "Recommended",
      type: "boolean",
    },
    {
      name: "rating",
      title: "Rating",
      type: "string",
    },
    {
      name: "recommendation",
      title: "Recommendation",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default wine;
