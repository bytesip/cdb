export const PackSchema = /* GraphQL */ `
  interface BasePack {
    id: UUID!
    name: String!
    description: String
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
  }

  type Pack implements BasePack {
    id: UUID!
    name: String!
    description: String
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
    # NOTE: relations
    # NOTE: reverse relations
    beans: [Bean!]
    purchases: [Purchase!]
  }
`;
