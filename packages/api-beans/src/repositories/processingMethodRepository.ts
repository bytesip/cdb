import {PrismaClient, Prisma} from '@cdb/prisma';
import {Service, Inject} from 'typedi';

import {ErrorCapture} from '@/graphql/error';

import {IProcessingMethod} from '@/.generated/graphql';

@ErrorCapture
@Service('processingMethodRepository')
export class ProcessingMethodRepository {
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
  ): Promise<IProcessingMethod | null> {
    const {withRelation} = options;
    if (!withRelation) {
      return await this.prisma.processingMethod.findUnique({
        where: {id},
      });
    }

    const roastLevel = await this.prisma.processingMethod.findUnique({
      where: {
        id,
      },
      include: this.RELATIONS,
    });
    return roastLevel;
  }

  public async findMany(
    where: Prisma.ProcessingMethodWhereInput = {},
    options: {
      withRelation: boolean;
    } = {
      withRelation: false,
    }
  ): Promise<IProcessingMethod[]> {
    const {withRelation} = options;
    if (!withRelation) {
      return await this.prisma.processingMethod.findMany({
        where,
      });
    }

    const processingMethods = await this.prisma.processingMethod.findMany({
      where,
      include: this.RELATIONS,
    });
    return processingMethods;
  }
}
