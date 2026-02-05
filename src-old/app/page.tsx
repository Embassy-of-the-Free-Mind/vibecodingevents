"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleBackground from "@/components/ParticleBackground";

gsap.registerPlugin(ScrollTrigger);

const SIGNUP_URL = "https://forms.gle/PLACEHOLDER";

const topics = [
  { n: "01", label: "Websites & Apps", desc: "Ship a real, deployed website in minutes by describing what you want in plain language." },
  { n: "02", label: "AI Video & Images", desc: "Generate cinematic visuals, artwork, and short films with the latest generative models." },
  { n: "03", label: "Games", desc: "Prototype interactive games and experiences — no game engine experience needed." },
  { n: "04", label: "Startup MVPs", desc: "Go from napkin sketch to working product faster than you thought possible." },
  { n: "05", label: "Creative Coding", desc: "Generative art, procedural animation, and creative experiments powered by AI." },
  { n: "06", label: "Claude Code", desc: "Build full applications with conversational AI — the most advanced coding agent available." },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-line",
        { y: "120%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1, stagger: 0.12 },
        0.2
      );
      tl.fromTo(
        ".hero-fade",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 },
        0.8
      );

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "bottom top",
        onEnter: () => stickyRef.current?.classList.add("visible"),
        onLeaveBack: () => stickyRef.current?.classList.remove("visible"),
      });

      gsap.utils.toArray<HTMLElement>(".glow-spot").forEach((el) => {
        gsap.to(el, {
          y: -60,
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="grain" />

      {/* ═══ HERO ═══ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ padding: "var(--container-px)" }}
      >
        <ParticleBackground />
        <div className="glow-spot glow-warm w-[600px] h-[600px] -top-[200px] -left-[200px]" />
        <div className="glow-spot glow-blue w-[500px] h-[500px] -bottom-[100px] -right-[150px]" />

        <div className="relative z-10 text-center max-w-4xl">
          <p className="hero-fade label-accent mb-10 opacity-0">
            Feb 6, 2025 &middot; 3&ndash;6 PM &middot; Amsterdam
          </p>

          <h1 className="display mb-8">
            <span className="hero-line block overflow-hidden">
              <span className="inline-block">Vibecoding</span>
            </span>
          </h1>

          <p className="hero-fade body-lg max-w-lg mx-auto mb-4 opacity-0">
            A free afternoon of building software with AI at the
            Embassy&nbsp;of&nbsp;the&nbsp;Free&nbsp;Mind.
          </p>
          <p className="hero-fade body max-w-md mx-auto mb-12 opacity-0">
            No coding experience required. Bring your laptop.
          </p>

          <div className="hero-fade opacity-0 flex items-center justify-center gap-4 flex-wrap">
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="cta-btn-solid">
              Reserve your spot &mdash; It&apos;s free
            </a>
            <a href="#about" className="cta-btn">
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT + VIDEO ═══ */}
      <section id="about" className="section relative">
        <div className="glow-spot glow-gold w-[400px] h-[400px] top-0 right-[5%]" />
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="divider reveal mb-8" />
              <p className="label reveal mb-6">About the event</p>
              <h2 className="heading-2 reveal mb-8">
                What is vibecoding?
              </h2>
              <p className="body-lg reveal mb-6">
                Instead of writing code line by line, you describe what you want
                in plain language and AI builds it for you. It&apos;s fast,
                creative, and accessible to everyone&mdash;no programming
                experience required.
              </p>
              <p className="body reveal">
                Join us for live demos, hands-on workshops, and room to
                experiment. You&apos;ll leave knowing how to build real things
                with the latest AI tools.
              </p>
            </div>
            <div className="reveal">
              <div className="glass-card aspect-video flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-[var(--border-hover)] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1">
                      <path d="M8 5v14l11-7L8 5z" fill="currentColor" opacity="0.6" />
                    </svg>
                  </div>
                  <p className="label">Vibecoding demo video</p>
                  <p className="body text-sm mt-2">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TOPICS ═══ */}
      <section className="section relative">
        <div className="glow-spot glow-blue w-[500px] h-[500px] top-[10%] left-[25%]" />
        <div className="section-inner">
          <div className="divider reveal mb-8" />
          <p className="label reveal mb-4">What you&apos;ll explore</p>
          <h2 className="heading-2 reveal mb-16">Topics</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((t) => (
              <div key={t.n} className="glass-card p-8 reveal">
                <p className="label-accent mb-5">{t.n}</p>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                  {t.label}
                </h3>
                <p className="body text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOSTS ═══ */}
      <section className="section relative">
        <div className="glow-spot glow-warm w-[400px] h-[400px] bottom-[10%] left-[5%]" />
        <div className="section-inner">
          <div className="divider reveal mb-8 mx-auto" />
          <p className="label reveal text-center mb-4">Presented by</p>
          <h2 className="heading-2 reveal text-center mb-16">Your hosts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div className="reveal flex flex-col items-center text-center md:text-left md:items-start">
              <div className="w-24 h-24 rounded-full bg-[rgba(255,255,255,0.05)] border border-[var(--border)] mb-6 overflow-hidden flex items-center justify-center">
                <img
                  src="/images/derek-lomas.jpg"
                  alt="Derek Lomas"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                Derek Lomas
              </h3>
              <p className="label-accent mb-5">AI Researcher &amp; Designer</p>
              <p className="body">
                Positive AI researcher at the intersection of design and human
                experience. Creator of Source&nbsp;Library and educational tools
                for the AI era.
              </p>
            </div>
            <div className="reveal flex flex-col items-center text-center md:text-left md:items-start">
              <div className="w-24 h-24 rounded-full bg-[rgba(255,255,255,0.05)] border border-[var(--border)] mb-6 overflow-hidden flex items-center justify-center">
                <img
                  src="/images/michell-zappa.jpg"
                  alt="Michell Zappa"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                Michell Zappa
              </h3>
              <p className="label-accent mb-5">Futurist &amp; Technologist</p>
              <p className="body">
                Technology futurist exploring how emerging tech reshapes society.
                Speaker, writer, and creative technologist building at the edge
                of what&apos;s possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VENUE ═══ */}
      <section className="section relative">
        <div className="glow-spot glow-gold w-[500px] h-[500px] top-[20%] left-[10%]" />
        <div className="section-inner">
          <div className="divider reveal mb-8 mx-auto" />
          <p className="label reveal text-center mb-4">The space</p>
          <h2 className="heading-2 reveal text-center mb-16">Embassy of the Free Mind</h2>

          <div className="reveal glass-card overflow-hidden">
            <div className="aspect-[21/9] bg-[rgba(255,255,255,0.02)] flex items-center justify-center overflow-hidden">
              <img
                src="/images/embassy-free-mind.jpg"
                alt="Embassy of the Free Mind interior"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = 'none';
                  el.parentElement!.innerHTML = '<p class="label" style="padding:2rem">Venue photo coming soon</p>';
                }}
              />
            </div>
            <div className="p-8 md:p-12">
              <p className="body-lg mb-4">
                A 17th-century canal house on the Keizersgracht, home to one of
                the world&apos;s most important collections of Hermetic philosophy.
                This isn&apos;t a WeWork meetup.
              </p>
              <p className="body">
                Build software surrounded by centuries of human curiosity &mdash;
                rare books, alchemical manuscripts, and the spirit of
                free&nbsp;thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DETAILS ═══ */}
      <section className="section relative">
        <div className="glow-spot glow-warm w-[350px] h-[350px] top-[20%] right-[5%]" />
        <div className="section-inner">
          <div className="divider reveal mb-8 mx-auto" />
          <h2 className="heading-2 reveal text-center mb-16">Details</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            <div className="reveal">
              <p className="label-accent mb-3">When</p>
              <p className="text-xl font-semibold text-[var(--text-primary)]">
                February 6, 2025
              </p>
              <p className="body mt-1">3:00&ndash;6:00 PM</p>
            </div>
            <div className="reveal">
              <p className="label-accent mb-3">Where</p>
              <p className="text-xl font-semibold text-[var(--text-primary)]">
                Embassy of the Free Mind
              </p>
              <p className="body mt-1">Keizersgracht 123, Amsterdam</p>
            </div>
            <div className="reveal">
              <p className="label-accent mb-3">What to bring</p>
              <p className="text-xl font-semibold text-[var(--text-primary)]">
                Your laptop
              </p>
              <p className="body mt-1">Charged &amp; ready to build</p>
            </div>
            <div className="reveal">
              <p className="label-accent mb-3">Cost</p>
              <p className="text-xl font-semibold text-[var(--text-primary)]">
                Free
              </p>
              <p className="body mt-1">Coffee, wine &amp; snacks included</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="section relative text-center">
        <div className="glow-spot glow-warm w-[600px] h-[600px] -top-[150px] left-[20%]" />
        <div className="relative z-10 section-inner max-w-xl">
          <h2 className="heading-2 reveal mb-6">
            Ready to build<br />something?
          </h2>
          <p className="body reveal mb-10">
            Spots are limited. Reserve yours and spend an afternoon creating
            with AI at one of Amsterdam&apos;s most inspiring venues.
          </p>
          <div className="reveal flex flex-col items-center gap-4">
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="cta-btn-solid">
              Reserve your spot &mdash; It&apos;s free
            </a>
            <p className="label mt-4">
              Questions? <a href="mailto:derek@sourcelibrary.org" className="text-[var(--accent-warm)] hover:underline">derek@sourcelibrary.org</a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer
        className="relative border-t py-14"
        style={{
          borderColor: "var(--border)",
          paddingLeft: "var(--container-px)",
          paddingRight: "var(--container-px)",
        }}
      >
        <div className="section-inner flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="label">A project by Derek Lomas</p>
          <div className="flex gap-6">
            {[
              ["Source Library", "https://sourcelibrary.org"],
              ["PlayPower Learn", "https://playpowerlearn.com"],
              ["Baby Sees", "https://babysees.org"],
            ].map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="label hover:text-[var(--text-primary)] transition-colors"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ═══ STICKY CTA BAR ═══ */}
      <div ref={stickyRef} className="sticky-cta">
        <span className="label hidden sm:block">Feb 6 &middot; Embassy of the Free Mind &middot; Free</span>
        <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="cta-btn-solid text-sm py-3 px-5">
          Reserve your spot
        </a>
      </div>
    </>
  );
}
