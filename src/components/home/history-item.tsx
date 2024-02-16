import {
	Button,
	Divider,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
} from "@nextui-org/react";
import {
	IconArrowDown,
	IconArrowUp,
	IconEdit,
	IconTrash,
} from "@tabler/icons-react";
import { formatToUs } from "../../lib/format-to-us";
import { IconDotsVertical } from "@tabler/icons-react";
import type { Category } from "../../types";
import { useRevenuesStore } from "../../store/revenues";
import { useExpensesStore } from "../../store/expenses";

interface Props {
	type: "revenue" | "expense";
	title: string;
	amount: number;
	category: Category;
	uuid: string;
}

export default function HistoryItem(props: Props) {
	const { removeRevenue } = useRevenuesStore((state) => state);
	const { removeExpense } = useExpensesStore((state) => state);

	const handleDelete = () => {
		if (props.type === "revenue") {
			removeRevenue(props.uuid);
		} else {
			removeExpense(props.uuid);
		}
	};

	return (
		<div className="flex flex-col gap-2">
			<div className="flex gap-3">
				<div
					className={`rounded-xl p-2 inline-flex items-center justify-center w-10 h-10 ${
						props.type === "revenue" ? "bg-blue-500" : "bg-red-500"
					}`}
				>
					{props.type === "revenue" ? <IconArrowUp /> : <IconArrowDown />}
				</div>
				<div>
					<p className="font-semibold">{props.title}</p>
					<p className="text-xs opacity-50">{`${props.category.icon} ${props.category.name}`}</p>
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
				<Dropdown
					// backdrop="blur"
					showArrow
					classNames={{
						base: "before:bg-default-200", // change arrow background
						content:
							"py-1 px-1 border border-default-200 bg-gradient-to-br from-zinc-900 to-zinc-950",
					}}
				>
					<DropdownTrigger>
						<Button variant="light" isIconOnly>
							<IconDotsVertical className="opacity-50" />
						</Button>
					</DropdownTrigger>
					<DropdownMenu variant="faded" aria-label="Actions">
						<DropdownSection title={"Actions"}>
							<DropdownItem key="edit" startContent={<IconEdit size={18} />}>
								Edit
							</DropdownItem>
							<DropdownItem
								key="delete"
								startContent={<IconTrash size={18} />}
								className="text-danger"
								color="danger"
								onPress={handleDelete}
							>
								Delete file
							</DropdownItem>
						</DropdownSection>
					</DropdownMenu>
				</Dropdown>
			</div>
			<Divider className="bg-zinc-700/20" />
		</div>
	);
}
