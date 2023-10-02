import { Route, Routes } from "react-router-dom";
import LayoutOne from "./layouts/LayoutOne";
import LayoutThree from "./layouts/LayoutThree";
import Library from "./pages/Library";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import SearchResults from "./pages/SearchResults";
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Auth from "./pages/auth/Auth";
import CreateProfile from "./pages/CreateProfile";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

export default function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/" element={<LayoutThree />}>
          <Route path="course/:id" element={<CourseDetails />} />
        </Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/library" element={<Library />} />
          <Route path="/search">
            <Route index element={<Search />} />
            <Route path="/search/:id" element={<SearchResults />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
