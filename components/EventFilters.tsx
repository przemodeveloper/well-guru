"use client";

import { useRouter, useSearchParams } from "next/navigation";
import MultiSelectDropdown, { type Option } from "./MultiSelectDropdown";
import { useLocationsDropdown } from "@/queries/dropdowns";
import PriceFilter from "./PriceFilter";
import DatePicker from "./DatePicker";

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
	const { data: locationOptions } = useLocationsDropdown();

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
	const selectedLocations = searchParams.get("location")?.split(",") ?? [];

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
			<PriceFilter />
			<DatePicker />
		</div>
	);
};

export default EventFilters;
