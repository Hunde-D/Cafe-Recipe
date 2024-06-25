import { useParams } from "react-router";
import { useContext } from "react";
import { GlobalContext } from "../../context";

const Detail = () => {
  const { id } = useParams();
  const { recipes } = useContext(GlobalContext);

  const recipe = recipes.find((recipe) => recipe.id === id);

  return (
    <div className="m-10 self-start overflow-hidden border-black shadow-lg">
      <img
        src={recipe.image_url}
        alt={recipe.title}
        className="h-64 rounded-3xl object-cover sm:w-[22rem]"
      />
      <p className="labelText font-bold">{recipe.title}</p>
      <p className="labelText text-[1rem] text-[#6F757C]">{recipe.publisher}</p>
    </div>
  );
};

export default Detail;
