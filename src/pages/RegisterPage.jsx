import React from 'react'
import { Link } from 'react-router-dom'
import { PawPrint } from 'lucide-react'

export default function RegisterPage(){
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-300 to-purple-400 overflow-hidden">
      
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

      <div className="bg-white p-8 rounded-2xl shadow max-w-md w-full relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-2xl font-extrabold">Adopt A Soul</h2>
        </div>
        <h3 className="text-lg font-semibold mb-4">Create account</h3>
        <form className="space-y-4">
          <input className="w-full px-4 py-2 border rounded" placeholder="Full name" />
          <input className="w-full px-4 py-2 border rounded" placeholder="Email" />
          <input className="w-full px-4 py-2 border rounded" placeholder="Password" />
          <button className="w-full py-2 bg-purple-600 text-white rounded">Sign Up</button>
        </form>
        <p className="text-sm mt-4">
          Already have an account? <Link to="/" className="text-purple-600">Login</Link>
        </p>
      </div>
    </div>
  )
}
