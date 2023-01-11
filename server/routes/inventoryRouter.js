const express = require('express')
const router = express.Router()

const {
  getAllVehicles,
  postVehicle,
  getSingleVehicle,
  sortByMilesLow,
  sortByPriceLow,
  sortByYearsLow,
  sortByMilesHigh,
  sortByPriceHigh,
  sortByYearsHigh,
} = require('../controllers/inventoryController.js')

// sorted
router.route('/sortBy=milesHigh').get(sortByMilesHigh)
router.route('/sortBy=milesLow').get(sortByMilesLow)

router.route('/sortBy=priceHigh').get(sortByPriceHigh)
router.route('/sortBy=priceLow').get(sortByPriceLow)

router.route('/sortBy=yearsHigh').get(sortByYearsHigh)
router.route('/sortBy=yearsLow').get(sortByYearsLow)

// all
router.route('/').post(postVehicle).get(getAllVehicles)

// single
router.route('/:id').get(getSingleVehicle)

module.exports = router
