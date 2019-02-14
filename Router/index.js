const Router = require('koa-router');
const router = new Router();

// import router files here
require('./Admin')(router);
require('./Account')(router);

module.exports = router;