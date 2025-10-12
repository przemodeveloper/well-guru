import { RiCloseLine } from "@remixicon/react";
import clsx from "clsx";
import { useRef, useState } from "react";

interface PriceFilterProps {
  onChange: (key: "priceMin" | "priceMax", value: string) => void;
  value?: { priceMin: string; priceMax: string };
}

const PriceFilter = ({ onChange, value }: PriceFilterProps) => {
  const [priceMin, setPriceMin] = useState(value?.priceMin ?? "");
  const [priceMax, setPriceMax] = useState(value?.priceMax ?? "");

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

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
      onChange(key, value || "");
    }, 500);
  };

  return (
    <div className="flex items-center">
      <span className="mr-3 font-semibold">Cena</span>
      <div className="border border-2 border-gray-300 w-32 h-full rounded flex items-center mr-2">
        <input
          type="number"
          placeholder="Od"
          className="w-full h-full p-2"
          aria-label="Cena minimalna"
          min={0}
          value={priceMin}
          onChange={(e) =>
            handlePriceChange(
              "priceMin",
              Math.max(0, Number(e.target.value)).toString()
            )
          }
        />
        {value?.priceMin && (
          <button
            type="button"
            title="Usuń cenę minimalną"
            className="cursor-pointer mr-2"
            onClick={(e) => {
              e.stopPropagation();
              handlePriceChange("priceMin", "");
            }}
          >
            <RiCloseLine size={14} className="border rounded-full" />
          </button>
        )}
      </div>

      <div className="border border-2 border-gray-300 w-32 h-full rounded flex items-center">
        <input
          type="number"
          placeholder="Do"
          className="w-full h-full p-2"
          aria-label="Cena maksymalna"
          value={priceMax}
          onChange={(e) =>
            handlePriceChange(
              "priceMax",
              Math.max(0, Number(e.target.value)).toString()
            )
          }
        />
        {value?.priceMax && (
          <button
            type="button"
            title="Usuń cenę maksymalną"
            className="cursor-pointer mr-2"
            onClick={(e) => {
              e.stopPropagation();
              handlePriceChange("priceMax", "");
            }}
          >
            <RiCloseLine size={14} className="border rounded-full" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PriceFilter;
