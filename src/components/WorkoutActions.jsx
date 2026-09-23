"use client";

import React from "react";
import { toast } from "react-toastify";
import { useFitLog } from "@/context/FitLogContext";

const WorkoutActions = ({ workout }) => {
  const { plan, saved, setPlan, setSaved } = useFitLog();

  const handleAddToPlan = () => {
    const alreadyAdded = plan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      toast.info("Workout is already in today's plan");
      return;
    }

    if (plan.length >= 5) {
      toast.warning("Today's plan can contain maximum 5 workouts");
      return;
    }

    setPlan([...plan, workout]);
    toast.success("Workout added to today's plan");
  };

  const handleSaveForLater = () => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.info("Workout is already saved");
      return;
    }

    setSaved([...saved, workout]);
    toast.success("Workout saved for later");
  };

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      <button
        onClick={handleAddToPlan}
        type="button"
        className="rounded-md bg-[#ccff00] px-4 py-2.5 text-[8px] font-bold uppercase tracking-wide text-black transition hover:bg-[#d8ff33]"
      >
        + Add to today's plan
      </button>

      <button
        onClick={handleSaveForLater}
        type="button"
        className="rounded-md border border-[#343941] px-4 py-2.5 text-[8px] font-bold uppercase tracking-wide text-white transition hover:border-[#555b66]"
      >
        ♡ Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;