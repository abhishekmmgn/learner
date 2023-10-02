import { Route, Routes } from "react-router-dom";
import LayoutOne from "./layouts/LayoutOne";
import LayoutTwo from "./layouts/LayoutTwo";
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
import CreateInstructorProfile from "./pages/auth/CreateInstructorProfile";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

export default function App() {
  const isInstructor = false;

  return (
    <div className="h-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {isInstructor ? (
          <Route
            path="/create-instructor-profile"
            element={<CreateInstructorProfile />}
          />
        ) : (
          <Route path="/create-profile" element={<CreateProfile />} />
        )}

        {isInstructor ? (
          <Route path="/" element={<LayoutTwo />}>
            <Route index element={<Courses />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/new" element={<CreateCourse />} />
          </Route>
        ) : (
          <Route path="/" element={<LayoutOne />}>
            <Route index element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/library" element={<Library />} />
            <Route path="course/:id" element={<CourseDetails />} />
            <Route path="/search">
              <Route index element={<Search />} />
              <Route path="/search/:id" element={<SearchResults />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}
