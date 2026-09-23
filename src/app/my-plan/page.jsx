"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import MyPlanCard from "@/components/MyPlanCard";
import { useFitLog } from "@/context/FitLogContext";

const MyPlan = () => {
  const { plan, saved, setPlan, setSaved } = useFitLog();

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const activeWorkouts = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = useMemo(() => {
    const workouts = [...activeWorkouts];

    if (sortBy === "duration") {
      return workouts.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      return workouts.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    }

    if (sortBy === "rating") {
      return workouts.sort((a, b) => b.rating - a.rating);
    }

    return workouts;
  }, [activeWorkouts, sortBy]);

  const totalExercises = activeWorkouts.length;

  const totalMinutes = activeWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = activeWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const handleRemove = (id) => {
    if (activeTab === "plan") {
      setPlan(plan.filter((workout) => workout.id !== id));
      toast.success("Workout removed from today's plan");
    } else {
      setSaved(saved.filter((workout) => workout.id !== id));
      toast.success("Workout removed from saved");
    }
  };

  const handleDone = (id) => {
    setPlan(plan.filter((workout) => workout.id !== id));
    toast.success("Workout marked as done");
  };

  return (
    <main className="min-h-screen bg-[#0b0d0f]">
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div>
          <h1 className="text-[17px] font-extrabold uppercase tracking-tight text-white md:text-[20px]">
            My Plan
          </h1>

          <p className="mt-1 text-[8px] text-[#858b96]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-lg border border-[#242830] bg-[#15181e]">
          <div className="border-r border-[#242830] px-3 py-4 md:px-4">
            <p className="text-[10px] uppercase tracking-wide text-[#858b96]">
              Exercises
            </p>

            <p className="mt-1 text-[18px] font-extrabold leading-none text-[#ccff00]">
              {totalExercises}
            </p>
          </div>

          <div className="border-r border-[#242830] px-3 py-4 md:px-4">
            <p className="text-[10px] uppercase tracking-wide text-[#858b96]">
              Minutes
            </p>

            <p className="mt-1 text-[18px] font-extrabold leading-none text-white">
              {totalMinutes}
            </p>
          </div>

          <div className="px-3 py-4 md:px-4">
            <p className="text-[10px] uppercase tracking-wide text-[#858b96]">
              Calories
            </p>

            <p className="mt-1 text-[18px] font-extrabold leading-none text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-fit rounded-md border border-[#242830] bg-[#15181e] p-0.5">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`rounded px-2.5 py-1.5 text-[12px] font-medium ${
                activeTab === "plan"
                  ? "bg-[#242830] text-white"
                  : "text-[#858b96]"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded px-2.5 py-1.5 text-[12px] font-medium ${
                activeTab === "saved"
                  ? "bg-[#242830] text-white"
                  : "text-[#858b96]"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[12px] text-[#858b96]">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="rounded-md border border-[#242830] bg-[#15181e] px-2 py-1.5 text-[12px] text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {sortedWorkouts.length === 0 ? (
            <div className="flex min-h-[250px] flex-col items-center justify-center rounded-lg border border-[#242830] bg-[#111419] px-5 text-center">
              <h2 className="text-[16px] font-extrabold uppercase text-white">
                Nothing Here Yet
              </h2>

              <p className="mt-2 max-w-[300px] text-[10px] leading-[1.6] text-[#858b96]">
                {activeTab === "plan"
                  ? "Add workouts to today's plan and they will appear here."
                  : "Save workouts for later and they will appear here."}
              </p>

              <Link
                href="/#library"
                className="mt-4 rounded-md bg-[#ccff00] px-3.5 py-2 text-[10px] font-bold uppercase text-black"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            sortedWorkouts.map((workout) => (
              <MyPlanCard
                key={workout.id}
                workout={workout}
                onRemove={handleRemove}
                onDone={handleDone}
                isSaved={activeTab === "saved"}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default MyPlan;