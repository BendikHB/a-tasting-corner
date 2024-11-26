const drink = {
  name: "drink",
  title: "Drinks",
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
      name: "additional",
      title: "Additional Information",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "ingredientsCl",
      title: "IngredientsCl",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "ingredientsOz",
      title: "IngredientsOz",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "similar",
      title: "Similar",
      type: "array",
      of: [{ type: "reference", to: [{ type: "drink" }] }],
    },
    {
      name: "strength",
      title: "Alcohol strength",
      type: "string",
      options: {
        list: [
          { title: "Høyt", value: "high" },
          { title: "Normal", value: "medium" },
          { title: "Lav", value: "low" },
          { title: "Uten alkohol", value: "no" },
        ],
      },
    },
    {
      name: "taste",
      title: "Taste",
      type: "string",
      options: {
        list: [
          { title: "Søt", value: "Sweet" },
          { title: "Bitter", value: "Bitter" },
          { title: "Sur", value: "Sour" },
          { title: "Fruktig", value: "Fruity" },
          { title: "Savory", value: "Savory" },
        ],
      },
    },
    {
      name: "spirit",
      title: "Base spirit",
      type: "string",
      options: {
        list: [
          { title: "Vodka", value: "Vodka" },
          { title: "Tequila", value: "Tequila" },
          { title: "Gin", value: "Gin" },
          { title: "Rom", value: "Rum" },
          { title: "Whiskey", value: "Whiskey" },
        ],
      },
    },
    {
      name: "season",
      title: "Season",
      type: "string",
      options: {
        list: [
          { title: "Spring", value: "Spring" },
          { title: "Summer", value: "Summer" },
          { title: "Fall", value: "Fall" },
          { title: "Winter", value: "Winter" },
        ],
      },
    },
    {
      name: "amount_ingredients",
      title: "Amount of ingredients",
      type: "string",
      options: {
        list: [
          { title: "To", value: "2" },
          { title: "Tre", value: "3" },
          { title: "Fire", value: "4" },
          { title: "Fem", value: "5" },
          { title: "Seks", value: "6" },
          { title: "Flere enn seks", value: "0" },
        ],
      },
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

export default drink;
