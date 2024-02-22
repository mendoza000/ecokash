import { useEffect, useState } from "react";
import useGetHistory from "./useGetHistory";

export default function useGetTotalAmount() {
	const history = useGetHistory();
	const [totalAmount, setTotalAmount] = useState<number>(0);

	useEffect(() => {
		setTotalAmount(0);
		history.forEach((item) => {
			if (typeof item.amount !== "string") {
				if (item.type === "revenue") {
					setTotalAmount((prev) => prev + parseFloat(item.amount as string));
				} else {
					setTotalAmount((prev) => prev - parseFloat(item.amount as string));
				}
			}
		});
	}, [history]);
	return totalAmount;
}
