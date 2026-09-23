"use client";

import Image from "next/image";
import Link from "next/link";

const MyPlanCard = ({ workout, onRemove, onDone }) => {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-[#242830] bg-[#15181e] p-2.5">
      <div className="relative h-[58px] w-[82px] shrink-0 overflow-hidden rounded-md bg-[#111419]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[10px] font-extrabold uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-0.5 truncate text-[7px] text-[#858b96]">
          {workout.equipment}
        </p>

        <div className="mt-1.5 flex items-center gap-2 text-[7px] text-[#858b96]">
          <span>◷ {workout.duration} min</span>
          <span>● {workout.caloriesBurned} kcal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-1.5">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-md border border-[#343941] px-3 py-1.5 text-[7px] font-medium text-white transition hover:border-[#555b66]"
        >
          View Details
        </Link>

        <button
          type="button"
          onClick={() => onDone(workout.id)}
          className="rounded-md bg-[#ccff00] px-3 py-1.5 text-[7px] font-bold text-black transition hover:bg-[#d8ff33]"
        >
          ✓ Mark as Done
        </button>

        <button
          type="button"
          onClick={() => onRemove(workout.id)}
          className="rounded-md border border-[#343941] px-3 py-1.5 text-[7px] font-medium text-[#858b96] transition hover:border-[#555b66] hover:text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default MyPlanCard;