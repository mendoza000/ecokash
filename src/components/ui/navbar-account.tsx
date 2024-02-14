import {
	Dropdown,
	DropdownTrigger,
	Button,
	DropdownMenu,
	DropdownItem,
	DropdownSection,
} from "@nextui-org/react";
import { IconLogin, IconUser } from "@tabler/icons-react";

export default function NavbarAccount() {
	return (
		<Dropdown
			showArrow
			classNames={{
				base: "before:bg-default-200", // change arrow background
				content:
					"py-1 px-1 border border-default-200 bg-gradient-to-br from-zinc-900 to-zinc-950",
			}}
		>
			<DropdownTrigger>
				<Button variant="bordered">Account</Button>
			</DropdownTrigger>
			<DropdownMenu variant="faded" aria-label="Dropdown menu with description">
				<DropdownSection title={"Do you like sync?"}>
					<DropdownItem
						key="sign-up"
						description="You are new here?"
						startContent={<IconUser />}
					>
						Sign up
					</DropdownItem>
					<DropdownItem
						key="sign-in"
						description="You are already here?"
						startContent={<IconLogin />}
					>
						Sign in
					</DropdownItem>
				</DropdownSection>
			</DropdownMenu>
		</Dropdown>
	);
}
