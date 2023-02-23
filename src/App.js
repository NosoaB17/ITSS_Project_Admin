import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ListUser from "./pages/list/ListUser";
import ListCourse from "./pages/list/ListCourse";
import Details from "./pages/details/Details";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route path="users">
              <Route index element={<ListUser />} />
              <Route path=":userId" element={<Profile />} />
            </Route>

            <Route path="courses">
              <Route index element={<ListCourse />} />
              <Route path="/courses/:id" element={<Details />} />
              <Route path="new" element={<New title="Add New Course" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
