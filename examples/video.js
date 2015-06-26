var Redtube = require('../dist/app');

var r = new Redtube({output: 'json'});

r.search({search: 'hard', tags: ['Amateur', 'Teen'], thumbsize: 'medium'});