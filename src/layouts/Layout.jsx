import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <Sidebar />
      <main className="w-full h-full mt-[94px] flex items-center mx-auto 2xl:max-w-[1800px] md:mt-[52px]">
        <div className="w-full h-full md:pl-[210px] lg:pl-[232px] xl:pl-[248px]">
          <Outlet />
        </div>
      </main>
    </>
  );
}
