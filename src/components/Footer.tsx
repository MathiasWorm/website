import GitHubIcon from './icons/GitHubIcon';
import DiscordIcon from './icons/DiscordIcon';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-[#6b7280] text-sm">
      <div className="flex justify-center gap-4 mb-3">
        <a
          href="https://github.com/MathiasWorm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-[#6b7280] transition-colors duration-200 hover:text-accent"
        >
          <GitHubIcon className="w-5 h-5" />
        </a>
        <a
          href="https://discord.gg/yf2JvTz9"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          className="text-[#6b7280] transition-colors duration-200 hover:text-accent"
        >
          <DiscordIcon className="w-5 h-5" />
        </a>
      </div>
      © 2026 Mathias Worm — All Rights Reserved
    </footer>
  );
}
