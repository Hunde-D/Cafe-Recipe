import { useContext } from "react";
// import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
const Home = () => {
  const { searchValue } = useContext(GlobalContext);
  // console.log(searchValue);

  return (
    <div className="p-2">
      # search input real time values ={">"} {searchValue}
    </div>
  );
};

export default Home;
