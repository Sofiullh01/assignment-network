import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Register from "../../Pages/ManageUser/Register";
import Login from "../../Pages/ManageUser/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            index: true,
            element: <Home></Home>,
        },
        {
            path: 'about',
            element: <About/>
        },
      ]      
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
  ]);

  export default router;