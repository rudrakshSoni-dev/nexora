import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useApp } from "../context/AppContext";

export const ProductInfo = () => {
  const { id } = useParams();
  const { addToCart } = useApp();
  const [product, setProduct] = useState(null);
  const backendURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    axios.get(`${backendURL}/api/products/${id}`)
      .then(res => setProduct(res.data.data))
      .catch(err => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return <div className="text-center mt-10 text-gray-500">Loading product...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 mt-8">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">← Back to Products</Link>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg"
        />

        {/* Product Info */}
        <div>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-500 mb-2">{product.category}</p>
          <p className="text-2xl font-semibold text-green-600 mb-4">₹{product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              Add to Cart
            </button>
            <Link
              to="/cart"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50"
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
