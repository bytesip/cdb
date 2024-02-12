export const PurchaseSchema = /* GraphQL */ `
  interface BasePurchase {
    id: UUID!
    packId: UUID!
    shopId: UUID!
    price: Int!
    capacity: Int!
    purchasedAt: DateTimeISO!
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
  }

  type Purchase implements BasePurchase {
    id: UUID!
    packId: UUID!
    shopId: UUID!
    price: Int!
    capacity: Int!
    purchasedAt: DateTimeISO!
    createdAt: DateTimeISO!
    updatedAt: DateTimeISO!
    # NOTE: relations
    pack: Pack
    shop: Shop
  }
`;
