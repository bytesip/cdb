import DataLoader from 'dataloader';
import {Inject, Service} from 'typedi';

import {Pack, PrismaClient} from '@cdb/prisma';

@Service({id: 'packLoader', transient: true})
export class PackLoader {
  private readonly loader: DataLoader<string, Pack>;

  constructor(@Inject('prisma') prisma: PrismaClient) {
    this.loader = new DataLoader<string, Pack>(async (ids: string[]) => {
      const uniqueIds = Array.from(new Set(ids));
      const packs = await prisma.pack.findMany({
        where: {
          id: {in: uniqueIds},
        },
      });

      const originMap = packs.reduce<{
        [key: string]: Pack;
      }>((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});

      return ids.map(id => originMap[id]);
    });
  }

  async load(id: string): Promise<Pack> {
    return await this.loader.load(id);
  }
}
