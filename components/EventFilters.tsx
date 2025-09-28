"use client";

import clsx from "clsx";
import { useState } from "react";

const EventFilters = () => {
  const eventFilters = [
    {
      label: "Event",
      value: "event",
      selected: false,
    },
    {
      label: "Workshop",
      value: "workshop",
      selected: false,
    },
    {
      label: "Retreat",
      value: "retreat",
      selected: false,
    },
  ];

  const [filters, setFilters] = useState<typeof eventFilters>(eventFilters);

  const handleSelectFilter = (value: string) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) => {
        if (filter.value === value) {
          return { ...filter, selected: !filter.selected };
        }
        return filter;
      })
    );
  };

  return (
    <div className="flex gap-2 bg-gray-200 rounded-full p-1 w-fit">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => handleSelectFilter(filter.value)}
          className={clsx(
            "px-12 py-1 rounded-full text-sm font-bold bg-gray-200 cursor-pointer",
            filter.selected && "bg-white text-black"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default EventFilters;
