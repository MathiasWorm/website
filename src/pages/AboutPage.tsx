import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <section className="max-w-[820px] mx-auto mt-20 px-10 relative z-[5] pb-20">
      <div
        className="text-[12px] uppercase tracking-[0.22em] text-accent font-semibold mb-4"
        style={{ animation: 'fadeUp 0.7s 0.1s both' }}
      >
        // About
      </div>

      <h1
        className="text-[clamp(40px,6vw,72px)] font-black leading-none tracking-[-0.02em] uppercase text-white mb-8"
        style={{ animation: 'fadeUp 0.7s 0.2s both' }}
      >
        About Me
      </h1>

      <p
        className="text-[18px] font-medium text-[#d4d4d4] mb-5 max-w-[660px]"
        style={{ animation: 'fadeUp 0.7s 0.3s both' }}
      >
        Hello! I'm a digital creator who enjoys developing interactive experiences, games, and tools.
        I focus on clean design, simple user experiences, and efficient development.
      </p>

      <p
        className="text-[18px] font-medium text-[#d4d4d4] mb-5 max-w-[660px]"
        style={{ animation: 'fadeUp 0.7s 0.35s both' }}
      >
        My work spans web development, UI/UX design, automation, and game tooling.
        I'm always exploring new technologies and striving to build meaningful projects.
      </p>

      <p
        className="text-[18px] font-medium text-[#d4d4d4] mb-5 max-w-[660px]"
        style={{ animation: 'fadeUp 0.7s 0.4s both' }}
      >
        Outside of work, I enjoy tech innovation, game development, and learning new skills.
      </p>

      <div
        className="flex gap-4 items-center flex-wrap mt-9"
        style={{ animation: 'fadeUp 0.7s 0.5s both' }}
      >
        <a
          href="mailto:info@mathiasworm.de"
          className="bg-accent text-black rounded-full px-6 py-3 text-sm font-semibold no-underline inline-flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(249,115,22,0.4)] hover:bg-[#fb923c]"
        >
          Get in touch →
        </a>
        <Link
          to="/portfolio"
          className="text-accent no-underline font-semibold text-sm inline-flex items-center gap-1 transition-all duration-200 hover:gap-2"
        >
          See my work ↗
        </Link>
      </div>
    </section>
  );
}
