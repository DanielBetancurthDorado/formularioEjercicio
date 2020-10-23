import React from "react";
import useForm from "../customHooks/useForm";
import validateForm from "../utils/validateForm";
import { Form,Button ,FormControl} from "react-bootstrap";


const SignForm = (props) => {
  const { handleChange, handleSubmit, errors } = useForm(props,validateForm);
  console.log(errors);
  console.log(props);
  let req = "";
  return (
    <div>
      <h1>Register form</h1>
      <Form>
        {props.info.map((element) => {
          if(element.required===undefined){
            req = "(No required)";
          }
          else{req = "(Required)"}
          return (
            <div>
              <Form.Label htmlFor={element.id}>{element.placeholder}:</Form.Label>
              <FormControl
                type={element.type}
                name={element.name}
                placeholder={element.placeholder + " "+ req}
                onChange={handleChange}
                id={element.id}
                required={element.required} 
              />
              {errors[element.id] && <p >{errors[element.id]}</p>}
            </div>
          );
        })}
        <Button onClick={handleSubmit}>Send</Button>
      </Form>
    </div>
  );
};
export default SignForm;
/*
<div>
            <h1>Register form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" placeholder="Username" onChange={handleChange} id="username"/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder="Email"  onChange={handleChange} id="email" />
                </div>
                <div>
                    <label htmlFor="password" >Password:</label>
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} id="password"/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm password:</label>
                    <input type="password" name="confirmPassword" placeholder="Confirm password" onChange={handleChange} id="confirmPassword"/>
                </div>
                <button>Send</button>
            </form>
        </div>
        */
