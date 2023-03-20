import React, { useEffect, useState } from "react";
import { auth } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { initUser } from "@/utils/firebase/users";
import { Button, Paper, Select, TextInput } from "@mantine/core";
import { DashboardLayout } from "@/layout";

import { addUserMedicalHistory } from "@/utils/firebase/reports";

//forms
import { useForm } from "@mantine/form";
import { Box } from "tabler-icons-react";

type Props = {};

const Testform = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
  const [medVal, setMedVal] = useState(1);
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) router.push("/tests");
    console.log(user?.uid);
  }, [user, router, loading]);

  const form = useForm({
    initialValues: {
      name: "",
      adhar: 0,
      diagnosis: "",
      medicines: {
        name: "",
        dosage: "",
        duration: "",
      },
    },

    validate: {},
  });

  form.values;

  return (
    <div>
      <TextInput
        placeholder="Name"
        label="Full Name"
        {...form.getInputProps("name")}
        withAsterisk
      />
      <TextInput
        placeholder="adhar"
        label="Aadhar No."
        {...form.getInputProps("adhar")}
        withAsterisk
      />
      <TextInput
        placeholder="diagnosis"
        label="Diagnosis"
        {...form.getInputProps("diagnosis")}
        withAsterisk
      />
      {[...Array(medVal)].map((data, index) => {
        console.log(medVal);
        return (
          <Paper p={20} className="flex gap-3" key={index}>
            <TextInput
              // key={index}
              placeholder="Name"
              label="Name"
              {...form.getInputProps("medicines.name}")}
              withAsterisk
            />
            <TextInput
              // key={index}
              placeholder="Dosage"
              label="Dosage"
              {...form.getInputProps("medicines.dosage")}
              withAsterisk
            />
            <Select
              // key={index}
              placeholder="Duration"
              label="Duration"
              data={["M", "E", "N", "ME", "MN", "EN", "MEN"]}
              {...form.getInputProps("medicines.duration")}
              withAsterisk
            />
          </Paper>
        );
      })}
      <Button onClick={() => setMedVal(medVal + 1)} mt={20} variant="default">
        Add More Medicines
      </Button>
      <br />
      <Button
        onClick={() => {
          if (user) addUserMedicalHistory(user.uid, form.values);
        }}
        variant="default"
      >
        SUBMIT
      </Button>
    </div>
  );
};
Testform.getLayout = DashboardLayout;
export default Testform;
