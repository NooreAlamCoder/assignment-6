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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={28}
            height={28}
            priority
          />

          <span className="text-[15px] font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-[13px] font-medium md:flex">
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

        {/* Plan / Saved */}
        <div className="flex items-center gap-4">
          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[14px] font-medium text-white transition hover:text-[#ccff00]"
          >
            <span>Plan</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ccff00] text-[13px] font-bold text-black">
              {plan.length}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[14px] font-medium text-white transition hover:text-[#ccff00]"
          >
            <span>Saved</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#343941] text-[13px] font-bold text-white">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}