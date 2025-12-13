"use client";

import { useEffect, useState } from "react";

function SignalDetected() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        mb-8 flex items-center gap-3 px-4 py-2 rounded-full
        border border-[#66FFFF]/30 backdrop-blur-md
        transition-colors duration-700
        animate-fade-in-up
        ${loaded ? "bg-[#0C143B]/80" : "bg-black"}
      `}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute h-full w-full rounded-full bg-[#66FFFF] opacity-75"></span>
        <span className="relative rounded-full h-2 w-2 bg-[#66FFFF]"></span>
      </span>

      <span className="font-mono text-xs text-[#66FFFF] tracking-[0.2em] uppercase">
        {loaded ? "Connected" : "Initializing..."}
      </span>
    </div>
  );
}

export default SignalDetected;
