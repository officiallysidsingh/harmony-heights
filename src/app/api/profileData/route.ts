import { NextResponse } from "next/server";

// Firebase Import
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "@/config/firebase";

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    if (!email) {
      throw new Error("Please Send Email!");
    }

    // Find all documents related to that email
    // In the useHistory collection
    const docSnap = await getDocs(
      query(
        collection(database, "userHistory"),
        where("userEmail", "==", email),
      ),
    );

    if (docSnap.empty) {
      throw new Error("No booking history found!");
    }

    let userHistory: any[] = [];

    docSnap.forEach((doc) => userHistory.push(doc.data()));

    return NextResponse.json({
      status: "OK",
      userHistory,
    });
  } catch (err: any) {
    console.log("Error: ", err);
    return NextResponse.json({
      message: err.message,
      status: "ERROR",
    });
  }
}
