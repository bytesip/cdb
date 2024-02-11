import {Factory} from 'fishery';
import {chance} from './client';
import {Origin} from '@prisma/client';

class OriginFactory implements Origin {
  id: string;
  name: string;
  description: string;
  latitude: number | null;
  longitude: number | null;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.id = chance.guid({version: 4});
    this.name = chance.word();
    this.description = chance.word() + ' is a country.';
    this.latitude = chance.latitude();
    this.longitude = chance.longitude();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export const originFactory = Factory.define<OriginFactory>(() => {
  return new OriginFactory();
});
