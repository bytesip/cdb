import DataLoader from 'dataloader';
import {Inject, Service} from 'typedi';

import {ProcessingMethod, PrismaClient} from '@cdb/prisma';

@Service({id: 'processingMethodLoader', transient: true})
export class ProcessingMethodLoader {
  private readonly loader: DataLoader<string, ProcessingMethod>;

  constructor(@Inject('prisma') prisma: PrismaClient) {
    this.loader = new DataLoader<string, ProcessingMethod>(
      async (ids: string[]) => {
        const uniqueIds = Array.from(new Set(ids));
        const packs = await prisma.processingMethod.findMany({
          where: {
            id: {in: uniqueIds},
          },
        });

        const originMap = packs.reduce<{
          [key: string]: ProcessingMethod;
        }>((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {});

        return ids.map(id => originMap[id]);
      }
    );
  }

  async load(id: string): Promise<ProcessingMethod> {
    return await this.loader.load(id);
  }
}
