import { useFilters } from "@/hooks/useFilters";
import { useRef, useState } from "react";

interface PriceFilterProps {
  onChange: (key: "priceMin" | "priceMax", value: string) => void;
  value?: { priceMin: string; priceMax: string };
}

const PriceFilter = ({ onChange, value }: PriceFilterProps) => {
  return (
    <div>
      <span className="mr-3 font-semibold">Cena</span>
      <input
        type="number"
        placeholder="Od"
        className="border border-2 border-gray-300 p-2 rounded w-24 mr-2"
        min={0}
        value={value?.priceMin}
        onChange={(e) => onChange("priceMin", e.target.value)}
      />
      <input
        type="number"
        placeholder="Do"
        className="border border-2 border-gray-300 p-2 rounded w-24"
        value={value?.priceMax}
        onChange={(e) => onChange("priceMax", e.target.value)}
      />
    </div>
  );
};

export default PriceFilter;
