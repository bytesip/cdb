-- CreateTable
CREATE TABLE "beans" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "beans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "origns" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "longitude" DOUBLE PRECISION,
    "latitude" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "origns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beans_origins" (
    "bean_id" TEXT NOT NULL,
    "origin_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "beans_origins_pkey" PRIMARY KEY ("bean_id","origin_id")
);

-- CreateTable
CREATE TABLE "roast_levels" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roast_levels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beans_roast_levels" (
    "bean_id" TEXT NOT NULL,
    "roast_level_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "beans_roast_levels_pkey" PRIMARY KEY ("bean_id","roast_level_id")
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
CREATE TABLE "beans_processing_methods" (
    "bean_id" TEXT NOT NULL,
    "processing_method_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "beans_processing_methods_pkey" PRIMARY KEY ("bean_id","processing_method_id")
);

-- CreateTable
CREATE TABLE "flavor_profiles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "tastingId" TEXT,

    CONSTRAINT "flavor_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tastings" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "acidity" INTEGER NOT NULL,
    "richness" INTEGER NOT NULL,
    "flavor_profile_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tastings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beans_tastings" (
    "tasting_id" TEXT NOT NULL,
    "bean_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "beans_tastings_pkey" PRIMARY KEY ("tasting_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "origns_name_key" ON "origns"("name");

-- CreateIndex
CREATE UNIQUE INDEX "roast_levels_name_key" ON "roast_levels"("name");

-- CreateIndex
CREATE UNIQUE INDEX "processing_methods_name_key" ON "processing_methods"("name");

-- CreateIndex
CREATE UNIQUE INDEX "flavor_profiles_name_key" ON "flavor_profiles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tastings_name_key" ON "tastings"("name");

-- AddForeignKey
ALTER TABLE "beans_origins" ADD CONSTRAINT "beans_origins_bean_id_fkey" FOREIGN KEY ("bean_id") REFERENCES "beans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beans_origins" ADD CONSTRAINT "beans_origins_origin_id_fkey" FOREIGN KEY ("origin_id") REFERENCES "origns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beans_roast_levels" ADD CONSTRAINT "beans_roast_levels_bean_id_fkey" FOREIGN KEY ("bean_id") REFERENCES "beans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beans_roast_levels" ADD CONSTRAINT "beans_roast_levels_roast_level_id_fkey" FOREIGN KEY ("roast_level_id") REFERENCES "roast_levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beans_processing_methods" ADD CONSTRAINT "beans_processing_methods_bean_id_fkey" FOREIGN KEY ("bean_id") REFERENCES "beans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beans_processing_methods" ADD CONSTRAINT "beans_processing_methods_processing_method_id_fkey" FOREIGN KEY ("processing_method_id") REFERENCES "processing_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flavor_profiles" ADD CONSTRAINT "flavor_profiles_tastingId_fkey" FOREIGN KEY ("tastingId") REFERENCES "tastings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beans_tastings" ADD CONSTRAINT "beans_tastings_tasting_id_fkey" FOREIGN KEY ("tasting_id") REFERENCES "tastings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beans_tastings" ADD CONSTRAINT "beans_tastings_bean_id_fkey" FOREIGN KEY ("bean_id") REFERENCES "beans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
