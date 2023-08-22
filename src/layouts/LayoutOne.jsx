import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import TabBar from "../components/TabBar";
import Sidebar from "../components/Sidebar";
import Search from "../pages/Search";
import Home from "../pages/Home";
import SearchResults from "../pages/SearchResults";
import Library from "../pages/Library";
import Subscription from "../pages/Subscription";
import CourseDetails from "../pages/CourseDetails";
import NotFound from "../pages/NotFound";

export default function LayoutOne() {
  return (
    <>
      <Header />
      <main className="mx-auto mt-[52px] h-full md:mt-14 md:ml-[200px] lg:ml-[232px] xl:ml-[248px] max-w-[1536px] 2xl:ml-auto">
        <Sidebar />
        <div className="w-full h-full 2xl:pl-[248px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/search">
              <Route index element={<Search />} />
              <Route path="/search/:id" element={<SearchResults />} />
            </Route>
            <Route path="/library" element={<Library />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <TabBar />
    </>
  );
}
