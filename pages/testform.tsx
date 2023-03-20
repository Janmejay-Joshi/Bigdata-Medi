import React, { useEffect } from "react";
import { auth } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { initUser } from "@/utils/firebase/users";

type Props = {};

const Test = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/tests");
  }, [user, router]);

  return <div></div>;
};

export default Test;
