"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Starfield component
function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create stars
    const stars: { x: number; y: number; size: number; speed: number; opacity: number; twinkleSpeed: number; twinkleOffset: number }[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    // Shooting stars
    const shootingStars: { x: number; y: number; length: number; speed: number; opacity: number; active: boolean }[] = [];

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      // Draw stars with twinkle
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset) * 0.5 + 0.5;
        const opacity = star.opacity * (0.5 + twinkle * 0.5);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 250, 240, ${opacity})`;
        ctx.fill();

        // Glow for larger stars
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
          gradient.addColorStop(0, `rgba(255, 200, 100, ${opacity * 0.3})`);
          gradient.addColorStop(1, "transparent");
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Slow drift
        star.y += star.speed;
        if (star.y > canvas.height + 10) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }
      });

      // Random shooting star
      if (Math.random() < 0.003 && shootingStars.filter(s => s.active).length < 2) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 6,
          opacity: 1,
          active: true,
        });
      }

      // Draw shooting stars
      shootingStars.forEach((star, i) => {
        if (!star.active) return;

        const gradient = ctx.createLinearGradient(
          star.x, star.y,
          star.x - star.length, star.y - star.length * 0.5
        );
        gradient.addColorStop(0, `rgba(255, 220, 150, ${star.opacity})`);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.length, star.y - star.length * 0.5);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        star.x += star.speed;
        star.y += star.speed * 0.5;
        star.opacity -= 0.02;

        if (star.opacity <= 0 || star.x > canvas.width + 100) {
          shootingStars.splice(i, 1);
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}

// Magical cursor trail
function MagicCursor() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; opacity: number; hue: number }[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let throttle = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - throttle < 30) return;
      throttle = now;

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 5) {
        const newParticle = {
          id: idRef.current++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 8 + 4,
          opacity: 1,
          hue: Math.random() * 60 + 20, // gold to amber range
        };
        setParticles((prev) => [...prev.slice(-20), newParticle]);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, opacity: p.opacity - 0.05, size: p.size * 0.95 }))
          .filter((p) => p.opacity > 0)
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.x - p.size / 2,
            top: p.y - p.size / 2,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, hsla(${p.hue}, 100%, 70%, ${p.opacity}) 0%, transparent 70%)`,
            boxShadow: `0 0 ${p.size * 2}px hsla(${p.hue}, 100%, 60%, ${p.opacity * 0.5})`,
          }}
        />
      ))}
    </div>
  );
}

// Floating orbs
function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute w-[500px] h-[500px] -top-48 -left-48 rounded-full bg-purple-600/10 blur-[100px] animate-float-slow" />
      <div className="absolute w-[400px] h-[400px] top-1/2 -right-32 rounded-full bg-amber-500/10 blur-[80px] animate-float-slower" />
      <div className="absolute w-[300px] h-[300px] -bottom-24 left-1/3 rounded-full bg-pink-500/10 blur-[60px] animate-float-medium" />
    </div>
  );
}

