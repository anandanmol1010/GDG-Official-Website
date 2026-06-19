import React from "react";
import Legacy from "../components/Legacy";
import Footer from "../components/Footer";
import ScrollProgressBar from "../components/ScrollProgressBar";
import CursorTrail from "../components/ui/CursorTrail";

const LegacyPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollProgressBar />
      <CursorTrail />
      <Legacy />
      <Footer />
    </div>
  );
};

export default LegacyPage;
