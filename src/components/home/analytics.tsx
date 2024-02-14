import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { IconPigMoney, IconCashOff } from "@tabler/icons-react";

export default function Analytics() {
	return (
		<div className="grid grid-cols-1 gap-2 md:grid-cols-2">
			<Card className="bg-gradient-to-tr from-blue-600 via-blue-600/50 to-zinc-900">
				<CardHeader className="gap-2">
					<h2 className="">Total balance</h2>
				</CardHeader>

				<CardBody>
					<span className="text-4xl font-bold">$ 300.00</span>
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
