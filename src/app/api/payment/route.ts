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

    // Fetching availability data
    const availabilityDocSnap: any = await getDoc(
      doc(database, "hotelData", `${roomType}Availability`),
    );

    // Updating availability data
    let qty = availabilityDocSnap.data().qty;
    qty--;

    // Storing availability data
    await setDoc(doc(database, "hotelData", `${roomType}Availability`), {
      qty,
    });

    // Fetching revenue data
    const revenueDocSnap: any = await getDoc(
      doc(database, "hotelData", "totalRevenue"),
    );

    // Updating revenue data
    let revenue = revenueDocSnap.data().qty;
    revenue = revenue + totalPrice;

    // Storing revenue data
    await setDoc(doc(database, "hotelData", `totalRevenue`), {
      qty: revenue,
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
