import {BeanService} from '@/services';

class SeverContext {
  public beanService: BeanService;

  constructor() {
    this.beanService = new BeanService();
  }
}

export type Context = {
  //   currentUser: null;
} & SeverContext;
export const createContext = (): Context => {
  const serverContext = new SeverContext();
  return {
    // currentUser: null,
    ...serverContext,
  };
};
