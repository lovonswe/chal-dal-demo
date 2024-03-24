import React from "react";

export const categories = [
  {
    name: "Favourites",
    subCategories: null,
    path: "/favourites",
  },
  {
    name: "Ramadan",
    subCategories: null,
    path: "/ramadan",
  },
  {
    name: "Flash Sales",
    subCategories: null,
    path: "/flash-sales",
  },
  {
    name: "Popular",
    subCategories: null,
    path: "/popular",
  },
  {
    name: "Food",
    subCategories: [
      {
        name: "Fruits & Vegetables",
        subCategories: [
          {
            name: "Fresh Vegetables",
            subCategories: null,
            path: "/food/fruits-and-vegetables/fresh-vegetables",
          },
          {
            name: "Fresh Fruits",
            subCategories: null,
            path: "/food/fruits-and-vegetables/fresh-fruits",
          },
          {
            name: "Dates (Khejur)",
            subCategories: null,
            path: "/food/fruits-and-vegetables/dates",
          },
        ],
        path: "/food/fruits-and-vegetables",
      },
      {
        name: "Meat & Fish",
        subCategories: [
          {
            name: "Chicken & Poultry",
            subCategories: null,
            path: "/food/meat-and-fish/chicken-and-poultry",
          },
          {
            name: "Premium Perishables",
            subCategories: null,
            path: "/food/meat-and-fish/premium-perishables",
          },
          {
            name: "Frozen Fish",
            subCategories: null,
            path: "/food/meat-and-fish/frozen-fish",
          },
          {
            name: "Meat",
            subCategories: null,
            path: "/food/meaf-and-fish/meat",
          },
          {
            name: "Tofu & Meat Alternatives",
            subCategories: null,
            path: "/food/meaf-and-fish/tofu-and-meat-alternatives",
          },
          {
            name: "Dried Fish",
            subCategories: null,
            path: "/food/meat-and-fish/dried-fish",
          },
        ],
        path: "/food",
      },
    ],
  },
];
