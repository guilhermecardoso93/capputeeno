import { useState } from "react";
import { PriorityTypes } from "@/typesProps/priority-types";
import { ArrowIcon } from "../icons/arrow-icon";

import { FilterPriorityContainer, PriorityFilter } from "./styles";

export function FilterOrderByPriority() {
  const [isOpen, setIsOpen ] = useState(false)
  
  function handleIsOpen(){
    setIsOpen((prev) => !prev)
  }

  return (
    <FilterPriorityContainer>
      <button>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen && 
            <PriorityFilter>
                <li onClick={() => handleIsOpen(PriorityTypes.NEWS)}>Novidades</li>
                <li onClick={() => handleIsOpen(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                <li onClick={() => handleIsOpen(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
                <li onClick={() => handleIsOpen(PriorityTypes.POPULARITY)}>Mais vendidos</li>
            </PriorityFilter>
        }
    </FilterPriorityContainer>
  )
}