import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

export default function Venue() {
  return (
    <section className="relative">
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
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-amber-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-amber-200/50">
              <span className="inline-flex text-amber-300/90">
                The space
              </span>
            </div>
            <h2 className="font-playfair text-3xl font-semibold italic text-gray-100 pb-4 md:text-4xl">
              Embassy of the Free Mind
            </h2>
          </div>

          {/* Venue card */}
          <div
            className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
            data-aos="fade-up"
          >
            {/* Venue image */}
            <div className="relative z-10 aspect-[21/9] bg-gray-900 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/embassy-hall.jpg"
                alt="Embassy of the Free Mind interior"
                className="h-full w-full object-cover opacity-70"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                }}
              />
            </div>
            {/* Venue text + secondary photo */}
            <div className="relative z-10 p-6 md:p-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_240px]">
                <div>
                  <p className="mb-4 text-lg text-amber-100/75">
                    A 17th-century canal house on the Keizersgracht, home to one of
                    the world&apos;s most important collections of Hermetic philosophy.
                    This isn&apos;t a WeWork meetup.
                  </p>
                  <p className="text-base text-gray-400">
                    Build software surrounded by centuries of human curiosity &mdash;
                    rare books, alchemical manuscripts, and the spirit of
                    free&nbsp;thinking. Coffee, wine, and snacks provided.
                  </p>
                </div>
                <div className="hidden md:block overflow-hidden rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/event-ceiling.jpeg"
                    alt="Past vibecoding event at the Embassy"
                    className="h-full w-full object-cover opacity-70"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
