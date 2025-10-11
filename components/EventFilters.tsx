"use client";

import MultiSelectDropdown, { type Option } from "./MultiSelectDropdown";
import { useLocationsDropdown } from "@/queries/dropdowns";
import PriceFilter from "./PriceFilter";
import DatePicker from "./DatePicker";
import { useFilters } from "@/hooks/useFilters";
import { DateRange } from "react-day-picker";
import { useEffect, useState } from "react";
import { formatDate } from "@/utils/date";

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

  const [selectedDate, setSelectedDate] = useState<DateRange | undefined>(
    () => {
      const startDate = getParam("startDate");
      const endDate = getParam("endDate");

      if (startDate && endDate) {
        return {
          from: new Date(startDate),
          to: new Date(endDate),
        };
      }
      return undefined;
    }
  );

  const handleSelectFilter = (filterType: string, options: Option[]) => {
    const selectedOption = options.map((option) => option.value);
    setParams({ [filterType]: selectedOption });
  };

  const handleSelectDate = (range: DateRange | undefined) => {
    if (range?.from && range.to) {
      setSelectedDate(range);

      setParams({
        startDate: formatDate(range.from),
        endDate: formatDate(range.to),
      });
    } else {
      deleteParams(["startDate", "endDate"]);
      setSelectedDate(undefined);
    }
  };

  const selectedTypes = getParam("type")?.split(",") ?? [];
  const selectedCategories = getParam("category")?.split(",") ?? [];
  const selectedLocations = getParam("location")?.split(",") ?? [];

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
        value={selectedDate}
      />
      <PriceFilter />
    </div>
  );
};

export default EventFilters;
