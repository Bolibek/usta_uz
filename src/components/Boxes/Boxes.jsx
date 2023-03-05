import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import WorkerCard from "./WorkerCard";
import JobCard from "./JobCard";
import FilterNav from "../FilterNav";
import { useAllPostsQuery } from "../../services/invoiceApi";

export default function Boxes() {
	const [allFetchedPosts, setAllPosts] = useState([]);
	const [openWindow, setOpenWindow] = useState(false);
	const { city, category } = useSelector((state) => state.posts);

	const { data: allPostsData = {} } = useAllPostsQuery();
	const { allPosts = [], employerPosts = [], workerPosts = [] } = allPostsData;
	useEffect(() => {
		if (city) {
			setAllPosts(allPosts.filter((post) => post.city === city));
		} else if (category) {
			setAllPosts(allPosts.filter((post) => post.category === category));
		} else {
			setAllPosts(allPosts);
		}
	}, [allPosts, employerPosts, workerPosts, city, category]);

	const handleAllPosts = (group) => {
		if (group === "employer") {
			setAllPosts(employerPosts);
		} else if (group === "worker") {
			setAllPosts(workerPosts);
		} else {
			setAllPosts(allPosts);
		}
	};
	const handleFilterPosts = (city, category, postType) => {
		const mixedData = allPosts.filter(
			(post) => post.city === city && post.category === category && post.postType === postType
		);

		const orderedData = mixedData.sort(
			(a, b) =>
				Number(a.lifeStamp.split(",").join("")) -
				Number(b.lifeStamp.split(",").join(""))
		);
		setAllPosts(orderedData);
	};
	return (
		<div>
			<FilterNav
				openWindow={openWindow}
				setOpenWindow={setOpenWindow}
				handleAllPosts={handleAllPosts}
				handleFilterPosts={handleFilterPosts}
			/>
			<div className={` ${openWindow === true ? "hidden" : ""} w-full mt-5`}>
				<div className="w-[75%] mx-auto grid grid-cols-3 grid-flow-row gap-3">
					{allFetchedPosts.map((item) =>
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
