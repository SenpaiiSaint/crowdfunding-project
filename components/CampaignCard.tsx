"use client";

import { motion } from "framer-motion";

interface Campaign {
  id: string;
  title: string;
  description: string;
  goal: number;
  raised: number;
}

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-bold mb-2">{campaign.title}</h2>
      <p className="text-gray-600 mb-2">{campaign.description}</p>
      <p className="text-gray-600 mb-4">
        Raised{" "}
        <span className="font-semibold">${campaign.raised}</span> of{" "}
        <span className="font-semibold">${campaign.goal}</span>
      </p>
      <a
        href={`/campaign/${campaign.id}`}
        className="text-blue-600 hover:underline"
      >
        View Details
      </a>
    </motion.div>
  );
}
