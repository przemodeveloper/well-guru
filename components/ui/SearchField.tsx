import { RiCloseLine } from "@remixicon/react";
import { useRef, useState } from "react";

interface SearchFieldProps {
  searchTerm: string;
  onSearch: (value: string) => void;
  placeholder?: string;
}

const SearchField = ({
  searchTerm = "",
  onSearch,
  placeholder = "Szukaj...",
}: SearchFieldProps) => {
  const [searchValue, setSearchValue] = useState(searchTerm);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      onSearch(value || "");
    }, 500);
  };

  return (
    <div className="border border-2 border-gray-300 rounded flex-grow min-w-[200px] flex items-center">
      <input
        type="text"
        name="search"
        placeholder={placeholder}
        className="w-full h-full px-3"
        value={searchValue}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      {searchValue && (
        <button
          type="button"
          title="Usuń wyszukiwanie"
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleSearchChange("");
          }}
        >
          <RiCloseLine size={14} className="border rounded-full mr-3" />
        </button>
      )}
    </div>
  );
};

export default SearchField;
