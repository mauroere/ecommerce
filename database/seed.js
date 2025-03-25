const mongoose = require('mongoose');
const User = require('../backend/src/models/User');
const Product = require('../backend/src/models/Product');
const Order = require('../backend/src/models/Order');
const bcrypt = require('bcrypt');

const hashedPassword = await bcrypt.hash(password, 10);
const users = [
    { username: 'admin', password: await bcrypt.hash('admin123', 10), email: 'admin@example.com' },
    { username: 'user1', password: await bcrypt.hash('user123', 10), email: 'user1@example.com' },
  ];

const products = [
    { name: 'Product 1', price: 100, description: 'Description for product 1', stock: 10 },
    { name: 'Product 2', price: 200, description: 'Description for product 2', stock: 5 },
];

const seedDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/ecommerce', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await User.deleteMany({});
        await Product.deleteMany({});
        await Order.deleteMany({});

        await User.insertMany(users);
        await Product.insertMany(products);

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();