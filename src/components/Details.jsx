import React from "react";
import { useTranslation } from "react-i18next";

export default function Details(props) {
	const { t, i18n } = useTranslation();
	// useEffect(() => {
	// 	i18n.changeLanguage("en"); // default language
	// }, [i18n]);
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
			<div className=" flex flex-row justify-between my-1">
				<div>
					<div>
						{status === "created" && (
							<span className=" font-bold text-green-700">Active</span> //{status}
						)}
					</div>
				</div>
				<div className="ml-[33.6em]">
					<div className=" font-bold text-xs">{t("createdAt")}:</div>
					<div> {createdAt}</div>
				</div>
			</div>
			<div className=" flex flex-row  justify-between">
				<div>
					<div className=" font-bold text-xs">{t("status")}:</div>
					<div className=" flex flex-row">
						<span>{section}</span>
						<img
							className=" w-3 h-3 mt-1"
							src="https://img.icons8.com/sf-black-filled/30/ffffff/forward.png"
							alt="arrow"
						/>
						<span>{category}</span>
						<img
							className=" w-3 h-3 mt-1"
							src="https://img.icons8.com/sf-black-filled/30/ffffff/forward.png"
							alt="arrow"
						/>
						<span>{categoryType}</span>
						<img
							className=" w-3 h-3 mt-1"
							src="https://img.icons8.com/sf-black-filled/30/ffffff/forward.png"
							alt="arrow"
						/>
						<span>{material}</span>
					</div>
				</div>
				<div className="ml-64">
					<div className=" font-bold text-xs">{t("extraSkills")}:</div>
					<div className=" text-blue-700 font-medium">#{extraSkills}</div>
				</div>
			</div>

			<div className="my-1">
				<span className=" font-bold text-xs">
					{wage ? t("startTime4Wrk") : t("startTime4Emp")}
				</span>{" "}
				{startDate[0].toUpperCase() + startDate.slice(1)}dan
			</div>
			<div>
				<span className=" font-bold text-xs">{t("comingHours")} </span>{" "}
				{comingHours}lar oralig'ida
			</div>
			<div className="my-1">
				{" "}
				<span className=" font-bold text-xs">{t("wage")} :</span>{" "}
				{t("from") === "из"
					? "из +" + wage + " " + "сум"
					: t("from") === "from"
					? t("from") + " +" + wage + " " + "sum"
					: "+" + wage + " " + t("from")}
			</div>
			<div>
				<div className=" font-bold text-xs">
					{wage ? t("jobPicturesDone").slice(0, t("jobPicturesDone").indexOf("(") - 1) : t("jobPicturesTodo").slice(0, t("jobPicturesDone").indexOf("(") - 1)}
				</div>
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
