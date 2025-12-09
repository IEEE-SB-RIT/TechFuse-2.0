import React from "react";

function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* 1. The Subtle Central Glow 
          - We place this BEHIND the grid so the lines look like they are illuminated.
          - Change '#3b82f6' (Blue) to your 'tf-accent' color if you have the hex code.
          - The opacity is set to '15' (very subtle).
      */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#3b82f615,transparent)]"></div>

      {/* 2. The Grid Pattern 
          - Changed bg-[size:24px_24px] to bg-[size:60px_60px] to make them further apart.
      */}
      <div
        className="absolute inset-0 h-full w-full 
        bg-[linear-gradient(to_right,#80808012_1.5px,transparent_1.5px),linear-gradient(to_bottom,#80808012_1.5px,transparent_1.5px)] 
        bg-[size:60px_60px]"
      ></div>

      {/* 3. The Vignette (Optional)
          - Darkens the edges to focus attention on the center
      */}
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-full w-full bg-transparent [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </div>
  );
}

export default GridBackground;
