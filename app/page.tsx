"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero";
import About from "@/components/about";
import Topics from "@/components/topics";
import Hosts from "@/components/hosts";
import Venue from "@/components/venue";
import Details from "@/components/details";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";
import StickyCta from "@/components/sticky-cta";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <main className="relative flex grow flex-col">
        <PageIllustration />
        <Hero />
        <About />
        <Topics />
        <Hosts />
        <Venue />
        <Details />
        <Cta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
