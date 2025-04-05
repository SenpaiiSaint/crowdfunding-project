"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CampaignForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd post this to an API route
    console.log({ title, description, goal });
    alert("Campaign created (simulated)!");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-lg bg-white p-6 rounded shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4">
        <label className="block font-semibold mb-1">Campaign Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Goal ($):</label>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(Number(e.target.value))}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Create Campaign
      </button>
    </motion.form>
  );
}
