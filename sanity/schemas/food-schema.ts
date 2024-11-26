const food = {
  name: "food",
  title: "Food",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "heading",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
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
      name: "how",
      title: "How",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "similar",
      title: "Similar",
      type: "array",
      of: [{ type: "reference", to: [{ type: "food" }] }],
    },
    {
      name: "characteristics",
      title: "Characteristics",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Søt", value: "Sot" },
          { title: "Sur", value: "Sur" },
          { title: "Fruktig", value: "Fruktig" },
          { title: "Savory", value: "Savory" },
        ],
      },
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Apertif", value: "Apertif" },
          { title: "Hovedrett", value: "Hovedrett" },
          { title: "Tilbehør", value: "Tilbehor" },
          { title: "Salater", value: "Salater" },
          { title: "Sauser", value: "Sauser" },
          { title: "Dessert", value: "Dessert" },
        ],
      },
    },
    {
      name: "mainIngredient",
      title: "Main ingredient",
      type: "string",
      options: {
        list: [
          { title: "Fisk", value: "Fisk" },
          { title: "Skalldyr", value: "Skalldyr" },
          { title: "Fugl", value: "Fugl" },
          { title: "Vilt", value: "Vilt" },
          { title: "Storfe", value: "Storfe" },
          { title: "Vegetar", value: "Vegetar" },
        ],
      },
    },
    {
      name: "cuisine",
      title: "Cuisine",
      type: "string",
      options: {
        list: [
          { title: "Gourmet", value: "Gourmet" },
          { title: "Tradisjonell", value: "Tradisjonell" },
          { title: "Fransk", value: "Fransk" },
          { title: "Italiensk", value: "Italiensk" },
          { title: "Amerikansk", value: "Amerikansk" },
          { title: "Indian", value: "Indisk" },
          { title: "Japansk", value: "Japansk" },
          { title: "Middelhavet", value: "Middelhavet" },
        ],
      },
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
    },
    {
      name: "time",
      title: "Time",
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

export default food;
