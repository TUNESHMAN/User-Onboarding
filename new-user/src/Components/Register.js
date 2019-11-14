import React from "react";

function Register() {
  return (
    <div>
      <form>
        <label htmlFor="new_user_name">NAME</label>
        <input type="text" name="name" id="new_user_name"></input>
        <label htmlFor="new_user_email">EMAIL</label>
        <input type="text" name="email" id="new_user_email"></input>
        <label htmlFor="new_user_password">PASSWORD</label>
        <input type="password" name="password" id="new_user_password"></input>
        <label htmlFor="new_user_terms">TERMS OF SERVICE</label>
        <input type="checkbox" name="termsOfService" id="new_user_terms"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Register;
