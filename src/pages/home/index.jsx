import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
const Home = () => {
  const { recipes, loading } = useContext(GlobalContext);
  // console.log(searchValue);

  const renderRecipes = recipes.map((recipe) => (
    <div
      key={recipe.id}
      className="mx-auto overflow-hidden border-black shadow-lg"
    >
      <Link to="/detail">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="h-64 rounded-3xl object-cover sm:w-[22rem]"
        />
        <p className="labelText font-bold">{recipe.title}</p>
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
