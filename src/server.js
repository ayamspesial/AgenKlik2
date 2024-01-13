const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.post('/midtrans', async (req, res) => {
 try {
    const response = await axios.post('https://app.sandbox.midtrans.com/snap/v1/payment-links/{order_id}', req.body);
    res.json(response.data);
 } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the payment.' });
 }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));