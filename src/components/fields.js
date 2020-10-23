import React, { Component } from "react";
import SignForm from "./signForm";

class Fields extends Component {
  fields = [
    {
      type: "text",
      name: "username",
      placeholder: "Username",
      id: "username",
      length: 3,
      required:true,
    },
    {
      type: "number",
      name: "age",
      placeholder: "Age",
      id: "age",
      length: 1,
      min:1,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      id: "email",
      length: 10,
      required:true,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      id: "password",
      length: 5,
      required:true,
    },
    {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
      id: "confirmPassword",
      length: 5,
      required:true,
    },
  ];

  render() {
    return (
      <div>
        <SignForm info={this.fields} />
      </div>
    );
  }
}
export default Fields;
