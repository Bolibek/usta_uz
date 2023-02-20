import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import FormInput from "../FormInputs/FormInput";
import RadioInput from "../FormInputs/RadioInput";
import { useAddEmployerPostMutation } from "../../services/invoiceApi";
import { v4 as uuidv4 } from "uuid";
import { formatDate } from "../../utils/index";

export default function EmployerPostForm() {
	const [category, setCategory] = useState("");
	const [extraInfo, setExtraInfo] = useState("");
	const [comingHours, setComingHours] = useState("");
	const [extraWishes, setExtraWishes] = useState("");
	const [startingTime, setStartingTime] = useState("bugun");
	const [image, setImage] = useState("");
	const { theme } = useSelector((state) => state.themeStates);

	const navigate = useNavigate();

	const [addEmployerPost] = useAddEmployerPostMutation();
	const { t } = useTranslation();

	const handleCategory = (e) => {
		setCategory(e.target.value);
	};
	const handleExtraInfo = (e) => {
		setExtraInfo(e.target.value);
	};
	const handleComingHours = (e) => {
		setComingHours(e.target.value);
	};
	const handleExtraWishes = (e) => {
		setExtraWishes(e.target.value);
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
					addEmployerPost({
						id: uuidv4(),
						createdAt: formatDate(new Date()),
						lifeStamp: new Date().getTime().toLocaleString(),
						jobName: e.target[0].value,
						category: e.target[1].value,
						photoLinks: imageUrl,
						extraInfo: e.target[3].value,
						startDate: startingTime,
						comingHours: e.target[8].value,
						wage: e.target[9].value,
						phoneNumber: e.target[10].value,
						city: e.target[11].value,
						employerAddress: e.target[12].value,
						orientating: e.target[13].value,
						extraConditions: e.target[14].value,
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
			<h1>{t("fillEmployerForm")}</h1>
			<form
				onSubmit={handle}
				className="mt-5 p-5 border-[0.1rem] border-green-600 rounded-md w-[45vw]">
				<div className="mb-1.5">
					<div className="flex flex-col">
						<FormInput
							labelText={t("jobName")}
							className={"mt-1"}
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
									<option value="Beauty/Health">{t("beautyHealth")}</option>
									<option value="Other services">{t("otherServices")}</option>
								</select>
							</div>
							<div className=" flex flex-col w-[48%]">
								<FormInput
									labelText={t("jobPicturesTodo")}
									inputType={"file"}
									inputValue={""}
									setImage={setImage}
								/>
							</div>
						</div>
					</div>
					<div className=" mb- flex flex-row justify-between">
						<div className=" flex flex-col w-full">
							<label
								htmlFor=""
								className={`mt-3 font-spartan text-xs ${
									theme === "light" ? " text-gray-900" : "text-white"
								} font-medium mb-1`}>
								{t("extraInfo")}
							</label>
							<textarea
								value={extraInfo}
								onChange={handleExtraInfo}
								className="mt-2 rounded p-3 border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border text-gray-900 font-bold"
							/>
						</div>
					</div>
				</div>

				<div>
					<label
						className={`font-spartan text-xs ${
							theme === "light" ? " text-gray-900" : "text-white"
						} font-medium`}>
						{t("startTime4Emp")}
					</label>
					<div className=" flex flex-row font-spartan text-xs text-gray-900 font-medium mt-0.5">
						<RadioInput
							label={t("today")}
							value="bugun"
							checked={startingTime}
							setter={setStartingTime}
						/>
						<RadioInput
							label={t("tomorrow")}
							value="ertaga"
							checked={startingTime}
							setter={setStartingTime}
						/>
						<RadioInput
							label={t("dependOnWorker")}
							value="ustaning-vaqtiga-qarab"
							checked={startingTime}
							setter={setStartingTime}
						/>
						<RadioInput
							label={t("withinAWeek")}
							value="hafta-ichida"
							checked={startingTime}
							setter={setStartingTime}
						/>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor=""
							className={`font-spartan text-xs ${
								theme === "light" ? " text-gray-900" : "text-white"
							} font-medium mb-2.5 mt-3`}>
							{t("comingHours")}
						</label>
						<select
							value={comingHours}
							onChange={handleComingHours}
							className=" w-[48%] rounded p-3 border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border text-gray-900 font-bold">
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
								labelText={t("charge")}
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
				</div>
				<div>
					<div className="flex flex-col">
						<FormInput
							labelText={t("city")}
							className={"mt-3 "}
							inputType={"text"}
							inputValue={""}
						/>
					</div>
					<div className="flex flex-col">
						<FormInput
							labelText={t("address")}
							className={"mt-3 "}
							inputType={"text"}
							inputValue={""}
						/>
					</div>
					<div className="flex flex-col">
						<FormInput
							labelText={t("orientation")}
							className={"mt-3 "}
							inputType={"text"}
							inputValue={""}
						/>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor=""
							className={`font-spartan text-xs ${
								theme === "light" ? " text-gray-900" : "text-white"
							} font-medium mt-3 mb-1`}>
							{t("requirements")}
						</label>
						<textarea
							value={extraWishes}
							onChange={handleExtraWishes}
							className={`rounded p-3 border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border ${
								theme === "light" ? " text-gray-900" : "text-white"
							} font-bold `}
						/>
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
