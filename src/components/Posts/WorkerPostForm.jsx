import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import FormInput from "../FormInputs/FormInput";
import RadioInput from "../FormInputs/RadioInput";
import { useAddWorkerPostMutation } from "../../services/invoiceApi";
import { formatDate } from "../../utils/index";

export default function WorkerPostForm() {
	const [category, setCategory] = useState("");
	const [city, setCity] = useState("");

	const [comingHours, setComingHours] = useState("");
	const [extraSkills, setExtraSkills] = useState("");
	const [startingTime, setStartingTime] = useState("bugun");
	const [image, setImage] = useState("");
	const { theme } = useSelector((state) => state.themeStates);

	const navigate = useNavigate();
	const [addWorkerPost] = useAddWorkerPostMutation();
	const { t } = useTranslation();

	const handleCategory = (e) => {
		setCategory(e.target.value);
	};
	const handleCityChange = (e) => {
		setCity(e.target.value);
	};
	const handleComingHours = (e) => {
		setComingHours(e.target.value);
	};
	const handleExtraSkills = (e) => {
		setExtraSkills(e.target.value);
	};

	const handle = async (e) => {
		e.preventDefault();
		try {
			const bgData = new FormData();
			bgData.append("file", image);
			bgData.append("upload_preset", "usta_uz");
			bgData.append("cloud_name", "bolibekjnfjenfjnfjnfpjnfjnfenkjfwjf");
			fetch(
				"https://api.cloudinary.com/v1_1/bolibekjnfjenfjnfjnfpjnfjnfenkjfwjf/image/upload",
				{
					method: "post",
					body: bgData,
				}
			)
				.then((res) => res.json())
				.then((imageData) => {
					let imageUrl = imageData.url;
					imageUrl &&
						addWorkerPost({
							id: uuidv4(),
							createdAt: formatDate(new Date()),
							lifeStamp: new Date().getTime().toLocaleString(),
							serviceName: e.target[0].value,
							category: e.target[1].value,
							photoLinks: imageUrl,
							extraSkills: e.target[3].value,
							startDate: startingTime,
							comingHours: e.target[8].value,
							wage: e.target[9].value,
							phoneNumber: e.target[10].value,
							city: e.target[11].value,
						}).unwrap();
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					navigate("/");
				});
		} catch (err) {
			// setError(err)
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center ">
			<h1> {t("fillWorkerForm")} </h1>
			<form
				onSubmit={handle}
				className="mt-5 p-5 border-[0.1rem] border-green-600 rounded-md w-[45vw]">
				<div>
					<div className="flex flex-col">
						<FormInput
							labelText={t("serviceName")}
							className={`mt-1 text-white`}
							inputType={"text"}
							inputValue={""}
						/>
					</div>
					<div className=" flex flex-col">
						<div className=" flex flex-row justify-between mt-3 ">
							<div className=" flex flex-col w-[48%]">
								<label
									htmlFor=""
									className={`font-spartan text-xs flex flex-col ${
										theme === "light" ? " text-gray-900" : "text-white"
									} font-medium`}>
									{t("category")}
								</label>
								<select
									value={category}
									onChange={handleCategory}
									className="rounded mt-[0.625rem] p-[20px] border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border text-gray-900 font-bold ">
									<option value="Household">{t("household")}</option>
									<option value="Electronics">{t("electronics")}</option>
									<option value="Plumber">{t("plumber")}</option>
									<option value="Ads">{t("ads")}</option>
									<option value="Design">{t("design")}</option>
									<option value="Auto service">{t("autoService")}</option>
									<option value="Technology">{t("technology")}</option>
									<option value="Beauty">{t("beautyHealth")}</option>
									<option value="Other services">{t("otherServices")}</option>
								</select>
							</div>
							<div className=" flex flex-col w-[48%]">
								<FormInput
									labelText={t("jobPicturesDone")}
									inputType={"file"}
									inputValue={""}
									setImage={setImage}
								/>
							</div>
						</div>
						<div className=" flex flex-row justify-between mt-3 "></div>
					</div>
					<div className=" flex flex-row justify-between mt-3">
						<div className="flex flex-col w-full ">
							<label
								htmlFor=""
								className={`font-spartan text-xs flex flex-col ${
									theme === "light" ? " text-gray-900" : "text-white"
								} font-medium mb-1`}>
								{t("skills")}
							</label>
							<textarea
								value={extraSkills}
								onChange={handleExtraSkills}
								placeholder="Vergul bilan ajratib yozing! M: Suvoqchi, Bo'yoqchi"
								className="rounded p-3 border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border text-gray-900 font-bold "
							/>
						</div>
					</div>
				</div>
				<div>
					<label
						className={`font-spartan text-xs flex flex-col ${
							theme === "light" ? " text-gray-900" : "text-white"
						} font-medium mb-1 mt-3`}>
						{t("startTime4Wrk")}
					</label>
					<div
						className={`flex flex-row font-spartan text-xs ${
							theme === "light" ? " text-gray-900" : "text-white"
						} font-medium`}>
						<RadioInput
							label={t("today")}
							value={t("today")}
							checked={startingTime}
							setter={setStartingTime}
						/>
						<RadioInput
							label={t("tomorrow")}
							value={t("tomorrow")}
							checked={startingTime}
							setter={setStartingTime}
						/>
						<RadioInput
							label={t("dependOnEmployer")}
							value={t("dependOnEmployer")}
							checked={startingTime}
							setter={setStartingTime}
						/>
						<RadioInput
							label={t("withinAWeek")}
							value={t("withinAWeek")}
							checked={startingTime}
							setter={setStartingTime}
						/>
					</div>
					<div className="flex flex-col mt-3">
						<label
							htmlFor=""
							className={`"font-spartan text-xs flex flex-col ${
								theme === "light" ? " text-gray-900" : "text-white"
							} font-medium`}>
							{t("comingHours")}
						</label>
						<select
							value={comingHours}
							onChange={handleComingHours}
							className=" w-[48%] rounded mt-[0.625rem] p-3 border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border text-gray-900 font-bold ">
							<option value="9:00-10:00">9:00-10:00</option>
							<option value="10:00-11:00">10:00-11:00</option>
							<option value="11:00-12:00">11:00-12:00</option>
							<option value="12:00-13:00">12:00-13:00</option>
							<option value="13:00-14:00">13:00-14:00</option>
							<option value="14:00-15:00">14:00-15:00</option>
							<option value="15:00-16:00">15:00-16:00</option>
							<option value="16:00-17:00">16:00-17:00</option>
						</select>
					</div>
					<div className=" flex flex-row justify-between mt-3">
						<div className="flex flex-col w-[48%]">
							<FormInput
								labelText={t("wage")}
								className={"mt-1 "}
								inputType={"text"}
								inputValue={""}
							/>
						</div>
						<div className="flex flex-col w-[48%]">
							<FormInput
								labelText={t("phoneNumber")}
								className={"mt-1 "}
								inputType={"text"}
								inputValue={""}
							/>
						</div>
					</div>
					<div className="w-full">
						<label
							className={`mt-5 mb-2 font-spartan text-xs flex flex-col ${
								theme === "light" ? " text-gray-900" : "text-white"
							} font-medium`}
							htmlFor="city">
							{t("city")}
						</label>
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
					</div>
				</div>

				<div classNames="">
					<button
						className={`mt-3 px-5 rounded  py-3 border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border ${
							theme === "light" ? " text-gray-900" : "text-white"
						} font-bold`}
						type="submit">
						{t("submit")}
					</button>
				</div>
			</form>
		</div>
	);
}
