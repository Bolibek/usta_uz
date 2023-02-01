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
	const [section, setSection] = useState("");
	const [category, setCategory] = useState("");
	const [categoryType, setCategoryType] = useState("");
	const [material, setMaterial] = useState("");
	const [comingHours, setComingHours] = useState("");
	const [extraSkills, setExtraSkills] = useState("");
	const [startingTime, setStartingTime] = useState("bugun");
	const [image, setImage] = useState("");
	const { theme, textColor, bgColor } = useSelector(
		(state) => state.themeStates
	);
	const navigate = useNavigate();

	const [addWorkerPost, isSuccess] = useAddWorkerPostMutation();
	const { t, i18n } = useTranslation();
	// useEffect(() => {
	// 	i18n.changeLanguage("en"); // default language
	// }, [i18n]);
	const handleSection = (e) => {
		setSection(e.target.value);
	};
	const handleCategory = (e) => {
		setCategory(e.target.value);
	};
	const handleCategoryType = (e) => {
		setCategoryType(e.target.value);
	};
	const handleMaterial = (e) => {
		setMaterial(e.target.value);
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
							section: e.target[1].value,
							category: e.target[2].value,
							categoryType: e.target[3].value,
							material: e.target[4].value,
							photoLinks: imageUrl,
							extraSkills: e.target[6].value,
							startDate: startingTime,
							comingHours: e.target[11].value,
							wage: e.target[12].value,
							phoneNumber: e.target[13].value,
						}).unwrap();
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					navigate("/");
				});
			// if (kindModal === 'editLight') {
			//   const newData = {
			//     ...data,
			//     status,
			//     senderAddress: {
			//       street: e.target[0].value,
			//       city: e.target[1].value,
			//       postCode: e.target[2].value,
			//       country: e.target[3].value,
			//     },
			//     employerName: e.target[4].value,
			//     employerEmail: e.target[5].value,
			//     employerAddress: {
			//       street: e.target[6].value,
			//       city: e.target[7].value,
			//       postCode: e.target[8].value,
			//       country: e.target[9].value,
			//     },
			//     paymentDue: formatDate(e.target[10].value),
			//     paymentTerms: e.target[11].value,
			//     description: e.target[12].value,
			//     items: itemsRow,
			//   }
			//   updateInvoice({_id, ...newData}).unwrap()
			//   navigate(`/invoice/${invoiceId}`)
			//   window.location.reload(false)
			// } else {
			// }
		} catch (err) {
			// setError(err)
			console.log(err);
		}
	};
	// console.log(new Date('16 Jan 2023').getTime());
	// console.log(startingTime);
	return (
		<div className="flex flex-col items-center ">
			<h1> {t("fillWorkerForm")} </h1>
			<form
				onSubmit={handle}
				className="mt-5 p-5 border-[0.1rem] border-green-600 rounded-md w-[45vw]"
			>
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
									className={`font-spartan text-xs flex flex-col ${theme === "light" ?" text-gray-900" : "text-white"}  font-medium`}
								>
									{t("sectionName")}
								</label>
								<select
									value={section}
									onChange={handleSection}
									className={`rounded mt-[0.625rem] p-3 border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border text-slate-900 font-bold`}
								>
									<option value="Qurilish1">Qurilish1</option>
									<option value="Qurilish2">Qurilish2</option>
									<option value="Qurilish3">Qurilish3</option>
									<option value="Qurilish4">Qurilish4</option>
									<option value="Qurilish5">Qurilish5</option>
									<option value="Qurilish6">Qurilish6</option>
									<option value="Qurilish7">Qurilish7</option>
									<option value="Qurilish8">Qurilish8</option>
								</select>
							</div>
							<div className=" flex flex-col w-[48%]">
								<label
									htmlFor=""
									className={`font-spartan text-xs flex flex-col ${theme === "light" ?" text-gray-900" : "text-white"} font-medium`}
								>
									{t("category")}
								</label>
								<select
									value={category}
									onChange={handleCategory}
									className="rounded mt-[0.625rem] p-3 border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border text-gray-900 font-bold "
								>
									<option value="Suvoq1">Suvoq1</option>
									<option value="Suvoq2">Suvoq2</option>
									<option value="Suvoq3">Suvoq3</option>
									<option value="Suvoq4">Suvoq4</option>
									<option value="Suvoq5">Suvoq5</option>
									<option value="Suvoq6">Suvoq6</option>
									<option value="Suvoq7">Suvoq7</option>
									<option value="Suvoq8">Suvoq8</option>
								</select>
							</div>
						</div>
						<div className=" flex flex-row justify-between mt-3 ">
							<div className=" flex flex-col w-[48%]">
								<label
									htmlFor=""
									className={`"font-spartan text-xs flex flex-col ${theme === "light" ?" text-gray-900" : "text-white"} font-medium`}
								>
									{t("categoryType")}
								</label>
								<select
									value={categoryType}
									onChange={handleCategoryType}
									className="rounded mt-[0.625rem] p-3 border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border text-gray-900 font-bold "
								>
									<option value="Qum suvoq1">Qum suvoq1</option>
									<option value="Qum suvoq2">Qum suvoq2</option>
									<option value="Qum suvoq3">Qum suvoq3</option>
									<option value="Qum suvoq4">Qum suvoq4</option>
									<option value="Qum suvoq5">Qum suvoq5</option>
									<option value="Qum suvoq6">Qum suvoq6</option>
									<option value="Qum suvoq7">Qum suvoq7</option>
									<option value="Qum suvoq8">Qum suvoq8</option>
								</select>
							</div>
							<div className=" flex flex-col w-[48%]">
								<label
									htmlFor=""
									className={`"font-spartan text-xs flex flex-col ${theme === "light" ?" text-gray-900" : "text-white"} font-medium`}
								>
									{t("jobPicturesDone")}
								</label>
								<select
									value={material}
									onChange={handleMaterial}
									className="rounded mt-[0.625rem] p-3 border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border text-gray-900 font-bold  "
								>
									<option value="Kliniz1">Kliniz1</option>
									<option value="Kliniz2">Kliniz2</option>
									<option value="Kliniz3">Kliniz3</option>
									<option value="Kliniz4">Kliniz4</option>
									<option value="Kliniz5">Kliniz5</option>
									<option value="Kliniz6">Kliniz6</option>
									<option value="Kliniz7">Kliniz7</option>
									<option value="Kliniz8">Kliniz8</option>
								</select>
							</div>
						</div>
					</div>
					<div className=" flex flex-row justify-between mt-3">
						<div className=" flex flex-col w-[48%]">
							<FormInput
								labelText={t("jobPicturesDone")}
								className={"mt-1.5 "}
								inputType={"file"}
								inputValue={""}
								setImage={setImage}
							/>
						</div>
						<div className="flex flex-col w-[48%] ">
							<label
								htmlFor=""
								className={`font-spartan text-xs flex flex-col ${theme === "light" ?" text-gray-900" : "text-white"} font-medium mb-1`}
							>
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
					<label className={`font-spartan text-xs flex flex-col ${theme === "light" ?" text-gray-900" : "text-white"} font-medium mb-1 mt-3`}>
						{t("startTime4Wrk")}
					</label>
					<div className={`flex flex-row font-spartan text-xs ${theme === "light" ?" text-gray-900" : "text-white"} font-medium`}>
						<RadioInput
							label={t("today")}
							value="bugun"
							checked={startingTime}
							setter={setStartingTime}
						/>
						<RadioInput
							label={t("tomorrrow")}
							value="ertaga"
							checked={startingTime}
							setter={setStartingTime}
						/>
						<RadioInput
							label={t("dependOnEmployer")}
							value="Xojayinning-vaqtiga-qarab"
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
					<div className="flex flex-col mt-3">
						<label
							htmlFor=""
							className={`"font-spartan text-xs flex flex-col ${theme === "light" ?" text-gray-900" : "text-white"} font-medium`}
						>
							{t("comingHours")}
						</label>
						<select
							value={comingHours}
							onChange={handleComingHours}
							className=" w-[48%] rounded mt-[0.625rem] p-3 border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border text-gray-900 font-bold "
						>
							<option value="9:00 dan 10:00 gacha">9:00 dan 10:00 gacha</option>
							<option value="9:00 dan 10:00 gacha">9:00 dan 10:00 gacha</option>
							<option value="9:00 dan 10:00 gacha">9:00 dan 10:00 gacha</option>
							<option value="9:00 dan 10:00 gacha">9:00 dan 10:00 gacha</option>
							<option value="9:00 dan 10:00 gacha">9:00 dan 10:00 gacha</option>
							<option value="9:00 dan 10:00 gacha">9:00 dan 10:00 gacha</option>
							<option value="9:00 dan 10:00 gacha">9:00 dan 10:00 gacha</option>
							<option value="9:00 dan 10:00 gacha">9:00 dan 10:00 gacha</option>
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
				</div>

				<div classNames="">
					<button
						className={`mt-3 px-5 rounded  py-3 border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border ${theme === "light" ?" text-gray-900" : "text-white"} font-bold`}
						type="submit"
					>
						{t("submit")}
					</button>
				</div>
			</form>
		</div>
	);
}
