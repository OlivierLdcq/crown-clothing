import { async } from "@firebase/util";
import React from "react";
import { useState, useContext } from "react";
import {
  createUserDocumentFromAuth,
  signInUserWithEmailAndPasswordFN,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";

import { UserContext } from "../../context/user.context";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.style.scss";

const SignInForm = () => {
  const defaultFormField = {
    email: "",
    password: "",
  };
  const [formField, setFormField] = useState(defaultFormField);
  const resetFormField = () => {
    setFormField(defaultFormField);
  };
  const { email, password } = formField;
  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
    // const userDocRef = await createUserDocumentFromAuth(user);
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    console.log("signInUserWithEmailAndPasswordFN");
    try {
      const { user } = await signInUserWithEmailAndPasswordFN(email, password);
      resetFormField();
      console.log(user);
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("wrong combination !");
          break;
        case "auth/user-not-found":
          alert("no user got found !");
          break;
        default:
          console.log(err);
      }

      console.log(err.message);
      resetFormField();
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmitSignIn}>
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          onChange={onFormChange}
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          onChange={onFormChange}
          value={password}
        />
        <div className="buttons-container">
          {" "}
          <Button style={{ cursor: "pointer" }} type="submit" buttonType="">
            Sign In
          </Button>
          <Button
            style={{ cursor: "pointer" }}
            type="button"
            buttonType="google"
            onClick={logGoogleUser}
          >
            Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
