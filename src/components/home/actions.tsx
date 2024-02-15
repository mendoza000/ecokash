import {
	Button,
	Checkbox,
	Input,
	Link,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from "@nextui-org/react";
import {
	IconTrendingUp,
	IconTrendingDown,
	IconMail,
	IconLock,
} from "@tabler/icons-react";
import RevenueModal from "./modals/revenue-modal";
import ExpenseModal from "./modals/expense-modal";

export default function Actions() {
	const {
		isOpen: isOpenRevenue,
		onOpen: onOpenRevenue,
		onOpenChange: onOpenChangeRevenue,
	} = useDisclosure();
	const {
		isOpen: isOpenExpense,
		onOpen: onOpenExpense,
		onOpenChange: onOpenChangeExpense,
	} = useDisclosure();

	return (
		<>
			<RevenueModal isOpen={isOpenRevenue} onOpenChange={onOpenChangeRevenue} />
			<ExpenseModal isOpen={isOpenExpense} onOpenChange={onOpenChangeExpense} />

			<div className="grid grid-cols-2 gap-2">
				<Button variant="faded" onPress={onOpenRevenue}>
					<IconTrendingUp size={20} />
					New revenue
				</Button>
				<Button variant="faded" onPress={onOpenExpense}>
					<IconTrendingDown size={20} />
					New expense
				</Button>
			</div>
		</>
	);
}
