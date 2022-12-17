import { useState, useEffect } from "react";
import EmployerPostForm from "../components/Posts/EmployerPostForm";
import WorkerPostForm from "../components/Posts/WorkerPostForm";

export default function PostsFormPage() {
	const [isWorker, setIsWorker] = useState(true);
  const buttonStyle = 'bg-green-600 text-white'
	return (
		<div className=" mt-[5rem] flex flex-col items-center">
			<h1>E'lonlar</h1>
			<div className=" flex flex-row ">
				<button
					className={` w-[10vw] mr-5 py-2 ${isWorker? "text-gray-400 border-gray-400" : buttonStyle} border-[.1rem]  rounded-lg`}
					onClick={() => setIsWorker(true)}
				>
					Ishchi E'loni
				</button>
				<button
					className={` w-[10vw] py-2 ${isWorker ? buttonStyle : "text-gray-400 border-gray-400"} border-[.1rem]  rounded-lg`}
					onClick={() => setIsWorker(false)}
				>
					Ish E'loni
				</button>
			</div>
			<div>{isWorker ? <WorkerPostForm /> : <EmployerPostForm />}</div>
		</div>
	);
}
