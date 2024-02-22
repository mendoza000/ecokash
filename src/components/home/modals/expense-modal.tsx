import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Select,
	SelectItem,
} from "@nextui-org/react";
import { IconCalculator, IconWriting } from "@tabler/icons-react";
import { defaultCategories } from "../../../data/default/categories";
import { useState } from "react";
import type { Expense } from "../../../types";
import { v4 as uuidv4 } from "uuid";
import { useExpensesStore } from "../../../store/expenses";

interface Props {
	isOpen: boolean;
	onOpenChange: () => void;
}

export default function ExpenseModal(props: Props) {
	const { addExpense } = useExpensesStore((state) => state);

	const [form, setForm] = useState<Expense>({
		amount: 0,
		category: defaultCategories[0],
		title: "",
		type: "expense",
		date: new Date().toISOString(),
		uuid: uuidv4(),
	});

	const handleChangeForm = (name: string, value: string | number) => {
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleChangeCategory = (key: any) => {
		const category = defaultCategories.find(
			(c) => c.id === key.values().next().value
		);

		if (category) {
			setForm((prev) => ({
				...prev,
				category: category,
			}));
		}
	};

	const handleCreateExpense = () => {
		const id = uuidv4();

		addExpense({
			...form,
			amount: parseFloat(form.amount as string),
		});

		setForm(() => ({
			amount: 0,
			category: defaultCategories[0],
			title: "",
			type: "expense",
			date: new Date().toISOString(),
			uuid: id,
		}));
	};

	return (
		<Modal
			isOpen={props.isOpen}
			onOpenChange={props.onOpenChange}
			placement="top-center"
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							New Expense
						</ModalHeader>
						<ModalBody>
							<Input
								autoFocus
								endContent={<IconWriting className="text-default-400" />}
								label="Name"
								placeholder="Enter the name"
								onChange={(e) => handleChangeForm("title", e.target.value)}
								value={form.title}
							/>
							<Input
								endContent={<IconCalculator className="text-default-400" />}
								label="Amount"
								placeholder="Enter the Amount"
								type="number"
								onChange={(e) => handleChangeForm("amount", e.target.value)}
								value={`${form.amount}`}
							/>

							<Select
								label="Select a category"
								defaultSelectedKeys={[form.category.id]}
								onSelectionChange={(key) => handleChangeCategory(key)}
							>
								{defaultCategories.map((c) => {
									return (
										<SelectItem key={c.id} value={c.id}>
											{`${c.icon} ${c.name}`}
										</SelectItem>
									);
								})}
							</Select>
						</ModalBody>
						<ModalFooter>
							<Button color="danger" variant="light" onPress={onClose}>
								Close
							</Button>
							<Button color="primary" onPress={handleCreateExpense}>
								Create
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
