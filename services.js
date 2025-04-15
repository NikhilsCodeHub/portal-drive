const express = require('express');
const cors = require('cors');
const prescriptionService = require('./services/prescriptionService');
const memberService = require('./services/memberService');
const path = require('path');

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/prescriptions', prescriptionService);
app.use('/api/members', memberService);
//app.use(express.static(path.join(__dirname, 'build'))); // Serve files from the 'build' folder

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
