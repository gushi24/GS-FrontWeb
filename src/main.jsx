import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Sobre from './routes/Sobre.jsx'
import Solução from './routes/Solução.jsx'

const router = createBrowserRouter([
  {
    path:'/',element:<App/>,
    errorElement:<Error/>,

    children:[
      {path:'/',element:<Home/>},
      {path:'/login',element:<Login/>},
      {path:'/sobre',element:<Sobre/>},
      {path:'/solução',element:<Solução/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
