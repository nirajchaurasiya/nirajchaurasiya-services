"use client";
import Review from "@/components/Review";
import ServicesCard from "@/components/ServicesCard";
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.title =
      "Service Page / Explore a wide range of website categories offered by Niraj Chaurasiya's services!";
  }, []);
  return (
    <div className="min-h-screen">
      <ServicesCard />
      <Review />
    </div>
  );
}
