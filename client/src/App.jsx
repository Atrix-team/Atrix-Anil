import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import AppLayout from "./outlet/AppLayout";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import AdminLayout from "./dashboard/admin-layout/AdminLayout"
import AdminHome from "./dashboard/admin-pages/AdminHome"
import Login from "./dashboard/admin-pages/Login"
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "services", element: <Services /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "blog", element: <Blog /> },
      { path: "contact-us", element: <ContactUs /> },
    ],
  },
  {
    path: "dashboard",
    element: <AdminLayout></AdminLayout>,
    children: [
      { path: "", element: <AdminHome></AdminHome> }
    ]
  },
  {
    path: "admin",
    element: <Login></Login>
  }

]);


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
