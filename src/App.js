import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Coach from "./Pages/Home/CoachScreen/Coach";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/coach/:id",
    element: <Coach />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
