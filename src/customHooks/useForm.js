import { useState } from "react";
//props en esta clase
const useForm = (props, validateForm) => {
    let acumulado = new Object();
    props.info.forEach(element => {
        acumulado[element.name] = "";
    });
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(acumulado);

  const handleChange = (evt) => {
      console.log(values)
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setErrors(validateForm(values, props))
  };
  return { handleChange, handleSubmit,errors };
};
export default useForm;
