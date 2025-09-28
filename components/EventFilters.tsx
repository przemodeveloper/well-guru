"use client";

import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

const eventFilters = [
  {
    label: "Event",
    value: "event",
  },
  {
    label: "Workshop",
    value: "workshop",
  },
  {
    label: "Retreat",
    value: "retreat",
  },
];

const EventFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSelectFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const currentParams = params.get("type")?.split(",") || [];
    const newParams = currentParams.includes(value)
      ? currentParams.filter((param) => param !== value)
      : [...currentParams, value];

    if (newParams.length === 0) {
      params.delete("type");
    } else {
      params.set("type", newParams.join(","));
    }

    router.replace(`?${params.toString()}`);
  };

  const selectedTypes = searchParams.get("type")?.split(",") ?? [];

  return (
    <div className="flex gap-2 bg-gray-200 rounded-full p-1 w-fit">
      {eventFilters.map((filter) => {
        const isSelected = selectedTypes.includes(filter.value);
        return (
          <button
            key={filter.value}
            onClick={() => handleSelectFilter(filter.value)}
            className={clsx(
              "px-12 py-1 rounded-full text-sm font-bold bg-gray-200 cursor-pointer",
              isSelected && "bg-white text-black"
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};

export default EventFilters;
