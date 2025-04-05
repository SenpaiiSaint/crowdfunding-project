"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Campaign {
  id: string;
  title: string;
  description: string;
  goal: number;
  raised: number;
}

export default function CampaignPage({ params }: { params: { id: string } }) {
  const [campaign, setCampaign] = useState<Campaign | null>(null);

  useEffect(() => {
    fetch("/api/campaigns")
      .then((res) => res.json())
      .then((campaigns: Campaign[]) => {
        const found = campaigns.find((c) => c.id === params.id);
        setCampaign(found ?? null);
      });
  }, [params.id]);

  if (!campaign)
    return (
      <motion.div
        className="p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Loading...
      </motion.div>
    );

  return (
    <motion.div
      className="min-h-screen p-8 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4">{campaign.title}</h1>
      <p className="mb-4">{campaign.description}</p>
      <p className="mb-4">
        Raised <span className="font-semibold">${campaign.raised}</span> of{" "}
        <span className="font-semibold">${campaign.goal}</span>
      </p>
    </motion.div>
  );
}
