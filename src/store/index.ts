import { create } from "zustand";

const store = () => ({
  userDetails: {},
});

export const useStore = create(store);
