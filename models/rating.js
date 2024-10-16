module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define('Rating', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        res_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true
        },
    });
    return Rating;
};
