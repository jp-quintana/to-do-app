import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay = 300) => {
  const [debounceValue, setDebounceValue] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debounceValue;
};
