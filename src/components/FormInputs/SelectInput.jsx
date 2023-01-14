import {useState} from "react";

export default function SelectInput({ labelText, className, values }) {
  const [selection, setSelection] = useState(values[0])
  const handleChange = (e) => {
    setSelection(e.target.value)
  }
	return (
		<>
			<label>{labelText}</label>
			<section className={className} onChange={handleChange} value={selection}>
					<option value={values[0]} >{values[0]}</option>
					{/* <option value={values[1]} >{values[1]}</option>
					<option value={values[2]} >{values[2]}</option>
					<option value={values[3]} >{values[3]}</option>
					<option value={values[4]} >{values[4]}</option>
					<option value={values[5]} >{values[5]}</option>
					<option value={values[6]} >{values[6]}</option>
					<option value={values[7]} >{values[7]}</option> */}
			</section>
		</>
	);
}
