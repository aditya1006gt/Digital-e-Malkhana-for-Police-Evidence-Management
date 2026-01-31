-- CreateTable
CREATE TABLE "ScanLog" (
    "id" TEXT NOT NULL,
    "scannedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "deviceInfo" TEXT,

    CONSTRAINT "ScanLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ScanLog" ADD CONSTRAINT "ScanLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScanLog" ADD CONSTRAINT "ScanLog_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
