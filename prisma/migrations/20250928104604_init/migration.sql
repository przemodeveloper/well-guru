-- CreateTable
CREATE TABLE "events" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entity" TEXT DEFAULT '',
    "price" DECIMAL,
    "name" TEXT DEFAULT '',
    "location" TEXT DEFAULT '',
    "image" VARCHAR DEFAULT '',
    "type" TEXT DEFAULT '',
    "category" TEXT DEFAULT '',
    "startDate" DATE,
    "endDate" DATE,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);
