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
import OurPlans from "./Components/PlanSection/OurPlans";
import SliderSection from "./Components/Slider/Slider";
import AboutUs from "./Components/AboutUs";
import WeightLossProgram from "./Components/WeightLoss";
import BuildingMusclesProgram from "./Components/BuildingMuscles";

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
      {
        path: "our-plans",
        element: <OurPlans />,
      },
      {
        path: "trainers",
        element: <SliderSection />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "weight-loss",
        element: <WeightLossProgram />,
      },
      {
        path: "building-muscles",
        element: <BuildingMusclesProgram />,
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
