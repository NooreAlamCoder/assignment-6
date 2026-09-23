import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#20242b]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={25}
            height={25}
          />

          <span className="text-[10px] font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        <p className="text-[12px] text-[#555b66]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}