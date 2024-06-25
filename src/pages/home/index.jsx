import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import { IoHeart } from "react-icons/io5";
const Home = () => {
  const { recipes, loading, setFavorites, favorites } =
    useContext(GlobalContext);

  const addFavorites = (recipe) => {
    const favoriteRecipes = {
      title: recipe.title,
      publisher: recipe.publisher,
      image_url: recipe.image_url,
      id: recipe.id,
    };
    setFavorites((prev) =>
      prev.find((item) => item.id === favoriteRecipes.id)
        ? prev.filter((item) => item.id !== favoriteRecipes.id)
        : [...prev, favoriteRecipes],
    );
  };
  const renderRecipes = recipes.map((recipe) => (
    <div
      key={recipe.id}
      className="mx-auto overflow-hidden rounded-3xl border-black shadow-lg"
    >
      <div className="">
        <Link to={`/recipe-item/${recipe.id}`}>
          <img src={recipe.image_url} alt={recipe.title} className="image" />
        </Link>
        <IoHeart
          className={`absolute right-2 top-2 text-xl hover:text-red-500 ${favorites.find((fav) => fav.id === recipe.id) && "text-red-500"}`}
          onClick={() => addFavorites(recipe)}
        />
      </div>
      <Link to={`/recipe-item/${recipe.id}`}>
        <p className="labelText w-full font-bold">{recipe.title}</p>
        <p className="labelText text-[1rem] text-[#6F757C]">
          {recipe.publisher}
        </p>
      </Link>
    </div>
  ));

  return (
    <div className="grid-col-1 grid w-full place-content-center gap-5 px-10 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:px-24">
      {renderRecipes.length > 0 ? (
        renderRecipes
      ) : (
        <h1 className="text-center text-2xl">
          {loading ? "Loading..." : "No recipes found"}
        </h1>
      )}
    </div>
  );
};

export default Home;
