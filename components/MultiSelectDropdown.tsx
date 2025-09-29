import { RiArrowDownLine, RiCloseLine } from "@remixicon/react";
import React, { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";

export interface Option {
  id: number;
  label: string;
  value: string;
}

interface MultiSelectDropdownProps {
  options: { id: number; label: string; value: string }[];
  placeholder?: string;
  onChange?: (options: Option[]) => void;
  value: string[];
}

const MultiSelectDropdown = ({
  options = [],
  placeholder = "",
  onChange,
  value,
}: MultiSelectDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef as React.RefObject<HTMLElement>, () =>
    setIsOpen(false)
  );

  const handleOptionToggle = (option: Option) => {
    const isSelected = selectedOptions.some(
      (selected) => selected.id === option.id
    );
    let newSelection;

    if (isSelected) {
      newSelection = selectedOptions.filter(
        (selected) => selected.id !== option.id
      );
    } else {
      newSelection = [...selectedOptions, option];
    }

    setSelectedOptions(newSelection);
    if (onChange) {
      onChange(newSelection);
    }
  };

  const handleRemoveOption = (optionToRemove: Option) => {
    const newSelection = selectedOptions.filter(
      (option) => option.id !== optionToRemove.id
    );
    setSelectedOptions(newSelection);
    if (onChange) {
      onChange(newSelection);
    }
  };

  const handleClearAll = () => {
    setSelectedOptions([]);
    if (onChange) {
      onChange([]);
    }
  };

  useEffect(() => {
    if (value) {
      const newSelected = options.filter((opt) => value.includes(opt.value));
      setSelectedOptions(newSelected);
    }
  }, [value, options]);

  return (
    <div className="w-full max-w-md">
      <div className="relative" ref={dropdownRef}>
        {/* Dropdown trigger */}
        <div
          className="min-h-[42px] px-3 py-2 border border-gray-300 rounded-lg bg-white cursor-pointer hover:border-gray-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1 flex flex-wrap gap-1">
              {selectedOptions.length === 0 ? (
                <span className="text-gray-500">{placeholder}</span>
              ) : (
                selectedOptions.map((option: Option) => (
                  <div
                    key={option.id}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                  >
                    {option.label}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveOption(option);
                      }}
                      className="hover:bg-blue-200 rounded-full p-0.5"
                    >
                      <RiCloseLine className="w-3 h-3" />
                    </button>
                  </div>
                ))
              )}
            </div>
            <RiArrowDownLine
              className={`w-5 h-5 text-gray-400 transition-transform ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {/* Clear all button */}
            {selectedOptions.length > 0 && (
              <div className="px-3 py-2 border-b border-gray-100">
                <button
                  onClick={handleClearAll}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Usuń wszystkie ({selectedOptions.length})
                </button>
              </div>
            )}

            {/* Options list */}
            <div className="py-1">
              {options.map((option: Option) => {
                const isSelected = selectedOptions.some(
                  (selected) => selected.id === option.id
                );
                return (
                  <label
                    key={option.id}
                    className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleOptionToggle(option)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
