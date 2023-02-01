import { useSelector } from "react-redux";

// import React, {useRef, useState} from "react";

const RadioInput = ({ label, value, checked, setter }) => {
	const { theme, textColor, bgColor } = useSelector(
		(state) => state.themeStates
	);
	// const [refState, setRefState] = useState(null)
	// const ref = useRef(() => null)
	// console.log(ref.current.checked)
	return (
		<label
			className={` ${theme === "light" ? " text-gray-900" : "text-white"} `}
		>
			<input
				type="radio"
				// ref={ref}
				checked={checked === value}
				onChange={() => setter(value)}
			/>
			<span className="mr-5 ml-1">{label}</span>
		</label>
	);
};

export default RadioInput;
