"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PageIllustration from "@/components/page-illustration";
import Grimoires from "@/components/grimoires";
import Footer from "@/components/ui/footer";

export default function PromptcraftPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  }, []);

  return (
    <>
      <main className="relative flex grow flex-col">
        <PageIllustration />

        {/* Video Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          {/* Video background - using the second video */}
          <video
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
            <source src="/videos/ink-manifestation.mp4" type="video/mp4" />
          </video>

          {/* Fallback */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-0" : "opacity-35"
            }`}
            src="/images/embassy-free-mind.jpg"
            alt=""
            aria-hidden="true"
          />

          {/* Magical overlays */}
          <div className="light-rays" />
          <div className="vignette" />
          <div className="noise-overlay" />

          {/* Gradient overlays */}
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
                  Pattern Language
                </span>
              </div>

              <h1
                className="pb-5 font-playfair text-5xl font-semibold italic text-gray-100 md:text-7xl candlelight"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                The Promptcraft Grimoire
              </h1>

              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-xl text-amber-100/80"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  A collection of patterns for working with AI. Gathered from practitioners,
                  tested across thousands of sessions.
                </p>
              </div>

              {/* Back link */}
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn w-full border border-amber-600/40 bg-transparent text-amber-100/80 hover:border-amber-500/60 hover:text-white sm:w-auto"
                  href="/"
                >
                  &larr; Back to event
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Grimoires content without the header (already in hero) */}
        <Grimoires hideHeader />
      </main>
      <Footer />
    </>
  );
}
