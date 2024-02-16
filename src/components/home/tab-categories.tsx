import { CardBody, ScrollShadow } from "@nextui-org/react";
import HistoryItem from "./history-item";
import { defaultRevenueCategories } from "../../data/default/revenue-categories";
import CategoryItem from "./category-item";
import { defaultCategories } from "../../data/default/categories";

export default function TabCategories() {
	return (
		<CardBody className="grid md:grid-cols-2 gap-5">
			<div className="flex flex-col gap-5 ">
				<h3>Revenue categories</h3>

				<div className="flex flex-col gap-2">
					{defaultRevenueCategories.map((category) => (
						<CategoryItem
							key={category.id}
							category={category}
							amount={0}
							type="revenue"
						/>
					))}
				</div>
			</div>

			<div className="flex flex-col gap-5">
				<h3>Expense categories</h3>

				<div className="flex flex-col gap-2">
					{defaultCategories.map((category) => (
						<CategoryItem
							key={category.id}
							category={category}
							amount={0}
							type="expense"
						/>
					))}
				</div>
			</div>
		</CardBody>
	);
}
