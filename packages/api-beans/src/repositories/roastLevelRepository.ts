import {PrismaClient, Prisma} from '@cdb/prisma';
import {Service, Inject} from 'typedi';

import {IRoastLevel} from '@/.generated/graphql';

@Service('roastLevelRepository')
export class RoastLevelRepository {
  @Inject('prisma')
  private prisma: PrismaClient;

  private readonly RELATIONS = {
    beans: true,
  };

  public async find(
    id: string,
    options: {
      withRelation: boolean;
    } = {
      withRelation: false,
    }
  ): Promise<IRoastLevel | null> {
    const {withRelation} = options;
    if (!withRelation) {
      return await this.prisma.roastLevel.findUnique({
        where: {id},
      });
    }

    const roastLevel = await this.prisma.roastLevel.findUnique({
      where: {
        id,
      },
      include: this.RELATIONS,
    });
    return roastLevel;
  }

  public async findMany(
    where: Prisma.RoastLevelWhereInput = {},
    options: {
      withRelation: boolean;
    } = {
      withRelation: false,
    }
  ): Promise<IRoastLevel[]> {
    const {withRelation} = options;
    if (!withRelation) {
      return await this.prisma.roastLevel.findMany({
        where,
      });
    }

    const roastLevels = await this.prisma.roastLevel.findMany({
      where,
      include: this.RELATIONS,
    });
    return roastLevels;
  }
}
