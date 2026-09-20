"use client";
import { useState, useEffect } from "react";

export default function CallPopup({ phone, brand, area }: any) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999] p-4">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center relative shadow-2xl">
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-4 text-3xl text-gray-500"
        >
          ×
        </button>

        <h3 className="text-2xl font-bold">Need {brand} Service in {area}?</h3>
        <p className="mt-2 text-gray-600">Expert technician is near you. Call now, 60 mins me service!</p>

        <a
          href={`tel:${phone}`}
          className="block mt-6 bg-green-600 text-white py-4 rounded-full font-bold text-xl"
        >
          📞 CALL {phone}
        </a>

        <a
          href={`https://wa.me/91${phone}`}
          className="block mt-3 bg-gray-100 py-3 rounded-full font-bold"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
