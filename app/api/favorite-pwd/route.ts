import { NextResponse } from "next/server";
import Passwords from "@/models/passvault.schema";
import connectToDatabase from "@/config/db";

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const pass = await Passwords.find({
      isFavorite: true,
    }).sort({ createdAt: -1 });
    return NextResponse.json(pass, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch pass" },
      { status: 500 }
    );
  }
}
