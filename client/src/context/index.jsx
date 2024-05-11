/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalContextState({ children }) {
  const [products, setProducts] = useState([]);
  return (
    <GlobalContext.Provider value={{ products, setProducts }}>
      {children}
    </GlobalContext.Provider>
  );
}
