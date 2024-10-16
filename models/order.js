module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        res_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        items: {
            type: DataTypes.JSON,
            allowNull: false
        },
    });
    return Order;
};
