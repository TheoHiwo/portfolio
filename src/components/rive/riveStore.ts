
import { create } from "zustand";



interface LevelState {
    level: number
    incrementLevel: () => void
    decrementLevel: () => void
}


export const useRiveStore = create<LevelState>()((set) => ({
  level: 0,
  incrementLevel: () =>
    set((state) => ({
      level: state.level + 1,
    })),
  decrementLevel: () =>
    set((state) => ({
      level: state.level - 1,
    })),
}));