const express = require('express');
const Order = require('../models/order');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, address, quantity } = req.body;
    try {
        const newOrder = await Order.create({ name, address, quantity });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create order' });
    }
});

router.get('/', async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
});

module.exports = router;
