import {GraphQLBean, GraphQLCreateBeanInput} from '../.generated/graphql';

export class BeanQueryService {
  async getBeanById(id: string): Promise<GraphQLBean> {
    return {
      id: id,
      name: 'Test Bean',
      description: 'A test bean',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async getAllBeans(): Promise<GraphQLBean[]> {
    return [
      {
        id: '0d505571-4b65-44eb-a40d-d20f9af17daf',
        name: 'Test Bean',
        description: 'A test bean',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0d505571-4b65-44eb-a40d-d20f9af17daf',
        name: 'Test Bean',
        description: 'A test bean',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0d505571-4b65-44eb-a40d-d20f9af17daf',
        name: 'Test Bean',
        description: 'A test bean',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }

  async createBean(input: GraphQLCreateBeanInput): Promise<GraphQLBean> {
    return {
      ...input,
      id: '0d505571-4b65-44eb-a40d-d20f9af17daf',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
