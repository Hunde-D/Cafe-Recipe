import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetchRecipes();
  };

  const fetchRecipes = async () => {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchValue}`,
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipes(data.data.recipes);
        setSearchValue("");
        setLoading(false);
      }
      console.log(data);
    } catch (error) {
      setSearchValue("");
      setLoading(false);
      console.log(error);
    }
  };
  console.log(loading, recipes);

  return (
    <GlobalContext.Provider
      value={{
        searchValue,
        setSearchValue,
        handleSubmit,
        recipes,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
