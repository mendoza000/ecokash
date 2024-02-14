import { Button, ButtonGroup } from "@nextui-org/react";
import { IconTrendingUp, IconTrendingDown } from "@tabler/icons-react";

export default function Actions() {
	return (
		<div className="grid grid-cols-2 gap-2">
			<Button>
				<IconTrendingUp size={20} />
				New revenue
			</Button>
			<Button>
				<IconTrendingDown size={20} />
				New expense
			</Button>
		</div>
	);
}
