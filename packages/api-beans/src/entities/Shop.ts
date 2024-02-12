export const ShopSchema = /* GraphQL */ `
  interface BaseShop {
    id: UUID!
    name: String!
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
  }

  type Shop implements BaseShop {
    id: UUID!
    name: String!
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
  }
`;
