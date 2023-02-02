import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../components/Button/Button.jsx";
import Details from "../components/Details.jsx";
// import avatar from "../assets/image-avatar.jpg";
import {
	useMyProfileQuery,
	useWorkerPostDetailsQuery,
} from "../services/invoiceApi.js";

export default function SinglePostPage() {
	const [openWindow, setOpenWindow] = useState(false);
	const [myProfileImage, setMyProfileImage] = useState(null);
	// eslint-disable-next-line
	const [error, setError] = useState(null);
	const [myFirstName, setMyFirstName] = useState("");
	const [myLastName, setMyLastName] = useState("");
	const buttonsRef = useRef(null);
	const { postId } = useParams();
	const [details, setDetails] = useState({});
	const userId = JSON.parse(localStorage.getItem("userId"));
	const { data = {}, isLoading } = useMyProfileQuery(userId);
	const { data: postDetails } = useWorkerPostDetailsQuery(postId);
	const { firstName, lastName, email, profileImage } = data;
	const { t, i18n } = useTranslation();
	// useEffect(() => {
	// 	i18n.changeLanguage("en"); // default language
	// }, [i18n]);
	useEffect(() => {
		setMyFirstName(firstName);
		setMyLastName(lastName);
		// eslint-disable-next-line
	}, []);

	const handleUpdate = () => {
		try {
			const bgData = new FormData();
			bgData.append("file", myProfileImage);
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
				.then((imgData) => {
					let fetchedUrl = imgData.url;
					const newData = {
						...data,
						firstName: myFirstName,
						lastName: myLastName,
						profileImage: fetchedUrl,
					};
					fetch(`http://localhost:8080/user/${userId}`, {
						method: "put",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bekki ${localStorage.getItem("jwt")}`,
						},
						body: JSON.stringify(newData),
					})
						.then((res) => res.json())
						.then((result) => {
							console.log(imgData, result);
						});
					window.location.reload(false);
				});
		} catch (err) {
			setError(err);
		}
	};

	function BottomModal() {
		return (
			<div className="flex justify-between w-[30rem] ml-1">
				<Button
					onClick={() => setOpenWindow(false)}
					buttonKind={"cancel"}
					type={"button"}
				/>
				<Button
					buttonKind={"saveChanges"}
					type={"submit"}
					className={"ml-2"}
					onClick={(e) => {
						e.preventDefault();
						handleUpdate();
					}}
				/>
			</div>
		);
	}
	return (
		<div className={`mx-[13rem] ${data? "h-[100%]" : "h-[100vh]"}  pt-14`}>
			<div>
				<div className=" flex flex-row font-bold text-gray-500">
					<span>Home</span>
					<img
						className=" w-3 h-3 mt-2"
						src="https://img.icons8.com/sf-black-filled/30/6B7280/forward.png"
						alt="arrow"
					/>
					<span>Workers</span>
					<img
						className=" w-3 h-3 mt-2"
						src="https://img.icons8.com/sf-black-filled/30/6B7280/forward.png"
						alt="arrow"
					/>
					<span>{firstName}</span>
				</div>
				<div></div>
			</div>
			<div>
				<div className="mt-4 grid grid-cols-12 gap-5 text-[.8rem] ">
					<div className="  col-span-3 ">
						<div>
							<div
								className=" flex justify-center"
							>
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
												src={'https://res.cloudinary.com/bolibekjnfjenfjnfjnfpjnfjnfenkjfwjf/image/upload/v1673886563/usta_uz_emposts/gahrpoldittuyaymtkaw.png'}
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
										src={
											"https://img.icons8.com/ios-glyphs/100/C9C9C9/star--v1.png"
										}
									/>
									<img
										className=" w-3 h-3"
										src={
											"https://img.icons8.com/ios-glyphs/100/C9C9C9/star--v1.png"
										}
									/>
									<img
										className=" w-3 h-3"
										src={
											"https://img.icons8.com/ios-glyphs/100/C9C9C9/star--v1.png"
										}
									/>
									<img
										className=" w-3 h-3"
										src={
											"https://img.icons8.com/ios-glyphs/100/C9C9C9/star--v1.png"
										}
									/>
									<img
										className=" w-3 h-3"
										src={
											"https://img.icons8.com/ios-glyphs/100/C9C9C9/star--v1.png"
										}
									/>
								</div>
								<div>
									+{postDetails && postDetails.phoneNumber}
								</div>
								<div className=" text-sky-700 underline">{email}</div>
								<hr className="full flex self              -center w-2/3 mt-2" />
							</div>

							<div className="w-full flex justify-center my-5">
								<button
									className="bg-gray-200 px-5 py-2 rounded-lg text-black font-semibold"
									onClick={() => setOpenWindow(true)}
								>
									{t("editButton")}
								</button>
							</div>
						</div>
					</div>
					<div className=" col-span-9 ">
						<div className="mt-5">
							{postDetails && <Details key={postDetails.id} {...postDetails} />}
						</div>
					</div>
					<div></div>
				</div>
			</div>
			{openWindow && (
				<div className="absolute right-0 z-60 top-14 bg-white w-[950px] rounded-l-xl h-[91vh] overflow-auto ">
					<div>
						<div className="pr-14 pl-14 pt-14 pb-16 z-50">
							<h1 className="font-bold">{"Edit Profile"}</h1>
							<label htmlFor="firstname" className="my-5">
								Firstname
							</label>
							<input
								id="firstname"
								value={myFirstName || firstName}
								onChange={(e) => setMyFirstName(e.target.value)}
								className={
									"w-full mt-1 mb-4 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								}
							/>
							<label htmlFor="lastname" className="my-5">
								Lastname
							</label>
							<input
								id="lastname"
								value={myLastName || lastName}
								onChange={(e) => setMyLastName(e.target.value)}
								className={
									"w-full mt-1 mb-4 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								}
							/>
							<label htmlFor="profile-image" className="my-5">
								Profile Image
							</label>
							<input
								id="profile-image"
								type="file"
								onChange={(e) => setMyProfileImage(e.target.files[0])}
								className={
									"w-full mt-1 mb-4 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								}
							/>
						</div>
						<div
							ref={buttonsRef}
							className="mt-2.5 shadow-[0_-60px_70px_-15px_rgba(0,0,0,0.1)] bg-white py-8 pr-14 pl-40 rounded-br-[20px] rounded-tr-[20px] flex sticky bottom-0 justify-between"
						>
							<BottomModal />
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
