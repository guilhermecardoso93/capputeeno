import { ArrowIcon } from "../icons/arrow-icon";
import { FilterPriorityContainer } from "./styles";

export function FilterOrderByPriority() {
  return (
    <FilterPriorityContainer>
      <p>
        Organizar por
        <ArrowIcon />
      </p>
    </FilterPriorityContainer>
  )
}