import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import WorkerCard from "./WorkerCard";
import JobCard from "./JobCard";
import FilterNav from "../FilterNav";
import {
	useWorkerPostsQuery,
	useEmployerPostsQuery,
	useCityPostsQuery,
	useCategoryPostsQuery,
} from "../../services/invoiceApi";

export default function Boxes() {
	const [workers, setWorkers] = useState([]);
	const [employers, setEmployers] = useState([]);
	//eslint-disable-next-line
	const [allUsers, setAllUsers] = useState([]);
	const { city, category } = useSelector((state) => state.posts);
	const { data: workersData = [] } = useWorkerPostsQuery();
	const { data: employersData = [] } = useEmployerPostsQuery();
	const { data: cityData = [], isSuccess } = useCityPostsQuery(city);
	const { data: categoryData = [], isSuccess: isSuccessCategory } =
		useCategoryPostsQuery(category);
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
		//eslint-disable-next-line
	}, [workers, employers]);
	const handleAllPosts = () => {
		const mixedData = [...workers, ...employers];
		const orderedData = mixedData.sort(
			(a, b) =>
				Number(a.lifeStamp.split(",").join("")) -
				Number(b.lifeStamp.split(",").join(""))
		);
		setAllUsers(orderedData);
	};
	const handleWorkerPosts = () => {
		setAllUsers(workersData);
	};
	const handleEmployerPosts = () => {
		setAllUsers(employersData);
	};
	return (
		<div>
			<FilterNav
			handleAllPosts={handleAllPosts}
				handleWorkerPosts={handleWorkerPosts}
				handleEmployerPosts={handleEmployerPosts}
			/>
			<div className="w-full mt-5">
				<div className="w-[75%] mx-auto grid grid-cols-3 grid-flow-row gap-3">
					{isSuccess &&
						cityData.map((item) =>
							item.orientating === undefined ? (
								<WorkerCard key={item.id} id={item.id} {...item} />
							) : (
								<JobCard key={item.id} id={item.id} {...item} />
							)
						)}
					{isSuccessCategory &&
						categoryData.map((item) =>
							item.orientating === undefined ? (
								<WorkerCard key={item.id} id={item.id} {...item} />
							) : (
								<JobCard key={item.id} id={item.id} {...item} />
							)
						)}
					{(!isSuccess || !isSuccessCategory) &&
						allUsers.map((item) =>
							item.orientating === undefined ? (
								<WorkerCard key={item.id} id={item.id} {...item} />
							) : (
								<JobCard key={item.id} id={item.id} {...item} />
							)
						)}
				</div>
			</div>
		</div>
	);
}
