const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from 'public' folder

// Sample product data (could be replaced with a real database)
const products = [
  { id: 1, name: "Red T-Shirt", price: 25 },
  { id: 2, name: "Blue Jeans", price: 50 },
  { id: 3, name: "Sneakers", price: 80 }
];

// API endpoint to get products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// For demonstration: receive order data from client
app.post('/api/order', (req, res) => {
  const order = req.body;
  console.log("Order received:", order);
  res.json({ message: "Order received successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
