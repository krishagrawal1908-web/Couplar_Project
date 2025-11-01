import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:7001/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);

      if (res.data.role === "admin") navigate("/admin");
      else navigate("/student");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-gray-900">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transition-transform duration-300 hover:scale-[1.02]">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Welcome Back 👋
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          Login
        </button>

        <p className="text-center text-sm mt-4 text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-indigo-600 hover:underline cursor-pointer font-medium"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
