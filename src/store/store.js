import create from "zustand";

const useStore = create((set) => ({
  paragraph: "",
  setParagraph: (p) => set((state) => ({ paragraph: p })),
}));

export default useStore;
