const express = require('express');
const router = express.Router();

// Mock data - in a real application, this would come from a database
const pharmacyData = {
    totalPharmacies: "1,253",
    lastUpdated: '2025-03-25'
};

// GET endpoint for total pharmacies
router.get('/total', (req, res) => {
    res.json(pharmacyData);
});

module.exports = router;
