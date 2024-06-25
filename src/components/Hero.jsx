import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";
const Hero = () => {
  const { searchValue, setSearchValue, handleSubmit } =
    useContext(GlobalContext);
  console.log(searchValue);
  return (
    <div className="mx-auto flex flex-col items-center justify-center p-2 text-center max-sm:w-5/6 lg:w-4/6">
      <h1>Our Collection</h1>
      <p className="heroText">
        Discover our Culinary Journey, a curated collection of recipes from
        around the globe, meticulously crafted for home chefs and food
        enthusiasts alike. Each recipe is a blend of traditional flavors and
        modern twists, designed to inspire your kitchen creations and bring the
        world's cuisines right to your table, freshly prepared with love and
        passion.
      </p>
      <form className="m-3 flex rounded-xl border-[1px] pr-3">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          name="search"
          placeholder="search items..."
          className="flex-auto bg-transparent px-3 py-1 outline-none"
        />
        <button onClick={handleSubmit}>🔍</button>
      </form>
      <div className="space-x-6">
        <button className="">All products </button>
        <button>Available Now</button>
        <NavLink to="favorites">
          <button>Favorites</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
