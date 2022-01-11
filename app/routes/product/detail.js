import Route from '@ember/routing/route';

export default class ProductdetailRoute extends Route {
  model({ id }) {
    // let result = {
    //   id: 1,
    //   name: 'Siemens M-55',
    //   description: 'Handphone polyphonic',
    //   purchasePrice: 1500000,
    //   sellPrice: 1750000,
    //   isPolyphonic: true,
    // };
    // return result;
    // console.log('peekRecord', this.store.peekRecord('product', id));
    return this.store.peekRecord('product', id);
  }
}
