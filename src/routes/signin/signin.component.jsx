import { getRedirectResult } from "firebase/auth";
import React, { useEffect } from "react";
import Button from "../../components/button/button.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  auth,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>SignIn page</h1>

      <Button
        onClick={logGoogleUser}
        style={{ cursor: "pointer" }}
        buttonType="google"
      >
        SignIn with google popup
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
