import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import Button from "../components/Button/Button.jsx";
import Details from "../components/Details.jsx";
import WorkerPostForm from "../components/Posts/WorkerPostForm.jsx";
import EmployerPostForm from "../components/Posts/EmployerPostForm.jsx";
import { usePostDetailsQuery } from "../services/invoiceApi.js";

export default function SinglePostPage() {
	const [openWindow, setOpenWindow] = useState(false);
	// const [myProfileImage, setMyProfileImage] = useState(null);
	// eslint-disable-next-line
	const [error, setError] = useState(null);
	const [myFirstName, setMyFirstName] = useState("");
	const [myLastName, setMyLastName] = useState("");
	// const buttonsRef = useRef(null);
	const { postId } = useParams();
	const userId = JSON.parse(localStorage.getItem("userId"));
	const { data = {}, isSuccess } = usePostDetailsQuery(postId);
	const { firstName, lastName, email, profileImage } = isSuccess && data.user;
	const details = isSuccess && data.details;
	const isWorker = details.orientating ? false : true;
	const { t } = useTranslation();

	useEffect(() => {
		setMyFirstName(firstName);
		setMyLastName(lastName);
		// setMyProfileImage(profileImage);
		// eslint-disable-next-line
	}, []);

	// const handleUpdate = () => {
	// 	try {
	// 		const bgData = new FormData();
	// 		bgData.append("file", myProfileImage);
	// 		bgData.append("upload_preset", "usta_uz");
	// 		bgData.append("cloud_name", "bolibekjnfjenfjnfjnfpjnfjnfenkjfwjf");
	// 		fetch(
	// 			"https://api.cloudinary.com/v1_1/bolibekjnfjenfjnfjnfpjnfjnfenkjfwjf/image/upload",
	// 			{
	// 				method: "post",
	// 				body: bgData,
	// 			}
	// 		)
	// 			.then((res) => res.json())
	// 			.then((imgData) => {
	// 				let fetchedUrl = imgData.url;
	// 				const newData = {
	// 					...data,
	// 					firstName: myFirstName,
	// 					lastName: myLastName,
	// 					profileImage: fetchedUrl,
	// 				};
	// 				fetch(`http://localhost:8080/user/${userId}`, {
	// 					method: "put",
	// 					headers: {
	// 						"Content-Type": "application/json",
	// 						Authorization: `Bekki ${localStorage.getItem("jwt")}`,
	// 					},
	// 					body: JSON.stringify(newData),
	// 				})
	// 					.then((res) => res.json())
	// 					.then((result) => {
	// 						console.log(imgData, result);
	// 					});
	// 				window.location.reload(false);
	// 			});
	// 	} catch (err) {
	// 		setError(err);
	// 	}
	// };

	// function BottomModal() {
	// 	return (
	// 		<div className="flex justify-between w-[30rem] ml-1">
	// 			<Button
	// 				onClick={() => setOpenWindow(false)}
	// 				buttonKind={"cancel"}
	// 				type={"button"}
	// 			/>
	// 			<Button
	// 				buttonKind={"saveChanges"}
	// 				type={"submit"}
	// 				className={"ml-2"}
	// 				onClick={(e) => {
	// 					e.preventDefault();
	// 					handleUpdate();
	// 				}}
	// 			/>
	// 		</div>
	// 	);
	// }
	return (
		<div className={`mx-[13rem] ${data ? "h-[100%]" : "h-[100vh]"}  pt-14`}>
			<div>
				<div className=" flex flex-row font-bold text-gray-500">
					<span>Home</span>
					<img
						className=" w-3 h-3 mt-2"
						src="https://img.icons8.com/sf-black-filled/30/6B7280/forward.png"
						alt="arrow"
					/>
					<span>{isWorker ? "Workers" : "Employers"}</span>
					<img
						className=" w-3 h-3 mt-2"
						src="https://img.icons8.com/sf-black-filled/30/6B7280/forward.png"
						alt="arrow"
					/>
					<span>{firstName}</span>
				</div>
				<div></div>
			</div>
			<div className={`${openWindow ? "hidden" : ""}`}>
				<div className="mt-4 grid grid-cols-12 gap-5 text-[.8rem] ">
					<div className="  col-span-3 ">
						<div>
							<div className=" flex justify-center">
								<div className="flex flex-col">
									<div className={`  `}>
										{profileImage ? (
											<img
												src={profileImage}
												alt="profile"
												className="rounded-full  border-4 border-white w-40 h-40"
												style={{ width: "268px", height: "268px" }}
											/>
										) : (
											<img
												src={
													"https://res.cloudinary.com/bolibekjnfjenfjnfjnfpjnfjnfenkjfwjf/image/upload/v1676981078/usta_uz_emposts/l6o7v92dvmwjyomhzegq.jpg"
												}
												alt="profile"
												className="rounded-full w-60 h-60"
											/>
										)}
									</div>
								</div>
							</div>
							<div className="flex items-center flex-col mt-5 mb-3.5">
								<h1 className="text-center font-bold text-xl">
									{myFirstName || firstName} {myLastName || lastName}
								</h1>
								<div className=" flex flex-row mb-1">
									<img
										className=" w-3 h-3"
										alt="star"
										src={
											"https://img.icons8.com/ios-glyphs/100/C9C9C9/star--v1.png"
										}
									/>
									<img
										className=" w-3 h-3"
										alt="star"
										src={
											"https://img.icons8.com/ios-glyphs/100/C9C9C9/star--v1.png"
										}
									/>
									<img
										className=" w-3 h-3"
										alt="star"
										src={
											"https://img.icons8.com/ios-glyphs/100/C9C9C9/star--v1.png"
										}
									/>
									<img
										className=" w-3 h-3"
										alt="star"
										src={
											"https://img.icons8.com/ios-glyphs/100/C9C9C9/star--v1.png"
										}
									/>
									<img
										className=" w-3 h-3"
										alt="star"
										src={
											"https://img.icons8.com/ios-glyphs/100/C9C9C9/star--v1.png"
										}
									/>
								</div>
								<div>{details.phoneNumber}</div>
								<div className=" text-sky-700 underline">{email}</div>
								<hr className="full flex self-center w-2/3 mt-2" />
							</div>

							<div
								className={`${
									details.userId !== userId ? "hidden" : ""
								} w-full flex justify-center my-5`}>
								<button
									className="bg-gray-200 px-5 py-2 rounded-lg text-black font-semibold"
									onClick={() => setOpenWindow(true)}>
									{t("editButton")}
								</button>
							</div>
						</div>
					</div>
					<div className=" col-span-9 ">
						<div className="mt-5">
							{details && (
								<Details key={details.id} {...details} isWorker={isWorker} />
							)}
						</div>
					</div>
					<div></div>
				</div>
			</div>
			{openWindow && (
				<div onClick={() => setOpenWindow(true)}>
					{isWorker ? (
						<WorkerPostForm {...details} />
					) : (
						<EmployerPostForm {...details} />
					)}
				</div>
			)}
			<div
				onClick={() => setOpenWindow(false)}
				className={` ${
					openWindow ? "absolute" : "hidden"
				}  top-[11.8rem] right-[22.3rem] border-[.1rem] text-xs px-1 border-green-600 rounded-md`}>
				X
			</div>
		</div>
	);
}
