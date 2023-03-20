import { auth } from "@/utils/firebase";
import { initUser } from "@/utils/firebase/users";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

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
