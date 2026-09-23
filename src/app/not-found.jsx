import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#0b0d0f] px-5">
      <div className="text-center">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ccff00]">
          FitLog
        </p>

        <h1 className="mt-2 text-[64px] font-extrabold leading-none text-white">
          404
        </h1>

        <h2 className="mt-3 text-[13px] font-bold uppercase text-white">
          Workout Not Found
        </h2>

        <p className="mx-auto mt-2 max-w-[300px] text-[8px] leading-[1.6] text-[#858b96]">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-5 inline-flex rounded-md bg-[#ccff00] px-4 py-2.5 text-[8px] font-bold uppercase tracking-wide text-black transition hover:bg-[#d8ff33]"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;