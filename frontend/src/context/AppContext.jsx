import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const backendURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    axios.get(`${backendURL}/api/products`).then(res => setProducts(res.data.data));
  }, []);

  const addToCart = async (product) => {
    const res = await axios.post(`${backendURL}/api/cart`, { _id: product._id, quantity: 1 });
    setCart(res.data.data.items);
  };

  const getCart = async () => {
    const res = await axios.get(`${backendURL}/api/cart`);
    setCart(res.data.data.items);
  };

  const clearCart = async () => {
    await axios.delete(`${backendURL}/api/cart`);
    setCart([]);
  };

  return (
    <AppContext.Provider value={{ userName, setUserName, products, cart, addToCart, getCart, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};
