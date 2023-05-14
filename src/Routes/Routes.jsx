import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CheckOut from "../pages/CheckOut";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Orders from "../pages/Orders/Orders";


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"checkout/:id",
                element:<PrivateRoute><CheckOut/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path:"orders/",
                element:<PrivateRoute><Orders/></PrivateRoute>,
            }
        ]
    }
])

export default router;