import React from "react";
import {withFormik, Form, Field} from 'formik';

function Register() {
  return (
    <div>
      <Form>
        <label htmlFor="new_user_name">NAME</label>
        <Field type="text" name="name" id="new_user_name"></Field>
        <label htmlFor="new_user_email">EMAIL</label>
        <Field type="text" name="email" id="new_user_email"></Field>
        <label htmlFor="new_user_password">PASSWORD</label>
        <Field type="password" name="password" id="new_user_password"></Field>
        <label htmlFor="new_user_terms">TERMS OF SERVICE</label>
        <Field type="checkbox" name="termsOfService" id="new_user_terms"></Field>
        <Field type="submit"></Field>
      </Form>
    </div>
  );
}

export default Register;
