import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    localStorage.setItem("userName", name);
    navigate("/"); // redirect to homepage
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg p-6 rounded-lg w-full max-w-sm"
      >
        <h1
        className="bagel flex justify-center align-center mb-4 text-2xl font-bold text-black cursor-pointer"
      >
        Vibe Commerce
      </h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="border p-2 w-full rounded mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-yellow-300 text-blue-600 font-semibold py-2 rounded hover:bg-yellow-400"
          onClick={()=> {
            window.location.reload()
            navigate("/")
          }}
        >
          Enter Shop
        </button>
      </form>
    </div>
  );
};
