import Header from "../components/Header";
import TabBar from "../components/TabBar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="h-full w-full flex items-center 2xl:max-w-[1800px]">
        <div className="w-full h-full mt-[56px] overflow-y-scroll md:pl-[210px] lg:pl-[232px] xl:pl-[248px]">
          <Outlet />
        </div>
      </main>
      <TabBar />
    </>
  );
}
