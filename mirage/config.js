export default function () {
  this.namespace = '/api';
  let products = [
    {
      type: 'products',
      id: '1',
      attributes: {
        name: 'Siemens M-55',
        description: 'Handphone polyphonic',
        'purchase-price': 1500000,
        'sell-price': 1750000,
        'is-polyphonic': true,
      },
    },
    {
      type: 'products',
      id: '2',
      attributes: {
        name: 'Nokia 3110',
        description: 'Handphone tahan banting',
        'purchase-price': 1000000,
        'sell-price': 1250000,
        'is-polyphonic': false,
      },
    },
    {
      type: 'products',
      id: '3',
      attributes: {
        name: 'Sony Erricsson T-310',
        description: 'Handphone lipat',
        'purchase-price': 5000000,
        'sell-price': 7500000,
        'is-polyphonic': false,
      },
    },
  ];
  this.get('/products', function (db, request) {
    console.log('tesssting');
    return { data: products };
  });

  this.get('/products/:id', function (db, request) {
    return { data: products.find((p) => request.param.id == p.id) };
  });
}
