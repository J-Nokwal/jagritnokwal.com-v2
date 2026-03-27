"use client";

import { useRouter } from "next/navigation";
import Particles from "./components/particles";
import { Navigation } from "./components/nav";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center bg-linear-to-tl from-black via-zinc-600/20 to-black w-screen h-screen overflow-hidden">
          <Particles
            className="z-0 absolute inset-0"
            quantity={200}
          />
     

      {/* Top nav */}
      <Navigation variant="withHome"  />

      {/* Content */}
      <div className="z-10 px-4 text-white text-center">
        <h1 className="font-bold text-[120px] md:text-[160px] tracking-tight glow">
          404
        </h1>

        <h2 className="mt-4 font-semibold text-2xl md:text-4xl">
          Lost in space
        </h2>

        <p className="mt-3 text-gray-400">
          The page you&apos;re looking for has drifted away.
        </p>

        <button
          onClick={() => router.push("/")}
          className="bg-white hover:bg-gray-200 mt-6 px-6 py-3 rounded-lg font-medium text-black transition"
        >
          Return to Earth
        </button>
      </div>

    </div>
  );
}