export default function Workshop() {
  const [path, setPath] = useState<"workshop" | "own">("workshop");

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050510]">
      {/* Magical backgrounds */}
      <Starfield />
      <FloatingOrbs />
      <MagicCursor />

      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[#050510]/50 to-[#050510] pointer-events-none z-[1]" />

      <div className="relative z-10 mx-auto max-w-xl px-6 py-12 sm:py-16">

        {/* Back link */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-amber-200/50 hover:text-amber-200 transition-all mb-12"
        >
          <svg className="group-hover:-translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to event
        </Link>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 pb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400/50" />
            <span className="text-amber-300/80 text-sm tracking-widest uppercase animate-pulse-slow">Your Guide</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400/50" />
          </div>
          <h1 className="font-playfair text-5xl sm:text-6xl font-semibold italic text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400/80 mb-4 drop-shadow-[0_0_30px_rgba(251,191,36,0.3)] animate-glow">
            The Workshop
          </h1>
          <p className="text-xl text-amber-100/50">
            Describe what you want. Watch it appear.
          </p>
        </div>

        {/* Path chooser */}
        <div className="mb-12">
          <p className="text-center text-sm text-gray-500 mb-4">How are you connecting?</p>
          <div className="flex gap-3">
            {[
              { id: "workshop" as const, icon: "☁", label: "Workshop Server" },
              { id: "own" as const, icon: "💻", label: "Own Computer" },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setPath(opt.id)}
                className={`flex-1 py-5 px-4 rounded-2xl border transition-all duration-500 text-center relative overflow-hidden group ${
                  path === opt.id
                    ? "bg-gradient-to-b from-amber-900/40 to-amber-950/60 border-amber-500/40 shadow-[0_0_40px_rgba(251,191,36,0.15),inset_0_1px_0_rgba(255,255,255,0.1)]"
                    : "bg-gray-900/20 border-gray-800/50 hover:border-gray-700 hover:bg-gray-900/40"
                }`}
              >
                {path === opt.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent" />
                )}
                <div className={`text-3xl mb-2 transition-transform duration-300 ${path === opt.id ? "scale-110" : "group-hover:scale-105"}`}>
                  {opt.icon}
                </div>
                <div className={`font-medium text-sm relative z-10 ${path === opt.id ? "text-amber-100" : "text-gray-400"}`}>
                  {opt.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Encouragement post-it */}
        <PostIt color="yellow" rotation={-2}>
          The terminal looks scary but it&apos;s just a text box. You type, it responds. That&apos;s it!
        </PostIt>

        {/* Instructions */}
        <div className="space-y-8 mb-16">
          {path === "workshop" ? (
            <>
              <Step num={1} title="Open Terminal">
                <div className="space-y-3 text-gray-400">
                  <p><strong className="text-amber-200">Mac:</strong> Press <code className="text-amber-300 bg-gray-800 px-2 py-0.5 rounded">Cmd + Space</code>, type <code className="text-amber-300 bg-gray-800 px-2 py-0.5 rounded">Terminal</code>, press Enter</p>
                  <p><strong className="text-amber-200">Windows:</strong> Press <code className="text-amber-300 bg-gray-800 px-2 py-0.5 rounded">Win</code>, type <code className="text-amber-300 bg-gray-800 px-2 py-0.5 rounded">PowerShell</code>, press Enter</p>
                </div>
              </Step>

              <PostIt color="pink" rotation={1}>
                You&apos;re doing great! Copy-paste is your friend here.
              </PostIt>

              <Step num={2} title="Connect to Workshop">
                <p className="text-gray-400 mb-4">Copy this and paste it in:</p>
                <Code glow>ssh workshop@46.224.122.120</Code>
                <p className="text-xs text-gray-500 mt-2">Press Enter, then type the password below</p>
                <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-950 border border-gray-800/50 backdrop-blur-sm">
                  <div className="text-xs text-amber-300/60 uppercase tracking-wider mb-2">Password</div>
                  <code className="text-2xl text-amber-400 font-mono select-all tracking-wider">claude2026</code>
                  <p className="text-xs text-gray-600 mt-3">Won&apos;t show as you type — that&apos;s normal and okay!</p>
                </div>
              </Step>

              <Step num={3} title="Make your space">
                <p className="text-gray-400 mb-4">Create a folder with your name (replace &quot;yourname&quot;):</p>
                <Code>mkdir yourname</Code>
                <Code>cd yourname</Code>
              </Step>

              <PostIt color="green" rotation={-1}>
                Almost there! One more command and you&apos;re in.
              </PostIt>

              <Step num={4} title="Start Claude">
                <Code glow>claude</Code>
                <p className="text-gray-400 mt-4">Type what you want to create. Press Enter. Watch magic happen.</p>
              </Step>
            </>
          ) : (
            <>
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-emerald-950/20 border border-emerald-700/30 backdrop-blur-sm">
                <p className="text-emerald-300">
                  <strong>Requires:</strong> Claude Pro ($20/mo) or Max ($100/mo) subscription
                </p>
              </div>

              <Step num={1} title="Open Terminal">
                <div className="space-y-3 text-gray-400">
                  <p><strong className="text-amber-200">Mac:</strong> Press <code className="text-amber-300 bg-gray-800 px-2 py-0.5 rounded">Cmd + Space</code>, type <code className="text-amber-300 bg-gray-800 px-2 py-0.5 rounded">Terminal</code>, press Enter</p>
                  <p><strong className="text-amber-200">Windows:</strong> Press <code className="text-amber-300 bg-gray-800 px-2 py-0.5 rounded">Win</code>, type <code className="text-amber-300 bg-gray-800 px-2 py-0.5 rounded">PowerShell</code>, press Enter</p>
                </div>
              </Step>

              <Step num={2} title="Install Claude Code">
                <Code glow>npm install -g @anthropic-ai/claude-code</Code>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Need npm? Get Node.js from <a href="https://nodejs.org" className="text-amber-400 hover:underline">nodejs.org</a>
                </p>
              </Step>

              <Step num={3} title="Log in">
                <Code>claude</Code>
                <p className="text-gray-400 mt-4">Opens your browser to authenticate.</p>
              </Step>

              <PostIt color="blue" rotation={1}>
                You&apos;re set up! Now create a project folder.
              </PostIt>

              <Step num={4} title="Create & start">
                <Code>mkdir myproject && cd myproject</Code>
                <Code glow>claude</Code>
                <p className="text-gray-400 mt-4">You&apos;re in! Start describing what you want to build.</p>
              </Step>
            </>
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          <div className="text-2xl animate-pulse-slow">✨</div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </div>

        {/* Magic Words */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl sm:text-4xl font-semibold italic text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-amber-200 to-pink-300 mb-3 animate-shimmer bg-[length:200%_auto]">
              The Magic Words
            </h2>
            <p className="text-gray-500">Incantations that make things happen</p>
          </div>

          <div className="space-y-8">
            <PromptGroup title="Paint the Vision" color="amber">
              <Incantation>I want to make a picture book for my niece about a brave little mushroom</Incantation>
              <Incantation>I have this idea for a personal website that feels like walking through a garden</Incantation>
              <Incantation>I want to visualize my sleep data in a way that feels meaningful</Incantation>
            </PromptGroup>

            <PromptGroup title="Steer by Feel" color="pink">
              <Incantation>too busy. simplify.</Incantation>
              <Incantation>this feels cold. make it warmer.</Incantation>
              <Incantation>I like this direction. keep going.</Incantation>
            </PromptGroup>

            <PromptGroup title="When Lost" color="purple">
              <Incantation>let&apos;s step back. the core goal is...</Incantation>
              <Incantation>what would you suggest?</Incantation>
            </PromptGroup>

            <PromptGroup title="Let Claude Lead" color="blue">
              <Incantation>do your research first</Incantation>
              <Incantation>make it real</Incantation>
              <Incantation>surprise me</Incantation>
            </PromptGroup>
          </div>
        </div>

        {/* Quick reference */}
        <div className="grid grid-cols-4 gap-2 mb-12">
          {[
            ["Ctrl+C", "Stop"],
            ["exit", "Leave"],
            ["/clear", "Reset"],
            ["/help", "Help"],
          ].map(([key, desc]) => (
            <div key={key} className="text-center py-3 px-2 rounded-xl bg-gray-900/30 border border-gray-800/30 hover:border-amber-700/30 hover:bg-amber-950/20 transition-all group">
              <code className="text-amber-300 font-mono text-xs group-hover:text-amber-200 transition-colors">{key}</code>
              <div className="text-[10px] text-gray-600 mt-1">{desc}</div>
            </div>
          ))}
        </div>

        {/* Paste tip */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/30 via-amber-900/20 to-amber-950/30 border border-amber-800/20 mb-12 text-sm text-center">
          <strong className="text-amber-300">Paste:</strong>{" "}
          <code className="text-amber-200/80">Cmd+V</code> (Mac) · <code className="text-amber-200/80">Ctrl+Shift+V</code> (Win)
        </div>

        {/* The Secret */}
        <div className="text-center mb-12 py-10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent rounded-3xl" />
          <h3 className="font-playfair text-2xl italic text-amber-100 mb-4 relative">The Secret</h3>
          <p className="text-gray-400 max-w-sm mx-auto relative leading-relaxed">
            Talk to Claude like a creative friend who happens to know how to code.
          </p>
        </div>

        {/* It's okay */}
        <div className="mb-12 text-center">
          <h3 className="text-xs text-gray-600 uppercase tracking-widest mb-4">It&apos;s okay to...</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {["not know", "make mistakes", "ask questions", "start over", "play"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/30 text-sm text-gray-400 hover:border-amber-600/30 hover:text-amber-200/80 transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-12 text-center">
          <h3 className="text-xs text-gray-600 uppercase tracking-widest mb-4">Learn More</h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {[
              ["Official Docs", "https://docs.anthropic.com/en/docs/claude-code"],
              ["45 Tips", "https://github.com/ykdojo/claude-code-tips"],
              ["Cheatsheet", "https://shipyard.build/blog/claude-code-cheat-sheet/"],
            ].map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300/50 hover:text-amber-200 transition-colors"
              >
                {name} →
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 pt-8">
          <p>Type <code className="text-amber-400/80">exit</code> twice to disconnect</p>
          <p className="mt-8 text-xl animate-pulse-slow">✨</p>
          <p className="mt-2 text-amber-200/30 font-playfair italic">You&apos;ve got this</p>
        </footer>

      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 20px) scale(1.05); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.15); }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.3)); }
          50% { filter: drop-shadow(0 0 40px rgba(251, 191, 36, 0.5)); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 25s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 15s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 3s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>
    </main>
  );
}

function Step({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <div className="group">
      <div className="flex items-center gap-4 mb-4">
        <span className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-800/50 to-amber-900/80 border border-amber-600/30 flex items-center justify-center text-lg text-amber-300 font-semibold shadow-[0_0_20px_rgba(251,191,36,0.2)] group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-shadow">
          {num}
        </span>
        <h2 className="text-xl text-gray-100 font-medium">{title}</h2>
      </div>
      <div className="pl-14 text-sm">{children}</div>
    </div>
  );
}

function Code({ children, glow }: { children: React.ReactNode; glow?: boolean }) {
  return (
    <div
      className={`font-mono text-sm rounded-xl p-4 select-all text-sky-300 transition-all my-2 ${
        glow
          ? "bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900 border border-amber-600/30 shadow-[0_0_30px_rgba(251,191,36,0.1)] hover:shadow-[0_0_40px_rgba(251,191,36,0.2)]"
          : "bg-gray-950/80 border border-gray-800/50"
      }`}
    >
      {children}
    </div>
  );
}

function PromptGroup({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  const colors: Record<string, string> = {
    amber: "text-amber-400/70",
    pink: "text-pink-400/70",
    purple: "text-purple-400/70",
    blue: "text-blue-400/70",
  };

  return (
    <div>
      <h3 className={`text-xs uppercase tracking-widest mb-3 ${colors[color]}`}>{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Incantation({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-3 px-5 rounded-xl bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90 border border-gray-800/30 text-sm text-gray-300 italic hover:border-pink-500/30 hover:bg-gray-900/80 transition-all cursor-default group">
      <span className="text-pink-400/60 group-hover:text-pink-400 transition-colors">&ldquo;</span>
      {children}
      <span className="text-pink-400/60 group-hover:text-pink-400 transition-colors">&rdquo;</span>
    </div>
  );
}

function PostIt({ children, color, rotation }: { children: React.ReactNode; color: "yellow" | "pink" | "green" | "blue"; rotation?: number }) {
  const colors = {
    yellow: "from-amber-200 to-amber-300 text-amber-900",
    pink: "from-pink-200 to-pink-300 text-pink-900",
    green: "from-emerald-200 to-emerald-300 text-emerald-900",
    blue: "from-sky-200 to-sky-300 text-sky-900",
  };

  const shadows = {
    yellow: "shadow-amber-400/20",
    pink: "shadow-pink-400/20",
    green: "shadow-emerald-400/20",
    blue: "shadow-sky-400/20",
  };

  return (
    <div
      className={`relative p-4 rounded-sm bg-gradient-to-br ${colors[color]} text-sm font-medium shadow-lg ${shadows[color]} my-6`}
      style={{ transform: `rotate(${rotation || 0}deg)` }}
    >
      {/* Tape effect */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/40 rounded-sm" />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
