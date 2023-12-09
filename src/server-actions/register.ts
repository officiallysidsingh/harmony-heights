"use server";

// Firebase Import
import { database } from "@/config/firebase";
import {
  addDoc,
  getDocs,
  collection,
  limit,
  query,
  where,
} from "firebase/firestore";

// Auth Import
import bcrypt from "bcrypt";

export default async function registerUser(
  name: string,
  email: string,
  password: string,
) {
  try {
    // Check if all fields are filled
    if (!name || !email || !password) {
      throw new Error("Please fill all the fields");
    }

    // Check if the user already exists
    const existUser = await getDocs(
      query(
        collection(database, "userCredentials"),
        where("email", "==", email),
        limit(1),
      ),
    );

    if (!existUser.empty) {
      throw new Error("This email already exists!");
    }

    // Salting and Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await addDoc(collection(database, "userCredentials"), {
      name,
      email,
      password: hashedPassword,
    });

    console.log("Document written with ID: ", user.id);
    return true;
  } catch (err: any) {
    console.log("Error: ", err.message);
    return err.message;
  }
}
