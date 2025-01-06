import { NextResponse } from "next/server";
import Passwords from "@/models/passvault.schema";
import connectToDatabase from "@/config/db";

export async function GET(req: Request) {
  try {
    await connectToDatabase();

    const url = new URL(req.url);
    const page = Math.max(parseInt(url.searchParams.get("page") || "1", 10), 1);
    const limit = Math.max(
      parseInt(url.searchParams.get("limit") || "10", 10),
      1
    );
    const email = url.searchParams.get("email");
    const skip = (page - 1) * limit;

    const pass = await Passwords.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Passwords.countDocuments({});
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json(
      { data: pass, page, totalPages, total },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch pass" },
      { status: 500 }
    );
  }
}
