/*
  Warnings:

  - You are about to drop the `Case` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Case" DROP CONSTRAINT "Case_userId_fkey";

-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_caseId_fkey";

-- DropTable
DROP TABLE "Case";

-- CreateTable
CREATE TABLE "CaseRecord" (
    "id" TEXT NOT NULL,
    "policeStation" TEXT NOT NULL,
    "ioName" TEXT NOT NULL,
    "ioId" TEXT NOT NULL,
    "crimeNumber" TEXT NOT NULL,
    "crimeYear" INTEGER NOT NULL,
    "firDate" TIMESTAMP(3) NOT NULL,
    "seizureDate" TIMESTAMP(3) NOT NULL,
    "actLaw" TEXT NOT NULL,
    "sectionLaw" TEXT NOT NULL,
    "status" "CaseStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CaseRecord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CaseRecord" ADD CONSTRAINT "CaseRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "CaseRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
