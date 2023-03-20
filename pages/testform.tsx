import { auth } from "@/utils/firebase";
import { TextInput } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

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
