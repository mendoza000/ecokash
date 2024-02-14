import {
	Card,
	CardBody,
	CardHeader,
	Divider,
	Select,
	SelectItem,
} from "@nextui-org/react";
import { IconArrowDown, IconReportMoney } from "@tabler/icons-react";
import HistoryItem from "./history-item";

export default function History() {
	return (
		<div>
			<Card className="min-h-[30rem] max-h-[30rem] md:min-h-[25rem] md:max-h-[25rem]">
				<CardHeader className="text-xl font-semibold justify-between">
					<div className="flex items-center">
						<IconReportMoney />
						History
					</div>
					<div>
						<Select
							placeholder="Filter by category"
							size="sm"
							labelPlacement="outside-left"
							className="min-w-[10rem]"
						>
							<SelectItem key={1} value={1}>
								Subscription
							</SelectItem>
						</Select>
					</div>
				</CardHeader>
				<Divider />
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
					<HistoryItem
						type="revenue"
						amount={3}
						category="Job"
						title="Sell code"
					/>
					<HistoryItem
						type="revenue"
						amount={3}
						category="Job"
						title="Sell code"
					/>
				</CardBody>
			</Card>
		</div>
	);
}
