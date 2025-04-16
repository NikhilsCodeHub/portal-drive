const express = require('express');
const router = express.Router();

// Mock data - in a real application, this would come from a database
const costData = {
    totalCost: "$12.5M",
    lastUpdated: '2025-03-25'
};

// GET endpoint for total cost
router.get('/total', (req, res) => {
    res.json(costData);
});

module.exports = router;
