import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <GlobalContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
