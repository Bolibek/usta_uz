import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	// faMoneyCheckDollar,
	faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export default function JobCard(props) {
	const { t } = useTranslation();
	const {
		id,
		userName,
		category,
		photoLinks,
		// wage,
		// extraConditions,
		// extraSkills,
	} = props;
	// const skill = extraConditions
	// 	? extraConditions.slice(0, 4)
	// 	: extraSkills.slice(0, 4);
	const { theme, textColor } = useSelector((state) => state.themeStates);
	return (
		<div
			className={`w-full h-[15rem] mx-auto border-2 ${
				theme === "light" ? "border-green-300" : "border-red-700"
			} rounded-md transform`}>
			<div className=" flex flex-row w-full h-[4rem] justify-center ">
				{photoLinks ? (
					[photoLinks]
						// .slice(0,3)
						.map((sample, index) => (
							<img
								key={index}
								className=" w-screen h-[9.2rem] rounded-tl-[7px] rounded-tr-[7px] "
								src={sample}
								alt={`sample ${index}`}
							/>
						))
				) : (
					<h3
						className={`${textColor} w-full text-center mt-6 font-semibold text-xs`}>
						No photos uploaded
					</h3>
				)}
			</div>
			<div className=" mt-12 p-[0.7rem] h-[15rem]">
				<div className=" flex flex-row w-full relative bg-transparent">
					<div className=" flex flex-col">
						<h1 className={` mt-[-5px] text-xl font-bold ${textColor}`}>
							{category}
						</h1>
						<div className="mt-0.5 flex flex-row">
							<img
								className="w-[1rem] h-[1rem] rounded-full border-[0.1em]"
								src={photoLinks}
								alt="ProfileImage"
							/>
							<div className={`ml-1 text-xs font-semibold ${textColor}`}>
								{userName}
							</div>
						</div>
						<div className="mt-1 flex flex-row text-white">
							{/* <span className=" bg-red-600 py-[0.1em] px-[0.4em] rounded-sm mr-2">
								7/24
							</span> */}
							<span className=" bg-green-600 py-[0.1em] px-[0.4em] rounded-sm">
								{t("easyApply")}
							</span>
							<div className=" flex flex-row text-white ">
								<img
									className="absolute mt-[-6px] cursor-pointer w-[2.3em] h-[2.3em] right-8"
									alt=""
									src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAMtUlEQVR4nO2dW3BV1RnH/9/a5+RcSUjIDZKAYCAJ6djRsVUUHYJaIYAXbl7QVlvrpdcZ60Nf+lD7oO1YHzrjTBWmnSooY62KzQXq1NBB42WKCpKraKkFIZCEXM5956yvDyeBBM7J2fvsywlwfo+w1vpW9v9831rrW2uvDeTIkSNHjhw5cuTIkSOHvVC2O6AZZqpvilRJJy1BPF7DJOYQ2Eeg2QD7E4UowOAhBgWJZD9I6RUq93as83yV3c5rZ8YKUt/Gfg6HbmCmBiasIGApAF+GzQXB6ABhr2DZpjh8+w7eSkEz+2sWM0qQRW8PFrhirk0g2gLgegBOi0ypRHiXQTuijvBrX95SNGyRHd3MCEHqW8IrJfhhALcDcNtsPgxgl5T0Qs9aT5vNts8jq4LU7Y7cDCmfBLAsm/2YxCdEeKpzlec1EHE2OpAVQepbwivjzM8S4ZvZsK+BT5jo8e7Vnr12G7ZVkPrmQLkU4ndg3Ge37QxpUoHHDjd6j9plUNhlaGlr8BFJ1APG/bgwxACAtU7Qobrm4EN2GbT8wdTs4lnCEX4ehHustmUpjNddsegPPr2zcMhKM5YKsrQleCWDXgVQbaUdG+kVQm7uWOU/YJUBywRZ2hq+iZnfADDLKhtZIihYbuxY499tReOWjCG1zeF7mbkVF58YAOCTJHbVtoYsCcGmC1LXEnyMiF+CdavsmUAeMbYvbQ4+anbDpoas2tbQPcTYDhtnb1mGAXqgq9HzolkNmibI+JjRDMBlVpsXCCqTXNe92r/HjMZMEWR8NrUPmWdjL3RGhZA3mDH7Mhxa6tvYz6BXcOmKAQCzpBSvVbdwvtGGDAsSD4f/CKDGaDsXAdVOCm812oghQZa2Bh8hYIvRTlw0MDYbTbNkPIbUNwfKJSndABcY6cDFB49AoLZrle94JrUz9hAJ8WxOjGRQPph+m3HtTCrVNYdvBPHeTOvPRIpdhDVzFVxZKFDmJrx1LI5XvhrLuD0paWUmO5AO3ZaYiVvCf6CLQAxBwHXFCjZVKWgoVeCY9BcpBEOCCMHPgPlqvTuPugWpbQ2tJaKZutOniVIXYX2lgg1VDlR4kv+ujkcM7+BeVbc7tLoLaNFTSbcgRPRLZGW32RiCgGuKBDbPd+CmsqnekIzOYWncKNOvYKUg9S3hlZL5Ol2dyjKlLsJtFQrump/aG5LROWLKr+7amqZwg56xRJcg40d1ZjyTveHmMgVKBqNd14gJHgJAEP8QgGZBNHe1uoXznQifAODJpGN2UOYmrJun4O75DszT4Q3n0hdhNLRFzOpWJOqMlGs9jKfZQxwI3QXQjBNDIeDbBr3hXDpN8o5x3G7VswHAn7QU1iwIge7NuEsWMOEN9y5woNytXYWYOobhQABFBflQRPJ1sUnjxxkkeAvMFKS+jf0yHL7eUK9MwCmA5cUKbqtQdHuDZMbJwSGcHDgNyQyAUFKYPNFgygxrEgQsv2IP+7Qc8NYkCIdDNwCUtS3ZBT7ChkoH1lcqKMrTH5NGgiEc6+tHVFUBAO68PMye5U9Z3uSQBQB5sXj0egD/SFdQmyBMDXavy50CWFmqYPN8B66dIzIyr46N4fipQQyOjJ75N6/bhUWVc+FQlKR1TscYfcYXhechWDbANEES72fYwmU+wnoD3gAkwlP/6WGcGDgNKc/+2v1eDxZWlKccOwCgw+RwNQETGrSUSy8IM1FruM5wj6YhTwANBr1hgpFAEEdPDiA2Hp4mKPD7sGBeGQRN37rZA/ok6sFM6XJbaQWpb4pUSQWpA64BFvoId1Y6sKFSQWGG3jBBVFVx7GQ/RgKh8/6vKH8WqspLQGnEACwZPybwL2kKz+sFjk1XKK0gUlANTExeuQSwwiRvAMZnTwOncXJwaHz2NJWSwgJUlBZrbs+sFXoynArVwKggEPHFYOMjyCI/4Y4KBzZWKZjtNGdEShWeJiifU4jy4iLt7amMoyHrMqfMcgmAd6Yrk1YQhiihDD1ksjcsm2Pe2bmoquJYXz9GgueHJyCRD6osL8GcAn2HQDpH2NJENkOkdVUtg7ru8aMoj/BotQN3VDjg178FlpJ04QkAiAgL5pZOu85IhZXhCgBAnPasswZBaBZ0bHq5FeCVZS5Uec2dKCfCUz9iaupdPCEEFs4rwyyfNyMblgsCMkEQ0uchBU4yVYxobHz2lCI8TaAoAosq5sLnyfwlXrNTJufB6T3E9EPRfRHGi0cy34ueQErGif5BdB/5X1oxnA4Fi6sqDIkRigNHLBzQtaIlZAX0hCwAeLpLRfPXcdxSrmDZHIG6fAGhw2m0hKcJ8pxOXF41Fy6nsVRb94iEtFoPotF0RbSErLSNJOOzYYnPxkOAzwFcUSCwrDghUH1BcsfUGp4mcLvycHnlXDgdxmcOVqVMppL+WWoQhAJIMaPRSnAMeH9A4v2BxB9d4iJcVSiwrFhgRamCYidwcvA0+gaHwBpt+T0eLKycPi+lBwtX6GdhEzyEIE+ZfQTrVJSx50Qce07EIUjFT+cFcI1rRHP9fL8Pl2nIS+mhy7oc1hkIsj9dmfQ/L1J6TelNCiQDb/Vrf8enMN+PhSaLEYkDXwSs95A4i550ZdIKopBM24hR/hN14lgs/aBcPLsAC+aWaUoS6qFnVCJuxwQrL/2zTCvIoe94jgIImNKhafggOP2UtbRoNirLtCcJ9WDL+AGM9tziTXsiXkPIIgaj05QuTcN7gdQHWo7E8uD0GX45KSV2jB8AOrSc89U2RSFYfivOCdWBL6PJw9ZAMIrdHx1ExylrHNWOKS8Razosp0kQwdKWi73aU3iJGIsin6PoPNSBt79IO1HRhSqBwzYM6CwV8wRRHL59AGKGeqSB9oA36WrZJ8MAgDzEEfyqFy9//F/TbPaOSqjW6xFzOlztWgpqEuTgrRQkwnvG+pSeobhAV2TqFDgoCa742d8CAfANH8O297oRGjP+JG0a0DVfuql5mcuSX868P9ppD04NW6diybtYEhvE1vZeDESNDci2LAiZdmgtq1kQlbyvAtCWZDLAh0EP1ElbxoHku7PoZzd2huZhY3vU0K/cBg8JR/LCr2strFmQw400AuDvGXVJB6E44UDobNiKxc/P+J5iN7ZGqzHMTvRFGN/9IIp/9sV124pzYgyxFMabeq6h1ZWZk5Ke198j/UwJW+rUucRJdmNrrBojky4bCsWBn30cw3OHx3TtiX8RkIjo11EXLOgFPeV1CdKz1tNGsH5w3x90IyQTYcsdP/uexinpxrbYYozy+esVBvDc5yqe+DSm+SF3WD9+vK/3ZlPduWsW/JTeOnpRmbA/6EGECV6ZEOS49OB5dTFGefoEdevxOB78KIp+DYN9l8ULQsHySd119FboutXbAuATvfX08q9RDwbUxEG6r6UH22KLEUwjxgQHhiQ2tUdxKM0Dt3RAJ+zP5BpA/bs7REyCfg4zjzMmoTPiwr5hJw7FZ2ObuhghJD+tnoq+COP+D6Jo+jp5/JKcyPJaBDPoiUwqZpzHrm0Jbb8QLp4hAD9Z7MSj1Y4pf+yHAxIPfhS1yCr/pavR90AmNTMW5Bu7AmVxp+gGMDvTNuzkpjIFD1/uQImLcHBI4jedquFFZXJoGELWZXr5jKGdnrrm4EMgMnxH1MUEMX2/c43nzxnXN9qBuubQSyDcZ7Sdi4SdXY1eQ9fHGj6yIbyex4jRbbSdi4DPpeoxfLGCYUE6GihAirwbNmzzzlx4hFlu6Lk9/TGfdJhyqKljlf+AAN0OwKppy0wmxlA2da/xf2ZGY6ad7e1o9LwDwgMAbNlgmCFIYtzf3ehO+3atVkw9bN212ruTmH+MS0MUScQ/6lzjfdXMRi1527m2NbSeGDtg/we+7CIGwve6Vnt3mt2wZa+fJ768Jt8AyLrzO9khwCQ3mnW1+LlYdml+R6PnHSH4RgCWHkW1E2J0M8vrrBIDsPgrBh2r/Aek6rmaAc17yjMWxnbyer5l1mwqFbbdYJJIs4hnLsC7fk8T0y+MpEP0YNt3PrrW+LYJjteC8BIsTt2byF8VVdbZJQaQpbt3a1vDK4j59wCuyoZ9DfybBD3eucqzz27DWb0Mub41vDzO/GsCVmazH2cgtDPz092rvU2X1KdXz6WmKdwgxJmPE9t9r2MYjDdZ0AvZ+NTqucwIQSaobuH8PEQ2SvAWApYDyLPIVAzAPmLaESP338bPnM0IZpQgk7liD/tiMricWDQAWAGgHsj4mqhRAB3E2CtJtPnirnf3ryPLT2FmwowVJBnVLaHKPKIaZrkELOaA2E+gQglOfG6JKUDEQ4l36+WAgOhR49zTu8477ZVIOXLkyJEjR44cOXLkyHEp83/08rnm3IsGDgAAAABJRU5ErkJggg=="
								/>
								<img
									className="mt-[-3px] cursor-pointer w-[2em] h-[2em] ml-0.8 absolute right-0 "
									alt=""
									src="https://img.icons8.com/external-others-inmotus-design/100/32AC49/external-Call-phone-operations-and-functions-others-inmotus-design-3.png"
								/>
							</div>
						</div>
					</div>
					<div className="ml-5 text-xs">
						{/* <div className=" flex flex-row mb-1">
							<img
								className=" w-3 h-3"
								src={
									"https://img.icons8.com/ios-glyphs/100/C9C9C9/star--v1.png"
								}
								alt="star"
							/>
							<img
								className=" w-3 h-3"
								src={
									"https://img.icons8.com/ios-glyphs/100/C9C9C9/star--v1.png"
								}
								alt="star"
							/>
							<img
								className=" w-3 h-3"
								src={
									"https://img.icons8.com/ios-glyphs/100/C9C9C9/star--v1.png"
								}
								alt="star"
							/>
							<img
								className=" w-3 h-3"
								src={
									"https://img.icons8.com/ios-glyphs/100/C9C9C9/star--v1.png"
								}
								alt="star"
							/>
							<img
								className=" w-3 h-3"
								src={
									"https://img.icons8.com/ios-glyphs/100/C9C9C9/star--v1.png"
								}
								alt="star"
							/>
						</div> */}
					</div>
				</div>
				<div className="mt-2 text-xs">
					{/* {skill ? (
						[skill, skill, skill, skill].map((skill, index) => (
							<span key={index} className="  ">
								<span className="mx-[3.2%] cursor-pointer bg-cyan-700 text-white py-1 px-3 rounded-md">
									{skill}
								</span>
							</span>
						))
					) : (
						<h3>No skills mentioned</h3>
					)} */}
					{/* <div className="my-2 text-xs font-semibold ">
						{skill ? (
							<span className={`${textColor}`}>
								<FontAwesomeIcon
									className="text-[#308b0f]"
									icon={faMoneyCheckDollar}
								/>{" "}
								{t("from") === "из"
									? "из +" + wage + " " + "сум"
									: t("from") === "from"
									? t("from") + " +" + wage + " " + "sum"
									: "+" + wage + " " + t("from")}
							</span>
						) : null}
					</div> */}

					{photoLinks && (
						<div className=" flex flex-row justify-between">
							<span className="bg-blue-500 text-white px-2 py-0.5 cursor-pointer rounded-sm">
								{t("more")}...
							</span>
							<Link to={`/posts/${id}`}>
								<span className="bg-blue-500 text-white px-3 py-0.5 cursor-pointer rounded-sm">
									{t("details")}{" "}
									<FontAwesomeIcon
										className="text-[#ffffff] mt-1"
										icon={faAngleDoubleRight}
									/>
								</span>
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
