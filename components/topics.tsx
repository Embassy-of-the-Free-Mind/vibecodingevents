import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

const topics = [
  {
    label: "Claude Code",
    desc: "The tool that makes all of this possible. We'll help you get started and build something real in an afternoon.",
    featured: true,
  },
  {
    label: "Personal Websites",
    desc: "Describe what you want and have a real, live website in minutes. A portfolio, a project page, something entirely new.",
  },
  {
    label: "AI Video & Images",
    desc: "Create visuals, artwork, and short films that would have taken a studio to produce a year ago.",
  },
  {
    label: "Games & Interactive Art",
    desc: "Build playable games, generative art, and creative experiments from your imagination.",
  },
  {
    label: "Startup MVPs",
    desc: "Go from napkin sketch to working product faster than you thought possible.",
  },
  {
    label: "Printable Artifacts",
    desc: "Craft creative card decks, book layouts, and other tangible artifacts with AI assistance.",
  },
];

export default function Topics() {
  return (
    <section className="relative overflow-hidden">
      {/* Alchemical illumination */}
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 -z-10 hidden lg:block"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/splendor-solis.jpg"
          alt=""
          className="w-72 opacity-[0.06] blur-[1px] rotate-[4deg]"
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
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-amber-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-amber-200/50">
              <span className="inline-flex text-amber-300/90">
                What you&apos;ll explore
              </span>
            </div>
            <h2 className="font-playfair text-3xl font-semibold italic text-gray-100 pb-4 md:text-4xl">
              Topics
            </h2>
            <p className="text-lg text-amber-100/75">
              Every project starts with an idea. Here are some of the
              directions people explore.
            </p>
          </div>

          {/* Topics list */}
          <div className="mx-auto max-w-3xl space-y-6">
            {topics.map((topic, index) => (
              <div
                key={topic.label}
                className="flex gap-4"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                <div>
                  <h3 className="font-nacelle text-base font-semibold text-gray-200">
                    {topic.label}
                    {topic.featured && (
                      <span className="ml-2 text-xs font-normal text-amber-400">
                        — our main focus
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-amber-100/65">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Link to Promptcraft */}
          <div
            className="mx-auto max-w-3xl mt-12 pt-8 border-t border-amber-900/20 text-center"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <a
              href="/promptcraft"
              className="inline-flex items-center gap-2 text-amber-300/80 hover:text-amber-200 transition-colors"
            >
              <span className="text-lg font-playfair italic">G</span>
              <span className="font-playfair italic">Explore the Promptcraft Grimoire</span>
              <span className="text-amber-300/50">&rarr;</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Patterns and spells for working with AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
