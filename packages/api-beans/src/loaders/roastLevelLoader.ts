import DataLoader from 'dataloader';
import {Inject, Service} from 'typedi';

import {RoastLevel, PrismaClient} from '@cdb/prisma';

@Service({id: 'roastLevelLoader', transient: true})
export class RoastLevelLoader {
  private readonly loader: DataLoader<string, RoastLevel>;

  constructor(@Inject('prisma') prisma: PrismaClient) {
    this.loader = new DataLoader<string, RoastLevel>(async (ids: string[]) => {
      const uniqueIds = Array.from(new Set(ids));
      const packs = await prisma.roastLevel.findMany({
        where: {
          id: {in: uniqueIds},
        },
      });

      const originMap = packs.reduce<{
        [key: string]: RoastLevel;
      }>((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});

      return ids.map(id => originMap[id]);
    });
  }

  async load(id: string): Promise<RoastLevel> {
    return await this.loader.load(id);
  }
}
