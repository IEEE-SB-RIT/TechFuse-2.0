export default function BgComp() {
  return (
    <>
      {/* 1. Radar Grid */}
      <div className="absolute inset-0 bg-radar-grid pointer-events-none" />

      {/* 2. Scanning Line (The "Search" for signals) */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#66FFFF]/5 to-transparent h-full w-full animate-scanline pointer-events-none" />

      {/* 3. Glowing Core (Behind the logo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#66FFFF]/10 rounded-full blur-[100px] animate-signal pointer-events-none" />
    </>
  );
}
