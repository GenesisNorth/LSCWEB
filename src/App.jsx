import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import Giving from "./Pages/Giving";
import WatchRead from "./Pages/WatchRead";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "About_Us",
          element: <AboutUs/>,
        },
        {
          path: "Giving",
          element: <Giving/>,
        },
        {
          path: "Watch_&_Read",
          element: <WatchRead/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
