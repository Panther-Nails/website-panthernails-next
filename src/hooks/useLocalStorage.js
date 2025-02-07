import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(initialValue));
  }
  // Check if the value is already in localStorage
  const storedValue = localStorage.getItem(key);

  // If storedValue exists, parse it; otherwise, use the initialValue
  const [stored, setStored] = useState(
    storedValue ? JSON.parse(storedValue) : initialValue
  );

  // Create a function to set the value in both state and localStorage
  const setValue = (value) => {
    // Check if the value is a function (like in useState)
    const valueToStore = value instanceof Function ? value(stored) : value;

    // Save to state
    setStored(valueToStore);

    // Save to localStorage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [stored, setValue];
};

export default useLocalStorage;
