import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { uid } from 'uid';
import { Favorite } from '@mui/icons-material';




let productStore = (set) => ({
    products: [...productList],
    updateProduct: (product) => set((state) => ({
        products: [...state.entries, product]
    })),
});

productStore = persist(productStore, { name: "products" });
export const useProductStore = create(productStore);


const productList = [
    {
        id: uid(),
        productName: "Chaldal Sippy Orange Drinks",
        category: "Food",
        subCategory: "Beverages",
        subsubCategory: "Syrups & Powder Drinks",
        subsubcategoryImage: "https://chaldn.com/_mpimage/syrups-powder-drinks?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D30220&q=best&v=1&m=400&webp=1",
        subCategoryImage: "https://chaldn.com/_mpimage/beverages?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23727&q=low&v=1&m=400&webp=1",
        productImage: "https://chaldn.com/_mpimage/chaldal-sippy-orange-drinks-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154114&q=best&v=1&m=400&webp=1",
        addedInCart: 0,
        stock: 100,
        unitPrice: 500,
        discount: 40,
        weight: "500 gm",
        popular: true,
        offer: false,
        offerImage: null,
        favorite: false,
        ramadan: true,
        offerImage: "https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154570&q=low&v=1&m=400&webp=1"
    },
    {
        id: uid(),
        productName: "Chaldal Sippy Mango Drinks",
        category: "Food",
        subCategory: "Beverages",
        subsubCategory: "Syrups & Powder Drinks",
        subsubcategoryImage: "https://chaldn.com/_mpimage/syrups-powder-drinks?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D30220&q=best&v=1&m=400&webp=1",
        subCategoryImage: "https://chaldn.com/_mpimage/beverages?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23727&q=low&v=1&m=400&webp=1",
        productImage: "https://chaldn.com/_mpimage/chaldal-sippy-mango-drinks-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154116&q=best&v=1&m=400&webp=1",
        addedInCart: 0,
        stock: 100,
        unitPrice: 500,
        discount: 40,
        weight: "500 gm",
        popular: true,
        offer: false,
        offerImage: null,
        favorite: false,
        ramadan: true,
        offerImage: "https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154570&q=low&v=1&m=400&webp=1"
    },
    {
        id: uid(),
        productName: "Dettol Soap Bathing Bar Original Germ Defence 75 gm (Free Tiffin Box)",
        category: "Cleaning Supplies",
        subCategory: "Dishwashing Supplies",
        subsubCategory: null,
        subsubcategoryImage: null,
        subCategoryImage: "https://chaldal.com/dish-wash",
        productImage: "https://chaldn.com/_mpimage/dettol-soap-bathing-bar-original-germ-defence-75-gm-free-tiffin-box-3-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D151122&q=best&v=1&m=400&webp=1",
        addedInCart: 0,
        stock: 100,
        unitPrice: 180,
        discount: 12,
        weight: "3 pcs",
        popular: true,
        offer: true,
        favorite: false,
        ramadan: false,
        offerImage: "https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D149095&q=low&v=1&m=400&webp=1"
    },
    {
        id: uid(),
        productName: "Crown Dabbas Dates",
        category: "Food",
        subCategory: "Fruits & Vegetables",
        subsubCategory: "Fresh Fruits",
        subsubcategoryImage: "https://chaldn.com/_mpimage/syrups-powder-drinks?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D30220&q=best&v=1&m=400&webp=1",
        subCategoryImage: "https://chaldal.com/fruits-vegetables",
        productImage: "https://chaldn.com/_mpimage/crown-dabbas-dates-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129412&q=best&v=1&m=400&webp=1",
        addedInCart: 0,
        stock: 100,
        unitPrice: 650,
        discount: 16,
        weight: "500 gm",
        popular: true,
        offer: false,
        favorite: false,
        ramadan: true,
        offerImage: null,
    },
    {
        id: uid(),
        productName: "Crown Dabbas Dates",
        category: "Food",
        subCategory: "Fruits & Vegetables",
        subsubCategory: "Fresh Fruits",
        subsubcategoryImage: "https://chaldn.com/_mpimage/syrups-powder-drinks?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D30220&q=best&v=1&m=400&webp=1",
        subCategoryImage: "https://chaldal.com/fruits-vegetables",
        productImage: "https://chaldn.com/_mpimage/chaldal-sippy-orange-drinks-500-gm-and-crown-dabbas-dates-1-kg-combo-offer?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154429&q=best&v=1&m=400&webp=1",
        addedInCart: 0,
        stock: 100,
        unitPrice: 1150,
        discount: 33,
        weight: "500 gm",
        popular: true,
        offer: false,
        favorite: false,
        ramadan: true,
        offerImage: null,
    },
    {
        id: uid(),
        productName: "Crown Dabbas Dates",
        category: "Food",
        subCategory: "Fruits & Vegetables",
        subsubCategory: "Fresh Fruits",
        subsubcategoryImage: "https://chaldn.com/_mpimage/syrups-powder-drinks?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D30220&q=best&v=1&m=400&webp=1",
        subCategoryImage: "https://chaldal.com/fruits-vegetables",
        productImage: "https://chaldn.com/_mpimage/crown-dabbas-dates-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129412&q=best&v=1&m=400&webp=1",
        addedInCart: 0,
        stock: 100,
        unitPrice: 650,
        discount: 16,
        weight: "500 gm",
        popular: true,
        offer: false,
        favorite: false,
        ramadan: true,
        offerImage: null,
    },
    {
        id: uid(),
        productName: "Date Crown Lulu Dates",
        category: "Food",
        subCategory: "Fruits & Vegetables",
        subsubCategory: "Fresh Fruits",
        subsubcategoryImage: "https://chaldn.com/_mpimage/syrups-powder-drinks?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D30220&q=best&v=1&m=400&webp=1",
        subCategoryImage: "https://chaldal.com/fruits-vegetables",
        productImage: "https://chaldn.com/_mpimage/date-crown-lulu-dates-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129300&q=best&v=1&m=400&webp=1",
        addedInCart: 0,
        stock: 100,
        unitPrice: 350,
        discount: 10,
        weight: "400 gm",
        popular: true,
        offer: false,
        favorite: false,
        ramadan: true,
        offerImage: null,
    },
]
