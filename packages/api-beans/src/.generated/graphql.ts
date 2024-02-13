import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '@/graphql/context';
export type Maybe<T> = T extends PromiseLike<infer U> ? Promise<U | null> : T | null;
export type InputMaybe<T> = T extends PromiseLike<infer U> ? Promise<U | null> : T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: Date; output: Date; }
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: { input: number; output: number; }
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: { input: number; output: number; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: string; output: string; }
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: { input: string; output: string; }
};

export type IBaseBean = {
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  originId?: Maybe<Scalars['UUID']['output']>;
  processingMethodId?: Maybe<Scalars['UUID']['output']>;
  roastLevelId?: Maybe<Scalars['UUID']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IBaseBeanProcessingMethod = {
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IBaseBeanRoastLevel = {
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IBaseFlavorProfile = {
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  label: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  value: Scalars['String']['output'];
};

export type IBaseOrigin = {
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  latitude?: Maybe<Scalars['Latitude']['output']>;
  longitude?: Maybe<Scalars['Longitude']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IBasePack = {
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IBasePurchase = {
  capacity: Scalars['Int']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['UUID']['output'];
  packId: Scalars['UUID']['output'];
  price: Scalars['Int']['output'];
  purchasedAt: Scalars['DateTimeISO']['output'];
  shopId: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IBaseShop = {
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IBaseTasting = {
  acidity: Scalars['Int']['output'];
  conductedAt: Scalars['DateTimeISO']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  richness: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IBean = IBaseBean & {
  __typename?: 'Bean';
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  flavorProfiles?: Maybe<Array<Maybe<IFlavorProfile>>>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  origin?: Maybe<IOrigin>;
  originId?: Maybe<Scalars['UUID']['output']>;
  packs?: Maybe<Array<Maybe<IPack>>>;
  processingMethod?: Maybe<IProcessingMethod>;
  processingMethodId?: Maybe<Scalars['UUID']['output']>;
  roastLevel?: Maybe<IRoastLevel>;
  roastLevelId?: Maybe<Scalars['UUID']['output']>;
  tastings?: Maybe<Array<Maybe<ITasting>>>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IConflictError = IGraphQlError & {
  __typename?: 'ConflictError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type ICreateBeanInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  origin?: InputMaybe<ICreateOriginInput>;
};

export type ICreateOriginInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  latitude?: InputMaybe<Scalars['Latitude']['input']>;
  longitude?: InputMaybe<Scalars['Longitude']['input']>;
  name: Scalars['String']['input'];
};

export type ICreateOriginResults = IConflictError | IOrigin;

export type IFlavorProfile = IBaseFlavorProfile & {
  __typename?: 'FlavorProfile';
  beans?: Maybe<Array<Maybe<IBean>>>;
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  label: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  value: Scalars['String']['output'];
};

export type IGraphQlError = {
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type IMutation = {
  __typename?: 'Mutation';
  createBean: IBean;
  createOrigin: ICreateOriginResults;
};


export type IMutationCreateBeanArgs = {
  input: ICreateBeanInput;
};


export type IMutationCreateOriginArgs = {
  input: ICreateOriginInput;
};

export type INotFoundError = IGraphQlError & {
  __typename?: 'NotFoundError';
  code: Scalars['String']['output'];
  entity?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type IOrigin = IBaseOrigin & {
  __typename?: 'Origin';
  beans?: Maybe<Array<Maybe<IBean>>>;
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  latitude?: Maybe<Scalars['Latitude']['output']>;
  longitude?: Maybe<Scalars['Longitude']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IPack = IBasePack & {
  __typename?: 'Pack';
  beans?: Maybe<Array<Maybe<IBean>>>;
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  purchases?: Maybe<Array<Maybe<IPurchase>>>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IProcessingMethod = IBaseBeanProcessingMethod & {
  __typename?: 'ProcessingMethod';
  beans?: Maybe<Array<Maybe<IBean>>>;
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IPurchase = IBasePurchase & {
  __typename?: 'Purchase';
  capacity: Scalars['Int']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['UUID']['output'];
  pack?: Maybe<IPack>;
  packId: Scalars['UUID']['output'];
  price: Scalars['Int']['output'];
  purchasedAt: Scalars['DateTimeISO']['output'];
  shop?: Maybe<IShop>;
  shopId: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IQuery = {
  __typename?: 'Query';
  bean: IBean;
  beans: Array<Maybe<IBean>>;
  origin: IOrigin;
  origins: Array<Maybe<IOrigin>>;
};


export type IQueryBeanArgs = {
  beanId: Scalars['UUID']['input'];
};


export type IQueryOriginArgs = {
  originId: Scalars['UUID']['input'];
};

export type IRoastLevel = IBaseBeanRoastLevel & {
  __typename?: 'RoastLevel';
  beans?: Maybe<Array<Maybe<IBean>>>;
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IShop = IBaseShop & {
  __typename?: 'Shop';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ITasting = IBaseTasting & {
  __typename?: 'Tasting';
  acidity: Scalars['Int']['output'];
  beans?: Maybe<Array<Maybe<IBean>>>;
  conductedAt: Scalars['DateTimeISO']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  richness: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type IResolversUnionTypes<RefType extends Record<string, unknown>> = {
  CreateOriginResults: ( IConflictError ) | ( IOrigin );
};

/** Mapping of interface types */
export type IResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  BaseBean: ( IBean );
  BaseBeanProcessingMethod: ( IProcessingMethod );
  BaseBeanRoastLevel: ( IRoastLevel );
  BaseFlavorProfile: ( IFlavorProfile );
  BaseOrigin: ( IOrigin );
  BasePack: ( IPack );
  BasePurchase: ( IPurchase );
  BaseShop: ( IShop );
  BaseTasting: ( ITasting );
  GraphQLError: ( IConflictError ) | ( INotFoundError );
};

/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = {
  BaseBean: ResolverTypeWrapper<IResolversInterfaceTypes<IResolversTypes>['BaseBean']>;
  BaseBeanProcessingMethod: ResolverTypeWrapper<IResolversInterfaceTypes<IResolversTypes>['BaseBeanProcessingMethod']>;
  BaseBeanRoastLevel: ResolverTypeWrapper<IResolversInterfaceTypes<IResolversTypes>['BaseBeanRoastLevel']>;
  BaseFlavorProfile: ResolverTypeWrapper<IResolversInterfaceTypes<IResolversTypes>['BaseFlavorProfile']>;
  BaseOrigin: ResolverTypeWrapper<IResolversInterfaceTypes<IResolversTypes>['BaseOrigin']>;
  BasePack: ResolverTypeWrapper<IResolversInterfaceTypes<IResolversTypes>['BasePack']>;
  BasePurchase: ResolverTypeWrapper<IResolversInterfaceTypes<IResolversTypes>['BasePurchase']>;
  BaseShop: ResolverTypeWrapper<IResolversInterfaceTypes<IResolversTypes>['BaseShop']>;
  BaseTasting: ResolverTypeWrapper<IResolversInterfaceTypes<IResolversTypes>['BaseTasting']>;
  Bean: ResolverTypeWrapper<IBean>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ConflictError: ResolverTypeWrapper<IConflictError>;
  CreateBeanInput: ICreateBeanInput;
  CreateOriginInput: ICreateOriginInput;
  CreateOriginResults: ResolverTypeWrapper<IResolversUnionTypes<IResolversTypes>['CreateOriginResults']>;
  DateTimeISO: ResolverTypeWrapper<Scalars['DateTimeISO']['output']>;
  FlavorProfile: ResolverTypeWrapper<IFlavorProfile>;
  GraphQLError: ResolverTypeWrapper<IResolversInterfaceTypes<IResolversTypes>['GraphQLError']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Latitude: ResolverTypeWrapper<Scalars['Latitude']['output']>;
  Longitude: ResolverTypeWrapper<Scalars['Longitude']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  NotFoundError: ResolverTypeWrapper<INotFoundError>;
  Origin: ResolverTypeWrapper<IOrigin>;
  Pack: ResolverTypeWrapper<IPack>;
  ProcessingMethod: ResolverTypeWrapper<IProcessingMethod>;
  Purchase: ResolverTypeWrapper<IPurchase>;
  Query: ResolverTypeWrapper<{}>;
  RoastLevel: ResolverTypeWrapper<IRoastLevel>;
  Shop: ResolverTypeWrapper<IShop>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Tasting: ResolverTypeWrapper<ITasting>;
  URL: ResolverTypeWrapper<Scalars['URL']['output']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  BaseBean: IResolversInterfaceTypes<IResolversParentTypes>['BaseBean'];
  BaseBeanProcessingMethod: IResolversInterfaceTypes<IResolversParentTypes>['BaseBeanProcessingMethod'];
  BaseBeanRoastLevel: IResolversInterfaceTypes<IResolversParentTypes>['BaseBeanRoastLevel'];
  BaseFlavorProfile: IResolversInterfaceTypes<IResolversParentTypes>['BaseFlavorProfile'];
  BaseOrigin: IResolversInterfaceTypes<IResolversParentTypes>['BaseOrigin'];
  BasePack: IResolversInterfaceTypes<IResolversParentTypes>['BasePack'];
  BasePurchase: IResolversInterfaceTypes<IResolversParentTypes>['BasePurchase'];
  BaseShop: IResolversInterfaceTypes<IResolversParentTypes>['BaseShop'];
  BaseTasting: IResolversInterfaceTypes<IResolversParentTypes>['BaseTasting'];
  Bean: IBean;
  Boolean: Scalars['Boolean']['output'];
  ConflictError: IConflictError;
  CreateBeanInput: ICreateBeanInput;
  CreateOriginInput: ICreateOriginInput;
  CreateOriginResults: IResolversUnionTypes<IResolversParentTypes>['CreateOriginResults'];
  DateTimeISO: Scalars['DateTimeISO']['output'];
  FlavorProfile: IFlavorProfile;
  GraphQLError: IResolversInterfaceTypes<IResolversParentTypes>['GraphQLError'];
  Int: Scalars['Int']['output'];
  Latitude: Scalars['Latitude']['output'];
  Longitude: Scalars['Longitude']['output'];
  Mutation: {};
  NotFoundError: INotFoundError;
  Origin: IOrigin;
  Pack: IPack;
  ProcessingMethod: IProcessingMethod;
  Purchase: IPurchase;
  Query: {};
  RoastLevel: IRoastLevel;
  Shop: IShop;
  String: Scalars['String']['output'];
  Tasting: ITasting;
  URL: Scalars['URL']['output'];
  UUID: Scalars['UUID']['output'];
};

export type IBaseBeanResolvers<ContextType = Context, ParentType extends IResolversParentTypes['BaseBean'] = IResolversParentTypes['BaseBean']> = {
  __resolveType: TypeResolveFn<'Bean', ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  originId?: Resolver<Maybe<IResolversTypes['UUID']>, ParentType, ContextType>;
  processingMethodId?: Resolver<Maybe<IResolversTypes['UUID']>, ParentType, ContextType>;
  roastLevelId?: Resolver<Maybe<IResolversTypes['UUID']>, ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
};

export type IBaseBeanProcessingMethodResolvers<ContextType = Context, ParentType extends IResolversParentTypes['BaseBeanProcessingMethod'] = IResolversParentTypes['BaseBeanProcessingMethod']> = {
  __resolveType: TypeResolveFn<'ProcessingMethod', ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
};

export type IBaseBeanRoastLevelResolvers<ContextType = Context, ParentType extends IResolversParentTypes['BaseBeanRoastLevel'] = IResolversParentTypes['BaseBeanRoastLevel']> = {
  __resolveType: TypeResolveFn<'RoastLevel', ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
};

export type IBaseFlavorProfileResolvers<ContextType = Context, ParentType extends IResolversParentTypes['BaseFlavorProfile'] = IResolversParentTypes['BaseFlavorProfile']> = {
  __resolveType: TypeResolveFn<'FlavorProfile', ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  label?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  value?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
};

export type IBaseOriginResolvers<ContextType = Context, ParentType extends IResolversParentTypes['BaseOrigin'] = IResolversParentTypes['BaseOrigin']> = {
  __resolveType: TypeResolveFn<'Origin', ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  latitude?: Resolver<Maybe<IResolversTypes['Latitude']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<IResolversTypes['Longitude']>, ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
};

export type IBasePackResolvers<ContextType = Context, ParentType extends IResolversParentTypes['BasePack'] = IResolversParentTypes['BasePack']> = {
  __resolveType: TypeResolveFn<'Pack', ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
};

export type IBasePurchaseResolvers<ContextType = Context, ParentType extends IResolversParentTypes['BasePurchase'] = IResolversParentTypes['BasePurchase']> = {
  __resolveType: TypeResolveFn<'Purchase', ParentType, ContextType>;
  capacity?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  packId?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  price?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  purchasedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  shopId?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
};

export type IBaseShopResolvers<ContextType = Context, ParentType extends IResolversParentTypes['BaseShop'] = IResolversParentTypes['BaseShop']> = {
  __resolveType: TypeResolveFn<'Shop', ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
};

export type IBaseTastingResolvers<ContextType = Context, ParentType extends IResolversParentTypes['BaseTasting'] = IResolversParentTypes['BaseTasting']> = {
  __resolveType: TypeResolveFn<'Tasting', ParentType, ContextType>;
  acidity?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  conductedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  richness?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
};

export type IBeanResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Bean'] = IResolversParentTypes['Bean']> = {
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  flavorProfiles?: Resolver<Maybe<Array<Maybe<IResolversTypes['FlavorProfile']>>>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  origin?: Resolver<Maybe<IResolversTypes['Origin']>, ParentType, ContextType>;
  originId?: Resolver<Maybe<IResolversTypes['UUID']>, ParentType, ContextType>;
  packs?: Resolver<Maybe<Array<Maybe<IResolversTypes['Pack']>>>, ParentType, ContextType>;
  processingMethod?: Resolver<Maybe<IResolversTypes['ProcessingMethod']>, ParentType, ContextType>;
  processingMethodId?: Resolver<Maybe<IResolversTypes['UUID']>, ParentType, ContextType>;
  roastLevel?: Resolver<Maybe<IResolversTypes['RoastLevel']>, ParentType, ContextType>;
  roastLevelId?: Resolver<Maybe<IResolversTypes['UUID']>, ParentType, ContextType>;
  tastings?: Resolver<Maybe<Array<Maybe<IResolversTypes['Tasting']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IConflictErrorResolvers<ContextType = Context, ParentType extends IResolversParentTypes['ConflictError'] = IResolversParentTypes['ConflictError']> = {
  code?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICreateOriginResultsResolvers<ContextType = Context, ParentType extends IResolversParentTypes['CreateOriginResults'] = IResolversParentTypes['CreateOriginResults']> = {
  __resolveType: TypeResolveFn<'ConflictError' | 'Origin', ParentType, ContextType>;
};

export interface IDateTimeIsoScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['DateTimeISO'], any> {
  name: 'DateTimeISO';
}

export type IFlavorProfileResolvers<ContextType = Context, ParentType extends IResolversParentTypes['FlavorProfile'] = IResolversParentTypes['FlavorProfile']> = {
  beans?: Resolver<Maybe<Array<Maybe<IResolversTypes['Bean']>>>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  label?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  value?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphQlErrorResolvers<ContextType = Context, ParentType extends IResolversParentTypes['GraphQLError'] = IResolversParentTypes['GraphQLError']> = {
  __resolveType: TypeResolveFn<'ConflictError' | 'NotFoundError', ParentType, ContextType>;
  code?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
};

export interface ILatitudeScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['Latitude'], any> {
  name: 'Latitude';
}

export interface ILongitudeScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['Longitude'], any> {
  name: 'Longitude';
}

export type IMutationResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']> = {
  createBean?: Resolver<IResolversTypes['Bean'], ParentType, ContextType, RequireFields<IMutationCreateBeanArgs, 'input'>>;
  createOrigin?: Resolver<IResolversTypes['CreateOriginResults'], ParentType, ContextType, RequireFields<IMutationCreateOriginArgs, 'input'>>;
};

export type INotFoundErrorResolvers<ContextType = Context, ParentType extends IResolversParentTypes['NotFoundError'] = IResolversParentTypes['NotFoundError']> = {
  code?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  entity?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IOriginResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Origin'] = IResolversParentTypes['Origin']> = {
  beans?: Resolver<Maybe<Array<Maybe<IResolversTypes['Bean']>>>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  latitude?: Resolver<Maybe<IResolversTypes['Latitude']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<IResolversTypes['Longitude']>, ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IPackResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Pack'] = IResolversParentTypes['Pack']> = {
  beans?: Resolver<Maybe<Array<Maybe<IResolversTypes['Bean']>>>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  purchases?: Resolver<Maybe<Array<Maybe<IResolversTypes['Purchase']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IProcessingMethodResolvers<ContextType = Context, ParentType extends IResolversParentTypes['ProcessingMethod'] = IResolversParentTypes['ProcessingMethod']> = {
  beans?: Resolver<Maybe<Array<Maybe<IResolversTypes['Bean']>>>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IPurchaseResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Purchase'] = IResolversParentTypes['Purchase']> = {
  capacity?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  pack?: Resolver<Maybe<IResolversTypes['Pack']>, ParentType, ContextType>;
  packId?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  price?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  purchasedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  shop?: Resolver<Maybe<IResolversTypes['Shop']>, ParentType, ContextType>;
  shopId?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IQueryResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']> = {
  bean?: Resolver<IResolversTypes['Bean'], ParentType, ContextType, RequireFields<IQueryBeanArgs, 'beanId'>>;
  beans?: Resolver<Array<Maybe<IResolversTypes['Bean']>>, ParentType, ContextType>;
  origin?: Resolver<IResolversTypes['Origin'], ParentType, ContextType, RequireFields<IQueryOriginArgs, 'originId'>>;
  origins?: Resolver<Array<Maybe<IResolversTypes['Origin']>>, ParentType, ContextType>;
};

export type IRoastLevelResolvers<ContextType = Context, ParentType extends IResolversParentTypes['RoastLevel'] = IResolversParentTypes['RoastLevel']> = {
  beans?: Resolver<Maybe<Array<Maybe<IResolversTypes['Bean']>>>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IShopResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Shop'] = IResolversParentTypes['Shop']> = {
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITastingResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Tasting'] = IResolversParentTypes['Tasting']> = {
  acidity?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  beans?: Resolver<Maybe<Array<Maybe<IResolversTypes['Bean']>>>, ParentType, ContextType>;
  conductedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  richness?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface IUrlScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['URL'], any> {
  name: 'URL';
}

export interface IUuidScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type IResolvers<ContextType = Context> = {
  BaseBean?: IBaseBeanResolvers<ContextType>;
  BaseBeanProcessingMethod?: IBaseBeanProcessingMethodResolvers<ContextType>;
  BaseBeanRoastLevel?: IBaseBeanRoastLevelResolvers<ContextType>;
  BaseFlavorProfile?: IBaseFlavorProfileResolvers<ContextType>;
  BaseOrigin?: IBaseOriginResolvers<ContextType>;
  BasePack?: IBasePackResolvers<ContextType>;
  BasePurchase?: IBasePurchaseResolvers<ContextType>;
  BaseShop?: IBaseShopResolvers<ContextType>;
  BaseTasting?: IBaseTastingResolvers<ContextType>;
  Bean?: IBeanResolvers<ContextType>;
  ConflictError?: IConflictErrorResolvers<ContextType>;
  CreateOriginResults?: ICreateOriginResultsResolvers<ContextType>;
  DateTimeISO?: GraphQLScalarType;
  FlavorProfile?: IFlavorProfileResolvers<ContextType>;
  GraphQLError?: IGraphQlErrorResolvers<ContextType>;
  Latitude?: GraphQLScalarType;
  Longitude?: GraphQLScalarType;
  Mutation?: IMutationResolvers<ContextType>;
  NotFoundError?: INotFoundErrorResolvers<ContextType>;
  Origin?: IOriginResolvers<ContextType>;
  Pack?: IPackResolvers<ContextType>;
  ProcessingMethod?: IProcessingMethodResolvers<ContextType>;
  Purchase?: IPurchaseResolvers<ContextType>;
  Query?: IQueryResolvers<ContextType>;
  RoastLevel?: IRoastLevelResolvers<ContextType>;
  Shop?: IShopResolvers<ContextType>;
  Tasting?: ITastingResolvers<ContextType>;
  URL?: GraphQLScalarType;
  UUID?: GraphQLScalarType;
};

