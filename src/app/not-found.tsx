import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-tf-bg text-center">
      <div className="animate-float" aria-hidden="true">
        <h1 className="text-9xl font-bold text-tf-accent drop-shadow-[0_0_15px_rgba(102,255,255,0.5)]">
          404
        </h1>
      </div>
      
      <div className="space-y-6 px-4">
        <h2 className="text-3xl font-display font-semibold text-white tracking-wide">
          Page Not Found
        </h2>
        <p className="max-w-md text-gray-400 text-lg">
          The coordinates you're looking for seem to be off the map.
          Let's get you back on track.
        </p>
        
        <div className="mt-8">
          <Link 
            href="/"
            aria-label="Return to Homepage"
            className="inline-block px-8 py-3 bg-tf-accent/10 border border-tf-accent/50 text-tf-accent hover:bg-tf-accent/20 hover:text-white transition-all duration-300 rounded-lg font-medium tracking-wide uppercase text-sm backdrop-blur-sm shadow-[0_0_15px_rgba(102,255,255,0.1)] hover:shadow-[0_0_20px_rgba(102,255,255,0.3)]"
          >
            Return to Base
          </Link>
        </div>
      </div>

      {/* Background Decor - Optional Scanline effect from globals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20" aria-hidden="true">
        <div className="animate-scanline h-full w-full bg-gradient-to-b from-transparent via-tf-accent/10 to-transparent" />
      </div>
    </main>
  );
}
