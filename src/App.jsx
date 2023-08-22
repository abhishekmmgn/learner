import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TabBar from "./components/TabBar";
import Sidebar from "./components/Sidebar";
import Search from "./pages/Search";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Library from "./pages/Library";
import Subscription from "./pages/Subscription";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Auth from "./pages/Auth";
import Back from "./components/Back";
import CourseDetails from "./pages/CourseDetails";
import CreateProfile from "./pages/CreateProfile";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      {/* <Header /> */}
      {/* <main className=" mx-auto md:w-[768px] lg:w-[1024px] h-full md:grid md:grid-cols-[200px_auto] lg:grid-cols-[232px_auto]">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/search">
            <Route index element={<Search />} />
            <Route path="/search/:id" element={<SearchResults />} />
            </Route>
            <Route path="/library" element={<Library />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main> 
  // <Tabbar /> */}
    </div>
  );
}
