import React, { useEffect } from "react";
import { auth } from "@/utils/firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { initUser } from "@/utils/firebase/users";

type Props = {};

const Test = (props: Props) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/dashboard");
  }, [user, router]);

  return (
    <div>
      <button
        onClick={() =>
          signInWithGoogle().then((res) => {
            if (res?.user) initUser(res?.user.uid);
          })
        }
      >
        SignIn
      </button>
    </div>
  );
};

export default Test;
