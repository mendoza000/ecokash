import { CardBody } from "@nextui-org/react";
import HistoryItem from "./history-item";
import useGetHistory from "../../hooks/useGetHistory";

export default function TabHistory() {
	const history = useGetHistory();

	console.log(history);

	return (
		<CardBody className="gap-3 min-h-full">
			{history.length < 1 && (
				<p className="text-center my-auto flex mx-auto text-default-500">
					No hay movimientos aun :/
				</p>
			)}
			{history.map((e) => {
				return (
					<HistoryItem
						type={e.type}
						amount={parseFloat(e.amount as string)}
						category={e.category}
						title={e.title}
						key={e.uuid}
						uuid={e.uuid}
					/>
				);
			})}
		</CardBody>
	);
}
