import { UserDetailsInterface } from "@/interfaces/user";
import { doc, getDoc, updateDoc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "@/utils/firebase/index";

export const getUserDetails = async (user_id: string) => {
  const data = await getDoc(doc(db, "users", user_id));

  return data.data();
};

export const setUserDetails = async (
  user_id: string,
  data: UserDetailsInterface
) => {
  await setDoc(doc(db, "users", user_id), data);
};

export const initUser = async (user_id: string) => {
  await setDoc(doc(db, "users", user_id), {});
  await setDoc(doc(db, "reports", user_id), { medical: [], lab: [] });
};

export const updateUserDetails = async (
  user_id: string,
  data: Partial<UserDetailsInterface>
) => {
  await updateDoc(doc(db, "users", user_id), data);
};
