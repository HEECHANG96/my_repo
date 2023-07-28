import create from "zustand";
import { devtools } from "zustand/middleware";
import { isTestEnvironment } from "../../utils/isTestEnvironment";

interface TStoreCount {
  count: number;
  plusCount: () => void;
  minusCount: () => void;
}

// 사용방법
// const { count, plusCount, minusCount } = useStoreCount();

const store = (
  set: (fn: (state: TStoreCount) => TStoreCount) => void
): TStoreCount => ({
  count: 0,

  plusCount: () => {
    set((state: TStoreCount) => ({
      ...state,
      count: state.count + 1,
    }));
  },

  minusCount: () => {
    set((state: TStoreCount) => ({
      ...state,
      count: state.count - 1,
    }));
  },
});

export const useStoreCount = create<TStoreCount>()(
  isTestEnvironment ? devtools(store) : store
);

export const useGetCount = () => {
  return useStoreCount((state) => state.count);
};
