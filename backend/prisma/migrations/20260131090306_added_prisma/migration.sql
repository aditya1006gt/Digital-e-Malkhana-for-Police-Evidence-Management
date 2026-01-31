-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'OFFICER');

-- CreateEnum
CREATE TYPE "CaseStatus" AS ENUM ('PENDING', 'DISPOSED');

-- CreateEnum
CREATE TYPE "SeizureNature" AS ENUM ('RECOVERED', 'SEIZED', 'ABANDONED');

-- CreateEnum
CREATE TYPE "OwnerType" AS ENUM ('ACCUSED', 'COMPLAINANT', 'VICTIM', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('ELECTRONICS', 'WEAPON', 'VEHICLE', 'CASH', 'NARCOTICS', 'DOCUMENTS', 'OTHER');

-- CreateEnum
CREATE TYPE "PropStatus" AS ENUM ('IN_CUSTODY', 'DISPOSED');

-- CreateEnum
CREATE TYPE "DisposalType" AS ENUM ('AUCTION', 'DESTROYED', 'RETURNED', 'TRANSFERRED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "rank" TEXT NOT NULL,
    "stationId" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'OFFICER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Case" (
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

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "belongingTo" "OwnerType" NOT NULL,
    "nature" "SeizureNature" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photoUrl" TEXT,
    "qrCodeImage" TEXT,
    "qrString" TEXT NOT NULL,
    "status" "PropStatus" NOT NULL DEFAULT 'IN_CUSTODY',
    "caseId" TEXT NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustodyLog" (
    "id" TEXT NOT NULL,
    "fromOfficer" TEXT NOT NULL,
    "toOfficer" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "remarks" TEXT,
    "movedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "CustodyLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disposal" (
    "id" TEXT NOT NULL,
    "type" "DisposalType" NOT NULL,
    "courtOrderRef" TEXT NOT NULL,
    "disposedAt" TIMESTAMP(3) NOT NULL,
    "remarks" TEXT,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "Disposal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Property_qrString_key" ON "Property"("qrString");

-- CreateIndex
CREATE UNIQUE INDEX "Disposal_propertyId_key" ON "Disposal"("propertyId");

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Case"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustodyLog" ADD CONSTRAINT "CustodyLog_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disposal" ADD CONSTRAINT "Disposal_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
