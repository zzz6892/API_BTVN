const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');

router.post('/rate-res', ratingController.rateRestaurant);
router.get('/rate-by-res/:res_id', ratingController.getRatingsByRestaurant);
router.get('/rate-by-user/:user_id', ratingController.getRatingsByUser);

module.exports = router;
