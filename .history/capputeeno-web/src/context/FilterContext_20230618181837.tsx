import { createContext, useState } from "react";
import { FilterType } from "@/typesProps/filterTypes";

const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterType.ALL,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {}
})

export function FilterContextProvider() {
  const [search, setSearch ] = useState('')
  const [ page, setPage] = useState(0)
  const [ type, setType] = useState(FilterType.ALL)
  
  return (
    <FilterContext.Provider value={{search, page, type, setPage, setSearch, setType}}>

    </FilterContext.Provider>
  )
}