import {
  GraphQLDateTimeISO,
  GraphQLLatitude,
  GraphQLLongitude,
  GraphQLURL,
  GraphQLUUID,
} from 'graphql-scalars';

export const scalarDefs = /* GraphQL */ `
    scalar ${GraphQLLatitude.name} @specifiedBy(url: "${GraphQLLatitude.description}")
    scalar ${GraphQLLongitude.name} @specifiedBy(url: "${GraphQLLongitude.description}")
    scalar ${GraphQLURL.name} @specifiedBy(url: "${GraphQLURL.description}")
    scalar ${GraphQLDateTimeISO.name} @specifiedBy(url: "${GraphQLDateTimeISO.description}")
    scalar ${GraphQLUUID.name} @specifiedBy(url: "${GraphQLUUID.description}")
  `;

export const scalarResolvers = {
  [GraphQLLatitude.name]: GraphQLLatitude,
  [GraphQLLongitude.name]: GraphQLLongitude,
  [GraphQLURL.name]: GraphQLURL,
  [GraphQLDateTimeISO.name]: GraphQLDateTimeISO,
  [GraphQLUUID.name]: GraphQLUUID,
};

export const scalarMapForCodegen = {
  [GraphQLLatitude.name]: 'number',
  [GraphQLLongitude.name]: 'number',
  [GraphQLURL.name]: 'string',
  [GraphQLDateTimeISO.name]: 'Date',
  [GraphQLUUID.name]: 'string',
};
