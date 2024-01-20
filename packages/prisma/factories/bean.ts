import { Factory } from 'fishery'
import { chance } from './client'
import { Bean, Package, BeansPackage } from '../.generated/client'

class BeansPackageFactory implements BeansPackage {
    id: string
    beanId: string
    packageId: string
    createdAt: Date
    updatedAt: Date

    constructor() {
        this.id = chance.guid({ version: 4 })
        this.beanId = chance.guid({ version: 4 })
        this.packageId = chance.guid({ version: 4 })
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}

export const beansPackageFactory = Factory.define<BeansPackageFactory>(() => {
    return new BeansPackageFactory()
})

class PackageFactory implements Package {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date

    constructor() {
        this.id = chance.guid({ version: 4 })
        this.name = chance.name()
        this.description = chance.paragraph()
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}

export const packageFactory = Factory.define<PackageFactory>(() => {
    return new PackageFactory()
})

class BeanFactory implements Bean {
    id: string
    name: string
    description: string | null
    originId: string | null
    roastLevelId: string | null
    processingMethodId: string | null
    createdAt: Date
    updatedAt: Date

    constructor() {
        this.id = chance.guid({ version: 4 })
        this.name = chance.name()
        this.description = chance.paragraph()
        this.originId = null
        this.roastLevelId = null
        this.processingMethodId = null
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}

export const beanFactory = Factory.define<BeanFactory>(() => {
    return new BeanFactory()
})
