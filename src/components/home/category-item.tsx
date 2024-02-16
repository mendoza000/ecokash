import { Divider } from "@nextui-org/react";
import type { Category } from "../../types";
import { formatToUs } from "../../lib/format-to-us";

interface Props {
	category: Category;
	amount: number;
	type: "revenue" | "expense";
}

export default function CategoryItem(props: Props) {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex gap-3">
				<div
					className={`rounded-xl p-2 inline-flex items-center justify-center bg-zinc-800`}
				>
					{props.category.icon}
				</div>
				<div className="text-center flex flex-col items-center justify-center">
					<p className="font-semibold">{props.category.name}</p>
				</div>

				<div className="font-bold ml-auto my-auto">
					<p
						className={
							props.type === "revenue" ? "text-blue-500" : "text-red-500"
						}
					>
						{formatToUs(props.amount)}
					</p>
				</div>
			</div>
			<Divider className="bg-zinc-700/20" />
		</div>
	);
}
