import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PetCard from "../components/PetCard";
import SuccessStories from "../components/SuccessStories";
import { FaSearch } from "react-icons/fa";

// SAMPLE DATA
const SAMPLE_PETS = [
  {
    id: 1,
    name: 'Milo',
    breed: 'Beagle',
    age: '2 yrs',
    tags: ['calm', 'apartment-friendly', 'kid-friendly'],
    ngo: 'Paws Delhi',
    urgent: true,
    liked: false,
    image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=60',
    desc: 'Loves short walks, good with kids and other dogs. Healthy and vaccinated.'
  },
  {
    id: 2,
    name: 'Luna',
    breed: 'Indian Pariah',
    age: '1.5 yrs',
    tags: ['energetic', 'outdoor-lover'],
    ngo: 'City Shelter',
    urgent: false,
    liked: false,
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=60',
    desc: 'Playful and curious. Needs a family who loves outdoor activities.'
  },
  {
    id: 3,
    name: 'Simba',
    breed: 'Mixed',
    age: '4 yrs',
    tags: ['calm', 'elder-friendly', 'trained'],
    ngo: 'Happy Tails',
    urgent: false,
    liked: false,
    image: 'https://images.unsplash.com/photo-1507149833265-60c372daea22?auto=format&fit=crop&w=800&q=60',
    desc: 'Calm elder dog who enjoys sunbathing and short strolls.'
  },
  {
    id: 4,
    name: 'Chai',
    breed: 'Labrador mix',
    age: '3 yrs',
    tags: ['friendly', 'trainable', 'active'],
    ngo: 'Paws Delhi',
    urgent: true,
    liked: false,
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=60',
    desc: 'High energy. Great companion for runners and active families.'
  }
];

const SAMPLE_STORIES = [
  { id: 1, name: 'Rhea & Koko', message: 'Koko brings so much joy. Adoption was smooth and the NGO helped a lot.', image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=60' },
  { id: 2, name: 'Aman & Bella', message: 'Bella is now part of our family — loving her every day!', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=60' },
  { id: 3, name: 'Sana & Bruno', message: 'Bruno adapted to apartment life quickly.', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=60' }
];

export default function LandingPage() {
  const [pets, setPets] = useState(SAMPLE_PETS);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPet, setSelectedPet] = useState(null);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: "kyc", text: "KYC incomplete — complete now to speed up adoption", read: false },
    { id: 2, type: "message", text: "New message from Paws Delhi", read: false },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  function markAllRead() {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  }

  const q = searchTerm.trim().toLowerCase();
  const filteredPets = pets.filter(p =>
    [p.name, p.breed, p.ngo, p.tags.join(" ")].some(field =>
      field.toLowerCase().includes(q)
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-blue-100 to-white">
      
      <Navbar
        unreadCount={unreadCount}
        notifOpen={notifOpen}
        setNotifOpen={setNotifOpen}
        notifications={notifications}
        markAllRead={markAllRead}
        profileOpen={profileOpen}
        setProfileOpen={setProfileOpen}
      />

      <main className="max-w-7xl mx-auto px-6 py-24">
        {/* HERO */}
        <section id="home" className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
            Find Your Perfect <span className="text-blue-500">Companion</span>
          </h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Connect with loving pets in Delhi NCR. Our smart matching helps you find the perfect furry friend.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <a href="#featured" className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow">Adopt Now</a>
            <button className="px-5 py-3 bg-green-400 text-white rounded-xl shadow">Foster</button>
            <button className="px-5 py-3 bg-yellow-400 text-white rounded-xl shadow">Donate</button>
            <button className="px-5 py-3 bg-white border border-yellow-200 rounded-xl shadow">Volunteer</button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-4 bg-white rounded-2xl shadow text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center">⚡</div>
              <h4 className="mt-3 font-semibold text-sm">Smart Matching</h4>
              <p className="mt-1 text-xs text-gray-400">AI matches you with compatible pets in Delhi</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-50 flex items-center justify-center">💬</div>
              <h4 className="mt-3 font-semibold text-sm">Real-time Chat</h4>
              <p className="mt-1 text-xs text-gray-400">Connect instantly with Delhi shelters</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-yellow-50 flex items-center justify-center">💛</div>
              <h4 className="mt-3 font-semibold text-sm">Transparent Donations</h4>
              <p className="mt-1 text-xs text-gray-400">Track how your rupees help pets</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center">🤝</div>
              <h4 className="mt-3 font-semibold text-sm">Volunteer Network</h4>
              <p className="mt-1 text-xs text-gray-400">Join Delhi's animal lover community</p>
            </div>
          </div>
        </section>

        {/* FEATURED PETS */}
        <section id="featured" className="mt-12">
          <h2 className="text-2xl font-bold text-center">Featured Pets</h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <input
                className="px-4 py-2 w-64 text-sm"
                placeholder="Search pets, breeds, tags or NGO..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="px-3"><FaSearch /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.map(pet => (
              <PetCard
                key={pet.id}
                pet={pet}
                toggleLike={(id) =>
                  setPets(prev => prev.map(p => p.id === id ? { ...p, liked: !p.liked } : p))
                }
                openModal={(pet) => setSelectedPet(pet)}
              />
            ))}
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <SuccessStories stories={SAMPLE_STORIES} />

        {/* PET PROFILE MODAL */}
        {selectedPet && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={() => setSelectedPet(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-48 h-48 rounded-lg overflow-hidden">
                  <img
                    src={selectedPet.image}
                    alt={selectedPet.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">
                    {selectedPet.name}{" "}
                    <span className="text-sm text-gray-400">• {selectedPet.age}</span>
                  </h3>
                  <div className="text-sm text-gray-500">
                    {selectedPet.breed} • <span className="italic">{selectedPet.ngo}</span>
                  </div>
                  <p className="mt-4 text-gray-600">{selectedPet.desc}</p>
                  <div className="mt-6 flex gap-3">
                    <button className="px-5 py-2 rounded-lg bg-blue-500 text-white">Apply to Adopt</button>
                    <button className="px-5 py-2 rounded-lg border">Message NGO</button>
                    <button
                      className="px-5 py-2 rounded-lg bg-gray-100"
                      onClick={() => setSelectedPet(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <footer className="mt-20 py-8 text-center text-gray-500">© {new Date().getFullYear()} Shelter Soul — Built with ❤</footer>


      </main>
    </div>
  );
}
