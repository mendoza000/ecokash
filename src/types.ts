export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Revenue {
  uuid: string;
  category: Category;
  amount: number | string;
  date: string;
  type: "revenue";
  title: string;
}

export interface Expense {
  uuid: string;
  category: Category;
  amount: number | string;
  date: string;
  type: "expense";
  title: string;
}