import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Library from "../pages/Library";
import Search from "../pages/Search";
import Home from "../pages/Home";
import SearchResults from "../pages/SearchResults";
import Subscription from "../pages/Subscription";
import CourseDetails from "../pages/CourseDetails";
import NotFound from "../pages/NotFound";

export default function LayoutOne() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="w-full h-full mt-[94px] flex items-center mx-auto md:max-w-5xl xl:max-w-7xl md:mt-[52px]">
        <Sidebar />
        <div className="w-full h-full md:pl-[180px] lg:pl-[204px] xl:pl-[232px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/library" element={<Library />} />
            <Route path="/search">
              <Route index element={<Search />} />
              <Route path="/search/:id" element={<SearchResults />} />
            </Route>
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
}
