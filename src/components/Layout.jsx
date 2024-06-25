import { Outlet } from "react-router";
import Hero from "./Hero";
const Layout = () => {
  return (
    <div className="max-container bg-heroImg container flex flex-col items-center justify-center">
      <main className="2xl:mt-58 z-10 mt-44 flex h-full w-[96%] flex-col items-center justify-center rounded-md sm:mt-28 lg:mt-36 xl:mt-44">
        <Hero />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
