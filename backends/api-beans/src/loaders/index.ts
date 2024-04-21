import {Service, Inject} from 'typedi';

import {BeanLoader} from './beanLoader';
import {OriginLoader} from './originLoader';
import {PackLoader} from './packLoader';
import {ProcessingMethodLoader} from './processingMethodLoader';
import {RoastLevelLoader} from './roastLevelLoader';
import {TastingLoader} from './tastingLoader';

@Service('loaders')
export class Loaders {
  @Inject('beanLoader')
  public beanLoader: BeanLoader;

  @Inject('originLoader')
  public originLoader: OriginLoader;

  @Inject('packLoader')
  public packLoader: PackLoader;

  @Inject('processingMethodLoader')
  public processingMethodLoader: ProcessingMethodLoader;

  @Inject('roastLevelLoader')
  public roastLevelLoader: RoastLevelLoader;

  @Inject('tastingLoader')
  public tastingLoader: TastingLoader;
}
