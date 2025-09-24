import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { serializeBigInt } from "@/utils/serialize";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

    const total = await prisma.event.count();

    const events = await prisma.event.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    return NextResponse.json(
      serializeBigInt({
        data: events,
        meta: {
          total,
          page,
          pageSize,
          totalPages: Math.ceil(total / pageSize),
          hasNextPage: page * pageSize < total,
        },
      }),
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
