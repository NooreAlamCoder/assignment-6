import React from "react";

const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#0b0d0f]">
      <div className="text-center">
        <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-[#343941] border-t-[#ccff00]" />

        <p className="mt-3 text-[9px] font-medium uppercase tracking-wide text-[#858b96]">
          Loading workouts...
        </p>
      </div>
    </main>
  );
};

export default Loading;