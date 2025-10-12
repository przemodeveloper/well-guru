"use client";

import MultiSelectDropdown, { type Option } from "./MultiSelectDropdown";
import { useLocationsDropdown } from "@/queries/dropdowns";
import PriceFilter from "./PriceFilter";
import DatePicker from "./DatePicker";
import { useFilters } from "@/hooks/useFilters";
import { DateRange } from "react-day-picker";
import { formatDate } from "@/utils/date";
import { useMemo, useRef, useState } from "react";
import { categoryTypeLabels, eventTypeLabels } from "@/consts/events";
import { RiCloseLine } from "@remixicon/react";

const eventTypesOptions = [
  {
    id: 1,
    label: eventTypeLabels.event,
    value: "event",
  },
  {
    id: 2,
    label: eventTypeLabels.workshop,
    value: "workshop",
  },
  {
    id: 3,
    label: eventTypeLabels.retreat,
    value: "retreat",
  },
];

const eventCategoriesOptions = [
  {
    id: 1,
    label: categoryTypeLabels.art,
    value: "art",
  },
  {
    id: 2,
    label: categoryTypeLabels.music,
    value: "music",
  },
  {
    id: 3,
    label: categoryTypeLabels.selfDevelopment,
    value: "selfDevelopment",
  },
  {
    id: 4,
    label: categoryTypeLabels.relationships,
    value: "relationships",
  },
  {
    id: 5,
    label: categoryTypeLabels.yoga,
    value: "yoga",
  },
  {
    id: 6,
    label: categoryTypeLabels.surfing,
    value: "surfing",
  },
];

const EventFilters = () => {
  const { setParams, getParam, deleteParams } = useFilters();

  const typeParam = getParam("type");
  const categoryParam = getParam("category");
  const locationParam = getParam("location");
  const startDateParam = getParam("startDate");
  const endDateParam = getParam("endDate");

  const [priceMin, setPriceMin] = useState(getParam("priceMin") ?? "");
  const [priceMax, setPriceMax] = useState(getParam("priceMax") ?? "");
  const [searchTerm, setSearchTerm] = useState(getParam("search") ?? "");

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

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
      setParams({
        [key]: value || null,
      });
    }, 500);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      setParams({
        search: value || null,
      });
    }, 500);
  };

  const {
    selectedTypes,
    selectedCategories,
    selectedLocations,
    selectedDates,
  } = useMemo(() => {
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
  }, [typeParam, categoryParam, locationParam, startDateParam, endDateParam]);

  return (
    <div className="flex flex-wrap gap-4">
      <div className="border border-2 border-gray-300 rounded flex-grow min-w-[200px] flex items-center">
        <input
          type="text"
          name="search"
          placeholder="Szukaj wydarzenia"
          className="w-full h-full px-3"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        {searchTerm && (
          <button
            type="button"
            title="Usuń cenę maksymalną"
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleSearch("");
            }}
          >
            <RiCloseLine size={14} className="border rounded-full mr-3" />
          </button>
        )}
      </div>

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
      <PriceFilter
        onChange={handlePriceChange}
        value={{ priceMin: priceMin, priceMax: priceMax }}
      />
    </div>
  );
};

export default EventFilters;
