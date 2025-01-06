import { NextResponse } from "next/server";
import Passwords from "@/models/passvault.schema";
import connectToDatabase from "@/config/db";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userEmail = url.searchParams.get("email");

    if (!userEmail) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 }
      );
    }
    await connectToDatabase();
    const pass = await Passwords.find({ userEmail, isFavorite: true }).sort({
      createdAt: -1,
    });
    return NextResponse.json(pass, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch pass" },
      { status: 500 }
    );
  }
}
