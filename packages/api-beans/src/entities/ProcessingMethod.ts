export const ProcessingMethodSchema = /* GraphQL */ `
  interface BaseBeanProcessingMethod {
    id: UUID!
    name: String!
    description: String
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
  }
  type ProcessingMethod implements BaseBeanProcessingMethod {
    id: UUID!
    name: String!
    description: String
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
    # NOTE: relations
    # NOTE: reverse relations
    # beans: [Bean]!
  }
`;
