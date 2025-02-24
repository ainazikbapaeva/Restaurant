import { create } from "zustand";

interface useMenuModalState {
	isOpen: boolean;
	setIsOpen: (value: boolean, category: string) => void;
	close: (value: boolean) => void;
	category: string;
	setItemIndex: (value: number | null) => void;
	itemId: null | number;
}
export const useMenuModalStore = create<useMenuModalState>((set) => ({
	isOpen: false,
	itemId: null,
	category: "",
	setIsOpen: (value, category) => set({ isOpen: value, category: category }),
	close: (value: boolean) => set({ isOpen: value }),
	setItemIndex: (value) => set({ itemId: value }),
}));
