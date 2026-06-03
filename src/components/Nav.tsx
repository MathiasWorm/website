import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import DiscordIcon from './icons/DiscordIcon';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  function handleButtonKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      setTimeout(() => {
        const items = menuRef.current?.querySelectorAll('[role="menuitem"]') as NodeListOf<HTMLElement>;
        items?.[0]?.focus();
      }, 0);
    }
  }

  function handleMenuKeyDown(e: React.KeyboardEvent) {
    const items = Array.from(
      menuRef.current?.querySelectorAll('[role="menuitem"]') ?? []
    ) as HTMLElement[];
    if (!items.length) return;
    const index = items.indexOf(document.activeElement as HTMLElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      items[(index + 1) % items.length].focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      items[(index - 1 + items.length) % items.length].focus();
    } else if (e.key === 'Tab') {
      setOpen(false);
    }
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <nav className="sticky top-5 z-[200] max-w-[1100px] mx-auto mt-5 bg-[#111] border border-white/8 px-[22px] py-[10px] flex items-center justify-between gap-[18px] animate-[pillIn_0.6s_cubic-bezier(.2,.8,.3,1)_both]">
      {/* Left */}
      <div className="flex items-center gap-[14px]">
        <Link
          to="/"
          className="font-black text-[17px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-accent"
        >
          MW<span className="text-accent">DI</span>
        </Link>

        <ul className="flex gap-1 items-center list-none">
          {[
            { href: 'https://www.linkedin.com/in/mathias-worm-0a72101b5', label: 'LinkedIn', Icon: LinkedInIcon },
            { href: 'https://github.com/MathiasWorm', label: 'GitHub', Icon: GitHubIcon },
            { href: 'https://discord.gg/RDk2UGcQ97', label: 'Discord', Icon: DiscordIcon },
          ].map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-7 h-7 flex items-center justify-center text-[#d4d4d4] no-underline transition-all duration-200 hover:text-accent hover:bg-accent/10 hover:-translate-y-0.5"
              >
                <Icon className="w-[14px] h-[14px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right */}
      <div className="flex items-center gap-[22px]">
        {/* Dropdown */}
        <div ref={ddRef} className="relative">
          <button
            onClick={() => setOpen((o) => !o)}
            onKeyDown={handleButtonKeyDown}
            aria-haspopup="menu"
            aria-expanded={open}
            aria-controls="resources-menu"
            className="text-[#e5e5e5] text-[14px] font-medium inline-flex items-center gap-1 bg-none border-none cursor-pointer font-sans transition-colors duration-200 hover:text-accent"
          >
            Resources
            <svg
              className={`w-[11px] h-[11px] stroke-current fill-none transition-transform duration-[250ms] ${open ? 'rotate-180' : ''}`}
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <div
            ref={menuRef}
            id="resources-menu"
            role="menu"
            onKeyDown={handleMenuKeyDown}
            className={`absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 bg-[#111] border border-white/8 p-1.5 min-w-[160px] z-[100] shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-200 ${
              open
                ? 'opacity-100 pointer-events-auto translate-y-0 scale-100'
                : 'opacity-0 pointer-events-none -translate-y-1.5 scale-[0.97]'
            }`}
          >
            <Link role="menuitem" to="/portfolio" onClick={() => setOpen(false)} className="block px-[14px] py-[9px] text-[#d4d4d4] text-[14px] no-underline transition-all duration-150 hover:bg-accent/10 hover:text-accent">Projects</Link>
            <a role="menuitem" href="#blog" onClick={() => setOpen(false)} className="block px-[14px] py-[9px] text-[#d4d4d4] text-[14px] no-underline transition-all duration-150 hover:bg-accent/10 hover:text-accent">Blog</a>
          </div>
        </div>

        <Link to="/about" className="text-[#e5e5e5] text-[14px] font-medium no-underline transition-colors duration-200 hover:text-accent">About</Link>
        <Link to="/about" className="text-accent text-[14px] font-semibold no-underline transition-colors duration-200">Contact</Link>
      </div>
    </nav>
  );
}
