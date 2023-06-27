"use client"
import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/typesProps/filterTypes";
import styled from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  color: var(--text-dark);

  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange-low)" : ""};
`;

export function FilterByType() {
  const { type, setType } = useFilter()

  return (
    <FilterList>
      <FilterItem selected={type === FilterType.ALL}>Todos os Produtos</FilterItem>
      <FilterItem selected={type === FilterType.SHIRT}>Camisetas</FilterItem>
      <FilterItem selected={type === FilterType.MUG}>Canecas</FilterItem>
    </FilterList>
  );
}
