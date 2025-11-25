import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Apartments from "../pages/Apartments/Apartments";
import { Rental } from "../pages/Rental/Rental";
import Createaccount from "../pages/CreateAccount/Createaccount";
import Login from "../pages/Login/Login";
import ForgatePAssword from "../pages/ForgatePassword/ForgatePAssword";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path: '/pages/apartments',
                element: <Apartments />
            },
            {
                path: '/pages/rental',
                element: <Rental />
            }
        ]
        
    },
    {
        path: '/pages/create-account',
        element: <Createaccount />,
    },
     {
        path: '/pages/login',
        element: <Login />,
    },
     {
        path: '/pages/ForgatePassword',
        element: <ForgatePAssword />,
    }
]);


export default router;