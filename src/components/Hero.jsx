import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";
const Hero = () => {
  const { searchValue, setSearchValue, handleSubmit } =
    useContext(GlobalContext);
  return (
    <div className="title-bg relative mx-auto flex flex-col items-center justify-center p-2 text-center max-sm:w-5/6 lg:w-4/6">
      <h1 className="mt-32 text-5xl">Our Collection</h1>
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
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive
              ? "rounded-lg border bg-[#6F757C] px-2 py-1 font-semibold text-[#FEF7EE] transition-colors duration-[0.25sec] ease-in"
              : "rounded-lg border border-current px-2 py-1 text-[#FEF7EE] transition-colors duration-[0.25sec] ease-in";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="favorites"
          className={({ isActive }) => {
            return isActive
              ? "rounded-lg border bg-[#6F757C] px-2 py-1 font-semibold text-[#FEF7EE] transition-colors duration-[0.25sec] ease-in"
              : "rounded-lg border border-current px-2 py-1 text-[#FEF7EE] transition-colors duration-[0.25sec] ease-in";
          }}
        >
          Favorites
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
