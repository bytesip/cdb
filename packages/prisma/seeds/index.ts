import { PrismaClient } from '../.generated/client'
import {
    beanFactory,
    beansPackageFactory,
    packageFactory,
    originFactory,
    processingMethodFactory,
    roastLevelFactory,
    flavorProfileFactory,
    flavorProfileTreeFactory,
    beanFlavorProfileFactory,
} from '../factories'

const prisma = new PrismaClient()

const createBeans = async () => {
    const origins = originFactory.buildList(10)
    await prisma.origin.createMany({ data: origins })

    const roastLevels = roastLevelFactory.buildList(10)
    await prisma.roastLevel.createMany({ data: roastLevels })

    const processingMethods = processingMethodFactory.buildList(10)
    await prisma.processingMethod.createMany({ data: processingMethods })

    const flavorProfiles = flavorProfileFactory.buildList(10)
    await prisma.flavorProfile.createMany({ data: flavorProfiles })

    const flavorProfileTrees = Array.from({ length: 9 }).map((_, idx) => {
        const tree = flavorProfileTreeFactory.build()
        tree.parentId = flavorProfiles[0].id
        tree.childId = flavorProfiles[idx + 1].id
        return tree
    })
    await prisma.flavorProfileTree.createMany({ data: flavorProfileTrees })

    const beans = Array.from({ length: 10 }).map((_, idx) => {
        const bean = beanFactory.build()
        bean.originId = origins[idx % 10].id
        bean.roastLevelId = roastLevels[idx % 10].id
        bean.processingMethodId = processingMethods[idx % 10].id
        return bean
    })
    await prisma.bean.createMany({ data: beans })

    const beanFlavorProfiles = Array.from({ length: 10 }).map((_, idx) => {
        const beanFlavorProfile = beanFlavorProfileFactory.build()
        beanFlavorProfile.beanId = beans[idx].id
        beanFlavorProfile.flavorProfileId = flavorProfiles[idx].id
        return beanFlavorProfile
    })
    await prisma.beanFlavorProfile.createMany({
        data: beanFlavorProfiles,
    })

    const pack = packageFactory.build()
    await prisma.package.create({ data: pack })
    const beansPackage = beansPackageFactory.build({
        beanId: beans[0].id,
        packageId: pack.id,
    })
    await prisma.beansPackage.create({ data: beansPackage })
}

const execute = async () => {
    await createBeans()
}

execute()
