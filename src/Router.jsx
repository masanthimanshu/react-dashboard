import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { CheckAuth } from "./auth/checkAuth";
import { LoginKeeper } from "./auth/loginKeeper";
import { Home, Login, Users, Content, NotFound } from "./pages";
import "./style.css";

export const Router = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route element={<LoginKeeper />}>
          <Route index element={<Login />} />
        </Route>
        <Route element={<CheckAuth />}>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="content" element={<Content />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
