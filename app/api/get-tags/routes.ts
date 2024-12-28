import { NextResponse } from "next/server";
import Tags from "@/models/tags.schema";
import connectToDatabase from "@/config/db";

export default async function getTags(req: Request) {
  try {
    await connectToDatabase();
    const tags = await Tags.find({}).sort({ createdAt: -1 });
    return NextResponse.json(tags, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch tags" },
      { status: 500 }
    );
  }
}
