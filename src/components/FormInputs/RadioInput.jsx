import { useSelector } from "react-redux";

const RadioInput = ({ label, value, checked, setter }) => {
	const { theme } = useSelector(
		(state) => state.themeStates
	);
	return (
		<label
			className={` ${theme === "light" ? " text-gray-900" : "text-white"} `}
		>
			<input
				type="radio"
				checked={checked === value}
				onChange={() => setter(value)}
			/>
			<span className="mr-5 ml-1">{label}</span>
		</label>
	);
};

export default RadioInput;
