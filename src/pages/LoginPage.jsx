import React from "react";
import { PawPrint } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Here you would normally validate the user's email/password.
    // For now, we’ll just redirect to landing page after "login".
    navigate("/home");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 animate-gradient-xy overflow-hidden">
      {/* Floating Paw Prints */}
      {[...Array(8)].map((_, i) => (
        <PawPrint
          key={i}
          className="absolute text-white opacity-20 animate-float"
          style={{
            top: `${(i * 13) % 100}%`,
            left: `${(i * 37) % 100}%`,
            transform: `scale(${(i % 3) * 0.5 + 0.6})`,
          }}
          size={40}
        />
      ))}

      {/* Login Card */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-8 transform transition-all duration-500 hover:scale-[1.02] z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <PawPrint className="text-purple-600" size={34} />
          <h1 className="text-3xl font-extrabold tracking-wide text-purple-700">Adopt A Soul</h1>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Login
          </button>

          <Link to="/ngo-login" className="block">
            <button
              type="button"
              className="w-full py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Login as NGO
            </button>
          </Link>

          <div className="flex items-center justify-between gap-2 mt-2">
            <p className="text-sm">Don't have an account?</p>
            <Link to="/register" className="text-sm text-purple-600 hover:underline">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
