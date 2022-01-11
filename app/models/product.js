import Model, { attr } from '@ember-data/model';
// import DS from 'ember/data'
// const {Model} = DS

export default class ProductModel extends Model {
  @attr('string') name;
  @attr('string') description;
  @attr('number') sellPrice;
  @attr('number') puchasePrice;
  @attr('boolean') isPolyphonic;
}

// name: DS.attr('string'),
// description: DS.attr('string'),
// sellPrice: DS.attr('number'),
// puchasePrice: DS.attr('number'),
// isPolyphonic: DS.attr('boolean'),
