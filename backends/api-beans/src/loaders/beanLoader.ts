import DataLoader from 'dataloader';
import {Inject, Service} from 'typedi';

import {IBean} from '@/.generated/graphql';
import {BeanRepository} from '@/repositories';

@Service({id: 'beanLoader', transient: true})
export class BeanLoader {
  private readonly loader: DataLoader<string, IBean>;

  constructor(@Inject('beanRepository') beanRepository: BeanRepository) {
    this.loader = new DataLoader<string, IBean>(async (ids: string[]) => {
      const uniqueIds = Array.from(new Set(ids));
      const origins = await beanRepository.findMany({
        id: {in: uniqueIds},
      });

      const originMap = origins.reduce<{
        [key: string]: IBean;
      }>((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});

      return ids.map(id => originMap[id]);
    });
  }

  async load(id: string): Promise<IBean> {
    return await this.loader.load(id);
  }
}
