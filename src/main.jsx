import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
// import App from './App.jsx'

import Arena from "./components/subpages/Arena"
import Edition from "./components/subpages/Edition"
import Favourite from "./components/subpages/Favourite "
import Home from "./components/subpages/Home"
import Login from "./components/subpages/Login"
import Ranking from "./components/subpages/Ranking"
import Registration from "./components/subpages/Registration"
import RootLayout from './layouts/RootLayout.jsx'

const router = createBrowserRouter([
  {
    path:"",
    element: <RootLayout/>,
    children: [
      {index: true, element: <Home/>},
      {path: "/registration", element: <Registration/>},
      {path: "/login", element: <Login/>},
      {path: "/favourite", element: <Favourite/>},
      {path: "/arena", element: <Arena/>},
      {path: "/ranking", element: <Ranking/>},
      {path: "/edition", element: <Edition/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
