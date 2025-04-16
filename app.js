const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'build' folder
app.use(express.static(path.join(__dirname, 'build'))); 

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
