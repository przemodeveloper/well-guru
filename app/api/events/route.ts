import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { serializeBigInt } from "@/utils/serialize";

export async function GET() {
  try {
    const events = await prisma.event.findMany();
    return NextResponse.json(serializeBigInt(events));
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}