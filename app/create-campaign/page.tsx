"use client";

import { motion } from "framer-motion";
import CampaignForm from "@/components/CampaignForm";

export default function CreateCampaignPage() {
  return (
    <motion.div
      className="min-h-screen p-8 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">Create a New Campaign</h1>
      <CampaignForm />
    </motion.div>
  );
}
