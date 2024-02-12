export const RoastLevelSchema = /* GraphQL */ `
  interface BaseBeanRoastLevel {
    id: UUID!
    name: String!
    description: String
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
  }
  type RoastLevel implements BaseBeanRoastLevel {
    id: UUID!
    name: String!
    description: String
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
    # NOTE: relations
    # NOTE: reverse relations
    beans: [Bean]
  }
`;
