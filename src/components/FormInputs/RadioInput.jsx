import React from "react";

const RadioInput = ({ label, value, checked, setter }) => {
	return (
		<label>
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
