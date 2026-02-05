import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Alchemical illuminations */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 -z-10 hidden lg:block"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/atalanta-fugiens.jpg"
          alt=""
          className="w-64 opacity-[0.07] blur-[1px] rotate-[-8deg]"
        />
      </div>
      <div
        className="pointer-events-none absolute -right-16 top-1/3 -z-10 hidden lg:block"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fludd-microcosm.jpg"
          alt=""
          className="w-56 opacity-[0.08] blur-[1px] rotate-[6deg]"
        />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-amber-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-amber-200/50">
              <span className="inline-flex text-amber-300/90">
                About the event
              </span>
            </div>
            <h2
              className="font-playfair text-3xl font-semibold italic text-gray-100 pb-4 md:text-4xl"
              data-aos="fade-up"
            >
              What is vibecoding?
            </h2>
            <p
              className="mb-6 text-lg text-amber-100/75"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Vibecoding means describing what you want in plain language and
              watching it appear. A website, a game, a piece of art. If you can
              imagine it, you can probably build it. Transforming intentions into
              reality is&hellip; magic.
            </p>
            <p
              className="text-base text-gray-400"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              We&apos;re gathering to explore what becomes possible when creativity
              meets AI. Whether you&apos;re a designer, writer, entrepreneur, or
              just deeply curious &mdash; this afternoon is for you.
            </p>

          </div>

          {/* Past event photos */}
          <div
            className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            {[
              { src: "/images/event-room-wide.jpeg", alt: "Past vibecoding event — attendees working together" },
              { src: "/images/event-presenting.jpeg", alt: "Presenting at a vibecoding session" },
              { src: "/images/event-laptops.jpeg", alt: "Participants building with AI on their laptops" },
              { src: "/images/event-audience.jpeg", alt: "Audience at a past vibecoding session" },
            ].map((img) => (
              <div key={img.src} className="overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover opacity-70 transition-opacity hover:opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
