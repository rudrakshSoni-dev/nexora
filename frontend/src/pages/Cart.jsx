import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import { CartItem } from "../components/CartItem";
import axios from "axios";

export const Cart = () => {
  const { cart, getCart, clearCart } = useApp();
  const [showCheckout, setShowCheckout] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const backendURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  useEffect(() => { getCart(); }, []);

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleCheckout = async () => {
    if (!name || !email) {
      alert("Please enter your name and email");
      return;
    }
    try {
      const res = await axios.post(`${backendURL}/api/checkout`, {
        name,
        email,
        cartItems: cart
      });
      setReceipt(res.data.data); // backend returns receipt
      clearCart();
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong during checkout.");
    }
  };

  if (receipt) {
    return (
      <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-bold mb-4 text-green-600">✅ Order Successful!</h2>
        <p className="text-gray-700 mb-2">Order ID: <b>{receipt.orderId}</b></p>
        <p className="text-gray-700 mb-2">Customer: {receipt.customer.name}</p>
        <p className="text-gray-700 mb-4">Email: {receipt.customer.email}</p>

        <h3 className="text-xl font-semibold mb-2">Items Purchased:</h3>
        <ul className="divide-y">
          {receipt.items.map((item, idx) => (
            <li key={idx} className="py-2 flex justify-between">
              <span>{item.productName} × {item.quantity}</span>
              <span>₹{item.subtotal}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 text-right text-lg font-bold">
          Total Paid: ₹{receipt.totalAmount}
        </div>

        <p className="mt-4 text-gray-500 text-sm italic">
          {receipt.message} (Order status: {receipt.status})
        </p>

        <button
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={() => setReceipt(null)}
        >
          Back to Cart
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => <CartItem key={item._id} item={item} />)}

          <div className="text-right text-xl font-semibold">
            Total: ₹{total.toFixed(2)}
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={clearCart}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
              Clear Cart
            </button>
            <button
              onClick={() => setShowCheckout(true)}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="border w-full p-2 mb-3 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border w-full p-2 mb-4 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
                onClick={() => setShowCheckout(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
                onClick={handleCheckout}
              >
                Confirm & Pay ₹{total.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
