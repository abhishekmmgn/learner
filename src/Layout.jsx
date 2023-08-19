import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TabBar from "./components/TabBar";
import Sidebar from "./components/Sidebar";


export default function Layout() {
  return (
    <div className="md:grid-cols-2">
      <Header />
      <Routes>

      </Routes>
      <TabBar />
      <Sidebar />
    </div>
  );
}
