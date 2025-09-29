"use client";

import { useRouter, useSearchParams } from "next/navigation";
import MultiSelectDropdown, { Option } from "./MultiSelectDropdown";

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

  const handleSelectFilter = (filterType: string, options: Option[]) => {
    const params = new URLSearchParams(searchParams.toString());
    const selectedOption = options.map((option) => option.value);

    if (selectedOption.length === 0) {
      params.delete(filterType);
    } else {
      params.set(filterType, selectedOption.join(","));
    }

    router.replace(`?${params.toString()}`);
  };

  const selectedTypes = searchParams.get("type")?.split(",") ?? [];
  const selectedCategories = searchParams.get("category")?.split(",") ?? [];

  return (
    <div className="flex flex-wrap gap-4">
      <MultiSelectDropdown
        placeholder="Wybierz typ..."
        options={eventTypesOptions}
        onChange={(options) => handleSelectFilter("type", options)}
        value={selectedTypes}
      />
      <MultiSelectDropdown
        placeholder="Wybierz kategorie..."
        options={eventCategoriesOptions}
        onChange={(options) => handleSelectFilter("category", options)}
        value={selectedCategories}
      />
    </div>
  );
};

export default EventFilters;
