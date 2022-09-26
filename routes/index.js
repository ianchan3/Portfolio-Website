const express = require('express');
const router = express.Router();

router.post('/', indexCtrl.create);

module.exports = router;