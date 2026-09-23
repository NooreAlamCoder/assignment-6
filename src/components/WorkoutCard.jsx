import Image from "next/image";
import Link from "next/link";

export default function WorkoutCard({ workout }) {
  return (
    <Link href={`/workouts/${workout.id}`} className="group block">
      <article className="overflow-hidden rounded-xl border border-[#242830] bg-[#15181e] transition duration-200 hover:border-[#3a404a]">
        
        {/* Workout Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[#111419]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>

        {/* Card Content */}
        <div className="px-3.5 pb-3.5 pt-3">
          
          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-1.5">
            {workout.muscleGroups?.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#ccff00] px-2 py-[3px] text-[7px] font-bold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="mt-2.5 text-[12px] font-extrabold uppercase leading-tight tracking-wide text-white">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-1 text-[8px] text-[#858b96]">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-3 flex items-center gap-3 border-t border-[#242830] pt-2.5 text-[8px] text-[#858b96]">
            <span className="flex items-center gap-1">
              ◷
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1">
              ●
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              ☆
              {workout.rating}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}