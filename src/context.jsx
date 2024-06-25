import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

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
    } catch (error) {
      setSearchValue("");
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        searchValue,
        setSearchValue,
        favorites,
        setFavorites,
        recipes,
        loading,
        handleSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
