import "react-day-picker/style.css";

import { RefObject, useRef, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { pl } from "react-day-picker/locale";
import { useOnClickOutside } from "usehooks-ts";
import { RiCloseLine } from "@remixicon/react";

interface DatePickerProps {
  onChange: (range: DateRange | undefined) => void;
  value?: DateRange | undefined;
  placeholder?: string;
}

const DatePicker = ({ onChange, value, placeholder }: DatePickerProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dayPickerRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(dayPickerRef as RefObject<HTMLElement>, () =>
    setShowDatePicker(false)
  );

  return (
    <div className="relative" ref={dayPickerRef}>
      <button
        title="Wybierz datę"
        aria-expanded={showDatePicker}
        aria-haspopup="dialog"
        className="border border-2 border-gray-300 p-2 rounded cursor-pointer hover:border-gray-400 focus:border-black focus:ring-black"
        onClick={() => setShowDatePicker((prev) => !prev)}
      >
        {value?.from && value?.to ? (
          <div className="flex items-center gap-2">
            <span>
              {value.from?.toLocaleDateString("pl-PL")} -{" "}
              {value.to?.toLocaleDateString("pl-PL")}
            </span>
            <button
              type="button"
              title="Wyczyść daty"
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onChange(undefined);
                setShowDatePicker(false);
              }}
            >
              <RiCloseLine size={14} className="border rounded-full" />
            </button>
          </div>
        ) : (
          <span className="font-semibold">{placeholder}</span>
        )}
      </button>
      {showDatePicker && (
        <div className="absolute top-full mt-2 z-10 border-2 border-gray-300 rounded-lg p-4 bg-white shadow-lg w-max sm:w-auto">
          <DayPicker
            mode="range"
            classNames={{
              chevron: "text-black",
              range_start: "bg-black",
              range_end: "bg-black",
              selected: "bg-black text-white",
              today: "bg-gray-300",
              range_middle: "bg-gray-300",
            }}
            locale={pl}
            selected={value}
            onSelect={onChange}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
