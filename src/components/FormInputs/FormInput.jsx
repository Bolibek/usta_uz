import React, { useState } from "react";
import { useSelector } from "react-redux";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormInput = ({
	inputValue,
	labelText,
	inputType,
	className,
	id,
	isRegInput,
	setImage,
}) => {
	const [startDate, setStartDate] = useState(new Date());
	const [currentValue, setCurrentValue] = useState(inputValue);
	const { theme, textColor, bgColor } = useSelector(
		(state) => state.themeStates
	);
	const handleChange = (e) => {
		if (inputType === "file") {
			setCurrentValue(setImage(e.target.files[0]));
		} else {
			setCurrentValue(e.target.value);
		}
	};
	return (
		<label
			htmlFor={id}
			className={
				isRegInput
					? `flex flex-col my-1`
					: `font-spartan ${className} text-xs flex flex-col ${
							theme === "light" ? "text-gray-900" : "text-white"
					  }  font-medium`
			}
		>
			{labelText}
			{inputType !== "date" ? (
				<input
					id={id}
					value={currentValue}
					onChange={handleChange}
					type={inputType}
					className={
						isRegInput
							? `${className} my-1`
							: `rounded mt-[0.625rem] p-3 border border-green-600 outline outline-0 focus:outline-1 focus:outline-solid focus:outline-green-400 text-xs box-border text-gray-900 font-bold`
					}
				/>
			) : (
				<DatePicker
					className={`mt-[0.625rem] p-3 border ${className} border-green-600 outline-0 focus:outline-1 focus:outline-green-400 text-xs box-border text-gray-900 font-bold`}
					selected={startDate}
					onChange={(date) => setStartDate(date)}
				/>
			)}
		</label>
	);
};
export default FormInput;
