import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { ProductInfo } from "./pages/ProductInfo";
import { Navbar } from "./components/Navbar";
import { AppProvider } from "./context/AppContext";
import { Login } from "./pages/Login";

function App() {
  const userName = localStorage.getItem("userName");

  return (
    <AppProvider>
      <Router>
        {!userName ? (
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        ) : (
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductInfo />} />
              </Routes>
            </div>
          </div>
        )}
      </Router>
    </AppProvider>
  );
}

export default App;
