import { createBrowserRouter } from "react-router-dom";
import Home from "./Layout/Home"; 
import Notfound from "./Notfound";
import Navbers from "./Component/Nabver/Navbers/Navbers";
 



const router = createBrowserRouter([
    {
        path: '',
        element:<Home/>, 
        children:[
            {
                path:'/navber',
                element:<Navbers/>
            },
            

        ]

    },
    {
        path:'/',
        element:<Notfound/>
    }




])
export default router;