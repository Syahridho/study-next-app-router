"use client";
import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1 className="text-center">template{state}</h1>
      <button className="text-center" onClick={() => setState(state + 1)}>
        klik
      </button>
      {children}
    </div>
  );
}
