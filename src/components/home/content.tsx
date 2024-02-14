import { Card, Tab, Tabs } from "@nextui-org/react";

import { useState } from "react";
import TabHistory from "./tab-history";
import TabCategories from "./tab-categories";
import { IconCategory2, IconReportMoney } from "@tabler/icons-react";

export default function Content() {
	const [selected, setSelected] = useState<any | string>("history");

	return (
		<div>
			<Card className="min-h-[30rem] max-h-[30rem] md:min-h-[25rem] md:max-h-[25rem]">
				<Tabs
					fullWidth
					size="md"
					aria-label="tabs content"
					selectedKey={selected}
					onSelectionChange={setSelected}
					variant="bordered"
					color="primary"
				>
					<Tab
						key={"history"}
						title={
							<div className="flex gap-2 items-center">
								<IconReportMoney size={18} />
								History
							</div>
						}
					>
						<TabHistory />
					</Tab>

					<Tab
						key={"categories"}
						title={
							<div className="flex gap-2 items-center">
								<IconCategory2 size={18} />
								Categories
							</div>
						}
					>
						<TabCategories />
					</Tab>
				</Tabs>
			</Card>
		</div>
	);
}
