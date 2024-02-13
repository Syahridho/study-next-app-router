"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/revalidate?tag=products&secret=ridho123`,
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("revalidate failde");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate Success");
      }
    }
  };

  return (
    <div className="w-3/6 h-96 bg-slate-300 rounded flex justify-center items-center mr-4">
      <h1>{status}</h1>
      <button
        className="bg-black text-white px-2 py-1 m-5"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
