require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Add this
const app = express();
const PORT = process.env.PORT || 3000;

// ===== REMOVE ALL TELEGRAM BOT CODE =====
// Delete TelegramBot initialization and all bot.on() handlers
// Remove webhook route and setWebHook call

// ===== NEW SETUP FOR MINI APP =====
// Middleware
app.use(cors()); // Enable CORS for Mini App requests
app.use(express.json()); // Parse JSON bodies
app.use(express.static('public')); // Serve React frontend

// Mini App API Endpoint
app.post('/api/data', (req, res) => {
  console.log('Data received from Mini App:', req.body);
  // Add your business logic here
  res.json({ status: 'success', data: req.body });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});