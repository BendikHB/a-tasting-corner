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
      type: "string",
      options: {
        list: [
          { title: "Sweet", value: "Sweet" },
          { title: "Sour", value: "Sour" },
          { title: "Fruity", value: "Fruity" },
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
          { title: "Vodka", value: "Vodka" },
          { title: "Tequila", value: "Tequila" },
          { title: "Gin", value: "Gin" },
          { title: "Rum", value: "Rum" },
          { title: "Whiskey", value: "Whiskey" },
        ],
      },
    },
    {
      name: "mainIngredient",
      title: "Main ingredient",
      type: "string",
      options: {
        list: [
          { title: "Fish", value: "Fish" },
          { title: "Shellfish", value: "Shellfish" },
          { title: "Bird", value: "Bird" },
          { title: "Game", value: "Game" },
          { title: "Beef", value: "Beef" },
          { title: "Vegetarian", value: "Vegetarian" },
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
          { title: "Traditional", value: "Traditional" },
          { title: "French", value: "French" },
          { title: "Italian", value: "Italian" },
          { title: "American", value: "American" },
          { title: "Indian", value: "Indian" },
          { title: "Japanese", value: "Japanese" },
          { title: "Mediterranean", value: "Mediterranean" },
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
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Fish", value: "fish" },
          { title: "Shellfish", value: "shellfish" },
          { title: "Duck", value: "duck" },
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

export default food;
