import {Service, Inject} from 'typedi';
import {OriginLoader} from './originLoader';

@Service('loaders')
export class Loaders {
  @Inject('originLoader')
  public originLoader: OriginLoader;
}
