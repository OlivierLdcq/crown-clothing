import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.style.scss";
const SignUpForm = () => {
  const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formField, setFormField] = useState(defaultFormField);

  const { displayName, email, password, confirmPassword } = formField;

  const onFormChange = (e) => {
    setFormField({ ...formField, [e.target.name]: e.target.value });
  };
  const resetFormFields = () => {
    setFormField(defaultFormField);
  };

  console.log(formField);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      console.log(err.message);
      console.log("user already exist");
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account ?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onFormSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          name="displayName"
          onChange={onFormChange}
          value={displayName}
        />
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          onChange={onFormChange}
          value={email}
        />
        <FormInput
          label="password"
          required
          type="password"
          name="password"
          onChange={onFormChange}
          value={password}
        />
        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          onChange={onFormChange}
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
