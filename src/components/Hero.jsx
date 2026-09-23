import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 md:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-lg border border-[#20242b] bg-[#15181e]">
        <div className="grid min-h-[300px] grid-cols-1 items-center md:grid-cols-[1.1fr_0.9fr]">
          {/* Hero Content */}
          <div className="relative z-10 px-8 py-25 sm:px-10 md:px-12 ">
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.15em] text-[#ccff00]">
              Workout Library
            </p>

            <h1 className="max-w-[550px] text-[36px] font-extrabold uppercase leading-[0.94] tracking-[-0.02em] text-white sm:text-[40px] md:text-[38px] ">
              TRAIN WITH INTENT. LOG <br />
              EVERY SET.
            </h1>

            <p className="mt-4 max-w-[390px] text-[10px] leading-[1.6] text-[#858b96] sm:text-[11px]">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
              <br />
              into today's plan, and watch the week's work add up.
            </p>

            <Link
              href="#library"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-4 py-2.5 text-[10px] font-bold uppercase tracking-wide text-black transition hover:bg-[#d8ff33]"
            >
              Browse Workouts
              <span aria-hidden="true"></span>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative flex h-[260px] items-center justify-center md:h-full">
            <Image
              src="/assets/banner.png"
              alt="Workout illustration"
              width={340}
              height={340}
              priority
              className="h-auto w-[230px] object-contain sm:w-[270px] md:w-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
