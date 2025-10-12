import { RiCloseLine } from "@remixicon/react";
import clsx from "clsx";

interface PriceFilterProps {
  onChange: (key: "priceMin" | "priceMax", value: string) => void;
  value?: { priceMin: string; priceMax: string };
}

const PriceFilter = ({ onChange, value }: PriceFilterProps) => {
  return (
    <div className="flex items-center">
      <span className="mr-3 font-semibold">Cena</span>
      <div className="border border-2 border-gray-300 p-2 rounded w-24 flex items-center gap-2 mr-2">
        <input
          type="number"
          placeholder="Od"
          className="w-full"
          aria-label="Cena minimalna"
          min={0}
          value={value?.priceMin ?? ""}
          onChange={(e) =>
            onChange("priceMin", Math.max(0, Number(e.target.value)).toString())
          }
        />
        <button
          type="button"
          title="Usuń cenę minimalną"
          className={clsx("cursor-pointer", !value?.priceMin && "hidden")}
          onClick={(e) => {
            e.stopPropagation();
            onChange("priceMin", "");
          }}
        >
          <RiCloseLine size={14} className="border rounded-full" />
        </button>
      </div>

      <div className="border border-2 border-gray-300 p-2 rounded w-24 flex items-center gap-2">
        <input
          type="number"
          placeholder="Do"
          className="w-full"
          aria-label="Cena maksymalna"
          value={value?.priceMax ?? ""}
          onChange={(e) =>
            onChange("priceMax", Math.max(0, Number(e.target.value)).toString())
          }
        />
        <button
          type="button"
          title="Usuń cenę maksymalną"
          className={clsx("cursor-pointer", !value?.priceMax && "hidden")}
          onClick={(e) => {
            e.stopPropagation();
            onChange("priceMax", "");
          }}
        >
          <RiCloseLine size={14} className="border rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
