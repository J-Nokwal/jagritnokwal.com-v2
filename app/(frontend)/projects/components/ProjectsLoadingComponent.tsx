export default function ProjectsLoadingComponent() {
  return (
    <div className="relative pb-16 animate-pulse">
      <div className="space-y-8 md:space-y-16 mx-auto px-6 lg:px-8 pt-20 md:pt-24 lg:pt-32 max-w-7xl">
        
        {/* Header */}
        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center">
          <div className="space-y-4">
            <div className="bg-zinc-800 rounded w-40 h-8" />
            <div className="bg-zinc-800 rounded w-72 h-4" />
          </div>

          <div className="mt-4 lg:mt-0">
            <div className="bg-zinc-800 rounded w-32 h-10" />
          </div>
        </div>

        <div className="bg-zinc-800 w-full h-px" />

        {/* Featured Section */}
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
          
          {/* Big card */}
          <div className="space-y-4 bg-zinc-900 p-6 rounded-xl">
            <div className="bg-zinc-800 rounded w-24 h-4" />
            <div className="bg-zinc-800 rounded w-3/4 h-10" />
            <div className="bg-zinc-800 rounded w-full h-4" />
            <div className="bg-zinc-800 rounded w-5/6 h-4" />
            <div className="bg-zinc-800 mt-6 mb-7 rounded w-32 h-4" />
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-3 bg-zinc-900 p-4 rounded-xl">
                <div className="bg-zinc-800 rounded w-20 h-4" />
                <div className="bg-zinc-800 rounded w-2/3 h-6" />
                <div className="bg-zinc-800 mb-7 rounded w-full h-4" />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block bg-zinc-800 w-full h-px" />

        {/* Grid */}
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="space-y-3 bg-zinc-900 p-4 rounded-xl">
              <div className="bg-zinc-800 rounded w-20 h-4" />
              <div className="bg-zinc-800 rounded w-3/4 h-6" />
              <div className="bg-zinc-800 mb-6 rounded w-full h-4" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}