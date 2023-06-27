"use client"
import { ReactNode, createContext, useState } from "react";

import { FilterType } from "@/typesProps/filterTypes";
import { PriorityTypes } from "@/typesProps/priority-types";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priority: PriorityTypes,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);

  return (
    <FilterContext.Provider
      value={{ search, page, type, setPage, setSearch, setType }}
    >
      {children}
    </FilterContext.Provider>
  );
}
