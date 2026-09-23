import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";
import getAllWorkouts from "@/lib/api";

export default async function Home() {
  const data = await getAllWorkouts();

  return (
    <main>
      <Hero />

      {/* Workout Library */}
      <section
        id="library"
        className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8"
      >
        {/* Library Heading */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
            The Library
          </h2>

          <p className="mt-1 text-xs text-[#858b96]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </section>
    </main>
  );
}