import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../app/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faCaretDown,
	faSun,
	faMoon,
	// faSignOut,
} from "@fortawesome/free-solid-svg-icons";
function ThemeToggler({translator}) {
	const dispatch = useDispatch();
	const { theme } = useSelector((state) => state.themeStates);
	// const bodyRef = useMemo(() => messages.map(() => useRef(<HTMLBodyElement/>), []))

	if (theme === "dark") {
		localStorage.setItem(
			"ustaThemes",
			JSON.stringify({
				theme: "dark",
				textColor: "text-white",
				bgColor: "bg-slate-900",
			})
		);
	} else {
		localStorage.setItem(
			"ustaThemes",
			JSON.stringify({
				theme: "light",
				textColor: "text-slate-900",
				bgColor: "bg-white",
			})
		);
	}

	// const body = document.querySelector("body");
	// useEffect(() => {
	//   body.style.backgroundColor = theme === "dark"? "#0f172a" : "#fff";
	// });

	// console.log(translator("theme"))
	return (
		<button
			className={`border-b-[0.09rem] border-transparent transition-border duration-700 ease-in-out ${
				theme === "light" ? " hover:border-green-600" : "hover:border-white"
			} w-11 cursor-pointer`}
			onClick={() => dispatch(toggle())}
		>
			{theme === "light" ? (
				<>
					{translator("day")}
					<FontAwesomeIcon className="text-[#ff710ba0] pl-1" icon={faSun} />
				</>
			) : (
				<>
					{translator("night")}
					<FontAwesomeIcon className="text-[#f2e9e3] pl-1" icon={faMoon} />
				</>
			)}
		</button>
	);
}

export default ThemeToggler;
