const express = require('express')
const router = express.Router()

const getOnSaleInventory = require('../controllers/homeController.js')

// sorted
router.route('/forSaleVehicles').get(getOnSaleInventory)

module.exports = router
