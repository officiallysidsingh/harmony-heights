import { NextResponse } from "next/server";

// Firebase Import
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { database } from "@/config/firebase";

export async function POST(req: Request) {
  try {
    const userHistoryDocSnap = await getDocs(
      collection(database, "userHistory"),
    );

    // If there is no document in collection
    if (userHistoryDocSnap.empty) {
      throw new Error("No Rooms Booked");
    }

    // If document exists
    // Store it in userHistory array
    let userHistory: any[] = [];
    userHistoryDocSnap.forEach((doc) => userHistory.push(doc.data()));

    // No Of Deluxe Rooms Available
    const deluxeDocSnap: any = await getDoc(
      doc(database, "hotelData", "deluxeAvailability"),
    );
    const deluxe = deluxeDocSnap.data().qty;

    // No Of Deluxe Rooms Available
    const premierDocSnap: any = await getDoc(
      doc(database, "hotelData", "premierAvailability"),
    );
    const premier = premierDocSnap.data().qty;

    // Total revenue of the hotel
    const totalRevenueDocSnap: any = await getDoc(
      doc(database, "hotelData", "totalRevenue"),
    );
    const totalRevenue = totalRevenueDocSnap.data().qty;

    const userCredentialsDocSnap = await getDocs(
      collection(database, "userCredentials"),
    );

    // If there is no document in collection
    if (userCredentialsDocSnap.empty) {
      throw new Error("No Rooms Booked");
    }

    // If document exists
    // Store it in userCredentials array
    let userCredentials: any[] = [];
    userCredentialsDocSnap.forEach((doc) => {
      let name = doc.data().name;
      let type = doc.data().type;

      let credentials = { name, type };
      userCredentials.push(credentials);
    });

    return NextResponse.json({
      userHistory,
      totalRevenue,
      userCredentials,
      roomsAvailable: {
        deluxe,
        premier,
      },
    });
  } catch (err: any) {
    console.log("Error: ", err);
    return NextResponse.json({
      message: err.message,
    });
  }
}
