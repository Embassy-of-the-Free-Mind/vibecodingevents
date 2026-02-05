import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

const SIGNUP_URL = "https://forms.gle/XGXcFGjheqCrbUNy5";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
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
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="font-playfair text-3xl font-semibold italic text-gray-100 pb-4 md:text-4xl"
              data-aos="fade-up"
            >
              Ready to build something?
            </h2>
            <p
              className="mb-8 text-lg text-amber-100/75"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Register your interest and confirm later. Come level up your
              AI skills at one of Amsterdam&apos;s most inspiring venues.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-amber-700 to-amber-600 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
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
            </div>
            <p
              className="mt-6 text-sm text-gray-500"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              Questions?{" "}
              <a
                href="mailto:derek@sourcelibrary.org"
                className="text-amber-400 transition hover:text-amber-500"
              >
                derek@sourcelibrary.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
