function SectionHeading({ text1, text2 = "" }: { text1: string; text2: string }) {
  return (
    <div className="relative mb-8 py-4 border-l-4 border-tf-accent pl-6">
       {/* Faint background text for texture */}
      <span className="absolute -top-4 left-4 text-8xl font-black text-white/5 uppercase select-none pointer-events-none overflow-hidden h-24">
        {text1}
      </span>

      <h1 className="relative z-10 font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white">
        {text1} <span className="text-tf-accent">{text2}</span>
      </h1>
      
      {/* Subtitle or small tag */}
      <p className="text-sm font-mono text-white/60 mt-1 uppercase tracking-widest">
        IEEE Event 2025 // Official
      </p>
    </div>
  );
}

export default SectionHeading;