import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { IconCategory2, IconPlus } from "@tabler/icons-react";

export default function Categories() {
	return (
		<Card className="lg:min-h-[28rem] min-h-[20.5rem]">
			<CardHeader className="gap-2">
				<IconCategory2 />
				<h3 className="font-bold text-2xl">Categories</h3>

				<Button size="sm" className="ml-auto">
					<IconPlus size={15} />
					Add Category
				</Button>
			</CardHeader>
			<Divider />

			<CardBody></CardBody>
		</Card>
	);
}
