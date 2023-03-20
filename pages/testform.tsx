import React, { useEffect, useState } from "react";
import { auth } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { initUser } from "@/utils/firebase/users";
import { Button, TextInput } from "@mantine/core";
import { DashboardLayout } from "./layout";

type Props = {};

const Testform = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
  const [medVal, setMedVal] = useState(1);
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) router.push("/tests");
  }, [user, router, loading]);
  const row = [];

  return (
    <div>
      <TextInput placeholder="Name" label="Full Name" withAsterisk />
      <TextInput placeholder="adhar" label="Aadhar No." withAsterisk />
      <TextInput placeholder="diagnosis" label="Diagnosis" withAsterisk />
      {[...Array(medVal)].map((data, index) => {
        console.log(medVal);
        return (
          <TextInput
            key={index}
            placeholder="Medicines"
            label="medicines"
            withAsterisk
          />
        );
      })}
      <Button onClick={() => setMedVal(medVal + 1)} mt={20} variant="default">
        Add More Medicines
      </Button>
    </div>
  );
};
Testform.getLayout = DashboardLayout;
export default Testform;
