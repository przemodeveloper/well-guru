"use client";

import MultiSelectDropdown, { type Option } from "./MultiSelectDropdown";
import { useLocationsDropdown } from "@/queries/dropdowns";
import PriceFilter from "./PriceFilter";
import DatePicker from "./DatePicker";
import { useFilters } from "@/hooks/useFilters";
import { DateRange } from "react-day-picker";
import { formatDate } from "@/utils/date";
import { useMemo } from "react";

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
  const { setParams, getParam, deleteParams } = useFilters();

  const { data: locationOptions } = useLocationsDropdown();

  const handleSelectFilter = (filterType: string, options: Option[]) => {
    const selectedOption = options.map((option) => option.value);
    setParams({ [filterType]: selectedOption });
  };

  const handleSelectDate = (range: DateRange | undefined) => {
    if (range?.from && range.to) {
      setParams({
        startDate: formatDate(range.from),
        endDate: formatDate(range.to),
      });
    } else {
      deleteParams(["startDate", "endDate"]);
    }
  };

  const {
    selectedTypes,
    selectedCategories,
    selectedLocations,
    selectedDates,
  } = useMemo(() => {
    const typeParam = getParam("type");
    const categoryParam = getParam("category");
    const locationParam = getParam("location");
    const startDateParam = getParam("startDate");
    const endDateParam = getParam("endDate");

    return {
      selectedTypes: typeParam?.split(",") ?? [],
      selectedCategories: categoryParam?.split(",") ?? [],
      selectedLocations: locationParam?.split(",") ?? [],
      selectedDates:
        startDateParam && endDateParam
          ? {
              from: new Date(startDateParam),
              to: new Date(endDateParam),
            }
          : undefined,
    };
  }, [
    getParam("type"),
    getParam("category"),
    getParam("location"),
    getParam("startDate"),
    getParam("endDate"),
  ]);

  return (
    <div className="flex flex-wrap gap-4">
      <MultiSelectDropdown
        placeholder="Wszystkie typy"
        options={eventTypesOptions}
        onChange={(options) => handleSelectFilter("type", options)}
        value={selectedTypes}
      />
      <MultiSelectDropdown
        placeholder="Wszystkie kategorie"
        options={eventCategoriesOptions}
        onChange={(options) => handleSelectFilter("category", options)}
        value={selectedCategories}
      />
      <MultiSelectDropdown
        placeholder="Wszystkie lokalizacje"
        options={locationOptions}
        onChange={(options) => handleSelectFilter("location", options)}
        value={selectedLocations}
      />
      <DatePicker
        placeholder="Data"
        onChange={handleSelectDate}
        value={selectedDates}
      />
      <PriceFilter />
    </div>
  );
};

export default EventFilters;
