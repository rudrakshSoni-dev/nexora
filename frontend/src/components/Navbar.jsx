import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import "../font.css"
export const Navbar = () => {
  const navigate = useNavigate();
  const { cart, userName } = useApp();

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    window.location.reload()
    navigate("/"); // automatically redirects to login
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-yellow-300 shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1
        onClick={() => {navigate("/")
            window.location.reload()
        }}
        className="bagel text-2xl font-bold text-black cursor-pointer"
      >
        Vibe Commerce
      </h1>

      {/* Center Text or Brand */}
      <p className="hidden sm:block text-gray-600 font-medium">Feel the Vibe.</p>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Cart Icon */}
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <ShoppingCart className="w-6 h-6 text-blue-600" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </div>

        {/* User Info */}
        {userName && (
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700">{userName}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white text-[14px] px-3 py-1 rounded-sm"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};



