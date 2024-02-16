import {create} from "zustand"
import type { Expense } from "../types";
import { devtools, persist } from "zustand/middleware";

interface ExpensesState {
  expenses: Expense[];
  setExpenses: (expenses: Expense[]) => void;
  addExpense: (Expense: Expense) => void;
  removeExpense: (id: string) => void;
}

export const useExpensesStore = create<ExpensesState>()(
  devtools(
    persist(
      (set, get) => ({
        expenses: [],
        setExpenses: (expenses) => set((state) => {
          return {
            ...state,
            expenses,
          }
        }),
        addExpense: (expense) => set((state) => {
          return {
            ...state,
            expenses: [...state.expenses, expense],
          }
        }),
        removeExpense: (id) => set((state) => {
          return {
            ...state,
            revenues: state.expenses.filter((expense) => expense.uuid !== id),
          }
        }),
      }),
      {name: "ek-e"}
    )
  )
)
