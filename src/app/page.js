import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";
import getAllWorkouts from "@/lib/api";

export default async function Home() {
  const data = await getAllWorkouts();

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          id="library"
          className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8"
        >
          {/* Library Heading */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold uppercase text-white">
              The Library
            </h2>

            <p className="mt-1 text-xs text-[#858b96]">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {/* Workout Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}