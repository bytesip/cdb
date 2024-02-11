import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  DateTimeISO: { input: Date; output: Date; }
  Latitude: { input: number | string; output: number | string; }
  Longitude: { input: number | string; output: number | string; }
  URL: { input: string; output: string; }
  UUID: { input: string; output: string; }
};

export type GraphQLBaseBean = {
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  originId?: Maybe<Scalars['UUID']['output']>;
  processingMethodId?: Maybe<Scalars['UUID']['output']>;
  roastLevelId?: Maybe<Scalars['UUID']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GraphQLBaseBeanProcessingMethod = {
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GraphQLBaseBeanRoastLevel = {
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GraphQLBaseFlavorProfile = {
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  label: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  value: Scalars['String']['output'];
};

export type GraphQLBaseOrigin = {
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  latitude?: Maybe<Scalars['Latitude']['output']>;
  longitude?: Maybe<Scalars['Longitude']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GraphQLBaseTasting = {
  acidity: Scalars['Int']['output'];
  conductedAt: Scalars['DateTimeISO']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  richness: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GraphQLBean = GraphQLBaseBean & {
  __typename?: 'Bean';
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  flavorProfile?: Maybe<GraphQLFlavorProfile>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  origin?: Maybe<GraphQLOrigin>;
  originId?: Maybe<Scalars['UUID']['output']>;
  processingMethod?: Maybe<GraphQLProcessingMethod>;
  processingMethodId?: Maybe<Scalars['UUID']['output']>;
  roastLevel?: Maybe<GraphQLRoastLevel>;
  roastLevelId?: Maybe<Scalars['UUID']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GraphQLCreateBeanInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type GraphQLFlavorProfile = GraphQLBaseFlavorProfile & {
  __typename?: 'FlavorProfile';
  beans: Array<Maybe<GraphQLBean>>;
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  label: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  value: Scalars['String']['output'];
};

export type GraphQLMutation = {
  __typename?: 'Mutation';
  createBean: GraphQLBean;
};


export type GraphQLMutationCreateBeanArgs = {
  input: GraphQLCreateBeanInput;
};

export type GraphQLOrigin = GraphQLBaseOrigin & {
  __typename?: 'Origin';
  beans: Array<Maybe<GraphQLBean>>;
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  latitude?: Maybe<Scalars['Latitude']['output']>;
  longitude?: Maybe<Scalars['Longitude']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GraphQLProcessingMethod = GraphQLBaseBeanProcessingMethod & {
  __typename?: 'ProcessingMethod';
  beans: Array<Maybe<GraphQLBean>>;
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GraphQLQuery = {
  __typename?: 'Query';
  bean: GraphQLBean;
  beans: Array<Maybe<GraphQLBean>>;
};


export type GraphQLQueryBeanArgs = {
  beanId: Scalars['UUID']['input'];
};

export type GraphQLRoastLevel = GraphQLBaseBeanRoastLevel & {
  __typename?: 'RoastLevel';
  beans: Array<Maybe<GraphQLBean>>;
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GraphQLTasting = GraphQLBaseTasting & {
  __typename?: 'Tasting';
  acidity: Scalars['Int']['output'];
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


/** Mapping of interface types */
export type GraphQLResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  BaseBean: ( GraphQLBean );
  BaseBeanProcessingMethod: ( GraphQLProcessingMethod );
  BaseBeanRoastLevel: ( GraphQLRoastLevel );
  BaseFlavorProfile: ( GraphQLFlavorProfile );
  BaseOrigin: ( GraphQLOrigin );
  BaseTasting: ( GraphQLTasting );
};

/** Mapping between all available schema types and the resolvers types */
export type GraphQLResolversTypes = {
  BaseBean: ResolverTypeWrapper<GraphQLResolversInterfaceTypes<GraphQLResolversTypes>['BaseBean']>;
  BaseBeanProcessingMethod: ResolverTypeWrapper<GraphQLResolversInterfaceTypes<GraphQLResolversTypes>['BaseBeanProcessingMethod']>;
  BaseBeanRoastLevel: ResolverTypeWrapper<GraphQLResolversInterfaceTypes<GraphQLResolversTypes>['BaseBeanRoastLevel']>;
  BaseFlavorProfile: ResolverTypeWrapper<GraphQLResolversInterfaceTypes<GraphQLResolversTypes>['BaseFlavorProfile']>;
  BaseOrigin: ResolverTypeWrapper<GraphQLResolversInterfaceTypes<GraphQLResolversTypes>['BaseOrigin']>;
  BaseTasting: ResolverTypeWrapper<GraphQLResolversInterfaceTypes<GraphQLResolversTypes>['BaseTasting']>;
  Bean: ResolverTypeWrapper<GraphQLBean>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateBeanInput: GraphQLCreateBeanInput;
  DateTimeISO: ResolverTypeWrapper<Scalars['DateTimeISO']['output']>;
  FlavorProfile: ResolverTypeWrapper<GraphQLFlavorProfile>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Latitude: ResolverTypeWrapper<Scalars['Latitude']['output']>;
  Longitude: ResolverTypeWrapper<Scalars['Longitude']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Origin: ResolverTypeWrapper<GraphQLOrigin>;
  ProcessingMethod: ResolverTypeWrapper<GraphQLProcessingMethod>;
  Query: ResolverTypeWrapper<{}>;
  RoastLevel: ResolverTypeWrapper<GraphQLRoastLevel>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Tasting: ResolverTypeWrapper<GraphQLTasting>;
  URL: ResolverTypeWrapper<Scalars['URL']['output']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type GraphQLResolversParentTypes = {
  BaseBean: GraphQLResolversInterfaceTypes<GraphQLResolversParentTypes>['BaseBean'];
  BaseBeanProcessingMethod: GraphQLResolversInterfaceTypes<GraphQLResolversParentTypes>['BaseBeanProcessingMethod'];
  BaseBeanRoastLevel: GraphQLResolversInterfaceTypes<GraphQLResolversParentTypes>['BaseBeanRoastLevel'];
  BaseFlavorProfile: GraphQLResolversInterfaceTypes<GraphQLResolversParentTypes>['BaseFlavorProfile'];
  BaseOrigin: GraphQLResolversInterfaceTypes<GraphQLResolversParentTypes>['BaseOrigin'];
  BaseTasting: GraphQLResolversInterfaceTypes<GraphQLResolversParentTypes>['BaseTasting'];
  Bean: GraphQLBean;
  Boolean: Scalars['Boolean']['output'];
  CreateBeanInput: GraphQLCreateBeanInput;
  DateTimeISO: Scalars['DateTimeISO']['output'];
  FlavorProfile: GraphQLFlavorProfile;
  Int: Scalars['Int']['output'];
  Latitude: Scalars['Latitude']['output'];
  Longitude: Scalars['Longitude']['output'];
  Mutation: {};
  Origin: GraphQLOrigin;
  ProcessingMethod: GraphQLProcessingMethod;
  Query: {};
  RoastLevel: GraphQLRoastLevel;
  String: Scalars['String']['output'];
  Tasting: GraphQLTasting;
  URL: Scalars['URL']['output'];
  UUID: Scalars['UUID']['output'];
};

export type GraphQLBaseBeanResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['BaseBean'] = GraphQLResolversParentTypes['BaseBean']> = {
  __resolveType: TypeResolveFn<'Bean', ParentType, ContextType>;
  createdAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  originId?: Resolver<Maybe<GraphQLResolversTypes['UUID']>, ParentType, ContextType>;
  processingMethodId?: Resolver<Maybe<GraphQLResolversTypes['UUID']>, ParentType, ContextType>;
  roastLevelId?: Resolver<Maybe<GraphQLResolversTypes['UUID']>, ParentType, ContextType>;
  updatedAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
};

export type GraphQLBaseBeanProcessingMethodResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['BaseBeanProcessingMethod'] = GraphQLResolversParentTypes['BaseBeanProcessingMethod']> = {
  __resolveType: TypeResolveFn<'ProcessingMethod', ParentType, ContextType>;
  createdAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
};

export type GraphQLBaseBeanRoastLevelResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['BaseBeanRoastLevel'] = GraphQLResolversParentTypes['BaseBeanRoastLevel']> = {
  __resolveType: TypeResolveFn<'RoastLevel', ParentType, ContextType>;
  createdAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
};

export type GraphQLBaseFlavorProfileResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['BaseFlavorProfile'] = GraphQLResolversParentTypes['BaseFlavorProfile']> = {
  __resolveType: TypeResolveFn<'FlavorProfile', ParentType, ContextType>;
  createdAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['UUID'], ParentType, ContextType>;
  label?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  value?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
};

export type GraphQLBaseOriginResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['BaseOrigin'] = GraphQLResolversParentTypes['BaseOrigin']> = {
  __resolveType: TypeResolveFn<'Origin', ParentType, ContextType>;
  createdAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['UUID'], ParentType, ContextType>;
  latitude?: Resolver<Maybe<GraphQLResolversTypes['Latitude']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<GraphQLResolversTypes['Longitude']>, ParentType, ContextType>;
  name?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
};

export type GraphQLBaseTastingResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['BaseTasting'] = GraphQLResolversParentTypes['BaseTasting']> = {
  __resolveType: TypeResolveFn<'Tasting', ParentType, ContextType>;
  acidity?: Resolver<GraphQLResolversTypes['Int'], ParentType, ContextType>;
  conductedAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  createdAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  richness?: Resolver<GraphQLResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
};

export type GraphQLBeanResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['Bean'] = GraphQLResolversParentTypes['Bean']> = {
  createdAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  flavorProfile?: Resolver<Maybe<GraphQLResolversTypes['FlavorProfile']>, ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  origin?: Resolver<Maybe<GraphQLResolversTypes['Origin']>, ParentType, ContextType>;
  originId?: Resolver<Maybe<GraphQLResolversTypes['UUID']>, ParentType, ContextType>;
  processingMethod?: Resolver<Maybe<GraphQLResolversTypes['ProcessingMethod']>, ParentType, ContextType>;
  processingMethodId?: Resolver<Maybe<GraphQLResolversTypes['UUID']>, ParentType, ContextType>;
  roastLevel?: Resolver<Maybe<GraphQLResolversTypes['RoastLevel']>, ParentType, ContextType>;
  roastLevelId?: Resolver<Maybe<GraphQLResolversTypes['UUID']>, ParentType, ContextType>;
  updatedAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GraphQLDateTimeIsoScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['DateTimeISO'], any> {
  name: 'DateTimeISO';
}

export type GraphQLFlavorProfileResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['FlavorProfile'] = GraphQLResolversParentTypes['FlavorProfile']> = {
  beans?: Resolver<Array<Maybe<GraphQLResolversTypes['Bean']>>, ParentType, ContextType>;
  createdAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['UUID'], ParentType, ContextType>;
  label?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  value?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GraphQLLatitudeScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['Latitude'], any> {
  name: 'Latitude';
}

export interface GraphQLLongitudeScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['Longitude'], any> {
  name: 'Longitude';
}

export type GraphQLMutationResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['Mutation'] = GraphQLResolversParentTypes['Mutation']> = {
  createBean?: Resolver<GraphQLResolversTypes['Bean'], ParentType, ContextType, RequireFields<GraphQLMutationCreateBeanArgs, 'input'>>;
};

export type GraphQLOriginResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['Origin'] = GraphQLResolversParentTypes['Origin']> = {
  beans?: Resolver<Array<Maybe<GraphQLResolversTypes['Bean']>>, ParentType, ContextType>;
  createdAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['UUID'], ParentType, ContextType>;
  latitude?: Resolver<Maybe<GraphQLResolversTypes['Latitude']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<GraphQLResolversTypes['Longitude']>, ParentType, ContextType>;
  name?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQLProcessingMethodResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['ProcessingMethod'] = GraphQLResolversParentTypes['ProcessingMethod']> = {
  beans?: Resolver<Array<Maybe<GraphQLResolversTypes['Bean']>>, ParentType, ContextType>;
  createdAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQLQueryResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['Query'] = GraphQLResolversParentTypes['Query']> = {
  bean?: Resolver<GraphQLResolversTypes['Bean'], ParentType, ContextType, RequireFields<GraphQLQueryBeanArgs, 'beanId'>>;
  beans?: Resolver<Array<Maybe<GraphQLResolversTypes['Bean']>>, ParentType, ContextType>;
};

export type GraphQLRoastLevelResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['RoastLevel'] = GraphQLResolversParentTypes['RoastLevel']> = {
  beans?: Resolver<Array<Maybe<GraphQLResolversTypes['Bean']>>, ParentType, ContextType>;
  createdAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQLTastingResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['Tasting'] = GraphQLResolversParentTypes['Tasting']> = {
  acidity?: Resolver<GraphQLResolversTypes['Int'], ParentType, ContextType>;
  conductedAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  createdAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  richness?: Resolver<GraphQLResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<GraphQLResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GraphQLUrlScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['URL'], any> {
  name: 'URL';
}

export interface GraphQLUuidScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type GraphQLResolvers<ContextType = any> = {
  BaseBean?: GraphQLBaseBeanResolvers<ContextType>;
  BaseBeanProcessingMethod?: GraphQLBaseBeanProcessingMethodResolvers<ContextType>;
  BaseBeanRoastLevel?: GraphQLBaseBeanRoastLevelResolvers<ContextType>;
  BaseFlavorProfile?: GraphQLBaseFlavorProfileResolvers<ContextType>;
  BaseOrigin?: GraphQLBaseOriginResolvers<ContextType>;
  BaseTasting?: GraphQLBaseTastingResolvers<ContextType>;
  Bean?: GraphQLBeanResolvers<ContextType>;
  DateTimeISO?: GraphQLScalarType;
  FlavorProfile?: GraphQLFlavorProfileResolvers<ContextType>;
  Latitude?: GraphQLScalarType;
  Longitude?: GraphQLScalarType;
  Mutation?: GraphQLMutationResolvers<ContextType>;
  Origin?: GraphQLOriginResolvers<ContextType>;
  ProcessingMethod?: GraphQLProcessingMethodResolvers<ContextType>;
  Query?: GraphQLQueryResolvers<ContextType>;
  RoastLevel?: GraphQLRoastLevelResolvers<ContextType>;
  Tasting?: GraphQLTastingResolvers<ContextType>;
  URL?: GraphQLScalarType;
  UUID?: GraphQLScalarType;
};

