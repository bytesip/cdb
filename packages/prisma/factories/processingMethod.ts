import {Factory} from 'fishery';
import {chance} from './client';
import {ProcessingMethod} from '@prisma/client';

class ProcessingMethodFactory implements ProcessingMethod {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.id = chance.guid({version: 4});
    this.name = chance.word();
    this.description = chance.sentence();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export const processingMethodFactory = Factory.define<ProcessingMethodFactory>(
  () => {
    return new ProcessingMethodFactory();
  }
);
