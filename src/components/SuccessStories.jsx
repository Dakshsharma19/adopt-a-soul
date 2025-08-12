import React from "react";
import { motion } from "framer-motion";

export default function SuccessStories({ stories }) {
  return (
    <section id="stories" className="mt-12 bg-gradient-to-b from-white to-green-50 py-12 rounded-2xl">
      <h2 className="text-2xl font-bold text-center">Success Stories</h2>
      <p className="text-center text-sm text-gray-500 mt-2">Real families. Real happiness.</p>

      <div className="mt-6 flex items-center justify-center overflow-x-auto gap-6 px-6 py-4">
        {stories.map((s, idx) => (
          <motion.div
            key={s.id}
            className="bg-white rounded-2xl shadow-lg w-72 flex-shrink-0"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + idx * 0.6, repeat: Infinity }}
          >
            <img src={s.image} alt={s.name} className="w-full h-44 object-cover rounded-t-2xl" />
            <div className="p-4 text-center">
              <div className="font-semibold">{s.name}</div>
              <div className="text-sm text-gray-600 mt-2">{s.message}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
