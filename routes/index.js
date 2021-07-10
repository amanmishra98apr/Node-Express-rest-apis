const express = require('express');
const sendDataController = require('../controller/sendDataController.js');
const pathParamsController = require('../controller/pathparamsController.js');
const queryParamsController = require('../controller/queryParamsController.js');
const postDataController = require('../controller/postDataController.js');
const sendDataMongoController = require('../controller/sendDataMongoController.js');


const router = express.Router();



router.get('/data', sendDataController.sendData);

router.get('/data/:id/:name', pathParamsController.pathParams);

router.get('/queryParams', queryParamsController.queryParams);

router.post('/data', postDataController.postData);

router.post('/mongo', sendDataMongoController.sendDataMongo);


module.exports = router;