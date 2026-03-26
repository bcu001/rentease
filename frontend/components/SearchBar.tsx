"use client";

import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    console.log(value);
    // sent api call 
  }, [value]);

  return (
    <div className="w-full relative">
      <Search className="absolute left-0" size={20}/>
      <input
      className="border-black outline-none appearance-none border-b-2 w-full pl-6"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search Sofas, Fridge..."
      />
    </div>
  );
};

export default SearchBar;
