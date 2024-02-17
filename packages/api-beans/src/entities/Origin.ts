export const OriginSchema = /* GraphQL */ `
  interface BaseOrigin {
    id: UUID!
    name: String!
    description: String
    latitude: Latitude
    longitude: Longitude
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
  }

  type Origin implements BaseOrigin {
    id: UUID!
    name: String!
    description: String
    latitude: Latitude
    longitude: Longitude
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
    # NOTE: relations
    # NOTE: reverse relations
    beans: [Bean!]
  }
`;
