-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "passWord" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "loginAttemptsLeft" INTEGER NOT NULL DEFAULT 3,
    "uuid" TEXT NOT NULL,
    "voided" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
