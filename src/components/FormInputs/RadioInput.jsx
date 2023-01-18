




// import React, {useRef, useState} from "react";

const RadioInput = ({ label, value, checked, setter }) => {
	// const [refState, setRefState] = useState(null)
	// const ref = useRef(() => null)
	// console.log(ref.current.checked)
	return (
		<label>
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
