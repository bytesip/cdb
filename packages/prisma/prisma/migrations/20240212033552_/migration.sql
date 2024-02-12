-- CreateTable
CREATE TABLE "packs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "packs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beans_packs" (
    "id" TEXT NOT NULL,
    "bean_id" TEXT NOT NULL,
    "pack_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "beans_packs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beans" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "origin_id" TEXT,
    "roast_level_id" TEXT,
    "processing_method_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "beans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "origins" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "longitude" DOUBLE PRECISION,
    "latitude" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "origins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roast_levels" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roast_levels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "processing_methods" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "processing_methods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flavor_profiles" (
    "id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "flavor_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flavor_profile_trees" (
    "id" TEXT NOT NULL,
    "parent_id" TEXT NOT NULL,
    "child_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "flavor_profile_trees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bean_flavor_profiles" (
    "id" TEXT NOT NULL,
    "bean_id" TEXT NOT NULL,
    "flavor_profile_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bean_flavor_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tastings" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "acidity" INTEGER NOT NULL,
    "richness" INTEGER NOT NULL,
    "conducted_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tastings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bean_tastings" (
    "tasting_id" TEXT NOT NULL,
    "bean_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bean_tastings_pkey" PRIMARY KEY ("tasting_id")
);

-- CreateTable
CREATE TABLE "shops" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_locations" (
    "id" TEXT NOT NULL,
    "shop_id" TEXT NOT NULL,
    "longitude" DOUBLE PRECISION,
    "latitude" DOUBLE PRECISION,
    "postal_code" TEXT,
    "prefecture" TEXT,
    "city" TEXT,
    "address" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shop_locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pack_purchases" (
    "id" TEXT NOT NULL,
    "pack_id" TEXT NOT NULL,
    "shop_id" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "purchased_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pack_purchases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sip_methods" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sip_methods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "packs_name_key" ON "packs"("name");

-- CreateIndex
CREATE UNIQUE INDEX "origins_name_key" ON "origins"("name");

-- CreateIndex
CREATE UNIQUE INDEX "roast_levels_name_key" ON "roast_levels"("name");

-- CreateIndex
CREATE UNIQUE INDEX "processing_methods_name_key" ON "processing_methods"("name");

-- CreateIndex
CREATE UNIQUE INDEX "flavor_profiles_value_key" ON "flavor_profiles"("value");

-- CreateIndex
CREATE UNIQUE INDEX "bean_flavor_profiles_bean_id_key" ON "bean_flavor_profiles"("bean_id");

-- CreateIndex
CREATE UNIQUE INDEX "tastings_name_key" ON "tastings"("name");

-- CreateIndex
CREATE UNIQUE INDEX "bean_tastings_bean_id_key" ON "bean_tastings"("bean_id");

-- CreateIndex
CREATE UNIQUE INDEX "shops_name_key" ON "shops"("name");

-- CreateIndex
CREATE UNIQUE INDEX "shop_locations_shop_id_key" ON "shop_locations"("shop_id");

-- CreateIndex
CREATE UNIQUE INDEX "pack_purchases_pack_id_shop_id_key" ON "pack_purchases"("pack_id", "shop_id");

-- CreateIndex
CREATE UNIQUE INDEX "sip_methods_name_key" ON "sip_methods"("name");

-- AddForeignKey
ALTER TABLE "beans_packs" ADD CONSTRAINT "beans_packs_bean_id_fkey" FOREIGN KEY ("bean_id") REFERENCES "beans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beans_packs" ADD CONSTRAINT "beans_packs_pack_id_fkey" FOREIGN KEY ("pack_id") REFERENCES "packs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beans" ADD CONSTRAINT "beans_origin_id_fkey" FOREIGN KEY ("origin_id") REFERENCES "origins"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beans" ADD CONSTRAINT "beans_roast_level_id_fkey" FOREIGN KEY ("roast_level_id") REFERENCES "roast_levels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beans" ADD CONSTRAINT "beans_processing_method_id_fkey" FOREIGN KEY ("processing_method_id") REFERENCES "processing_methods"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flavor_profile_trees" ADD CONSTRAINT "flavor_profile_trees_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "flavor_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flavor_profile_trees" ADD CONSTRAINT "flavor_profile_trees_child_id_fkey" FOREIGN KEY ("child_id") REFERENCES "flavor_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bean_flavor_profiles" ADD CONSTRAINT "bean_flavor_profiles_bean_id_fkey" FOREIGN KEY ("bean_id") REFERENCES "beans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bean_flavor_profiles" ADD CONSTRAINT "bean_flavor_profiles_flavor_profile_id_fkey" FOREIGN KEY ("flavor_profile_id") REFERENCES "flavor_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bean_tastings" ADD CONSTRAINT "bean_tastings_tasting_id_fkey" FOREIGN KEY ("tasting_id") REFERENCES "tastings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bean_tastings" ADD CONSTRAINT "bean_tastings_bean_id_fkey" FOREIGN KEY ("bean_id") REFERENCES "beans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pack_purchases" ADD CONSTRAINT "pack_purchases_pack_id_fkey" FOREIGN KEY ("pack_id") REFERENCES "packs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pack_purchases" ADD CONSTRAINT "pack_purchases_shop_id_fkey" FOREIGN KEY ("shop_id") REFERENCES "shops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
