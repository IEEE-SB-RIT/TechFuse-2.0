function SubHeading({ title }: { title: string }) {
  return (
    <div className="relative inline-block mb-6 group">
      <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-wider text-white flex items-center gap-3">
        {/* 1. The Decorative "Chip" (Visual Anchor) */}
        <span className="w-2 h-6 bg-[#66FFFF] shadow-[0_0_15px_rgba(102,255,255,0.6)] rounded-sm transform skew-x-[-12deg]"></span>
        
        {/* The Title Text */}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            {title}
        </span>
      </h3>

      {/* 2. The "Signal Beam" Underline (Fades out) */}
      <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-[#66FFFF] via-[#66FFFF]/50 to-transparent"></div>
      
      {/* 3. Optional: A secondary decorative bit for asymmetrical balance */}
      <div className="absolute -bottom-2 left-0 w-1/3 h-[2px] bg-[#66FFFF] shadow-[0_0_10px_#66FFFF]"></div>
    </div>
  );
}

export default SubHeading;