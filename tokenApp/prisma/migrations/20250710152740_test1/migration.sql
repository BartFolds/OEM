-- CreateEnum
CREATE TYPE "Type" AS ENUM ('FORD', 'GM', 'NISSAN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "shopifyId" BIGINT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "company" TEXT,
    "address" TEXT,
    "software" BOOLEAN NOT NULL DEFAULT false,
    "nissanCount" INTEGER DEFAULT 0,
    "gmCount" INTEGER DEFAULT 0,
    "fordCount" INTEGER DEFAULT 0,
    "passthrough" TEXT,
    "fordName" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "orderNumber" TEXT NOT NULL,
    "purchasedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ownerId" INTEGER NOT NULL,
    "type" "Type" NOT NULL,
    "valid" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FordName" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "HWID" TEXT,

    CONSTRAINT "FordName_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_shopifyId_key" ON "User"("shopifyId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Token_orderNumber_key" ON "Token"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "FordName_name_key" ON "FordName"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FordName_HWID_key" ON "FordName"("HWID");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FordName" ADD CONSTRAINT "FordName_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
