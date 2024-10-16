const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

router.post('/like', likeController.likeRestaurant);
router.delete('/unlike', likeController.unlikeRestaurant);
router.get('/like-by-res/:res_id', likeController.getLikesByRestaurant);
router.get('/like-by-user/:user_id', likeController.getLikesByUser);

module.exports = router;
