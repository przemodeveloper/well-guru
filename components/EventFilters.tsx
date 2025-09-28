"use client";

import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

const eventTypesOptions = [
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

const eventCategoriesOptions = [
  {
    label: "Sztuka",
    value: "art",
  },
  {
    label: "Muzyka",
    value: "music",
  },
  {
    label: "Rozwój osobisty",
    value: "selfDevelopment",
  },
  {
    label: "Relacje",
    value: "relationships",
  },
  {
    label: "Yoga",
    value: "yoga",
  },
  {
    label: "Surfing",
    value: "surfing",
  },
];

const EventFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSelectFilter = (filterType: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const currentParams = params.get(filterType)?.split(",") || [];
    const newParams = currentParams.includes(value)
      ? currentParams.filter((param) => param !== value)
      : [...currentParams, value];

    if (newParams.length === 0) {
      params.delete(filterType);
    } else {
      params.set(filterType, newParams.join(","));
    }

    router.replace(`?${params.toString()}`);
  };

  const selectedTypes = searchParams.get("type")?.split(",") ?? [];
  const selectedCategories = searchParams.get("category")?.split(",") ?? [];

  return (
    <div className="flex gap-4 flex-col">
      <h2 className="text-sm font-bold">Typ</h2>
      <div className="flex gap-2 bg-gray-200 rounded-full p-1 w-fit">
        {eventTypesOptions.map((filter) => {
          const isSelected = selectedTypes.includes(filter.value);
          return (
            <button
              key={filter.value}
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
      <h2 className="text-sm font-bold">Kategoria</h2>
      <div className="flex gap-2 bg-gray-200 rounded-full p-1 w-fit">
        {eventCategoriesOptions.map((filter) => {
          const isSelected = selectedCategories.includes(filter.value);
          return (
            <button
              key={filter.value}
              onClick={() => handleSelectFilter("category", filter.value)}
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
    </div>
  );
};

export default EventFilters;
