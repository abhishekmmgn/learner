import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Auth from "./pages/Auth";
import Back from "./components/Back";
import CourseDetails from "./pages/CourseDetails";
import CreateProfile from "./pages/CreateProfile";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";

export default function LayoutTwo() {
  return (
    <Fragment>
      <Back />
      <Sidebar />

    </Fragment>
  );
}
