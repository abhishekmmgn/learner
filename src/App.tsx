import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Library from "./pages/Library";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import SearchResults from "./pages/SearchResults";
import CourseDetails from "./pages/CourseDetails";
import Courses from "./pages/Courses";
import CreateCourse from "./pages/CreateCourse";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Auth from "./pages/auth/Auth";
import CreateProfile from "./pages/auth/CreateProfile";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import { useAuthContext } from "./contexts/AuthProvider";

export default function App() {
  const { user, isInstructor } = useAuthContext();
  console.log(user);
  // console.log(isInstructor);

  return (
    <div className="h-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Layout />}>
          {isInstructor ? (
            <>
              <Route index element={<Courses />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/new" element={<CreateCourse />} />
            </>
          ) : (
            <>
              <Route index element={<Home />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/library" element={<Library />} />
              <Route path="course/:id" element={<CourseDetails />} />
              <Route path="/search">
                <Route index element={<Search />} />
                <Route path="/search/:id" element={<SearchResults />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </>
          )}
        </Route>
      </Routes>
    </div>
  );
}
