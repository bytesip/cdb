import {Service, Inject} from 'typedi';
import {BeanService} from './beanService';
import {OriginService} from './originService';

@Service('services')
export class Services {
  @Inject('beanService')
  public beanService: BeanService;

  @Inject('originService')
  public originService: OriginService;
}
