import { useState } from "react";
import { useTranslation } from "react-i18next";

import EmployerPostForm from "../components/Posts/EmployerPostForm";
import WorkerPostForm from "../components/Posts/WorkerPostForm";

export default function PostsFormPage() {
	const [isWorker, setIsWorker] = useState(true);
	const { t } = useTranslation();
	const buttonStyle = "bg-green-600 text-white border-green-600";
	return (
		<div className=" pt-[2rem] flex flex-col items-center">
			<h1>{t(`posts`)}</h1>
			<div className=" flex flex-row ">
				<button
					className={` w-[10vw] mr-5 py-2 ${
						isWorker ? "text-gray-400 border-gray-400" : buttonStyle
					} border-[.1rem]  rounded-lg`}
					onClick={() => setIsWorker(true)}
				>
					{t("newWorkerPost")}
				</button>
				<button
					className={` w-[10vw] py-2 ${
						isWorker ? buttonStyle : "text-gray-400 border-gray-400"
					} border-[.1rem]  rounded-lg`}
					onClick={() => setIsWorker(false)}
				>
					{t("newEmployeePost")}
				</button>
			</div>
			<div>{isWorker ? <WorkerPostForm /> : <EmployerPostForm />}</div>
		</div>
	);
}
