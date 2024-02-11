import {Factory} from 'fishery';
import {chance} from './client';
import {Bean, Pack, BeansPack} from '@prisma/client';

class BeansPackFactory implements BeansPack {
  id: string;
  beanId: string;
  packId: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.id = chance.guid({version: 4});
    this.beanId = chance.guid({version: 4});
    this.packId = chance.guid({version: 4});
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export const beansPackFactory = Factory.define<BeansPackFactory>(() => {
  return new BeansPackFactory();
});

class PackFactory implements Pack {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.id = chance.guid({version: 4});
    this.name = chance.name();
    this.description = chance.paragraph();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export const packFactory = Factory.define<PackFactory>(() => {
  return new PackFactory();
});

class BeanFactory implements Bean {
  id: string;
  name: string;
  description: string | null;
  originId: string | null;
  roastLevelId: string | null;
  processingMethodId: string | null;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.id = chance.guid({version: 4});
    this.name = chance.name();
    this.description = chance.paragraph();
    this.originId = null;
    this.roastLevelId = null;
    this.processingMethodId = null;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export const beanFactory = Factory.define<BeanFactory>(() => {
  return new BeanFactory();
});
