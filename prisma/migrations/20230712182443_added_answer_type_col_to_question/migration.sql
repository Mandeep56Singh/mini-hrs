/*
  Warnings:

  - You are about to drop the column `answerTypeId` on the `Answer` table. All the data in the column will be lost.
  - Added the required column `answerTypeId` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_answerTypeId_fkey";

-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "answerTypeId";

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "answerTypeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_answerTypeId_fkey" FOREIGN KEY ("answerTypeId") REFERENCES "AnswerType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
