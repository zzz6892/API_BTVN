const { Order } = require('../models');

// POST order
exports.createOrder = async (req, res) => {
    const { user_id, res_id, items } = req.body;
    try {
        const order = await Order.create({ user_id, res_id, items });
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ message: 'Error creating order' });
    }
};
