import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        {/* Venue partner */}
        <div className="flex items-center justify-center gap-4 border-t py-6 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
          <span className="text-xs text-gray-500 uppercase tracking-wide">Hosted at</span>
          <a
            href="https://embassyofthefreemind.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/embassy-logo.png"
              alt="Embassy of the Free Mind"
              className="h-8 w-auto invert"
            />
          </a>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t py-8 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] sm:flex-row">
          <div className="flex items-center gap-4">
            <p className="text-sm text-indigo-200/80">
              A project by{" "}
              <a href="https://dereklomas.me" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">Derek Lomas</a>
              {" & "}
              <a href="https://envisioning.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">Zappa</a>
            </p>
            <a
              href="https://github.com/Embassy-of-the-Free-Mind/vibecodingevents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-200/60 hover:text-indigo-400 transition"
              title="View source on GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="/learn"
              className="text-indigo-200/80 transition hover:text-indigo-500"
            >
              Learn Claude Code
            </a>
            {[
              ["Source Library", "https://sourcelibrary.org"],
              ["PlayPower Learn", "https://playpowerlearn.com"],
            ].map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-200/80 transition hover:text-indigo-500"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
