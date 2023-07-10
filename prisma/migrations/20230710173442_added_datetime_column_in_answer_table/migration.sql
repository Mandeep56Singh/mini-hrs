/*
  Warnings:

  - Added the required column `valueDateTime` to the `Answer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answer" ADD COLUMN     "valueDateTime" TIMESTAMP(3) NOT NULL;
