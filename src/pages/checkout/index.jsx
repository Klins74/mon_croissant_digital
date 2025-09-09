import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/ui/Button';
import KaspiQRModal from '../../components/KaspiQRModal';
import { useCart } from '../../contexts/CartContext';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [kaspiOpen, setKaspiOpen] = useState(false);

  const status = new URLSearchParams(location.search).get('status');

  const payload = useMemo(() => ({
    items: cartItems.map((i) => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity, image: i.image })),
  }), [cartItems]);

  const handleStripe = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const raw = await res.text();
        let message = 'Server error';
        try {
          const parsed = JSON.parse(raw);
          message = parsed.error || parsed.message || message;
        } catch (_) {
          if (raw) message = raw;
        }
        throw new Error(message);
      }
      const data = await res.json();
      if (data?.url) window.location.href = data.url;
    } catch (e) {
      console.error(e);
      alert(e?.message || 'Ошибка при создании платежа');
      setLoading(false);
    }
  };

  const kaspiLink = import.meta.env.VITE_KASPI_LINK || '';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-heading font-bold mb-4">Оформление заказа</h1>

      {status === 'success' && (
        <div className="mb-6 p-4 rounded bg-green-50 text-green-700">
          Оплата успешно завершена. Спасибо!
          <button className="ml-4 underline" onClick={clearCart}>Очистить корзину</button>
        </div>
      )}
      {status === 'cancel' && (
        <div className="mb-6 p-4 rounded bg-yellow-50 text-yellow-700">Оплата отменена. Попробуйте снова.</div>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <div className="p-6 border rounded">Корзина пуста</div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded">
                <div className="font-medium">{item.name}</div>
                <div>× {item.quantity}</div>
                <div>₸{(item.price * item.quantity).toLocaleString()}</div>
              </div>
            ))
          )}
        </div>

        <div className="space-y-4">
          <div className="p-4 border rounded">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Итого</span>
              <span className="font-semibold">₸{cartTotal.toLocaleString()}</span>
            </div>
            <Button onClick={handleStripe} fullWidth disabled={loading || cartItems.length === 0} iconName="CreditCard">
              Оплатить картой (Stripe)
            </Button>
            {kaspiLink && (
              <div className="mt-2">
                <Button variant="outline" fullWidth iconName="QrCode" onClick={() => setKaspiOpen(true)}>Оплатить через Kaspi</Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <KaspiQRModal isOpen={kaspiOpen} onClose={() => setKaspiOpen(false)} link={kaspiLink} />
    </div>
  );
};

export default Checkout;


