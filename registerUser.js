const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./src/models/User');
require('dotenv').config();

const addUser = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const username = 'admin';
    const password = 'password123';

    try {
        let user = await User.findOne({ username });
        if (user) {
            console.log('Username already exists');
            return;
        }

        user = new User({ username, password });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        console.log('User registered successfully');
    } catch (error) {
        console.error('Error registering user:', error);
    } finally {
        mongoose.connection.close();
    }
};

addUser();
