import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Register from "../../Pages/ManageUser/Register";
import Login from "../../Pages/ManageUser/Login";
import AddAssignment from "../../Pages/AddAssignment/AddAssignment";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Assignments from "../../Pages/Assignment/Assignments";
import ViewCard from "../../Pages/ViewCard/ViewCard";
import UpdateAssignment from "../../Pages/AddAssignment/UpdateAssignment";

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
          path: 'task',
          element: <Assignments></Assignments>,
          // loader: ()=> fetch('http://localhost:5000/api/v1/assignments')
        },
        {
            path: 'addassignment',
            element: <PrivateRoute><AddAssignment/></PrivateRoute>,
        },
        {
            path: 'view/:id',
            element: <PrivateRoute><ViewCard></ViewCard></PrivateRoute>,
            loader: ()=> fetch('http://localhost:5000/api/v1/assignments')

        },
        {
            path: 'update/:id',
            element: <UpdateAssignment/>
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