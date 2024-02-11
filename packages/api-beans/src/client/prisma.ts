import {PrismaClient} from '@cdb/prisma';
import {Container} from 'typedi';

export const prisma: PrismaClient = new PrismaClient();
Container.set('prisma', prisma);
