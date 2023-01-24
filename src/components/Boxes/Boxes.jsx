import { useState, useEffect } from "react";
import Box from "./Box";
import {
	useWorkerPostsQuery,
	useEmployerPostsQuery,
} from "../../services/invoiceApi";
// import data from '../../data/workers.json'

export default function Boxes() {
	const [workers, setWorkers] = useState([]);
	const [employers, setEmployers] = useState([]);
	const [allUsers, setAllUsers] = useState([]);
	const [counts, setCounts] = useState(1);
	const { data: workersData = [] } = useWorkerPostsQuery();
	const { data: employersData = [] } = useEmployerPostsQuery();
	useEffect(() => {
		if (workersData && employersData) {
			setWorkers(workersData);
			setEmployers(employersData);
			const mixedData = [...workers, ...employers];
			const orderedData = mixedData.sort(
				(a, b) =>
					Number(a.lifeStamp.split(",").join("")) -
					Number(b.lifeStamp.split(",").join(""))
			);
			setAllUsers(orderedData);
		}
		setCounts(counts + 1);
	}, [workers, employers]);
	return (
		<div className="w-full mt-5">
			<div className="w-[75%] mx-auto grid grid-cols-3 grid-flow-row gap-3">
				{allUsers.length &&
					allUsers.map((item) => <Box key={item.id} id={item.id} {...item} />)}
			</div>
		</div>
	);
}
