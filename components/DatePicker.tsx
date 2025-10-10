import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      footer={
        selectedDate
          ? `Selected: ${selectedDate.toLocaleDateString()}`
          : "Pick a day."
      }
    />
  );
};

export default DatePicker;
