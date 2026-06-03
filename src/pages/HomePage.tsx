import { Link } from 'react-router-dom';
import type React from 'react';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative max-w-[1200px] mx-auto mt-[90px] px-10 pb-[120px] text-center z-[5]">
        <div
          className="text-[12px] uppercase tracking-[0.22em] text-accent font-semibold mb-6"
          style={{ animation: 'fadeUp 0.7s 0.2s both' }}
        >
          // Mathias Worm
        </div>

        <h1
          className="text-[clamp(38px,7vw,84px)] font-black leading-none tracking-[-0.02em] uppercase text-white mb-10"
          style={{ animation: 'fadeUp 0.8s 0.3s both' }}
        >
          I will help to build
          <br />
          your{' '}
          <span className="text-accent-amber block">Dream Project</span>
        </h1>

        <p
          className="text-[clamp(18px,2vw,22px)] font-bold leading-relaxed text-[#e5e5e5] max-w-[600px] mx-auto mb-9"
          style={{ animation: 'fadeUp 0.8s 0.45s both' }}
        >
          I design and build modern, clean
          <br />
          and effective digital products.
        </p>

        <div
          className="flex gap-3.5 justify-center items-center flex-wrap mb-6"
          style={{ animation: 'fadeUp 0.8s 0.55s both' }}
        >
          <Link
            to="/portfolio"
            className="bg-accent text-black px-6 py-3 text-sm font-semibold no-underline inline-flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(249,115,22,0.4)] hover:bg-[#fb923c]"
          >
            How I Work →
          </Link>
          <Link
            to="/about"
            className="text-accent no-underline font-semibold text-sm inline-flex items-center gap-1 transition-all duration-200 hover:gap-2"
          >
            Contact Me ↗
          </Link>
        </div>
      </section>


      <div
        className="absolute left-[6%] top-[380px] font-caveat pointer-events-none opacity-0 text-accent-amber text-[22px] font-semibold z-[10]"
        style={{ '--scribble-r': '-6deg', animation: 'scribbleIn 0.6s 1.2s forwards' } as React.CSSProperties}
      >
        ↪ let's build
      </div>
    </>
  );
}
