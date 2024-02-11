import DataLoader from 'dataloader';
import {Inject, Service} from 'typedi';

import {Origin, PrismaClient} from '@cdb/prisma';

@Service({id: 'originLoader', transient: true})
export class OriginLoader {
  private readonly loader: DataLoader<string, Origin>;

  constructor(@Inject('prisma') prisma: PrismaClient) {
    this.loader = new DataLoader<string, Origin>(
      async (originIds: string[]) => {
        const uniqueOriginIds = Array.from(new Set(originIds));
        const origins = await prisma.origin.findMany({
          include: {
            // FIXME: Dataloader に移す
            beans: true,
          },
          where: {
            id: {in: uniqueOriginIds},
          },
        });

        const originMap = origins.reduce<{
          [key: string]: Origin;
        }>((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {});

        return originIds.map(id => originMap[id]);
      }
    );
  }

  async load(originId: string): Promise<Origin> {
    return await this.loader.load(originId);
  }
}
