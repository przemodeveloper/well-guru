import { prisma } from "@/utils/prisma";
import { serializeBigInt } from "@/utils/serialize";

export async function getEventsFromDB(page: number = 1, pageSize: number = 6) {
  try {
    const total = await prisma.event.count();

    const events = await prisma.event.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        created_at: 'desc'
      }
    });

    return serializeBigInt({
      data: events,
      meta: {
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
        hasNextPage: page * pageSize < total,
      }
    });
  } catch {
    return {
      data: [],
      meta: {
        total: 0,
        page: 1,
        pageSize: 6,
        totalPages: 0,
        hasNextPage: false,
      }
    };
  }
}