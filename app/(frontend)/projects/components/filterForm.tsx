"use client";
import { X, Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export type FilterItem = {
  title: string;
  slug: string;
};
type Props = {
  availableTags: FilterItem[];
  selectedTags: FilterItem[];
};

const FilterForm = ({ availableTags, selectedTags }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTags = availableTags.filter((tag) =>
    tag.title.toLowerCase().includes(searchQuery.toLowerCase()) || tag.slug.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="right-0 flex flex-col items-start space-y-3 bg-zinc-900 p-4 w-full">
      <h3 className="font-medium text-zinc-200 text-sm">Filter by tags</h3>
      {/* Search input */}
      <div className="relative mb-2 w-full">
        <Search className="top-1/2 left-3 absolute w-4 h-4 text-zinc-400 -translate-y-1/2 transform" />
        <input
          type="text"
          placeholder="Golang, Next.js, Automation, Frontend"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-zinc-800 py-2 pr-3 pl-10 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-600 w-full text-zinc-200 text-sm"
        />
      </div>

      <form className="w-full">
        <div className="flex flex-col gap-1 w-full max-h-52 overflow-y-auto">
          {filteredTags.length > 0 ? (
            filteredTags.map((tag) => (
              <label
                key={tag.slug}
                className="flex items-center gap-3 hover:bg-zinc-800 px-3 py-2 rounded-lg transition-colors cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="tags"
                  value={tag.slug}
                  defaultChecked={selectedTags.map((t) => t.slug).includes(tag.slug)}
                  className="bg-transparent border-zinc-600 checkbox checkbox-sm checkbox-neutral"
                />
                <span className="font-medium text-zinc-300 text-sm">{tag.title}</span>
              </label>
            ))
          ) : (
            <div className="px-3 py-2 text-zinc-400 text-sm">
              No tags found matching &quot;{searchQuery}&quot;
            </div>
          )}
        </div>

        <div className="flex justify-between mt-2">
          <button
            type="submit"
            className="bg-zinc-600 hover:bg-zinc-500 px-3 py-1 rounded-md text-white text-sm"
          >
            Apply
          </button>
          {selectedTags.length > 0 && (
            <Link
              href="/projects"
              className="flex items-center px-3 py-1 text-zinc-300 hover:text-white text-sm"
            >
              <X className="mr-1 w-4 h-4" /> Clear
            </Link>
          )}
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
