const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Example API endpoint
app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Catch-all handler to serve React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
// This is a small change to trigger a new deployment

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
