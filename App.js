const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();
const connectDB = require('./src/config/db');
const stakeholderRoutes = require('./src/api/stakeholders');
const authRoutes = require('./src/api/auth');
const requirementRoutes = require('./src/api/requirements');
const priorityRoutes = require('./src/api/priority');

const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/api', authRoutes);
app.use('/api', stakeholderRoutes);
app.use('/api', requirementRoutes);
app.use('/api', priorityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
