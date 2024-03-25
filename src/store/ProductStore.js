import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { uid } from 'uid';
import { Favorite } from '@mui/icons-material';
import { productList } from '../components/sidebar/SidebarData';



let productStore = (set) => ({
   products: [...productList],
   updateProduct: (product) => set((state) => ({
        products: [...state.entries, product]
    })),
});

productStore = persist(productStore, { name: "products" });
export const useProductStore = create(productStore);




