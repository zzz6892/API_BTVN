const { Rating } = require('../models');

// POST rating
exports.rateRestaurant = async (req, res) => {
    const { user_id, res_id, rating, comment } = req.body;
    try {
        const rate = await Rating.create({ user_id, res_id, rating, comment });
        res.status(201).json(rate);
    } catch (err) {
        res.status(500).json({ message: 'Error rating restaurant' });
    }
};

// GET ratings by restaurant
exports.getRatingsByRestaurant = async (req, res) => {
    const { res_id } = req.params;
    try {
        const ratings = await Rating.findAll({ where: { res_id } });
        res.status(200).json(ratings);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching ratings' });
    }
};

// GET ratings by user
exports.getRatingsByUser = async (req, res) => {
    const { user_id } = req.params;
    try {
        const ratings = await Rating.findAll({ where: { user_id } });
        res.status(200).json(ratings);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching ratings' });
    }
};
