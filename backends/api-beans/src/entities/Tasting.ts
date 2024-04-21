export const TastingSchema = /* GraphQL */ `
  interface BaseTasting {
    id: UUID!
    name: String!
    description: String!
    acidity: Int!
    richness: Int!
    conductedAt: DateTimeISO!
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
  }
  type Tasting implements BaseTasting {
    id: UUID!
    name: String!
    description: String!
    acidity: Int!
    richness: Int!
    conductedAt: DateTimeISO!
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
    # NOTE: relations
    # NOTE: reverse relations
    beans: [Bean!]
  }
`;
