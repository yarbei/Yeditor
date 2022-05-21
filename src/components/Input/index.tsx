import { useState } from "react";

function Input(props:any) {
  const [value, setValue] = useState("");

  const handleChange = (e:any) => {
	setValue(e.target.value);
  };

  return (
	<input
	  type="text"
	  value={value}
	  onChange={handleChange}
	  placeholder={props.placeholder}
	/>
  );
}
export default Input;