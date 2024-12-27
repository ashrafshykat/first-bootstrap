import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom' 

const router = createBrowserRouter ([
   { path: "/",
    element: <div>hello</div>,
   },
   {
    path: "/users",
    element: <App  />,
   }
  ],);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
