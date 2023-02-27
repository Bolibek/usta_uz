import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function FilterModal({
	openWindow,
	setOpenWindow,
	handleFilterPosts,
}) {
	const [city, setCity] = useState();
	const [category, setCategory] = useState();
	const [variety, setVariety] = useState();
	const [type, setType] = useState();
	const { textColor } = useSelector((state) => state.themeStates);
	const { t } = useTranslation();

	const handleCityChange = (e) => {
		setCity(e.target.value);
	};
	const handleCategoryChange = (e) => {
		setCategory(e.target.value);
	};
	const handleVarietyChange = (e) => {
		setVariety(e.target.value);
	};
	const handleTypeChange = (e) => {
		setType(e.target.value);
	};
	useEffect(() => {}, [type, category, city, variety]);

	return (
		<>
			{openWindow && (
				<div className="absolute top-40 right-0  w-[950px] rounded-l-xl h-[70vh] overflow-auto border-[0.1rem] border-green-500 border-r-0">
					<div className="">
						<button
							className="sticky left-[37em] top-3 px-1.5  border-[0.1rem] border-green-500 rounded-md"
							onClick={() => setOpenWindow(false)}>
							X
						</button>

						<div className="pr-14 pl-14 py-1 z-50">
							<h1 className="font-bold mb-1">{"Edit Profile"}</h1>
							<label htmlFor="city">{t("city")}</label>
							<select
								id="city"
								value={city}
								onChange={handleCityChange}
								className={
									"w-full rounded mb-[0.525rem] mt-[0.225rem] p-[14px] border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border text-gray-900 font-bold"
								}>
								<option value="tashkent">{t("tashkent")}</option>
								<option value="samarkand">{t("samarkand")}</option>
								<option value="bukhara">{t("bukhara")}</option>
								<option value="khvarezm">{t("khvarezm")}</option>
								<option value="andijan">{t("andijan")}</option>
								<option value="fergana">{t("fergana")}</option>
								<option value="namangan">{t("namangan")}</option>
								<option value="qarshi">{t("qarshi")}</option>
								<option value="termiz">{t("termiz")}</option>
								<option value="navai">{t("navai")}</option>
								<option value="jizzakh">{t("jizzakh")}</option>
								<option value="gulistan">{t("gulistan")}</option>
							</select>
							<label htmlFor="category">{t("category")}</label>
							<select
								id="category"
								value={category}
								onChange={handleCategoryChange}
								className="w-full rounded mb-[0.525rem] mt-[0.225rem] p-[14px] border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border text-gray-900 font-bold ">
								<option value="Household">{t("household")}</option>
								<option value="Electronics">{t("electronics")}</option>
								<option value="Plumber">{t("plumber")}</option>
								<option value="Ads">{t("ads")}</option>
								<option value="Design">{t("design")}</option>
								<option value="Auto service">{t("autoService")}</option>
								<option value="Technology">{t("technology")}</option>
								<option value="Beauty/Health">{t("beautyHealth")}</option>
								<option value="Other services">{t("otherServices")}</option>
							</select>
							<label htmlFor="profile-image">{t("variety")}</label>
							<select
								id="variety"
								value={variety}
								onChange={handleVarietyChange}
								className={
									"w-full rounded mb-[0.525rem] mt-[0.225rem] p-[14px] border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border text-gray-900 font-bold"
								}>
								<option value="top-rated">{t("topRated")}</option>
								<option value="new-posts">{t("newPosts")}</option>
							</select>
							<label htmlFor="type">{t("type")}</label>
							<select
								id="type"
								value={type}
								onChange={handleTypeChange}
								className="w-full rounded mb-[0.525rem] mt-[0.225rem] p-[14px] border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border text-gray-900 font-bold ">
								<option value="worker-posts">Worker posts</option>
								<option value="employer-posts">Employer posts</option>
							</select>
							<input
								id="profile-image"
								type="button"
								onClick={() => (
									// eslint-disable-next-line no-sequences
									setOpenWindow(false),
									// window.location.reload(false),
									handleFilterPosts(city, category, type, variety)
								)}
								value={"Submit"}
								// onChange={(e) => setMyProfileImage(e.target.files[0])}
								className={`w-full rounded mb-[0.525rem] mt-[0.225rem] p-[14px] border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border ${textColor} font-bold`}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
