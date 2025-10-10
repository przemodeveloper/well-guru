import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

const PriceFilter = () => {
  const searchParams = useSearchParams();
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const [priceMin, setPriceMin] = useState(searchParams.get("priceMin") ?? "");
  const [priceMax, setPriceMax] = useState(searchParams.get("priceMax") ?? "");

  const updatePriceFilter = (key: "priceMin" | "priceMax", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.replace(`?${params.toString()}`);
  };

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
      updatePriceFilter(key, value);
    }, 500);
  };

  return (
    <div>
      <span className="mr-3 font-semibold">Cena</span>
      <input
        type="number"
        placeholder="Od"
        className="border border-2 border-gray-300 p-2 rounded w-24 mr-2"
        min={0}
        value={priceMin}
        onChange={(e) => handlePriceChange("priceMin", e.target.value)}
      />
      <input
        type="number"
        placeholder="Do"
        className="border border-2 border-gray-300 p-2 rounded w-24"
        value={priceMax}
        onChange={(e) => handlePriceChange("priceMax", e.target.value)}
      />
    </div>
  );
};

export default PriceFilter;
