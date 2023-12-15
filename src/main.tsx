import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import ErrorPage from './error-page.tsx'
import Index from './routes/index.tsx'
import Meals from './routes/meal.tsx'


const router  = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    // nested routes
    children: [
      {
        index: true, 
        element: <Index />
      },
      {
        path: "/account",
        element: <div>Account Page</div>,
        
      },
      {
        path: "/delivery",
        element: <div>delivery Page</div>,
        
      },
      {
        path: "/favourite",
        element: <div>Favourite Page</div>,
        
      },
      {
        path: "/wallet",
        element: <div>Wallet Page</div>,
        
      },
      {
        path: "/help",
        element: <div>Help Page</div>,
        
      },
     
    ],
    
  },

  {
    path: "/meal/:id",
    element: <Meals/>,
    
  },
  // Indival routes
  // {
  //   path: "/delivery",
  //   element: <div>delivery Page</div>,
    
  // },
  // {
  //   path: "/favourite",
  //   element: <div>Favourite Page</div>,
    
  // },
  // {
  //   path: "/wallet",
  //   element: <div>Wallet Page</div>,
    
  // },
  // {
  //   path: "/help",
  //   element: <div>Help Page</div>,
    
  // },
 
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
