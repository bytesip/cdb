-- DropForeignKey
ALTER TABLE "package_purchases" DROP CONSTRAINT "package_purchases_bean_id_fkey";

-- DropIndex
DROP INDEX "package_purchases_bean_id_key";

-- AlterTable
ALTER TABLE "beans" ADD COLUMN     "package_purchase_id" TEXT;

-- AddForeignKey
ALTER TABLE "beans" ADD CONSTRAINT "beans_package_purchase_id_fkey" FOREIGN KEY ("package_purchase_id") REFERENCES "package_purchases"("id") ON DELETE SET NULL ON UPDATE CASCADE;
