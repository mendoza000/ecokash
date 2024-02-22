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
import { defaultRevenueCategories } from "../../../data/default/revenue-categories";
import { useState } from "react";
import type { Revenue } from "../../../types";
import { v4 as uuidv4 } from "uuid";
import { useRevenuesStore } from "../../../store/revenues";

interface Props {
	isOpen: boolean;
	onOpenChange: () => void;
}

export default function RevenueModal(props: Props) {
	const { addRevenue } = useRevenuesStore((state) => state);

	const [form, setForm] = useState<Revenue>({
		amount: 0,
		category: defaultRevenueCategories[0],
		title: "",
		type: "revenue",
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
		const category = defaultRevenueCategories.find(
			(c) => c.id === key.values().next().value
		);

		if (category) {
			setForm((prev) => ({
				...prev,
				category: category,
			}));
		}
	};

	const handleCreateRevenue = () => {
		const id = uuidv4();

		addRevenue({
			...form,
			amount: parseFloat(form.amount as string),
		});

		setForm(() => ({
			amount: 0,
			category: defaultRevenueCategories[0],
			title: "",
			type: "revenue",
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
							New Revenue
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
								// endContent={<IconCategory2 className="text-default-400" />}
							>
								{defaultRevenueCategories.map((c) => {
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
							<Button color="primary" onPress={handleCreateRevenue}>
								Create
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
