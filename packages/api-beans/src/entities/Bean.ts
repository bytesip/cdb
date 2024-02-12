export const BeanSchema = /* GraphQL */ `
  interface BaseBean {
    id: UUID!
    name: String!
    description: String
    originId: UUID
    roastLevelId: UUID
    processingMethodId: UUID
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
  }

  type Bean implements BaseBean {
    id: UUID!
    name: String!
    description: String
    originId: UUID
    roastLevelId: UUID
    processingMethodId: UUID
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
    # NOTE: relations
    origin: Origin
    roastLevel: RoastLevel
    processingMethod: ProcessingMethod
    # NOTE: reverse relations
    flavorProfiles: [FlavorProfile]
    tastings: [Tasting]
    packs: [Pack]
  }
`;
