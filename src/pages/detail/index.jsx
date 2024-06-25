import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context";

const Detail = () => {
  const { id } = useParams();
  const { setFavorites } = useContext(GlobalContext);
  const [recipeDetail, setRecipeDetail] = useState([]);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
        );
        const data = await res.json();
        if (data?.data?.recipe) setRecipeDetail(data.data.recipe);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipeDetail();
  }, [id]);

  const ingredients = recipeDetail.ingredients?.map((ingredient, index) => (
    <tr key={index}>
      <td>
        {index + 1}. {ingredient.description}
      </td>
      <td>{ingredient.unit}</td>
      <td>{ingredient.quantity}</td>
    </tr>
  ));

  const addToFavorites = () => {
    const favoriteRecipes = {
      title: recipeDetail.title,
      publisher: recipeDetail.publisher,
      image_url: recipeDetail.image_url,
      id: id,
    };
    setFavorites((prev) =>
      prev.find((item) => item.id === favoriteRecipes.id)
        ? prev
        : [...prev, favoriteRecipes],
    );
  };

  return (
    <div className="m-10 flex w-full flex-col items-center">
      <img
        src={recipeDetail.image_url}
        alt={recipeDetail.title}
        className="image"
      />
      <div className="p-4">
        <p className="text-gray-500">{recipeDetail.publisher}</p>
        <h2 className="text-xl font-semibold">{recipeDetail.title}</h2>
      </div>
      <div className="space-x-3">
        <button
          onClick={addToFavorites}
          className="rounded-3xl border-2 border-slate-300 px-2 py-1 hover:border-slate-400"
        >
          Add to Favorites
        </button>
      </div>
      <div className="p-5">
        <table className="">
          <thead className="">
            <tr className="">
              <th>Ingredients/Description</th>
              <th>Unit</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{ingredients}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Detail;
