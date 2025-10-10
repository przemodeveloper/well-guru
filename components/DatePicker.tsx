import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { pl } from "react-day-picker/locale";

const DatePicker = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedDate, setSelectedDate] = useState<DateRange | undefined>(
    undefined
  );
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSelectDate = (range: DateRange | undefined) => {
    if (range?.from && range.to) {
      const params = new URLSearchParams(searchParams.toString());
      setSelectedDate(range);
      params.set("startDate", range.from.toISOString());
      params.set("endDate", range.to.toISOString());
      router.replace(`?${params.toString()}`);
    }
  };

  return (
    <div>
      <button
        className="border border-2 border-gray-300 p-2 rounded cursor-pointer hover:border-gray-400 focus:border-black focus:ring-black"
        onClick={() => setShowDatePicker((prev) => !prev)}
      >
        {selectedDate
          ? `${selectedDate.from?.toLocaleDateString()} - ${selectedDate.to?.toLocaleDateString()}`
          : "Data"}
      </button>
      {showDatePicker && (
        <DayPicker
          mode="range"
          locale={pl}
          selected={selectedDate}
          onSelect={handleSelectDate}
        />
      )}
    </div>
  );
};

export default DatePicker;
