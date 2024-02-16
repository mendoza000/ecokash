import { useEffect, useState } from "react";
import { useExpensesStore } from "../store/expenses";
import { useRevenuesStore } from "../store/revenues";
import type { Expense, Revenue } from "../types";

export default function useGetHistory() {
	const [combinedData, setCombinedData] = useState<(Revenue | Expense)[]>([]);

	const { expenses } = useExpensesStore((state) => state);
	const { revenues } = useRevenuesStore((state) => state);

	useEffect(() => {
		// Fusionar las dos arrays en una sola
		const combined: (Revenue | Expense)[] = [...revenues, ...expenses];

		// Ordenar la nueva array combinada según la fecha en orden descendente
		combined.sort((a, b) => (a.date > b.date ? -1 : 1));

		// Establecer la array combinada en el estado
		setCombinedData(combined);
	}, [expenses, revenues]);

	return combinedData;
}
