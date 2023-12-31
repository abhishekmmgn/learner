import Header from "../components/Header";
import TabBar from "../components/TabBar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="h-full w-full bg-tertiary flex items-center justify-center no-scrollbar">
        <div className="w-full h-full mt-14 pb-14 overflow-y-scroll md:pl-[210px] lg:pl-[232px] xl:pl-[248px] 2xl:max-w-[1800px] md:pb-4">
          <Outlet />
        </div>
      </main>
      <TabBar />
    </>
  );
}
