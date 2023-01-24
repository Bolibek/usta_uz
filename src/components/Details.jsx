import React from "react";

export default function Details(props) {
	const {
		status,
		createdAt,
		section,
		category,
		categoryType,
		material,
		photoLinks,
		extraSkills,
		startDate,
		comingHours,
		wage,
	} = props;
	return (
		<div>
			<h1 className=" text-2xl font-bold text-blue-700">{category}</h1>
			<div className=" flex flex-row my-1">
				<div>
					<div className=" font-bold text-xs">Post holati:</div>
					<div>{status === "created" && <span className=" font-bold text-green-700">Active</span>}</div>
				</div>
				<div className="ml-[33.6em]">
					<div className=" font-bold text-xs">E'lon qilingan sana:</div>
					<div> {createdAt}</div>
				</div>
			</div>
			<div className=" flex flex-row ">
				<div>
					<div className=" font-bold text-xs">Mutahassislik to'liqroq:</div>
					<div className=" flex flex-row">
						<span>{section}</span>
						<img
							className=" w-3 h-3 mt-1"
							src="https://img.icons8.com/sf-black-filled/30/null/forward.png"
							alt="arrow"
						/>
						<span>{category}</span>
						<img
							className=" w-3 h-3 mt-1"
							src="https://img.icons8.com/sf-black-filled/30/null/forward.png"
							alt="arrow"
						/>
						<span>{categoryType}</span>
						<img
							className=" w-3 h-3 mt-1"
							src="https://img.icons8.com/sf-black-filled/30/null/forward.png"
							alt="arrow"
						/>
						<span>{material}</span>
					</div>
				</div>
				<div className="ml-64">
					<div className=" font-bold text-xs">Qo'shimcha ko'nikmalar:</div>
					<div className=" text-blue-700 font-medium">#{extraSkills}</div>
				</div>
			</div>

			<div className="my-1"><span className=" font-bold text-xs">Qachondan boshlay oladi?</span>  {startDate[0].toUpperCase() + startDate.slice(1)}dan</div>
			<div><span className=" font-bold text-xs">Soat nechchida boshlaydi?</span>  {comingHours}lar oralig'ida</div>
			<div className="my-1"> <span className=" font-bold text-xs">Kutilgan maosh:</span>  +{wage} so'mdan</div>
			<div>
				<div className=" font-bold text-xs">Qilingan ishlardan na'munalar</div>
				<div className=" grid grid-cols-3 gap-y-2 ">
					<img
						className="h-32 w-[16em]"
						src={photoLinks}
						alt="Examples from previous jobs"
					/>
					<img
						className="h-32 w-[16em]"
						src={photoLinks}
						alt="Examples from previous jobs"
					/>
					<img
						className="h-32 w-[16em]"
						src={photoLinks}
						alt="Examples from previous jobs"
					/>
					<img
						className="h-32 w-[16em]"
						src={photoLinks}
						alt="Examples from previous jobs"
					/>
					<img
						className="h-32 w-[16em]"
						src={photoLinks}
						alt="Examples from previous jobs"
					/>
					<img
						className="h-32 w-[16em]"
						src={photoLinks}
						alt="Examples from previous jobs"
					/>
				</div>
			</div>
		</div>
	);
}
