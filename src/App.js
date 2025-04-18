import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Home from "./Pages/Home/Home";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Coach from "./Pages/Home/CoachScreen/Coach";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/signup";
import Layout from "./Components/Layout";
import DashboardHome from "./Components/Dashboard/DashboardHome/DashboardHome";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "coach/:id",
        element: <Coach />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "home",
        element: <DashboardHome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
