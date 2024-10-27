// server/routes/userRoutes.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/add-user', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add user' });
    }
});

module.exports = router;
