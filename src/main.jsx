
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoutes from './firebase/ProtectedRoutes'




const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path: '',
        element: <ProtectedRoutes component={<Home />}/>
      },
      {
        path:'home',
        element:<Home/>
       },
       {
        path:'login',
        element:<Login/>
       },
       {
        path:'register',
        element:<Register/>
       }
      
        
      
      
    ]
  }
])






createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>



  
)
