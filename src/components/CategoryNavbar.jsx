import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { handleCategory } from "../app/store";

export default function CategoryNavbar() {
	const { theme } = useSelector((state) => state.themeStates.theme);
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const categoryStyles = "   w-full text-center font-bold flex flex-row";
	const handleCategoryPosts = (category) => {
		dispatch(handleCategory(category))
	}
	return (
		<div
			className={`${
				theme === "light"
					? "bg-[#ffe207dd] text-[#014360]"
					: "bg-gray-300 text-slate-900"
			}  w-full p-1 block`}>
			<div className="mx-[10rem] grid grid-flow-row grid-cols-5 gap-2 p-2 text-xs">
				<div onClick={() => handleCategoryPosts("Household")} className={`${categoryStyles}`}>
					<img
						className="h-[1.2rem]"
						alt="categoryimg"
						src="data:image/png;base64,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"
					/>{" "}
					{t("household")}
				</div>
				<div onClick={() => handleCategoryPosts("Electronics")} className={`${categoryStyles}`}>
					<img
						className="h-[1.2rem]"
						alt="categoryimg"
						src="data:image/png;base64,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"
					/>
					{t("electronics")}
				</div>
				<div onClick={() => handleCategoryPosts("Plumber")} className={`${categoryStyles}`}>
					<img
						className="h-[1.2rem]"
						alt="categoryimg"
						src="https://img.icons8.com/material-sharp/24/0A97ED/water-tap-.png"
					/>
					{t("plumber")}
				</div>
				<div onClick={() => handleCategoryPosts("Ads")} className={`${categoryStyles}`}>
					<img
						className="h-[1.2rem]"
						alt="categoryimg"
						src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/100/2597D1/external-ad-marketing-and-advertising-those-icons-lineal-color-those-icons-7.png"
					/>
					{t("ads")}
				</div>
				<div onClick={() => handleCategoryPosts("Design")} className={`${categoryStyles}`}>
					<img
						className="h-[1.2rem]"
						alt="categoryimg"
						src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/null/external-design-design-thinking2-sbts2018-outline-color-sbts2018-2.png"
					/>
					{t("design")}
				</div>
				<div onClick={() => handleCategoryPosts("Furniture")} className={`${categoryStyles}`}>
					<img
						className="h-[1.2rem]"
						alt="categoryimg"
						src="https://img.icons8.com/ios-filled/100/1883EC/bedroom-interior.png"
					/>
					{t("furniture")}
				</div>
				<div onClick={() => handleCategoryPosts("Auto service")} className={`${categoryStyles}`}>
					<img
						className="h-[1.2rem]"
						alt="categoryimg"
						src="https://img.icons8.com/color/100/null/car-service.png"
					/>
					{t("autoService")}
				</div>
				<div onClick={() => handleCategoryPosts("Technology")} className={`${categoryStyles}`}>
					<img
						className="h-[1.2rem]"
						alt="categoryimg"
						src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/null/external-technology-media-agency-flaticons-lineal-color-flat-icons.png"
					/>
					{t("technology")}
				</div>
				<div onClick={() => handleCategoryPosts("Beauty/Health")} className={`${categoryStyles}`}>
					<img
						className="h-[1.2rem]"
						alt="categoryimg"
						src="https://img.icons8.com/parakeet/100/null/barbershop.png"
					/>
					{t("beautyHealth")}
				</div>
				<div onClick={() => handleCategoryPosts("Other services")} className={`${categoryStyles}`}>
					<img
						className="h-[1.2rem]"
						alt="categoryimg"
						src="https://img.icons8.com/ios/50/1A8CD1/details-pane.png"
					/>
					{t("otherServices")}
				</div>
			</div>
		</div>
	);
}
