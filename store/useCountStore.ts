// sampleStore.ts
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type stateStore = {
  count: number;

  setNumber: (count: number) => void;
  setPlusOne: () => void;
};

const useCountStore = create<stateStore>()(
  immer((set) => ({
    count: 0,

    setNumber: (count) => {
      set((state) => {
        state.count = count;
      });
    },

    setPlusOne: () => {
      set((state) => {
        state.count = state.count + 1;
      });
    },
  }))
);

export default useCountStore;
