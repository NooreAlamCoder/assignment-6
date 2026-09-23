import Image from "next/image";
import WorkoutActions from "@/components/WorkoutActions";

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
      <section className="mx-auto max-w-4xl px-4 py-5 md:px-5">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* Workout Image */}
          <div className="overflow-hidden rounded-lg border border-[#242830] bg-[#111419]">
            <Image
              src={workout.image}
              alt={workout.name}
              width={700}
              height={875}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          {/* Workout Content */}
          <div className="pt-0.5">
            {/* Title */}
            <h1 className="text-[20px] font-extrabold uppercase leading-[1.05] tracking-[-0.02em] text-white">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-2 max-w-[500px] text-[9px] leading-[1.6] text-[#858b96]">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {workout.muscleGroups?.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[7px] font-bold uppercase tracking-wide text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Workout Specs */}
            <div className="mt-4 overflow-hidden rounded-lg border border-[#242830] bg-[#15181e]">
              {/* Equipment */}
              <div className="flex items-center justify-between border-b border-[#242830] px-3.5 py-3">
                <p className="text-[7px] font-medium uppercase tracking-wide text-[#858b96]">
                  Equipment
                </p>

                <p className="text-[9px] font-medium text-white">
                  {workout.equipment}
                </p>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between border-b border-[#242830] px-3.5 py-3">
                <p className="text-[7px] font-medium uppercase tracking-wide text-[#858b96]">
                  Difficulty
                </p>

                <p className="text-[9px] font-medium text-white">
                  {workout.difficulty}
                </p>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between border-b border-[#242830] px-3.5 py-3">
                <p className="text-[7px] font-medium uppercase tracking-wide text-[#858b96]">
                  Sets
                </p>

                <p className="text-[9px] font-medium text-white">
                  {workout.sets}
                </p>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between border-b border-[#242830] px-3.5 py-3">
                <p className="text-[7px] font-medium uppercase tracking-wide text-[#858b96]">
                  Reps
                </p>

                <p className="text-[9px] font-medium text-white">
                  {workout.reps}
                </p>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-[#242830] px-3.5 py-3">
                <p className="text-[7px] font-medium uppercase tracking-wide text-[#858b96]">
                  Duration
                </p>

                <p className="text-[9px] font-medium text-white">
                  {workout.duration} min
                </p>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between border-b border-[#242830] px-3.5 py-3">
                <p className="text-[7px] font-medium uppercase tracking-wide text-[#858b96]">
                  Calories
                </p>

                <p className="text-[9px] font-medium text-white">
                  {workout.caloriesBurned} kcal
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between px-3.5 py-3">
                <p className="text-[7px] font-medium uppercase tracking-wide text-[#858b96]">
                  Rating
                </p>

                <p className="text-[9px] font-medium text-white">
                  {workout.rating}
                </p>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-5">
              <h2 className="text-[10px] font-bold uppercase tracking-wide text-white">
                Instructions
              </h2>

              <div className="mt-3 space-y-2.5">
                {workout.instructions?.map((instruction, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#343941] text-[7px] font-bold text-[#858b96]">
                      {index + 1}
                    </span>

                    <p className="pt-0.5 text-[8px] leading-[1.6] text-[#858b96]">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Actions */}
            <WorkoutActions workout={workout} />
          </div>
        </div>
      </section>
    </main>
  );
}