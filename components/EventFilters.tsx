"use client";

import { useRouter, useSearchParams } from "next/navigation";
import MultiSelectDropdown, { type Option } from "./MultiSelectDropdown";
import { useLocationsDropdown } from "@/queries/dropdowns";
import { useMemo, useRef, useState } from "react";

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
  const { data: locations } = useLocationsDropdown();
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const [priceMin, setPriceMin] = useState(searchParams.get("priceMin") ?? "");
  const [priceMax, setPriceMax] = useState(searchParams.get("priceMax") ?? "");

  const locationOptions = useMemo(
    () =>
      locations?.map((location: { id: number; name: string }) => ({
        id: location.id,
        label: location.name,
        value: location.name,
      })),
    [locations]
  );

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

  const updatePriceFilter = (key: "priceMin" | "priceMax", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.replace(`?${params.toString()}`);
  };

  const handlePriceChange = (key: "priceMin" | "priceMax", value: string) => {
    if (key === "priceMin") {
      setPriceMin(value);
    } else {
      setPriceMax(value);
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      updatePriceFilter(key, value);
    }, 500);
  };

  const selectedTypes = searchParams.get("type")?.split(",") ?? [];
  const selectedCategories = searchParams.get("category")?.split(",") ?? [];
  const selectedLocations = searchParams.get("location")?.split(",") ?? [];

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
      <MultiSelectDropdown
        placeholder="Wybierz lokalizację..."
        options={locationOptions}
        onChange={(options) => handleSelectFilter("location", options)}
        value={selectedLocations}
      />

      <div>
        <span className="mr-3">Cena</span>
        <input
          type="number"
          placeholder="Od"
          className="border p-2 rounded w-24 mr-2"
          min={0}
          value={priceMin}
          onChange={(e) => handlePriceChange("priceMin", e.target.value)}
        />
        <input
          type="number"
          placeholder="Do"
          className="border p-2 rounded w-24"
          value={priceMax}
          onChange={(e) => handlePriceChange("priceMax", e.target.value)}
        />
      </div>
    </div>
  );
};

export default EventFilters;
