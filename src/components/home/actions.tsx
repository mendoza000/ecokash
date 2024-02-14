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
			<Modal
				isOpen={isOpenRevenue}
				onOpenChange={onOpenChangeRevenue}
				placement="auto"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Modal Title
							</ModalHeader>
							<ModalBody>
								<Input
									autoFocus
									endContent={
										<IconMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
									}
									label="Email"
									placeholder="Enter your email"
									variant="bordered"
								/>
								<Input
									endContent={
										<IconLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
									}
									label="Password"
									placeholder="Enter your password"
									type="password"
									variant="bordered"
								/>
								<div className="flex py-2 px-1 justify-between">
									<Checkbox
										classNames={{
											label: "text-small",
										}}
									>
										Remember me
									</Checkbox>
									<Link color="primary" href="#" size="sm">
										Forgot password?
									</Link>
								</div>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
								<Button color="primary" onPress={onClose}>
									Action
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>

			<div className="grid grid-cols-2 gap-2">
				<Button variant="faded" onPress={onOpenRevenue}>
					<IconTrendingUp size={20} />
					New revenue
				</Button>
				<Button variant="faded">
					<IconTrendingDown size={20} />
					New expense
				</Button>
			</div>
		</>
	);
}
