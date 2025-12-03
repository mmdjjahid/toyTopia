import { createBrowserRouter } from "react-router";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import ToyDetails from "./pages/ToyDetails";
import NotFund from "./pages/NotFund";
import ToyReturn from "./ToyReturn";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "./pages/MyProfile";
import AllToys from "./pages/AllToys/AllToys";
import About from "./pages/About";
import Contact from "./Contact";
import Support from "./pages/Support";

const route = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: ()=>fetch('/data.json'),
      },
      {
        path:"/toy/:id",
        element:<ToyDetails></ToyDetails>,
        loader: ()=>fetch('/allData.json'),
        errorElement:<NotFund></NotFund>,
        
      },
      {
        path:"/toyreturn",
        element:<PrivateRoute><ToyReturn></ToyReturn></PrivateRoute>
      },
      {
        path:"/profile",
        element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        
        path:'/toys',
        Component: AllToys,
        loader: ()=>fetch('/allData.json'),
      },
      {
        
        path:'/about',
        Component: About,
        
      },
      {
        
        path:'/contact',
        Component: Contact,
        
      },
      {
        
        path:'/support',
        Component: Support,
        
      },

    ],
  },
  {
    path: "register",
    Component: Register,
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path:'*',
    Component: NotFund
  }
]);

export default route;
