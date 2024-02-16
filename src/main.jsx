import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BM02 from './pages/BM02/index.jsx'
import BM03 from './pages/BM03/index.jsx'
import BM04vong1 from './pages/BM04vong1/index.jsx'
import BM04vong2 from './pages/BM04vong2/index.jsx'
import BM05 from './pages/BM05/index.jsx'
import BM06 from './pages/BM06/index.jsx'
import BM07 from './pages/BM07/index.jsx'
import BM08 from './pages/BM08/index.jsx'
import BM10 from './pages/BM10/index.jsx'
import "/src/assets/css/index.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element:     <App />

  },

  {
    path: "/bieu-mau-2",
    element:     <BM02 />

  },
  {
    path: "/bieu-mau-3",
    element:     <BM03 />

  },
  {
    path: "/bieu-mau-4-vong-1",
    element:     <BM04vong1 />

  },
  {
    path: "/bieu-mau-4-vong-2",
    element:     <BM04vong2 />

  },
  {
    path: "/bieu-mau-5",
    element:     <BM05 />

  },
  {
    path: "/bieu-mau-6",
    element:     <BM06 />

  },
  {
    path: "/bieu-mau-7",
    element:     <BM07 />

  },
  {
    path: "/bieu-mau-8",
    element:    <BM08 />

  },
  {
    path: "/bieu-mau-10",
    element:     <BM10 />

  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
