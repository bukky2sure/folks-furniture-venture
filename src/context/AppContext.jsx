import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <AppContext.Provider value={{ cart, addToCart }}>
      {children}
    </AppContext.Provider>
  );
}