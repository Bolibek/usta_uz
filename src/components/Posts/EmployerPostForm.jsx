import { useState } from "react";
import FormInput from "../FormInputs/FormInput";
import RadioInput from "../FormInputs/RadioInput";
import { useAddEmployerPostMutation } from "../../services/invoiceApi";
import { v4 as uuidv4 } from "uuid";

export default function EmployerPostForm() {
	const [section, setSection] = useState("");
	const [category, setCategory] = useState("");
	const [categoryType, setCategoryType] = useState("");
	const [material, setMaterial] = useState("");
	const [extraInfo, setExtraInfo] = useState("");
	const [comingHours, setComingHours] = useState("");
	const [extraWishes, setExtraWishes] = useState("");
	const [startingTime, setStartingTime] = useState("bugun");
	const [image, setImage] = useState("");
	const [url, setUrl] = useState("");

	const [addEmployerPost] = useAddEmployerPostMutation();
	
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
				.then((imageData) => {setUrl(imageData.url);});
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

			await addEmployerPost({
				id: uuidv4(),
				jobName: e.target[0].value,
				section: e.target[1].value,
				category: e.target[2].value,
				categoryType: e.target[3].value,
				material: e.target[4].value,
				photoLinks: url,
				extraInfo: e.target[6].value,
				startDate: startingTime,
				comingHours: e.target[11].value,
				wage: e.target[12].value,
				employerAddress: e.target[13].value,
				orientating: e.target[14].value,
				phoneNumber: e.target[15].value,
				extraConditions: e.target[16].value,
			}).unwrap();

			window.location.reload(false);

			// }
		} catch (err) {
			// setError(err)
		}
		// setOpenWindow(false)
	};
	console.log(url)
	return (
		<div className="flex flex-col items-center">
			<h1>Ishchi e'lonini to'ldirish</h1>
			<form
				onSubmit={handle}
				className="mt-5 p-5 border-[0.1rem] border-green-600 rounded-md"
			>
				<div>
					<div className="flex flex-col">
						<FormInput
							labelText={"Ish nomi"}
							className={"mt-1"}
							inputType={"text"}
							inputValue={""}
						/>
					</div>
					<div className=" flex flex-col">
						<div className=" flex flex-row  justify-between">
							<div className=" flex flex-col w-[48%]">
								<label htmlFor="">Bo'lim</label>
								<select
									value={section}
									onChange={handleSection}
									className="border-green-600 border-[0.1rem] rounded-sm "
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
								<label htmlFor="">Kategoriya</label>
								<select
									value={category}
									onChange={handleCategory}
									className="border-green-600 border-[0.1rem] rounded-sm "
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
						<div className=" flex flex-row justify-between ">
							<div className=" flex flex-col w-[48%]">
								<label htmlFor="">Kategoriya turi</label>
								<select
									value={categoryType}
									onChange={handleCategoryType}
									className="border-green-600 border-[0.1rem] rounded-sm outline-none "
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
								<label htmlFor="">Material turi (ixtiyoriy)</label>
								<select
									value={material}
									onChange={handleMaterial}
									className="border-green-600 border-[0.1rem] rounded-sm outline-none "
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
					<div className=" flex flex-row">
						<div className=" flex flex-col">
							<FormInput
								labelText={"Qilinadigan ish rasmi (ixtiyoriy)"}
								className={"mt-1 w-[83.7%]"}
								inputType={"file"}
								inputValue={""}
								setImage={setImage}
							/>
						</div>
						<div className=" flex flex-col w-[52%]">
							<label htmlFor="">Qo'shimcha ma'lumot (ixtiyoriy)</label>
							<textarea
								value={extraInfo}
								onChange={handleExtraInfo}
								className=" border-green-600 border-[0.1rem] rounded-sm outline-none"
							/>
						</div>
					</div>
				</div>

				<div>
					<div className=" flex flex-row">
						<RadioInput
							label="Bugun"
							value="bugun"
							checked={startingTime}
							setter={setStartingTime}
						/>
						<RadioInput
							label="Ertaga"
							value="ertaga"
							checked={startingTime}
							setter={setStartingTime}
						/>
						<RadioInput
							label="Ustaning vaqtiga qarab"
							value="ustaning-vaqtiga-qarab"
							checked={startingTime}
							setter={setStartingTime}
						/>
						<RadioInput
							label="Hafta ichida"
							value="hafta-ichida"
							checked={startingTime}
							setter={setStartingTime}
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="">Usta qaysi vaqtda kelgan ma'qul?</label>
						<select
							value={comingHours}
							onChange={handleComingHours}
							className=" w-[45%] border-green-600 border-[0.1rem] rounded-sm outline-none"
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
					<div className="flex flex-col ">
						<FormInput
							labelText={"Xizmat uchun qancha to'lamoqchisiz?"}
							className={"mt-1 w-[45%]"}
							inputType={"text"}
							inputValue={""}
						/>
					</div>
					<div className="flex flex-col">
						<FormInput
							labelText={"Telefon raqam"}
							className={"mt-1 w-[45%]"}
							inputType={"text"}
							inputValue={""}
						/>
					</div>
				</div>
				<div>
					<div className="flex flex-col">
						<FormInput
							labelText={"Manzil"}
							className={"mt-1 "}
							inputType={"text"}
							inputValue={""}
						/>
					</div>
					<div className="flex flex-col">
						<FormInput
							labelText={"Mo'ljal (ixtiyoriy)"}
							className={"mt-1 "}
							inputType={"text"}
							inputValue={""}
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="">Qo'shimcha talablar (ixtiyoriy)</label>
						<textarea
							value={extraWishes}
							onChange={handleExtraWishes}
							className="border-green-600 border-[0.1rem] rounded-sm "
						/>
					</div>
				</div>
				<div classNames="">
					<button
						className="mt-3 px-5 py-1 border-green-600 border-[0.1rem] rounded-sm"
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
