"use client";

import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import MultiSelectDropdown from "./MultiSelectDropdown";

const eventTypesOptions = [
  {
    id: 1,
    label: "Event",
    value: "event",
  },
  {
    id: 2,
    label: "Workshop",
    value: "workshop",
  },
  {
    id: 3,
    label: "Retreat",
    value: "retreat",
  },
];

const eventCategoriesOptions = [
  {
    id: 1,
    label: "Sztuka",
    value: "art",
  },
  {
    id: 2,
    label: "Muzyka",
    value: "music",
  },
  {
    id: 3,
    label: "Rozwój osobisty",
    value: "selfDevelopment",
  },
  {
    id: 4,
    label: "Relacje",
    value: "relationships",
  },
  {
    id: 5,
    label: "Yoga",
    value: "yoga",
  },
  {
    id: 6,
    label: "Surfing",
    value: "surfing",
  },
];

const EventFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSelectFilter = (filterType: string, value: string) => {
    console.log(filterType, value);
    const params = new URLSearchParams(searchParams.toString());

    const currentParams = params.get(filterType)?.split(",") || [];
    const newParams = currentParams.includes(value)
      ? currentParams.filter((param) => param !== value)
      : [...currentParams, value];

    if (newParams.length === 0 || value === "") {
      params.delete(filterType);
    } else {
      params.set(filterType, newParams.join(","));
    }

    router.replace(`?${params.toString()}`);
  };

  const selectedTypes = searchParams.get("type")?.split(",") ?? [];
  const selectedCategories = searchParams.get("category")?.split(",") ?? [];

  return (
    <div className="flex gap-4">
      <div className="flex gap-2 bg-gray-200 rounded-full p-1 w-fit">
        {eventTypesOptions.map((filter) => {
          const isSelected = selectedTypes.includes(filter.value);
          return (
            <button
              key={filter.id}
              onClick={() => handleSelectFilter("type", filter.value)}
              className={clsx(
                "px-6 md:px-8 lg:px-12 py-1 rounded-full text-sm font-bold bg-gray-200 cursor-pointer",
                isSelected && "bg-white text-black"
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
      <MultiSelectDropdown
        options={eventCategoriesOptions}
        onChange={(option) => handleSelectFilter("category", option.value)}
      />
    </div>
  );
};

export default EventFilters;
