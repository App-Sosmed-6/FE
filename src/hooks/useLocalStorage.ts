import { useState } from "react";

type SetValue<T> = (value: T) => void;

function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState<T>(initial);

  const updateValue: SetValue<T> = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
}

export default useLocalStorage;
