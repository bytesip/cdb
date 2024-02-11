import {Service, Inject} from 'typedi';
import {BeanService} from './beanService';

@Service('services')
export class Services {
  @Inject('beanService')
  public beanService: BeanService;
}
