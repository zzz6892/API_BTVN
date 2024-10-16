const { Like } = require('../models');

// POST like
exports.likeRestaurant = async (req, res) => {
    const { user_id, res_id } = req.body;
    try {
        const like = await Like.create({ user_id, res_id });
        res.status(201).json(like);
    } catch (err) {
        res.status(500).json({ message: 'Error liking restaurant' });
    }
};

// DELETE unlike
exports.unlikeRestaurant = async (req, res) => {
    const { user_id, res_id } = req.body;
    try {
        await Like.destroy({ where: { user_id, res_id } });
        res.status(200).json({ message: 'Unlike successful' });
    } catch (err) {
        res.status(500).json({ message: 'Error unliking restaurant' });
    }
};

// GET likes by restaurant
exports.getLikesByRestaurant = async (req, res) => {
    const { res_id } = req.params;
    try {
        const likes = await Like.findAll({ where: { res_id } });
        res.status(200).json(likes);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching likes' });
    }
};

// GET likes by user
exports.getLikesByUser = async (req, res) => {
    const { user_id } = req.params;
    try {
        const likes = await Like.findAll({ where: { user_id } });
        res.status(200).json(likes);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching likes' });
    }
};
