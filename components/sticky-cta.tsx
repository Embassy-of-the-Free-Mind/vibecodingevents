"use client";

import { useEffect, useRef } from "react";

const SIGNUP_URL = "https://forms.gle/XGXcFGjheqCrbUNy5";

export default function StickyCta() {
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) return;
      if (window.scrollY > window.innerHeight) {
        stickyRef.current.classList.add("visible");
      } else {
        stickyRef.current.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={stickyRef} className="sticky-cta">
      <span className="hidden text-sm text-amber-200/70 sm:block">
        Feb 6 &middot; Embassy of the Free Mind &middot; Amsterdam
      </span>
      <a
        href={SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-sm bg-linear-to-t from-amber-700 to-amber-600 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
      >
        Reserve your spot
      </a>
    </div>
  );
}
