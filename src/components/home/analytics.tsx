import { Card, CardBody, CardHeader } from "@nextui-org/react";
import useGetHistory from "../../hooks/useGetHistory";
import { formatToUs } from "../../lib/format-to-us";
import useGetTotalAmount from "../../hooks/useGetTotalAmount";

export default function Analytics() {
	const total = useGetTotalAmount();

	return (
		<div className="grid grid-cols-1 gap-2 md:grid-cols-2">
			<Card className="bg-gradient-to-tr from-blue-500 via-blue-500 to-blue-300">
				<CardHeader className="gap-2">
					<h2 className="">Total balance</h2>
				</CardHeader>

				<CardBody>
					<span className="text-4xl font-bold">{formatToUs(total)}</span>
				</CardBody>
			</Card>

			<div className="grid grid-cols-2 gap-2">
				<Card className="">
					<CardHeader className="gap-2">
						<h2 className="">Budget</h2>
					</CardHeader>

					<CardBody>
						<span className="text-3xl font-bold">$ 400.00</span>
					</CardBody>
				</Card>
				<Card>
					<CardHeader className="gap-2">
						<h2 className="">Expenses</h2>
					</CardHeader>

					<CardBody>
						<span className="text-3xl font-bold">$ 100.00</span>
					</CardBody>
				</Card>
			</div>
		</div>
	);
}
