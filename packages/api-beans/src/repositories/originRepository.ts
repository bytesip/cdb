import {PrismaClient, Prisma} from '@cdb/prisma';
import {Service, Inject} from 'typedi';

import {ICreateOriginInput, IOrigin} from '@/.generated/graphql';

@Service('originRepository')
export class OriginRepository {
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
  ): Promise<IOrigin | null> {
    const {withRelation} = options;
    if (!withRelation) {
      return await this.prisma.origin.findUnique({
        where: {id},
      });
    }

    const origin = await this.prisma.origin.findUnique({
      where: {
        id,
      },
      include: this.RELATIONS,
    });
    return origin;
  }

  public async findMany(
    where: Prisma.OriginWhereInput = {},
    options: {
      withRelation: boolean;
    } = {
      withRelation: false,
    }
  ): Promise<IOrigin[]> {
    const {withRelation} = options;
    if (!withRelation) {
      return await this.prisma.origin.findMany({
        where,
      });
    }

    const origins = await this.prisma.origin.findMany({
      where,
      include: this.RELATIONS,
    });
    return origins;
  }

  public async create(input: ICreateOriginInput): Promise<IOrigin> {
    const origin = await this.prisma.origin.create({
      data: {
        name: input.name,
        description: input.description,
        latitude: Number(input.latitude),
        longitude: Number(input.longitude),
      },
    });
    return origin;
  }
}
