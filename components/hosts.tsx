import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

const hosts = [
  {
    name: "Derek Lomas",
    title: "AI Researcher & Designer",
    bio: "AI researcher using vibecoding to translate hundreds of Renaissance Latin books, design next-level websites, craft printable card decks, and more. See sourcelibrary.org.",
    image: "/images/derek-lomas.webp",
  },
  {
    name: "Michell Zappa",
    title: "Futurist & Technologist",
    bio: "Technology futurist exploring how emerging tech reshapes society. Building community so everyone feels empowered to participate and manifest their dreams.",
    image: "/images/michell-zappa.jpg",
  },
];

export default function Hosts() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 -translate-x-1/2 opacity-50"
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
                Presented by
              </span>
            </div>
            <h2 className="font-playfair text-3xl font-semibold italic text-gray-100 pb-4 md:text-4xl">
              Your hosts
            </h2>
          </div>

          {/* Host cards */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-16">
            {hosts.map((host, index) => (
              <article
                key={host.name}
                className="relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="relative z-10 flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-6">
                  <div className="shrink-0">
                    <div className="h-24 w-24 rounded-full bg-gray-700 overflow-hidden border-2 border-amber-500/30 shadow-lg shadow-amber-500/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={host.image}
                        alt={host.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 font-nacelle text-lg font-semibold text-gray-200">
                      {host.name}
                    </h3>
                    <p className="mb-3 text-sm text-amber-400">{host.title}</p>
                    <p className="text-sm text-amber-100/75">{host.bio}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
