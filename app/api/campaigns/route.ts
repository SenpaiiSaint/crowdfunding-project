import { NextResponse } from "next/server";
import campaigns from "@/data/simulatedCampaigns.json";

export async function GET() {
  return NextResponse.json(campaigns);
}
