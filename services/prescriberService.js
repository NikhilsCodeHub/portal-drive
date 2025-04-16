const express = require('express');
const router = express.Router();

// Mock data - in a real application, this would come from a database
const prescriberData = {
    totalPrescribers: "3,512",
    lastUpdated: '2025-03-25'
};

// GET endpoint for total prescribers
router.get('/total', (req, res) => {
    res.json(prescriberData);
});

module.exports = router;
