const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Render uses $PORT, default to 3000 locally

// Middleware
app.use(express.json()); // Parse JSON bodies

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});