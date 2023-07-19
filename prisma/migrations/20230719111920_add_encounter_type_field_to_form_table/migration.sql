/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Form` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `encounterTypeId` to the `Form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Form" ADD COLUMN     "encounterTypeId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Form_name_key" ON "Form"("name");

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_encounterTypeId_fkey" FOREIGN KEY ("encounterTypeId") REFERENCES "EncounterType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
