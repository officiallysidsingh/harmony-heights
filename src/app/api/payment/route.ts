import { NextResponse } from "next/server";

// Firebase Import
import { database } from "@/config/firebase";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

export async function POST(req: Request) {
  const { userEmail, roomType, dateRange, totalDays, totalPrice } =
    await req.json();

  try {
    const bookingData = await addDoc(collection(database, "userHistory"), {
      userEmail,
      roomType,
      dateRange,
      totalDays,
      totalPrice,
    });

    // If error occurs while storing data
    if (!bookingData) {
      throw new Error("An Unexpected Error Occurred!");
    }

    const docSnap: any = await getDoc(
      doc(database, "hotelData", roomType + "Availability"),
    );

    let qty = docSnap.data().qty;
    qty--;

    await setDoc(doc(database, "hotelData", `${roomType}Availability`), {
      qty,
    });

    return NextResponse.json({
      message: "Booking Successfull!",
      status: "OK",
    });
  } catch (err: any) {
    console.log("Error: ", err);
    return NextResponse.json({
      message: err.message,
      status: "ERROR",
    });
  }
}
