import { NextResponse } from "next/server";

// Firebase Import
import { database } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function POST(req: Request) {
  const { roomType } = await req.json();
  try {
    const docSnap: any = await getDoc(
      doc(database, "hotelData", roomType + "Availability"),
    );

    let availability: boolean = false;

    if (docSnap.data().qty > 0) {
      // replace 0 with noOfRooms
      availability = true;
    }

    if (availability === true) {
      return NextResponse.json({
        message: "Rooms are available!",
        status: "OK",
      });
    }
  } catch (err: any) {
    console.log("Error: ", err);
    return NextResponse.json({
      message: err.message,
      status: "ERROR",
    });
  }
}
