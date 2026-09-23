"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const { plan, saved } = useFitLog();
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  return (
    <header className="border-b border-[#20242b] bg-[#0b0d0f]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={28}
            height={28}
            priority
          />

          <span className="text-sm font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-medium md:flex">
          <Link
            href="/"
            className={
              isHome
                ? "rounded-full bg-[#ccff00] px-4 py-2 text-black"
                : "text-[#858b96] transition hover:text-white"
            }
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={
              isMyPlan
                ? "rounded-full bg-[#ccff00] px-4 py-2 text-black"
                : "text-[#858b96] transition hover:text-white"
            }
          >
            My Plan
          </Link>
        </nav>


        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-1.5 text-[10px] font-bold text-black"
          >
            Plan {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-[#343941] px-3 py-1.5 text-[10px] font-medium text-white"
          >
            Saved {saved.length}
          </Link>
        </div>
      </div>
    </header>
  );
}