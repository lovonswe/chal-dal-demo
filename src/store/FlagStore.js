import { create } from 'zustand';
import { persist } from 'zustand/middleware';

let sidebarStore = (set) => ({
    open: true,
    updateSidebarStatus: (status) => set((state) => ({
        open: status,
    })),
});

sidebarStore = persist(sidebarStore, { name: "sidebarstatus" });
export const useSidebarStore = create(sidebarStore);