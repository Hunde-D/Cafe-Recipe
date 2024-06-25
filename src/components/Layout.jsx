import { Outlet } from "react-router";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <div className="max-container container flex flex-col items-center justify-center">
      <Navbar className="fixed top-0" />
      <main className="2xl:mt-58 z-10 mt-44 flex h-full w-[96%] justify-center rounded-md sm:mt-28 lg:mt-36 xl:mt-44">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
