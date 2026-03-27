import { create } from "zustand";

interface FieldItem {
    id: string;
    type: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    options?: string[];
    defaultValue?: string;
}

interface FormBuilderState {
    items: FieldItem[];
    addItem: (item: FieldItem) => void;
    updateItem: (id: string, updatedItem: Partial<FieldItem>) => void;
}

const useFormBuilder = create<FormBuilderState>((set) => {
    return {
        items: [] as FieldItem[],

        addItem: (item: FieldItem) => set((state) => ({ items: [...state.items, item] })),
        
        updateItem: (id: string, updatedItem: Partial<FieldItem>) => set((state) => ({
            items: state.items.map(item => item.id === id ? { ...item, ...updatedItem } : item)
        })),
    }
});

export default useFormBuilder