import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          id="library"
          className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8"
        >
          <h2 className="text-2xl font-bold uppercase text-white">
            The Library
          </h2>

          <p className="mt-1 text-xs text-[#858b96]">
            Twelve lifts covering every major muscle group.
          </p>
        </section>
      </main>
    </>
  );
}