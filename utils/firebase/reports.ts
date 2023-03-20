import { MedicineReportInterface } from "@/interfaces/reports";
import { doc, getDoc, setDoc, arrayUnion, Timestamp } from "firebase/firestore";
import { db } from "@/utils/firebase/index";

export const getUserHistory = async (user_id: string) => {
  const data = await getDoc(doc(db, "users", user_id));

  return data.data();
};

export const addUserMedicalHistory = async (
  user_id: string,
  data: MedicineReportInterface
) => {
  await setDoc(doc(db, "reports", user_id), { medical: arrayUnion(data) });
};
