const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  req['session'] = {};
  req['session']['hash'] = {};
  if (Object.keys(req.cookies).length === 0) {
    res.cookies['shortlyid'] = 'fdsaf';
  }
  next();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

