import { Factory } from 'fishery'
import { chance } from './client'
import { RoastLevel } from '../.generated/client'

class RoastLevelFactory implements RoastLevel {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date

    constructor() {
        this.id = chance.guid({ version: 4 })
        this.name = chance.word()
        this.description = chance.sentence()
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}

export const roastLevelFactory = Factory.define<RoastLevelFactory>(() => {
    return new RoastLevelFactory()
})
