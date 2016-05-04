// using bluebird implementation as phantomjs does not have support for native promise
require('any-promise/register')('bluebird', {Promise: require('bluebird')});
require('./unit');
require('./integration');
