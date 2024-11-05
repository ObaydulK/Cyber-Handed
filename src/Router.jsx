import { createBrowserRouter } from "react-router-dom";
import Home from "./Layout/Home"; 
import Notfound from "./Notfound";
import Navbers from "./Component/Nabver/Navbers/Navbers";
import ProvideingProject from "./Sections/ProvideingProject";
 



const router = createBrowserRouter([
    {
        path: '',
        element:<Home/>, 
        children:[
            {
                path:'/navber',
                element:<Navbers/>
            },
            {
                path:"/provideproject",
                element:<ProvideingProject/>
            }
            

        ]

    },
    {
        path:'/',
        element:<Notfound/>
    }




])
export default router;