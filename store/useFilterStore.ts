// sampleStore.ts
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type stateStore = {
  tendency: number;
  location: string;
  distance: number;
  age: number[];

  setTendency: (tendency: number) => void;
  setLocation: (location: string) => void;
  setDistance: (distance: number) => void;
  setAge: (age: number[]) => void;
};

const useFilterStore = create<stateStore>()(
  immer((set) => ({
    tendency: 1,
    location: "서울",
    distance: 20,
    age: [20, 40],

    setTendency: (tendency) => {
      set((state) => {
        state.tendency = tendency;
      });
    },

    setLocation: (location) => {
      set((state) => {
        state.location = location;
      });
    },

    setDistance: (distance) => {
      set((state) => {
        state.distance = distance;
      });
    },

    setAge: (age) => {
      set((state) => {
        state.age = age;
      });
    },
  }))
);

export default useFilterStore;
