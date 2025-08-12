import React from "react";
import { FaBell, FaHeart, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Navbar({
  unreadCount,
  notifOpen,
  setNotifOpen,
  notifications,
  markAllRead,
  profileOpen,
  setProfileOpen
}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 bg-white/20 backdrop-blur-md rounded-b-xl shadow-md px-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/70 rounded-full shadow-sm">
              {/* logo - paw */}
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13c-3.5 0-6.5 2-6.5 4.5S8.5 22 12 22s6.5-1.5 6.5-4.5S15.5 13 12 13z"
                  fill="#34D399"
                />
                <path
                  d="M7.5 6.5a1.9 1.9 0 11-3.8 0 1.9 1.9 0 013.8 0zM12 4.2a2.2 2.2 0 110 4.4 2.2 2.2 0 010-4.4zM18.3 6.5a1.9 1.9 0 11-3.8 0 1.9 1.9 0 013.8 0z"
                  fill="#60A5FA"
                />
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold">Shelter Soul</div>
              <div className="text-xs text-gray-500">Find. Foster. Love.</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#featured" className="hover:text-blue-600">Adopt</a>
            <a href="#donate" className="hover:text-blue-600">Donate</a>
            <a href="#dashboard" className="hover:text-blue-600">Dashboard</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Notification bell */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen(v => !v)}
                className="relative p-2 rounded-lg hover:bg-white/60"
              >
                <FaBell className="w-5 h-5 text-gray-600" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {notifOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-semibold">Notifications</div>
                    <button
                      className="text-xs text-blue-600"
                      onClick={markAllRead}
                    >
                      Mark all read
                    </button>
                  </div>
                  <div className="divide-y">
                    {notifications.map(n => (
                      <div
                        key={n.id}
                        className={`py-2 text-sm ${n.read ? 'text-gray-500' : 'text-gray-800'}`}
                      >
                        <div className="font-medium">{n.text}</div>
                        <div className="text-xs text-gray-400">
                          {n.type.toUpperCase()}
                        </div>
                      </div>
                    ))}
                    {notifications.length === 0 && (
                      <div className="py-2 text-sm text-gray-500">
                        No notifications
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(v => !v)}
                className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-white/60"
              >
                <div className="w-9 h-9 bg-gradient-to-br from-blue-200 to-green-200 rounded-full flex items-center justify-center text-sm font-semibold">
                  DS
                </div>
                <div className="hidden sm:block text-sm">Daksh</div>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg p-3">
                  <a className="block py-2 text-sm">Profile</a>
                  <a className="block py-2 text-sm">My Adoptions</a>
                  <a className="block py-2 text-sm">Settings</a>
                  <div className="border-t mt-2 pt-2">
                    <button className="w-full text-left text-sm text-red-500">Logout</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
