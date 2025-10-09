import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const locations = await prisma.locations.findMany();
    const formattedLocations = locations.map((location) => ({
      id: location.id,
      label: location.name,
      value: location.name,
    }));
    return NextResponse.json(formattedLocations, { status: 200 });
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  } 
}