"use client";
import { useEffect, useState } from "react";

export default function WelcomeWrapper({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (show) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#FF6B00] flex flex-col items-center justify-center text-white">
        {/* Chimney Logo */}
        <div className="mb-6 animate-bounce">
          <svg width="110" height="130" viewBox="0 0 120 140" fill="none">
            <path d="M20 70 L100 70 L100 80 L20 80 Z M25 80 L95 80 L95 130 Q60 120 25 130 Z" fill="white"/>
            <path d="M30 60 L90 60 L90 70 L30 70 Z" fill="white"/>
            <path d="M45 50 Q55 30 65 10 Q70 25 55 50 M35 55 Q45 35 50 20 Q40 35 35 55 M75 55 Q85 35 90 20 Q80 35 75 55" fill="white"/>
          </svg>
        </div>

        <h1 className="text-[32px] font-extrabold text-center leading-tight">
          Welcome to<br/>Service Center
        </h1>
        <p className="mt-3 text-[18px] font-medium">
          Chimney Service or Repair
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
