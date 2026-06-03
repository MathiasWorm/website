const projects = [
  {
    num: '01',
    title: 'Project One',
    description: 'A short description of your project. Explain what it does and why it\'s cool.',
    href: '#',
  },
  {
    num: '02',
    title: 'Project Two',
    description: 'Describe another interesting project. Include your technologies used.',
    href: '#',
  },
  {
    num: '03',
    title: 'Project Three',
    description: 'Another project card. You can add more of these as needed.',
    href: '#',
  },
];

export default function PortfolioPage() {
  return (
    <section className="max-w-[1100px] mx-auto mt-20 px-10 relative z-[5] pb-20">
      <div
        className="text-[12px] uppercase tracking-[0.22em] text-accent font-semibold mb-4"
        style={{ animation: 'fadeUp 0.7s 0.1s both' }}
      >
        // Selected work
      </div>

      <h1
        className="text-[clamp(40px,6vw,72px)] font-black leading-none tracking-[-0.02em] uppercase text-white mb-8"
        style={{ animation: 'fadeUp 0.7s 0.2s both' }}
      >
        My Projects
      </h1>

      <p
        className="text-[18px] font-medium text-[#d4d4d4]"
        style={{ animation: 'fadeUp 0.7s 0.3s both' }}
      >
        A collection of digital products, experiences and tools I've designed and built.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-12">
        {projects.map((project, i) => (
          <article
            key={project.num}
            className="relative bg-[#0a0a0a] border border-white/8 px-6 pb-6 pt-7 overflow-hidden transition-all duration-300 ease-[cubic-bezier(.2,.8,.3,1)] hover:-translate-y-1.5 hover:border-accent/40 hover:bg-[#111] group"
            style={{ animation: `cardIn 0.6s ${0.4 + i * 0.1}s both` }}
          >
            {/* Accent line on hover */}
            <div className="absolute top-0 left-6 h-0.5 w-0 bg-accent transition-all duration-[400ms] group-hover:w-10" />

            <div className="absolute top-[18px] right-[22px] text-[13px] font-semibold text-accent tracking-[0.05em]">
              {project.num}
            </div>

            <h3 className="text-[22px] font-extrabold text-white mt-2 mb-3 tracking-[-0.01em]">
              {project.title}
            </h3>
            <p className="text-sm text-[#a3a3a3] mb-5 leading-relaxed">
              {project.description}
            </p>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm no-underline transition-all duration-200 hover:gap-2.5"
            >
              View Project →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
