-- CreateTable
CREATE TABLE "beans" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "origin_id" TEXT NOT NULL,
    "roast_level_id" TEXT NOT NULL,
    "processing_method_id" TEXT NOT NULL,
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

-- AddForeignKey
ALTER TABLE "beans" ADD CONSTRAINT "beans_origin_id_fkey" FOREIGN KEY ("origin_id") REFERENCES "origins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beans" ADD CONSTRAINT "beans_roast_level_id_fkey" FOREIGN KEY ("roast_level_id") REFERENCES "roast_levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beans" ADD CONSTRAINT "beans_processing_method_id_fkey" FOREIGN KEY ("processing_method_id") REFERENCES "processing_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bean_flavor_profiles" ADD CONSTRAINT "bean_flavor_profiles_bean_id_fkey" FOREIGN KEY ("bean_id") REFERENCES "beans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bean_flavor_profiles" ADD CONSTRAINT "bean_flavor_profiles_flavor_profile_id_fkey" FOREIGN KEY ("flavor_profile_id") REFERENCES "flavor_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bean_tastings" ADD CONSTRAINT "bean_tastings_tasting_id_fkey" FOREIGN KEY ("tasting_id") REFERENCES "tastings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bean_tastings" ADD CONSTRAINT "bean_tastings_bean_id_fkey" FOREIGN KEY ("bean_id") REFERENCES "beans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
