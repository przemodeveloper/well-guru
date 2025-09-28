import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { serializeBigInt } from "@/utils/serialize";
import { Decimal } from "@prisma/client/runtime/library";
import { Prisma } from "@prisma/client";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
    const category = searchParams.get("category") || "";
    const search = searchParams.get("search") || "";
    const type = searchParams.get("type") || "";
    const location = searchParams.get("location") || "";
    const startDate = searchParams.get("startDate") || "";
    const endDate = searchParams.get("endDate") || "";
    const entity = searchParams.get("entity") || "";
    const priceMin = searchParams.get("priceMin") || "";
    const priceMax = searchParams.get("priceMax") || "";

    const where: Prisma.EventWhereInput = {};

    if (category) {
      where.category = { in: category.split(",") };
    }
    if (type) {
      where.type = { in: type.split(",") };
    }
    if (location) {
      where.location = { in: location.split(",") };
    }
    if (entity) {
      where.entity = { in: entity.split(",") };
    }
    if (search) {
      where.name = { contains: search, mode: "insensitive" };
    }

    if (startDate) {
      where.startDate = {
        ...(startDate && { gte: new Date(startDate) }),
      };
    }

    if (endDate) {
      where.endDate = {
        ...(endDate && { lte: new Date(endDate) }),
      };
    }

    if (priceMin || priceMax) {
      where.price = {
        ...(priceMin && { gte: new Decimal(priceMin) }),
        ...(priceMax && { lte: new Decimal(priceMax) }),
      };
    }

    const total = await prisma.event.count({ where });

    const events = await prisma.event.findMany({
      where,
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
