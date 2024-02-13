import {Inject, Service} from 'typedi';
import {ICreateOriginInput, IOrigin} from '@/.generated/graphql';
import {OriginRepository} from '@/repositories';
import {ErrorCapture} from '@/graphql/error';

@Service('originService')
export class OriginService {
  @Inject('originRepository')
  private originRepository: OriginRepository;

  async getOriginById(id: string): Promise<IOrigin> {
    const origin = await this.originRepository.find(id, {withRelation: true});
    if (!origin) {
      // GraphQL Error にかえる
      throw new Error(`Origin with id ${id} not found`);
    }
    return origin;
  }

  async getAllOrigins(): Promise<IOrigin[]> {
    return await this.originRepository.findMany(
      {},
      {
        withRelation: true,
      }
    );
  }

  @ErrorCapture()
  async createOrigin(input: ICreateOriginInput) {
    return await this.originRepository.create({
      name: input.name,
      description: input.description,
      latitude: input.latitude ?? null,
      longitude: input.longitude ?? null,
    });
  }
}
