import { useState } from "react";

export function usuLocalStorage<T>(item: string) {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem('item') ?? ''))

  function updateLocalStorage(newValue: T) {
    setValue(newValue)
    localStorage.setItem(item, JSON.stringify(newValue))
  }

  return { value, updateLocalStorage}
}