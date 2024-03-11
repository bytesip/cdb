import {Inject, Service} from 'typedi';
import {
  ICreateOriginInput,
  IOrigin,
  IOriginWhereInput,
} from '@/.generated/graphql';
import {OriginRepository} from '@/repositories';
import {ErrorCapture, NotFoundError} from '@/graphql/error';
import {Prisma} from '@cdb/prisma';

@ErrorCapture
@Service('originService')
export class OriginService {
  @Inject('originRepository')
  private originRepository: OriginRepository;

  async getOriginById(id: string): Promise<IOrigin> {
    const origin = await this.originRepository.find(id, {withRelation: true});
    if (!origin) {
      throw new NotFoundError('origin', `Origin with id ${id} not found`);
    }
    return origin;
  }

  async searchOrigin(where: IOriginWhereInput) {
    const {q, name} = where;
    const condition: Prisma.OriginWhereInput = q
      ? {
          OR: [
            {
              name: {
                contains: q,
              },
            },
          ],
        }
      : {
          name: name ?? undefined,
        };
    return await this.originRepository.findMany(condition, {
      withRelation: true,
    });
  }

  async getAllOrigins(): Promise<IOrigin[]> {
    return await this.originRepository.findMany(
      {},
      {
        withRelation: true,
      }
    );
  }

  async createOrigin(input: ICreateOriginInput) {
    return await this.originRepository.create({
      name: input.name,
      description: input.description,
      latitude: input.latitude ?? null,
      longitude: input.longitude ?? null,
    });
  }
}
