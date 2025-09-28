-- AlterTable
ALTER TABLE "public"."events" ADD COLUMN     "availableSpots" DECIMAL,
ADD COLUMN     "tags" TEXT DEFAULT '';
