import { Filter } from "lucide-react";
import FilterForm, { FilterItem } from "./filterForm";
import { Card } from "@/app/components/card";

interface FiltersProps {
  availableTags: FilterItem[];
  selectedTags: FilterItem[];
}

const Filters: React.FC<FiltersProps> = ({ availableTags, selectedTags }) => {
  return (
    <div className="group z-10 isolate relative">
      <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-md w-full lg:w-auto font-medium text-zinc-200 text-sm">
        <Filter className="w-4 h-4" />
        Filter
        {selectedTags.length > 0 && (
          <span className="flex justify-center items-center bg-zinc-600 rounded-full w-5 h-5 text-xs">
            {selectedTags.length}
          </span>
        )}
      </button>

      <div className="hidden group-hover:block right-auto lg:right-0 left-0 lg:left-auto z-10 absolute pt-2 w-full lg:w-96">
        <Card>
          <FilterForm
            availableTags={availableTags}
            selectedTags={selectedTags}
          />
        </Card>
      </div>
    </div>
  );
};

export default Filters;