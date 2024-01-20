/*
  Warnings:

  - You are about to drop the column `package_purchase_id` on the `beans` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "beans" DROP CONSTRAINT "beans_package_purchase_id_fkey";

-- AlterTable
ALTER TABLE "beans" DROP COLUMN "package_purchase_id";
