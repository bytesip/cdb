import DataLoader from 'dataloader';
import {Inject, Service} from 'typedi';

import {IOrigin} from '@/.generated/graphql';
import {OriginRepository} from '@/repositories';

@Service({id: 'originLoader', transient: true})
export class OriginLoader {
  private readonly loader: DataLoader<string, IOrigin>;

  constructor(@Inject('originRepository') originRepository: OriginRepository) {
    this.loader = new DataLoader<string, IOrigin>(
      async (originIds: string[]) => {
        const uniqueOriginIds = Array.from(new Set(originIds));
        const origins = await originRepository.findMany({
          id: {in: uniqueOriginIds},
        });

        const originMap = origins.reduce<{
          [key: string]: IOrigin;
        }>((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {});

        return originIds.map(id => originMap[id]);
      }
    );
  }

  async load(originId: string): Promise<IOrigin> {
    return await this.loader.load(originId);
  }
}
