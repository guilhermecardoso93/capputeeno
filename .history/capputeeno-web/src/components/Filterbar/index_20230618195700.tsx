import { FilterByType } from "./FilterByType";
import { FilterOrderByPriority } from "./FilterOrderByPriority";
import { FilterContainer } from "./styles";

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterOrderByPriority />
    </FilterContainer>
  )
}