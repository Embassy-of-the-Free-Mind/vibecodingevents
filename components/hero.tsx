"use client";

import { useState, useEffect } from "react";

const SIGNUP_URL = "https://forms.gle/XGXcFGjheqCrbUNy5";

const VIDEOS = [
  { url: "/videos/caustic-light.mp4", label: "Light Through Knowledge" },
  { url: "/videos/ink-manifestation.mp4", label: "Ink Becoming" },
  { url: "/videos/breathing-library.mp4", label: "The Breathing Library" },
];

function Particles() {
  return (
    <div className="particles">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="particle" />
      ))}
    </div>
  );
}

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Cycle videos every 12 seconds
    const interval = setInterval(() => {
      setVideoLoaded(false);
      setCurrentVideo((prev) => (prev + 1) % VIDEOS.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-950">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
          <div className="text-center">
            <h1 className="pb-5 font-playfair text-5xl font-semibold italic text-gray-100 md:text-7xl">
              Manifest dreams with AI
            </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Video background */}
      <video
        key={currentVideo}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-40" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setVideoLoaded(true)}
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src={VIDEOS[currentVideo].url} type="video/mp4" />
      </video>

      {/* Fallback image while video loads */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-0" : "opacity-35"
        }`}
        src="/images/embassy-free-mind.jpg"
        alt=""
        aria-hidden="true"
      />

      {/* Video label */}
      <div className="absolute top-4 left-4 z-50 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-mono text-amber-200/60">
        <span className="text-amber-400/80">{currentVideo + 1}/{VIDEOS.length}</span>
        <span className="mx-2 text-amber-200/30">·</span>
        <span>{VIDEOS[currentVideo].label}</span>
      </div>

      {/* Magical overlays */}
      <div className="light-rays" />
      <Particles />
      <div className="vignette" />
      <div className="noise-overlay" />

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/40 to-gray-950 z-[5]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gray-950/30 via-transparent to-gray-950/30 z-[5]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
        <div className="text-center">
          <div
            className="mb-6 inline-flex items-center gap-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-amber-300/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-amber-300/50"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <span className="inline-flex text-amber-300/80 font-nacelle text-sm tracking-wide">
              Friday, Feb 6 &middot; 2&ndash;6 PM
            </span>
          </div>
          <div
            className="mb-2 text-amber-200/60 font-nacelle text-xs tracking-widest uppercase"
            data-aos="fade-up"
            data-aos-delay={150}
          >
            <span>Embassy of the Free Mind, Amsterdam</span>
          </div>

          <h1
            className="pb-5 font-playfair text-5xl font-semibold italic text-gray-100 md:text-7xl candlelight"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Manifest dreams with AI
          </h1>

          <div className="mx-auto max-w-3xl">
            <p
              className="mb-2 text-xl text-amber-100/80"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              An afternoon of humanism and AI &mdash; surrounded by 400 years of wisdom.
            </p>
            <p
              className="mb-8 text-base text-gray-400"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              No coding experience needed. Bring your laptop and your imagination.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={500}>
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-amber-700 to-amber-600 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] glow-pulse sm:mb-0 sm:w-auto"
                  href={SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-flex items-center">
                    Register your interest
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn w-full border border-amber-600/40 bg-transparent text-amber-100/80 hover:border-amber-500/60 hover:text-white sm:ml-4 sm:w-auto"
                  href="#about"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* Past events strip */}
          <div className="mt-12 flex items-center justify-center gap-8" data-aos="fade-up" data-aos-delay={700}>
            <div className="flex -space-x-3">
              {["/images/event-room-wide.jpeg", "/images/event-presenting.jpeg", "/images/event-laptops.jpeg", "/images/event-audience.jpeg", "/images/event-past.png"].map((src, i) => (
                <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-gray-900/80">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-amber-200/60">
              From past gatherings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
