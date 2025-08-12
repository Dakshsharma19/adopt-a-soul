import React from "react";
import { FaHeart } from "react-icons/fa";

export default function PetCard({ pet, toggleLike, openModal }) {
  return (
    <article className="bg-white rounded-2xl shadow p-0 overflow-hidden">
      <div className="relative">
        <img src={pet.image} alt={pet.name} className="w-full h-56 object-cover" />

        {pet.urgent && (
          <div className="absolute top-3 left-3 bg-gradient-to-tr from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
            Urgent
          </div>
        )}

        <button
          onClick={() => toggleLike(pet.id)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white shadow"
        >
          {pet.liked ? (
            <FaHeart className="w-5 h-5 text-red-500" />
          ) : (
            <FaHeart className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              {pet.name} <span className="text-sm text-gray-400">• {pet.age}</span>
            </h3>
            <div className="text-sm text-gray-500">
              {pet.breed} • <span className="italic">{pet.ngo}</span>
            </div>
          </div>
          <div className="text-right">
            <button
              onClick={() => openModal(pet)}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-semibold"
            >
              View profile
            </button>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {pet.tags.map((t, i) => (
            <span
              key={i}
              className={`text-xs px-2 py-1 rounded-full ${tagColor(t)}`}
            >
              {t}
            </span>
          ))}
        </div>

        <p className="mt-3 text-sm text-gray-600 truncate">{pet.desc}</p>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div>
            NGO: <span className="font-medium text-gray-700">{pet.ngo}</span>
          </div>
          <div>
            Breed: <span className="font-medium text-gray-700">{pet.breed}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

// Move this helper function here so PetCard works independently
function tagColor(tag) {
  const t = tag.toLowerCase();
  if (t.includes("calm")) return "bg-blue-100 text-blue-800";
  if (t.includes("apartment")) return "bg-indigo-100 text-indigo-800";
  if (t.includes("kid") || t.includes("friendly")) return "bg-green-100 text-green-800";
  if (t.includes("energetic") || t.includes("active")) return "bg-yellow-100 text-yellow-800";
  return "bg-gray-100 text-gray-800";
}
