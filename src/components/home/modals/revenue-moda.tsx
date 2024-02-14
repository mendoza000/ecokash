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
} from "@nextui-org/react";
import { IconMail, IconLock } from "@tabler/icons-react";

interface Props {
	isOpen: boolean;
	onOpenChange: () => void;
}

export default function RevenueModal(props: Props) {
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
	);
}
