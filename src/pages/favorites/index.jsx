import { useContext } from "react";
import { GlobalContext } from "../../context";
import { Link } from "react-router-dom";
const Favorites = () => {
  const { favorites, loading, setFavorites } = useContext(GlobalContext);
  const renderFavorites = favorites.map((recipe) => (
    <div
      key={recipe.id}
      className="mx-auto overflow-hidden rounded-3xl border-black shadow-lg"
    >
      <Link to={`/recipe-item/${recipe.id}`}>
        <img src={recipe.image_url} alt={recipe.title} className="image" />
      </Link>
      <section className="flex justify-between">
        <Link to={`/recipe-item/${recipe.id}`}>
          <p className="labelText font-bold">{recipe.title}</p>
        </Link>
        <button
          onClick={() => removeFavorite(recipe.id)}
          className="mt-2 h-8 rounded-lg bg-[#BEE3CC] px-1 font-semibold text-[#111315] hover:bg-[#111315] hover:text-[#FEF7EE]"
        >
          remove
        </button>
      </section>
      <Link to={`/recipe-item/${recipe.id}`}>
        <p className="labelText text-[1rem] text-[#6F757C]">
          {recipe.publisher}
        </p>
      </Link>
    </div>
  ));

  const removeFavorite = (id) => {
    const newFavorites = favorites.filter((recipe) => recipe.id !== id);
    setFavorites(newFavorites);
  };

  return (
    <div className="grid-col-1 grid w-full place-content-center gap-5 px-10 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:px-24">
      {renderFavorites.length > 0 ? (
        renderFavorites
      ) : (
        <h1 className="text-center text-2xl">
          {loading ? "Loading..." : "No recipes found"}
        </h1>
      )}
    </div>
  );
};

export default Favorites;
