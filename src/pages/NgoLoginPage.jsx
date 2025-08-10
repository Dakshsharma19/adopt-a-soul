import React from 'react'
import { Link } from 'react-router-dom'
export default function NgoLoginPage(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-teal-300 to-cyan-400">
      <div className="bg-white p-8 rounded-2xl shadow max-w-md w-full">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-2xl font-extrabold">Adopt A Soul — NGO</h2>
        </div>
        <form className="space-y-4">
          <input className="w-full px-4 py-2 border rounded" placeholder="Organization name or email" />
          <input  type="password" className="w-full px-4 py-2 border rounded" placeholder="Password" />
          <button className="w-full py-2 bg-orange-500 text-white rounded">Login as NGO</button>
        </form>
        <p className="text-sm mt-4"><Link to="/" className="text-purple-600">Back to user login</Link></p>
      </div>
    </div>
  )
}
