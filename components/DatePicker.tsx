import { useRouter, useSearchParams } from "next/navigation";
import { RefObject, startTransition, useEffect, useRef, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { pl } from "react-day-picker/locale";
import { useOnClickOutside } from "usehooks-ts";
import { RiCloseLine } from "@remixicon/react";

const DatePicker = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [selectedDate, setSelectedDate] = useState<DateRange | undefined>(
		undefined
	);
	const [showDatePicker, setShowDatePicker] = useState(false);
	const dayPickerRef = useRef<HTMLDivElement | null>(null);

	useOnClickOutside(dayPickerRef as RefObject<HTMLElement>, () =>
		setShowDatePicker(false)
	);

	const handleSelectDate = (range: DateRange | undefined) => {
		if (range?.from && range.to) {
			setSelectedDate(range);

			startTransition(() => {
				const params = new URLSearchParams(searchParams.toString());
				if (range.from) params.set("startDate", range.from.toISOString());
				if (range.to) params.set("endDate", range.to.toISOString());
				router.replace(`?${params.toString()}`);
			});
		}
	};

	const handleResetDate = () => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams.toString());
			params.delete("startDate");
			params.delete("endDate");
			router.replace(`?${params.toString()}`);
		});
	};

	useEffect(() => {
		const startDate = searchParams.get("startDate");
		const endDate = searchParams.get("endDate");

		if (startDate && endDate) {
			setSelectedDate({
				from: new Date(startDate),
				to: new Date(endDate),
			});
		} else {
			setSelectedDate(undefined);
		}
	}, [searchParams]);

	return (
		<div className="relative" ref={dayPickerRef}>
			<button
				title="Wybierz datę"
				aria-expanded={showDatePicker}
				aria-haspopup="dialog"
				className="border border-2 border-gray-300 p-2 rounded cursor-pointer hover:border-gray-400 focus:border-black focus:ring-black"
				onClick={() => setShowDatePicker((prev) => !prev)}
			>
				{selectedDate ? (
					<div className="flex items-center gap-2">
						<span>
							{selectedDate.from?.toLocaleDateString("pl-PL")} -
							{selectedDate.to?.toLocaleDateString("pl-PL")}
						</span>
						<RiCloseLine
							size={14}
							className="border rounded-full"
							onClick={(e) => {
								e.stopPropagation();
								handleResetDate();
							}}
						/>
					</div>
				) : (
					<span className="font-semibold">Data</span>
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
						selected={selectedDate}
						onSelect={handleSelectDate}
					/>
				</div>
			)}
		</div>
	);
};

export default DatePicker;
