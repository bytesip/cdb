import DataLoader from 'dataloader';
import {Inject, Service} from 'typedi';

import {Tasting, PrismaClient} from '@cdb/prisma';

@Service({id: 'tastingLoader', transient: true})
export class TastingLoader {
  private readonly loader: DataLoader<string, Tasting>;

  constructor(@Inject('prisma') prisma: PrismaClient) {
    this.loader = new DataLoader<string, Tasting>(async (ids: string[]) => {
      const uniqueIds = Array.from(new Set(ids));
      const packs = await prisma.tasting.findMany({
        where: {
          id: {in: uniqueIds},
        },
      });

      const originMap = packs.reduce<{
        [key: string]: Tasting;
      }>((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});

      return ids.map(id => originMap[id]);
    });
  }

  async load(id: string): Promise<Tasting> {
    return await this.loader.load(id);
  }
}
