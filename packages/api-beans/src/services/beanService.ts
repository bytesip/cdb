import {Service, Inject} from 'typedi';
import {IBean, ICreateBeanInput} from '@/.generated/graphql';
import {BeanRepository} from '@/repositories/beanRepository';

@Service('beanService')
export class BeanService {
  @Inject('beanRepository')
  private beanRepository: BeanRepository;

  async getBeanById(id: string): Promise<IBean> {
    const bean = await this.beanRepository.find(id, {withRelation: true});
    if (!bean) {
      // GraphQL Error にかえる
      throw new Error(`Bean with id ${id} not found`);
    }
    return bean;
  }

  async getAllBeans(): Promise<IBean[]> {
    return await this.beanRepository.findMany({}, {withRelation: true});
  }

  async createBean(input: ICreateBeanInput): Promise<IBean> {
    const createdBean = await this.beanRepository.create(input);
    const bean = await this.beanRepository.find(createdBean.id, {
      withRelation: true,
    });
    if (!bean) {
      // GraphQL Error にかえる
      throw new Error(`Bean with id ${createdBean.id} not found`);
    }
    return bean;
  }
}
