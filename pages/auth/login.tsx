import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

type Props = {};

export const Login = (props: Props) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return <div>Login</div>;
};
