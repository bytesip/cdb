import Container, {Inject, Service} from 'typedi';
import {Services} from '@/services';
import {Loaders} from '@/loaders';
import {prisma} from '@/client/prisma';

export const initializeDIContainer = () => {
  Container.set('prisma', prisma);
};

@Service('generalContext')
class GeneralContext {
  @Inject('services')
  public services: Services;
}

@Service({id: 'transientContext', transient: true})
class TransientContext {
  @Inject('loaders')
  public loaders: Loaders;
}

export type Context = {
  //   currentUser: null;
  loaders: TransientContext['loaders'];
} & GeneralContext;
export const createContext = (): Context => {
  const staticContext = Container.get<GeneralContext>('generalContext');
  const {loaders} = Container.get<TransientContext>('transientContext');
  return {
    loaders,
    // currentUser: null,
    ...staticContext,
  };
};
