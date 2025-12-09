import { useEffect, useRef } from "react";

function SignalDetected({ mount }: { mount: boolean }) {
  const textRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      containerRef.current?.classList.replace("bg-black", "bg-[#0C143B]/80");
      if (textRef.current) {
        textRef.current.textContent = "Signal Detected";
      }
    }, 3000);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`
        mb-8 flex items-center gap-3 px-4 py-2 rounded-full
        border border-[#66FFFF]/30 bg-black backdrop-blur-md
        transition-opacity transition-transform duration-700
        ${mount ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute h-full w-full rounded-full bg-[#66FFFF] opacity-75"></span>
        <span className="relative rounded-full h-2 w-2 bg-[#66FFFF]"></span>
      </span>

      <span
        ref={textRef}
        className="font-mono text-xs text-[#66FFFF] tracking-[0.2em] uppercase"
      >
        Initializing...
      </span>
    </div>
  );
}

export default SignalDetected;
