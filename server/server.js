const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Stripe = require('stripe');

dotenv.config();

const app = express();
const port = process.env.PORT || 4242;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.warn('STRIPE_SECRET_KEY is not set. Stripe endpoints will fail until configured.');
}

const stripe = stripeSecretKey ? new Stripe(stripeSecretKey, { apiVersion: '2024-06-20' }) : null;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    if (!stripe) {
      return res.status(500).json({ error: 'Stripe not configured on server' });
    }

    const { items, customer } = req.body || {};
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Items are required' });
    }

    const origin = req.headers.origin || process.env.CLIENT_URL || 'http://localhost:5173';

    const line_items = items.map((item) => ({
      quantity: item.quantity || 1,
      price_data: {
        currency: 'kzt',
        unit_amount: Math.round((item.price || 0) * 100),
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : undefined,
          metadata: {
            product_id: String(item.id || ''),
          },
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      locale: 'ru',
      success_url: `${origin}/checkout?status=success`,
      cancel_url: `${origin}/checkout?status=cancel`,
      line_items,
      metadata: {
        customer_name: customer?.name || '',
        customer_phone: customer?.phone || '',
      },
    });

    return res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe session error', error);
    return res.status(500).json({ error: 'Failed to create session' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


