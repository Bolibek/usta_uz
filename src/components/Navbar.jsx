import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faCaretDown, // faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import ThemeToggler from "./ThemeToggler";

export default function Navbar() {
	const [displayCity, setDisplayCity] = useState("hidden");
	const [displayLang, setDisplayLang] = useState("hidden");
	const userId = localStorage.getItem("userId");
	const { theme, textColor, bgColor } = useSelector(
		(state) => state.themeStates
	);
	const { t, i18n } = useTranslation();
	useEffect(() => {
		i18n.changeLanguage("en"); // default language
	}, [i18n]);
	const displayCityFunc = () => {
		setDisplayCity("");
	};
	const hideCityFunc = () => {
		setDisplayCity("hidden");
	};
	const displayLangFunc = () => {
		setDisplayLang("");
	};
	const hideLangFunc = () => {
		setDisplayLang("hidden");
	};
	return (
		<div className={`navbar z-10 fixed top-0 w-full ${textColor} ${bgColor}`}>
			<div>
				<div
					className={`  flex flex-row items-center justify-between px-[12.2%] h-[3.6rem]   `}
				>
					<div className="flex flex-row justify-between">
						<Link to="/">
							<div className="mt-1 w-9  rounded-full bg-[#fff] ring-2 ring-cyan-500">
								<img
									alt="logo"
									src="data:image/png;base64,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"
								/>
							</div>
						</Link>
						<div className="full-name text-[1.7rem] ml-4">
							<h1>Ustalar</h1>
						</div>
					</div>

					<div
						className={`flex flex-row w-[28rem] h-[1.6em] mt-1 border-[0.09rem] ${
							theme === "light" ? "hover:border-green-600" : " border-white"
						}  rounded-[0.2em]`}
					>
						<div
							onMouseOver={displayCityFunc}
							onMouseOut={hideCityFunc}
							className={`w-10 ${
								theme === "light"
									? " text-[#0f8bff] bg-[#ffffff] hover:border-green-600"
									: " bg-slate-700 text-white border-white"
							}   text-[0.6em] flex flex-row justify-around border-r-[0.09rem] `}
						>
							<img
								alt="sdfg"
								className="pl-1 w-6 h-6"
								src="https://img.icons8.com/color/100/null/city.png"
							/>
							<span className="pt-1.5">
								<FontAwesomeIcon icon={faCaretDown} />
							</span>
						</div>

						<div
							onMouseOver={displayCityFunc}
							onMouseOut={hideCityFunc}
							className={`${displayCity} ${
								theme === "light" ? "bg-[#ffffff]" : bgColor + " " + textColor
							} w-[30%] pl-10 text-xs  font-medium  p-1 z-50 absolute top-[2.66rem] left-[10rem] shadow-md shadow-slate-300 rounded-sm grid grid-cols-3 grid-flow-row `}
						>
							<span className="mx-2 cursor-pointer">Toshkent</span>
							<span className="mx-2 cursor-pointer">Samarqand</span>
							<span className="mx-2 cursor-pointer">Buxoro</span>
							<span className="mx-2 cursor-pointer">Xorazm</span>
							<span className="mx-2 cursor-pointer">Andijon</span>
							<span className="mx-2 cursor-pointer">Farg'ona</span>
							<span className="mx-2 cursor-pointer">Namangan</span>
							<span className="mx-2 cursor-pointer">Qarshi</span>
							<span className="mx-2 cursor-pointer">Termiz</span>
							<span className="mx-2 cursor-pointer">Navoiy</span>
							<span className="mx-2 cursor-pointer">Jizzax</span>
							<span className="mx-2 cursor-pointer">Guliston</span>
						</div>

						<input
							type="text"
							placeholder={t("searchPlaceholder")}
							className={`w-[84%] pl-2 ${
								theme === "light"
									? " text-gray-900"
									: " bg-slate-700 text-white"
							}  text-[0.7em] font-semibold outline-none`}
						/>
						<div
							className={`w-[7.9%] rounded-tr-sm rounded-br-sm ${
								theme === "light" ? " bg-green-600" : "bg-gray-500 "
							}  text-white text-[0.9em] flex flex-row justify-around py-1 mr-[-1px] rounded-xs`}
						>
							<FontAwesomeIcon icon={faSearch} />
						</div>
					</div>

					<div className="flex flex-row">
						<div className="flex flex-row text-xs font-medium ">
							<Link to="/news">
								<div
									className={` border-b-[0.09rem] border-transparent mx-2 pt-2 ${
										theme === "light"
											? "hover:border-green-600"
											: "hover:border-white"
									} transition-border duration-700 ease-in-out`}
								>
									<h2>{t("articleNav")}</h2>
								</div>
							</Link>
							<Link to="/postforms">
								<div
									className={`mt-1 p-1 border-b-[0.09rem] border-transparent mx-2 ${
										theme === "light" ? "bg-green-600" : "bg-gray-500"
									}  text-white rounded-sm`}
								>
									<h2>{t("newPost")}</h2>
								</div>
							</Link>

							<Link to="/">
								<div
									onMouseOver={displayLangFunc}
									onMouseOut={hideLangFunc}
									className={`border-b-[0.09rem] border-transparent mx-2 pt-2 ${
										theme === "light"
											? " hover:border-green-600"
											: "hover:border-white"
									} transition-border duration-700 ease-in-out`}
								>
									<span className=" mr-0.5">{t("language")}</span>
									<FontAwesomeIcon
										className=" text-[0.8em]"
										icon={faCaretDown}
									/>{" "}
									<div
										className={`${displayLang} absolute top-[2.4rem] right-[16.5rem] h-[4rem] py-2 scroll-none flex flex-col justify-around text-xs  font-medium ${
											theme === "light" ? "bg-white" : "bg-slate-500 text-white"
										}  shadow-md shadow-slate-300 rounded-md`}
										onMouseOver={displayLangFunc}
										onMouseOut={hideLangFunc}
									>
										<span
											className={`hidden mx-2 cursor-pointer flex-row hover:scale-105  ${
												theme === "light"
													? "hover:bg-green-100"
													: "hover:bg-gray-100 hover:text-stone-700"
											}`}
										>
											<img
												alt="sdfg"
												className=" w-4 h-4"
												src="https://img.icons8.com/color/48/null/uzbekistan.png"
											/>
											UZ
										</span>
										<span
											className={`mx-2 cursor-pointer flex flex-row hover:scale-105 ${
												theme === "light"
													? "hover:bg-green-100"
													: "hover:bg-gray-100 hover:text-stone-700"
											}  px-2`}
										>
											<img
												alt="sdfg"
												className=" w-4 h-4"
												src="https://img.icons8.com/color/48/null/usa.png"
											/>{" "}
											EN
										</span>
										<span
											className={`mx-2 cursor-pointer flex flex-row hover:scale-105 ${
												theme === "light"
													? "hover:bg-green-100"
													: "hover:bg-gray-100 hover:text-stone-700"
											} hover:bg-green-100 px-2`}
										>
											<img
												alt="sdfg"
												className=" w-4 h-4"
												src="https://img.icons8.com/color/48/null/russian-federation.png"
											/>{" "}
											RU
										</span>
									</div>
								</div>
							</Link>

							<div className={` mx-2 pt-2  `}>
								<ThemeToggler translator={t} />
							</div>
							{userId ? (
								<Link to="/profilePage">
									<div
										className={`flex flex-row border-b-[0.09rem] border-transparent mx-2 pt-2 ${
											theme === "light"
												? " hover:border-green-600"
												: "hover:border-white"
										} `}
									>
										<h2>{t("profile")}</h2>
										<img
											alt="sdfg"
											className=" w-4 h-4"
											src="https://img.icons8.com/color/48/null/user.png"
										/>
									</div>
								</Link>
							) : (
								<Link to="/signin">
									<div
										className={`flex flex-row border-b-[0.09rem] border-transparent mx-2 pt-2 ${
											theme === "light"
												? " hover:border-green-600"
												: "hover:border-white"
										} transition-border duration-700 ease-in-out`}
									>
										<h2>Kirish</h2>
										<img
											alt="sdfg"
											className=" w-4 h-4"
											src="https://img.icons8.com/color/48/null/user.png"
										/>
									</div>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
