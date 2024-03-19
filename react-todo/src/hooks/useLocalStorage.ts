// export const useLocalStorage = (key: string) => {
//   const setItem = (value: unknown) => {
//     try {
//       return window.localStorage.setItem(key, JSON.stringify(value));
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const getItem = () => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : undefined;
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const removeItem = () => {
//     try {
//       return window.localStorage.removeItem(key);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return { setItem, getItem };
// };

import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  defaultValue: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const storage = window["localStorage"];
  const [value, setValue] = useState<T>(() => {
    const storedValue = storage.getItem(key);
    return storedValue !== null &&
      storedValue !== undefined &&
      storedValue !== "undefined"
      ? JSON.parse(storedValue)
      : defaultValue;
  });
  useEffect(() => {
    storage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
