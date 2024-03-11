import {PrismaClient, Prisma} from '@cdb/prisma';
import {Service, Inject} from 'typedi';
import {ErrorCapture} from '@/graphql/error';

import {IBean, ICreateBeanInput} from '@/.generated/graphql';

@ErrorCapture
@Service('beanRepository')
export class BeanRepository {
  @Inject('prisma')
  private prisma: PrismaClient;

  private readonly RELATIONS = {
    beanFlavorProfiles: {
      include: {
        flavorProfile: true,
      },
    },
    beanTastings: {
      include: {
        tasting: true,
      },
    },
    beansPacks: {
      include: {
        pack: true,
      },
    },
  };

  public async find(
    id: string,
    options: {
      withRelation: boolean;
    } = {
      withRelation: false,
    }
  ): Promise<IBean | null> {
    const {withRelation} = options;
    if (!withRelation) {
      return await this.prisma.bean.findUnique({
        where: {id},
      });
    }

    const bean = await this.prisma.bean.findUnique({
      where: {
        id,
      },
      include: this.RELATIONS,
    });
    if (!bean) {
      return null;
    }
    const {beanFlavorProfiles, beanTastings, beansPacks, ...rawBean} = bean;
    return {
      ...rawBean,
      flavorProfiles: beanFlavorProfiles.map(
        ({flavorProfile}) => flavorProfile
      ),
      tastings: beanTastings.map(({tasting}) => tasting),
      packs: beansPacks.map(({pack}) => pack),
    };
  }

  public async findMany(
    where: Prisma.BeanWhereInput = {},
    options: {
      withRelation: boolean;
    } = {
      withRelation: false,
    }
  ): Promise<IBean[]> {
    const {withRelation} = options;
    if (!withRelation) {
      return await this.prisma.bean.findMany({
        where,
      });
    }

    const beans = await this.prisma.bean.findMany({
      where,
      include: this.RELATIONS,
    });

    return beans.map(bean => {
      const {beanFlavorProfiles, beanTastings, beansPacks, ...rawBean} = bean;
      return {
        ...rawBean,
        flavorProfiles: beanFlavorProfiles.map(
          ({flavorProfile}) => flavorProfile
        ),
        tastings: beanTastings.map(({tasting}) => tasting),
        packs: beansPacks.map(({pack}) => pack),
      };
    });
  }

  public async create(input: ICreateBeanInput): Promise<IBean> {
    const {origin} = input;
    const originConnectOrCreate = origin
      ? {
          origin: {
            connectOrCreate: {
              where: {
                id: origin.id ?? '00000000-0000-0000-0000-000000000000',
              },
              create: {
                name: origin.name,
                description: origin.name,
                latitude: origin.latitude ?? undefined,
                longitude: origin.longitude ?? undefined,
              },
            },
          },
        }
      : {};

    const bean = await this.prisma.bean.create({
      data: {
        name: input.name,
        description: input.description,
        ...originConnectOrCreate,
      },
    });
    return bean;
  }
}
