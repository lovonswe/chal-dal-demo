import React from 'react'

export const categories = [
    {
        name: "Favourites",
        subCategories: null,
        path: "/favourites"
    },
    {
        name: "Ramadan",
        subCategories: null,
        path: "/ramadan",
    },
    {
        name: "Flash Sales",
        subCategories: null,
        path: "/flash-sales"
    },
    {
        name: "Popular",
        subCategories: null,
        path: "/popular"
    },
    {
        name: "Food",
        subCategories: [
            {
                name: "Fresh Vegetables",
                subCategories: null,
                path: "/food/fresh-vegetables"
            },
            {
                name: "Fresh Fruits",
                subCategories: null,
                path: "/food/fresh-fruits"
            },
            {
                name: "Dates (Khejur)",
                subCategories: null,
                path: "/food/fresh-fruits"
            }
        ],
        path: "/food"
    },
    {
        name: "Meat & Fish",
        subCategories:[
            {
                name: "Chicken & Poultry",
                subCategories: null,
                path: "/mean-and-fish/chicken-and-poultry"
            },
            {
                name: "Premium Perishables",
                subCategories: null,
                path: "/mean-and-fish/premium-perishables"
            },
            {
                name: "Frozen Fish",
                subCategories: null,
                path: "/mean-and-fish/frozen-fish",
            },
            {
                name: "Meat",
                subCategories: null,
                path: "/mean-and-fish/meat",
            },
            {
                name: "Tofu & Meat Alternatives",
                subCategories: null,
                path: "/mean-and-fish/tofu-and-meat-alternatives",
            },
            {
                name: "Dried Fish",
                subCategories: null,
                path: "/mean-and-fish/dried-fish"
            }
        ],  
        path: "/meat-and-fish"
    }
]