import Passvault from "@/models/passvault.schema";
import connectToDatabase from "@/config/db";
import { NextResponse } from "next/server";
import { encryptData } from "@/lib/cryptoHelper";

export async function POST(req: Request) {
  await connectToDatabase();

  try {
    const body = await req.json();
    const { label, username, password, tag, email } = body;

    if (!label || !username || !password) {
      return NextResponse.json(
        { error: "Label, username, and password are required" },
        { status: 400 }
      );
    }

    const newPassvault = new Passvault({
      label,
      username,
      password: encryptData(password),
      userEmail: email || "",
      tag,
    });

    await newPassvault.save();

    return NextResponse.json(
      { message: "Password saved successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error saving password:", error.message);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
