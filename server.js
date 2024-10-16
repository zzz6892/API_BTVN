const express = require('express');
const app = express();
const sequelize = require('./config/db');

// Nhập các route
const likeRoutes = require('./routes/likeRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Middleware
app.use(express.json());

// Sử dụng các route
app.use('/api/likes', likeRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/orders', orderRoutes);

// Khởi động server và kết nối cơ sở dữ liệu
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
