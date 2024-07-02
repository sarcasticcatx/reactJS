import { useEffect, useState } from "react";
import "./SearchInput.css"

interface SearchInputProp {
  onSearch: (value: string) => void;
}

export function SearchInput({ onSearch}: SearchInputProp) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, onSearch]);

  return(
    <div className="SearchInput">
             <input
        type="text"
        placeholder="🔎 Searching for a destination..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  )
}
