import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

const schedule = [
  { time: "2:00 PM", title: "Cafe opens", desc: "Coffee & community" },
  { time: "3:00 PM", title: "Workshop begins", desc: "Hands-on building with AI" },
  { time: "5:00 PM", title: "Show & tell", desc: "Share your work" },
];

const details = [
  {
    label: "When",
    value: "Friday, February 6",
    sub: "2:00 \u2013 6:00 PM",
    icon: (
      <svg className="mb-3 fill-amber-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
      </svg>
    ),
  },
  {
    label: "Where",
    value: "Embassy of the Free Mind",
    sub: "Keizersgracht 123, Amsterdam",
    icon: (
      <svg className="mb-3 fill-amber-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
      </svg>
    ),
  },
  {
    label: "What to bring",
    value: "Your laptop",
    sub: "Charged & ready to build",
    icon: (
      <svg className="mb-3 fill-amber-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
        <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
      </svg>
    ),
  },
  {
    label: "Cost",
    value: "Ticketed",
    sub: "Free/reduced tickets available on request",
    icon: (
      <svg className="mb-3 fill-amber-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.94s4.18 1.36 4.18 3.85c0 1.89-1.44 2.93-3.12 3.19z" />
      </svg>
    ),
  },
];

export default function Details() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
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
            <h2 className="font-playfair text-3xl font-semibold italic text-gray-100 pb-4 md:text-4xl">
              Details
            </h2>
          </div>

          {/* Detail grid */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-4">
            {details.map((detail, index) => (
              <article
                key={detail.label}
                className="relative rounded-2xl bg-gray-900/50 p-6 text-center before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative z-10">
                  <div className="flex justify-center">{detail.icon}</div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-amber-400">{detail.label}</p>
                  <h3 className="mb-1 font-nacelle text-lg font-semibold text-gray-200">
                    {detail.value}
                  </h3>
                  <p className="text-sm text-amber-100/75">{detail.sub}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Schedule */}
          <div className="mx-auto max-w-2xl mt-16 pt-12 border-t border-amber-900/20">
            <h3
              className="font-playfair text-2xl font-semibold italic text-gray-100 text-center mb-8"
              data-aos="fade-up"
            >
              Schedule
            </h3>
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div
                  key={item.time}
                  className="flex items-start gap-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-20 shrink-0 text-right">
                    <span className="font-mono text-sm text-amber-400">{item.time}</span>
                  </div>
                  <div className="relative flex-1 pb-6 border-l border-amber-900/30 pl-6">
                    <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-amber-500" />
                    <h4 className="font-nacelle font-semibold text-gray-200">{item.title}</h4>
                    <p className="text-sm text-amber-100/65 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p
              className="text-center text-sm text-gray-500 mt-8"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              Existing projects welcome. Bring something to share or start fresh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
