import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { MainLayout } from "./layout/MainLayout.jsx";
import PeoplePage from "./pages/People.jsx";
// import { Home, HomePagessss } from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import SingIn from "./pages/SignIn.jsx";
import Register from "./pages/register.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";

import Home from "./pages/Home.jsx";

// import { Home } from "./pages/Home.jsx";
// import { store } from "./store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },

  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/signin",
    element: <SingIn />,
  },
  {
    path: "/people",
    element: <PeoplePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/moviedetail",
    element: <MovieDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
