import {create} from "zustand"
import type { Revenue } from "../types";
import { devtools, persist } from "zustand/middleware";

interface RevenuesState {
  revenues: Revenue[];
  setRevenues: (revenues: Revenue[]) => void;
  addRevenue: (revenue: Revenue) => void;
  removeRevenue: (id: string) => void;
}

export const useRevenuesStore = create<RevenuesState>()(
  devtools(
    persist(
      (set, get) => ({
        revenues: [],
        setRevenues: (revenues) => set((state) => {
          return {
            ...state,
            revenues,
          }
        }),
        addRevenue: (revenue) => set((state) => {
          return {
            ...state,
            revenues: [...state.revenues, revenue],
          }
        }),
        removeRevenue: (id) => set((state) => {
          return {
            ...state,
            revenues: state.revenues.filter((revenue) => revenue.uuid !== id),
          }
        }),
      }),
      {name: "ek-r"}
    )
  )
)
