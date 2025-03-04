const express = require('express');
const { uploadFile, uploadFileToCloudinary } = require('../controllers/uploadController');
const router = express.Router()

router.post('/', uploadFile, uploadFileToCloudinary)

module.exports = router;