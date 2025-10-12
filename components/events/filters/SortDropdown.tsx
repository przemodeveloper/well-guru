import { RiArrowDownSLine } from "@remixicon/react";
import { useState } from "react";

export type Order = "asc" | "desc";
export type SortBy = "name" | "price" | "startDate";

interface SortDropdown {
  onChangeSort: (value: string) => void;
  onChangeOrder: (value: Order) => void;
  sortValue?: string;
  orderValue?: Order;
  value?: { sortBy: SortBy; sortOrder: Order };
}

const sortOrderOptions: { label: string; value: Order }[] = [
  { label: "Rosnąco", value: "asc" },
  { label: "Malejąco", value: "desc" },
];

const sortByOptions: { label: string; value: SortBy }[] = [
  { label: "Nazwa", value: "name" },
  { label: "Cena", value: "price" },
  { label: "Data rozpoczęcia", value: "startDate" },
];

const SortDropdown = ({ onChangeSort, onChangeOrder, value }: SortDropdown) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-w-[220px]">
      <div
        className="text-left px-3 py-2 border border-2 border-gray-300 rounded-lg bg-white cursor-pointer hover:border-gray-400 focus:border-black focus:ring-black"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 flex flex-wrap gap-1 mr-2">
            <span className="font-semibold">Sortuj</span>
          </div>
          <RiArrowDownSLine
            className={`w-5 h-5 text-gray-400 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {/* OrderBy options list */}
          <div className="py-1">
            {sortOrderOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  onChange={() => onChangeOrder(option.value)}
                  checked={value?.sortOrder === option.value}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-3 text-sm text-gray-700">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
          <hr className="text-gray-300 mx-3" />
          {/* SortBy options list */}
          <div className="py-1">
            {sortByOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  onChange={() => onChangeSort(option.value)}
                  checked={value?.sortBy === option.value}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-3 text-sm text-gray-700">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
