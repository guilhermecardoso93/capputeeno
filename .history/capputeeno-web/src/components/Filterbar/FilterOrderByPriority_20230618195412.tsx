import { useState } from "react";
import { PriorityTypes } from "@/typesProps/priority-types";
import { useFilter } from "@/hooks/useFilter";
import { ArrowIcon } from "../icons/arrow-icon";

import { FilterPriorityContainer, PriorityFilter } from "./styles";

export function FilterOrderByPriority() {
  const [isOpen, setIsOpen] = useState(false);

  const { setPriority } = useFilter();

  const handleOpen = () => setIsOpen((prev) => !prev);

  function handleIsOpen(value: PriorityTypes) {
    setPriority(value);
    setIsOpen(false);
  }

  return (
    <FilterPriorityContainer>
      <button>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterPriorityContainer>
  );
}
