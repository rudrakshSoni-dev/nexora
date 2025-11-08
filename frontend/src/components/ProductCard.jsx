import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export const ProductCard = ({ product }) => {
  const { addToCart } = useApp();

  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-cover rounded"
        />
        <h3 className="mt-2 font-semibold">{product.name}</h3>
        <p className="text-gray-500">₹{product.price}</p>
      </Link>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-yellow-300 text-blue-600 font-semibold py-2 rounded hover:bg-yellow-400"
      >
        Add to Cart
      </button>
    </div>
  );
};
