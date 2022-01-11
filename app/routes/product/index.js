import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProductindexRoute extends Route {
  @service store;
  model() {
    return this.store.findAll('product');
    // let result = [
    //   {
    //     id: 1,
    //     name: 'Siemens M-55',
    //     description: 'Handphone polyphonic',
    //     purchasePrice: 1500000,
    //     sellPrice: 1750000,
    //     isPolyphonic: true,
    //   },
    //   {
    //     id: 2,
    //     name: 'Nokia 3110',
    //     description: 'Handphone tahan banting',
    //     purchasePrice: 1000000,
    //     sellPrice: 1250000,
    //     isPolyphonic: false,
    //   },
    //   {
    //     id: 3,
    //     name: 'Sony Erricsson T-310',
    //     description: 'Handphone lipat',
    //     purchasePrice: 5000000,
    //     sellPrice: 7500000,
    //     isPolyphonic: false,
    //   },
    // ];
    // return result;
  }
}
