import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleWindow } from "../app/store";

export default function FilterModal({ openWindow, setOpenWindow }) {
	// const { openWindow } = useSelector((state) => state.posts);
	// const dispatch = useDispatch();
	const buttonsRef = useRef(null);
	return (
		<>
			{openWindow && (
				<div className="absolute top-40 right-0  w-[950px] rounded-l-xl h-[61vh] overflow-auto border-[0.1rem] border-green-500">
					<div className="">
						<button
							className="sticky left-[37em] top-3 px-1.5  border-[0.1rem] border-green-500 rounded-md"
							onClick={() => setOpenWindow(false)}>
							X
						</button>

						<div className="pr-14 pl-14 pt-14 pb-16 z-50">
							<h1 className="font-bold">{"Edit Profile"}</h1>
							<label htmlFor="firstname" className="my-5">
								Firstname
							</label>
							<input
								id="firstname"
								value={``}
								// onChange={(e) => setMyFirstName(e.target.value)}
								className={
									"w-full mt-1 mb-4 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								}
							/>
							<label htmlFor="lastname" className="my-5">
								Lastname
							</label>
							<input
								id="lastname"
								value={""}
								// onChange={(e) => setMyLastName(e.target.value)}
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
								// onChange={(e) => setMyProfileImage(e.target.files[0])}
								className={
									"w-full mt-1 mb-4 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
