export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Revenue {
  id: string;
  category: Category;
  amount: number;
  date: string;
}

export interface Expense {
  id: string;
  category: Category;
  amount: number;
  date: string;
}