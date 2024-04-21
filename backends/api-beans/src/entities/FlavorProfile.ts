export const FlavorProfileSchema = /* GraphQL */ `
  interface BaseFlavorProfile {
    id: UUID!
    value: String!
    label: String!
    description: String
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
  }
  type FlavorProfile implements BaseFlavorProfile {
    id: UUID!
    value: String!
    label: String!
    description: String
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
    # NOTE: relations
    # NOTE: reverse relations
    beans: [Bean!]
  }
`;
