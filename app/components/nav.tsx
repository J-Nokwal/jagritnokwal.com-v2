"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC<{
  variant?: "default" | "withHome";
}> = ({ variant = "default" }) => {
  const ref = useRef<HTMLElement>(null);

  // Keep initial state SAME on server + client
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // 🚀 Flutter-like post-frame callback
    const rafId = requestAnimationFrame(() => {
      if (!ref.current) return;

      observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      });

      observer.observe(ref.current);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/80 border-zinc-800"
        }`}
      >
        <div className="flex flex-row-reverse justify-between items-center mx-auto p-6 container">
          
          {/* Right side links */}
          <div className="flex justify-between gap-8">
            {variant === "withHome" && (
              <Link
                href="/"
                className="text-zinc-400 hover:text-zinc-100 duration-200"
              >
                Home
              </Link>
            )}

            <Link
              href="/projects"
              className="text-zinc-400 hover:text-zinc-100 duration-200"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="text-zinc-400 hover:text-zinc-100 duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Left side back button */}
          {variant !== "withHome" && (
            <Link
              href="/"
              className="text-zinc-300 hover:text-zinc-100 duration-200"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};