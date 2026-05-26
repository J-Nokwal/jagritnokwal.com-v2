"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function ExtraProjects({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  if (!expanded) {
    return (
      <div className="flex justify-center py-8">
        <button
          onClick={() => setExpanded(true)}
          className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors duration-200 text-sm"
        >
          View More
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
