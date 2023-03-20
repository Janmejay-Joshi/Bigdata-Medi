import React, { useEffect } from "react";
import { auth } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { initUser } from "@/utils/firebase/users";
import { TextInput } from "@mantine/core";

type Props = {};

const Test = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) router.push("/tests");
  }, [user, router, loading]);

  return (
    <div>
      <TextInput placeholder="Your name" label="Full name" withAsterisk />
      <TextInput placeholder="Your name" label="Full name" withAsterisk />
      <TextInput placeholder="Your name" label="Full name" withAsterisk />
      <TextInput placeholder="Your name" label="Full name" withAsterisk />
    </div>
  );
};

export default Test;
