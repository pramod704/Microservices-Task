const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3003;
const userServiceUrl = process.env.USER_SERVICE_URL || 'http://localhost:3000';
const productServiceUrl = process.env.PRODUCT_SERVICE_URL || 'http://localhost:3001';
const orderServiceUrl = process.env.ORDER_SERVICE_URL || 'http://localhost:3002';

app.get('/health', (req, res) => {
  res.json({ status: 'Gateway Service is healthy' });
});

app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get(`${userServiceUrl}/users`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get(`${productServiceUrl}/products`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const response = await axios.get(`${orderServiceUrl}/orders`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const response = await axios.post(`${orderServiceUrl}/orders`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error creating order' });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Gateway service running on port ${port}`);
});