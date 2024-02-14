import { CardBody } from "@nextui-org/react";
import HistoryItem from "./history-item";

export default function TabCategories() {
	return (
		<CardBody className="gap-3">
			<HistoryItem
				type="expense"
				amount={10}
				category="Food"
				title="Buy coffee"
			/>
			<HistoryItem
				type="expense"
				amount={15}
				category="Food"
				title="Buy burger"
			/>
			<HistoryItem type="revenue" amount={3} category="Job" title="Sell code" />
			<HistoryItem type="revenue" amount={3} category="Job" title="Sell code" />
		</CardBody>
	);
}
