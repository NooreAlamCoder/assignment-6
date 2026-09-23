import Image from "next/image";

const getWorkout = async (id) => {
  const rec = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  const data = await rec.json();

  return data;
};

export default async function WorkoutDetails({ params }) {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className="min-h-screen bg-[#0b0d0f]">
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          
          {/* Left - Image */}
          <div className="overflow-hidden rounded-xl border border-[#242830] bg-[#111419]">
            <Image
              src={workout.image}
              alt={workout.name}
              width={700}
              height={700}
              priority
              className="aspect-square w-full object-cover"
            />
          </div>

          {/* Right - Details */}
          <div>
            {/* Title */}
            <h1 className="text-[30px] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-white md:text-[36px]">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-[520px] text-[10px] leading-[1.7] text-[#858b96]">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {workout.muscleGroups?.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[7px] font-bold uppercase tracking-wide text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Specs */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[#242830] bg-[#15181e]">
              
              <div className="grid grid-cols-2 border-b border-[#242830]">
                <div className="border-r border-[#242830] px-3 py-3">
                  <p className="text-[7px] uppercase tracking-wide text-[#858b96]">
                    Equipment
                  </p>
                  <p className="mt-1 text-[9px] font-medium text-white">
                    {workout.equipment}
                  </p>
                </div>

                <div className="px-3 py-3">
                  <p className="text-[7px] uppercase tracking-wide text-[#858b96]">
                    Difficulty
                  </p>
                  <p className="mt-1 text-[9px] font-medium text-white">
                    {workout.difficulty}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-[#242830]">
                <div className="border-r border-[#242830] px-3 py-3">
                  <p className="text-[7px] uppercase tracking-wide text-[#858b96]">
                    Sets
                  </p>
                  <p className="mt-1 text-[9px] font-medium text-white">
                    {workout.sets}
                  </p>
                </div>

                <div className="px-3 py-3">
                  <p className="text-[7px] uppercase tracking-wide text-[#858b96]">
                    Reps
                  </p>
                  <p className="mt-1 text-[9px] font-medium text-white">
                    {workout.reps}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3">
                <div className="border-r border-[#242830] px-3 py-3">
                  <p className="text-[7px] uppercase tracking-wide text-[#858b96]">
                    Duration
                  </p>
                  <p className="mt-1 text-[9px] font-medium text-white">
                    {workout.duration} min
                  </p>
                </div>

                <div className="border-r border-[#242830] px-3 py-3">
                  <p className="text-[7px] uppercase tracking-wide text-[#858b96]">
                    Calories
                  </p>
                  <p className="mt-1 text-[9px] font-medium text-white">
                    {workout.caloriesBurned} kcal
                  </p>
                </div>

                <div className="px-3 py-3">
                  <p className="text-[7px] uppercase tracking-wide text-[#858b96]">
                    Rating
                  </p>
                  <p className="mt-1 text-[9px] font-medium text-white">
                    {workout.rating}
                  </p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-6">
              <h2 className="text-[10px] font-bold uppercase tracking-wide text-white">
                Instructions
              </h2>

              <div className="mt-3 space-y-2.5">
                {workout.instructions?.map((instruction, index) => (
                  <div
                    key={index}
                    className="flex gap-3"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#343941] text-[7px] font-bold text-[#858b96]">
                      {index + 1}
                    </span>

                    <p className="pt-0.5 text-[9px] leading-[1.6] text-[#858b96]">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-md bg-[#ccff00] px-4 py-2.5 text-[8px] font-bold uppercase tracking-wide text-black transition hover:bg-[#d8ff33]"
              >
                + Add to today's plan
              </button>

              <button
                type="button"
                className="rounded-md border border-[#343941] px-4 py-2.5 text-[8px] font-bold uppercase tracking-wide text-white transition hover:border-[#555b66]"
              >
                ♡ Save for later
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}