
import './index.css'
import { RouterProvider } from 'react-router-dom' 
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import router from './Router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' container m-auto '>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
