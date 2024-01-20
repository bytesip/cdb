import { Factory } from 'fishery'
import { chance } from './client'
import {
    FlavorProfile,
    FlavorProfileTree,
    BeanFlavorProfile,
} from '.././.generated/client'

class FlavorProfileFactory implements FlavorProfile {
    id: string
    value: string
    label: string
    description: string | null
    createdAt: Date
    updatedAt: Date

    constructor() {
        this.id = chance.guid({ version: 4 })
        this.value = chance.name()
        this.label = chance.sentence()
        this.description = chance.paragraph()
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}

export const flavorProfileFactory = Factory.define<FlavorProfileFactory>(() => {
    return new FlavorProfileFactory()
})

class FlavorProfileTreeFactory implements FlavorProfileTree {
    id: string
    parentId: string
    childId: string
    createdAt: Date
    updatedAt: Date

    constructor() {
        this.id = chance.guid({ version: 4 })
        this.parentId = chance.guid({ version: 4 })
        this.childId = chance.guid({ version: 4 })
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}

export const flavorProfileTreeFactory =
    Factory.define<FlavorProfileTreeFactory>(() => {
        return new FlavorProfileTreeFactory()
    })

class BeanFlavorProfileFactory implements BeanFlavorProfile {
    id: string
    beanId: string
    flavorProfileId: string
    createdAt: Date
    updatedAt: Date

    constructor() {
        this.id = chance.guid({ version: 4 })
        this.beanId = chance.guid({ version: 4 })
        this.flavorProfileId = chance.guid({ version: 4 })
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}

export const beanFlavorProfileFactory =
    Factory.define<BeanFlavorProfileFactory>(() => {
        return new BeanFlavorProfileFactory()
    })
