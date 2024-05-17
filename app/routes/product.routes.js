
module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const product = require('../controller/product.controller');

    router.get("/get-all", product.findAll);

    app.use('/api/product', router);
}