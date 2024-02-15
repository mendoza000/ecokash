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
import { IconMail, IconLock } from "@tabler/icons-react";
import { defaultCategories } from "../../../data/default/categories";

interface Props {
	isOpen: boolean;
	onOpenChange: () => void;
}

export default function ExpenseModal(props: Props) {
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
							/>
							<Input
								endContent={<IconCalculator className="text-default-400" />}
								label="Amount"
								placeholder="Enter the Amount"
								type="number"
							/>

							<Select
								label="Select a category"
								// endContent={<IconCategory2 className="text-default-400" />}
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
							<Button color="primary" onPress={onClose}>
								Create
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
