import Container, {Inject, Service} from 'typedi';
import {Services} from '@/services';

@Service('generalContext')
class GeneralContext {
  @Inject('services')
  public services: Services;
}

export type Context = {
  //   currentUser: null;
} & GeneralContext;
export const createContext = (): Context => {
  const staticContext = Container.get<GeneralContext>('generalContext');
  return {
    // currentUser: null,
    ...staticContext,
  };
};
