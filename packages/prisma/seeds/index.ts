import {PrismaClient} from '@prisma/client';
import {
  beanFactory,
  beansPackFactory,
  packFactory,
  originFactory,
  processingMethodFactory,
  roastLevelFactory,
  flavorProfileFactory,
  flavorProfileTreeFactory,
  beanFlavorProfileFactory,
} from '../factories';

const prisma = new PrismaClient();

const createBeans = async () => {
  const origins = originFactory.buildList(10);
  await prisma.origin.createMany({data: origins});

  const roastLevels = roastLevelFactory.buildList(10);
  await prisma.roastLevel.createMany({data: roastLevels});

  const processingMethods = processingMethodFactory.buildList(10);
  await prisma.processingMethod.createMany({data: processingMethods});

  const flavorProfiles = flavorProfileFactory.buildList(10);
  await prisma.flavorProfile.createMany({data: flavorProfiles});

  const flavorProfileTrees = Array.from({length: 9}).map((_, idx) => {
    const tree = flavorProfileTreeFactory.build();
    tree.parentId = flavorProfiles[0].id;
    tree.childId = flavorProfiles[idx + 1].id;
    return tree;
  });
  await prisma.flavorProfileTree.createMany({data: flavorProfileTrees});

  const beans = Array.from({length: 10}).map((_, idx) => {
    const bean = beanFactory.build();
    bean.originId = origins[idx % 10].id;
    bean.roastLevelId = roastLevels[idx % 10].id;
    bean.processingMethodId = processingMethods[idx % 10].id;
    return bean;
  });
  await prisma.bean.createMany({data: beans});

  const beanFlavorProfiles = Array.from({length: 10}).map((_, idx) => {
    const beanFlavorProfile = beanFlavorProfileFactory.build();
    beanFlavorProfile.beanId = beans[idx].id;
    beanFlavorProfile.flavorProfileId = flavorProfiles[idx].id;
    return beanFlavorProfile;
  });
  await prisma.beanFlavorProfile.createMany({
    data: beanFlavorProfiles,
  });

  const pack = packFactory.build();
  await prisma.pack.create({data: pack});
  const beansPack = beansPackFactory.build({
    beanId: beans[0].id,
    packId: pack.id,
  });
  await prisma.beansPack.create({data: beansPack});
};

const execute = async () => {
  await createBeans();
};

execute();
