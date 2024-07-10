import { AnimationType } from "@/components/ui/AnimationEffect";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type StateStore = {
  data: {
    isShow: boolean;
    type: AnimationType;
    onAnimationEnd: () => void;
  };
  actions: {
    startAnimation: (type: AnimationType, onAnimationEnd?: () => void) => void;
    initAnimation: () => void;
  };
};

const useAnimationEffectStore = create<StateStore>()(
  immer((set) => ({
    data: {
      isShow: false,
      type: "heart",
      onAnimationEnd: () => {},
    },

    actions: {
      startAnimation: (type, onAnimationEnd) => {
        set((state) => {
          console.log("startAnimation");
          state.data.isShow = true;
          state.data.type = type;
          onAnimationEnd && (state.data.onAnimationEnd = onAnimationEnd);
        });
      },

      initAnimation: () => {
        set((state) => {
          state.data.isShow = false;
          state.data.type = "heart";
          state.data.onAnimationEnd = () => {};
        });
      },
    },
  }))
);

export default useAnimationEffectStore;

export const useAnimationEffectState = () =>
  useAnimationEffectStore((state) => state.data);

export const useAnimationEffectActions = () =>
  useAnimationEffectStore((state) => state.actions);
