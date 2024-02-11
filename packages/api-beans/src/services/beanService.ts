import {GraphQLBean, GraphQLCreateBeanInput} from '@/.generated/graphql';
import {prisma} from '@/client/prisma';

export class BeanService {
  async getBeanById(id: string): Promise<GraphQLBean> {
    const bean = await prisma.bean.findUnique({
      where: {
        id,
      },
    });
    if (!bean) {
      // GraphQL Error にかえる
      throw new Error(`Bean with id ${id} not found`);
    }
    return bean;
  }

  async getAllBeans(): Promise<GraphQLBean[]> {
    const beans = await prisma.bean.findMany();
    return beans;
  }

  async createBean(input: GraphQLCreateBeanInput): Promise<GraphQLBean> {
    const bean = await prisma.bean.create({
      data: {
        name: input.name,
        description: input.description,
      },
    });
    return bean;
  }
}
