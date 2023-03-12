import React from "react";
import { useTranslation } from "react-i18next";

export default function Details(props) {
	const { t } = useTranslation();

	const {
		status,
		createdAt,
		category,
		photoLinks,
		extraSkills,
		startDate,
		comingHours,
		wage,
		isWorker
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
						<span>{category}</span>
					</div>
				</div>
				<div className="ml-64">
					<div className=" font-bold text-xs">{t("extraSkills")}:</div>
					<div className=" text-blue-700 font-medium">#{extraSkills}</div>
				</div>
			</div>

			<div className="my-1">
				<span className=" font-bold text-xs">
					{isWorker ? t("startTime4Wrk") : t("startTime4Emp")}
				</span>{" "}
				{startDate[0].toUpperCase() + startDate.slice(1)}
			</div>
			<div>
				<span className=" font-bold text-xs">{t("comingHours")} </span>{" "}
				{comingHours}
			</div>
			<div className="my-1">
				{" "}
				<span className=" font-bold text-xs">{isWorker? t("wage") : t("charge")} :</span>{" "}
				{t("from") === "из"
					? "из +" + wage + " сум"
					: t("from") === "from"
					? t("from") + " +" + wage + " sum"
					: "+" + wage + " " + t("from")}
			</div>
			<div>
				<div className=" font-bold text-xs">
					{wage
						? t("jobPicturesDone").slice(
								0,
								t("jobPicturesDone").indexOf("(") - 1
						  )
						: t("jobPicturesTodo").slice(
								0,
								t("jobPicturesDone").indexOf("(") - 1
						  )}
				</div>
				<div className="mt-2 grid grid-cols-3 gap-y-2 ">
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
