/*
  Warnings:

  - You are about to drop the column `bean_id` on the `package_purchases` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[package_id]` on the table `package_purchases` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `package_id` to the `package_purchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "package_purchases" DROP COLUMN "bean_id",
ADD COLUMN     "package_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "package_purchases_package_id_key" ON "package_purchases"("package_id");

-- AddForeignKey
ALTER TABLE "package_purchases" ADD CONSTRAINT "package_purchases_package_id_fkey" FOREIGN KEY ("package_id") REFERENCES "packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
