import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Register() {
  return (
    <div>
      <Form>
        <ErrorMessage
          name="name"
          render={msg => <div className="error">{msg}</div>}
        />
        <label htmlFor="new_user_name">NAME</label>
        <Field
          type="text"
          name="name"
          id="new_user_name"
          placeholder="Name"
        ></Field>
        <ErrorMessage
          name="email"
          render={msg => <div className="error">{msg}</div>}
        />
        <label htmlFor="new_user_email">EMAIL</label>
        <Field
          type="text"
          name="email"
          id="new_user_email"
          placeholder="Email"
        ></Field>
        <ErrorMessage
          name="password"
          render={msg => <div className="error">{msg}</div>}
        />
        <label htmlFor="new_user_password">PASSWORD</label>
        <Field type="password" name="password" id="new_user_password"></Field>
        <label htmlFor="new_user_terms">TERMS OF SERVICE</label>
        <Field
          type="checkbox"
          name="termsOfService"
          id="new_user_terms"
        ></Field>
        <input type="submit"></input>
      </Form>
    </div>
  );
}

const RegisterFormik = withFormik({
  mapPropsToValues() {
    return {
      name: "",
      email: "",
      password: "",
      termsOfService: false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter your Full Name"),
    email: Yup.string().email("Type in your email"),
    password: Yup.string().required("Password is required"),
    termsOfService: Yup.boolean()
  }),

  handleSubmit(values, tools) {
    console.log(values, tools);

    axios
      .post("https://reqres.in/api/users_", values)
      .then(response => {
        console.log(response.data);
        tools.resetForm();
      })
      .catch(error => {
        console.log(error);
      });
  }
})(Register);

export default RegisterFormik;
