const mock = require('mockjs');

module.exports = {
  'GET /1api/test': mock.mock({
    'list|100': [
      {
        name: '@city',
        'value|1-100': 50,
        'type|0-2': 1,
      },
    ],
  }),
};
