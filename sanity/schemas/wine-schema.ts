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
          { title: "Red", value: "Red" },
          { title: "White", value: "White" },
          { title: "Rosé", value: "Rose" },
          { title: "Sparkling", value: "Sparkling" },
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
          { title: "New World", value: "new-world" },
          { title: "Old World", value: "old-world" },
          { title: "France", value: "France" },
          { title: "Italy", value: "Italy" },
          { title: "Usa", value: "Usa" },
          { title: "South Africa", value: "south-africa" },
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
