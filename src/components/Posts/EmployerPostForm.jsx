import { useState, useId } from "react";
import FormInput from "../FormInputs/FormInput";
import { useAddEmployerPostMutation } from "../../services/invoiceApi";

export default function EmployerPostForm() {
	const [section, setSection] = useState("");
  const [category, setCategory] = useState("")
	const handleSection = (e) => {
		setSection(e.target.value);
	};
  const handleCategory = (e) => {
    setCategory(e.target.value);
  }
	const newJobPostId = useId();
	const [addEmployerPost] = useAddEmployerPostMutation();
	const handle = async (e) => {
		e.preventDefault();
		try {
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
				id: newJobPostId,
				jobName: e.target[0].value,
				wage: e.target[1].value,
				phoneNumber: e.target[2].value,
				employerAddress: e.target[3].value,
				orientating: e.target[4].value,
				section: e.target[5].value,
				category: e.target[6].value,
				// categoryType: e.target[3].value,
				// material: e.target[4].value,
				// photoLinks: e.target[5].value,
				// extraInfo: e.target[6].value,
				// startDate: e.target[7].value,
				// comingHours: e.target[8].value,
				// wage: e.target[9].value,
				// employerAddress: e.target[10].value,
				// orientating: e.target[11].value,
				// phoneNumber: e.target[12].value,
				// extraConditions: e.target[13].value,
				// employerAddress: {
				// 	street: e.target[10].value,
				// 	city: e.target[11].value,
				// 	district: e.target[12].value,
				// 	region: e.target[13].value,
				// },
				// orientating: e.target[14].value,
				// phoneNumber: e.target[15].value,
				// extraConditions: e.target[16].value,
			}).unwrap();
			window.location.reload(false);

			// }
		} catch (err) {
			// setError(err)
		}
		// setOpenWindow(false)
	};
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
								{/* <label htmlFor="">Bo'lim</label>
								<select
									value={"Qurilish"}
									name="section"
									id=""
									className="border-green-600 border-[0.1rem] rounded-sm outline-none "
								>
									<option value="Qurilish">Qurilish</option>
									<option value="Qurilish">Qurilish</option>
									<option value="Qurilish">Qurilish</option>
									<option value="Qurilish">Qurilish</option>
									<option value="Qurilish">Qurilish</option>
									<option value="Qurilish">Qurilish</option>
									<option value="Qurilish">Qurilish</option>
									<option value="Qurilish">Qurilish</option>
								</select> */}
							</div>
							<div className=" flex flex-col w-[48%]">
								{/* <label htmlFor="">Kategoriya</label>
								<select
									value={"Suvoq"}
									name=""
									id=""
									className="border-green-600 border-[0.1rem] rounded-sm outline-none "
								>
									<option value="Suvoq">Suvoq</option>
									<option value="Suvoq">Suvoq</option>
									<option value="Suvoq">Suvoq</option>
									<option value="Suvoq">Suvoq</option>
									<option value="Suvoq">Suvoq</option>
									<option value="Suvoq">Suvoq</option>
									<option value="Suvoq">Suvoq</option>
									<option value="Suvoq">Suvoq</option>
								</select> */}
							</div>
						</div>
						<div className=" flex flex-row justify-between ">
							<div className=" flex flex-col w-[48%]">
								{/* <label htmlFor="">Kategoriya turi</label>
								<select
									value={"Qum suvoq"}
									name=""
									id=""
									className="border-green-600 border-[0.1rem] rounded-sm outline-none "
								>
									<option value="Qum suvoq">Qum suvoq</option>
									<option value="Qum suvoq">Qum suvoq</option>
									<option value="Qum suvoq">Qum suvoq</option>
									<option value="Qum suvoq">Qum suvoq</option>
									<option value="Qum suvoq">Qum suvoq</option>
									<option value="Qum suvoq">Qum suvoq</option>
									<option value="Qum suvoq">Qum suvoq</option>
									<option value="Qum suvoq">Qum suvoq</option>
								</select> */}
							</div>
							<div className=" flex flex-col w-[48%]">
								{/* <label htmlFor="">Material turi (ixtiyoriy)</label>
								<select
									value={"Kliniz"}
									name=""
									id=""
									className="border-green-600 border-[0.1rem] rounded-sm outline-none "
								>
									<option value="Kliniz">Kliniz</option>
									<option value="Kliniz">Kliniz</option>
									<option value="Kliniz">Kliniz</option>
									<option value="Kliniz">Kliniz</option>
									<option value="Kliniz">Kliniz</option>
									<option value="Kliniz">Kliniz</option>
									<option value="Kliniz">Kliniz</option>
									<option value="Kliniz">Kliniz</option>
								</select> */}
							</div>
						</div>
					</div>
					<div className=" flex flex-row">
						<div className=" flex flex-col">
							{/* <FormInput
								labelText={"Qilinadigan ish rasmi (ixtiyoriy)"}
								className={"mt-1 w-[83.7%]"}
								inputType={"file"}
								inputValue={""}
							/> */}
						</div>
						<div className=" flex flex-col w-[52%]">
							{/* <label htmlFor="">Qo'shimcha ma'lumot (ixtiyoriy)</label>
							<textarea
								value={"sdlkfjg"}
								type="text"
								className=" border-green-600 border-[0.1rem] rounded-sm outline-none"
							/> */}
						</div>
					</div>
				</div>

				<div>
					{/* <h1>Ishni qachon boshlash kerak?</h1> */}
					<div className=" flex flex-row">
						{/* <input type="radio" name="qachon" value="Bugun" checked />
						<label htmlFor="" className="mr-5 ml-1">
							Bugun
						</label> */}
						{/* <input type="radio" name="qachon" value="" />
						<label htmlFor="" className="mr-5 ml-1">
							Ertaga
						</label>
						<input type="radio" name="qachon" value="" />
						<label htmlFor="" className="mr-5 ml-1">
							Ustaning vaqtiga qarab
						</label>
						<input type="radio" name="qachon" value="" />
						<label htmlFor="" className="mr-5 ml-1">
							Hafta ichida
						</label> */}
					</div>
					<div className="flex flex-col">
						{/* <label htmlFor="">Usta qaysi vaqtda kelgan ma'qul?</label>
						<select
            value={"9:00 dan 10:00 gacha"}
							name=""
							id=""
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
						</select> */}
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
						{/* <FormInput
							labelText={"Qo'shimcha talablar (ixtiyoriy)"}
							className={"mt-1 "}
							inputType={"text"}
							inputValue={""}
						/> */}

						<label htmlFor="">Qo'shimcha talablar (ixtiyoriy)</label>
						{/* <textarea
							value={"sdlkfjg"}
							className="border-green-600 border-[0.1rem] rounded-sm "
							type="text"
						/> */}
						<label htmlFor="">Bo'lim</label>
						<select
							value={section}
							onChange={handleSection}
							name="section"
							id=""
							className="border-green-600 border-[0.1rem] rounded-sm outline-none "
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
							name=""
							id=""
							className="border-green-600 border-[0.1rem] rounded-sm outline-none "
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
