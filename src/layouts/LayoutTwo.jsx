import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Auth from "../pages/Auth";
import CreateProfile from "../pages/CreateProfile";
import NotFound from "../pages/NotFound";

export default function LayoutTwo() {
  return (
    <>
      <Routes>
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
