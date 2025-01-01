import Passvault from "@/models/passvault.schema";
import connectToDatabase from "@/config/db";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  await connectToDatabase();

  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const updatedPassvault = await Passvault.findByIdAndUpdate(
      id,
      { isFavourite: true },
      { new: true }
    );

    if (!updatedPassvault) {
      return NextResponse.json(
        { error: "Password not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Password marked as favorite successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating password:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
