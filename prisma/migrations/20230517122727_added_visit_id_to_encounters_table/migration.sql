/*
  Warnings:

  - Added the required column `visitId` to the `Encounter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Encounter" ADD COLUMN     "visitId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Encounter" ADD CONSTRAINT "Encounter_visitId_fkey" FOREIGN KEY ("visitId") REFERENCES "Visit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
