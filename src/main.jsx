import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import QTTD from './components/QTTD'
import BM02 from './components/BM02'
import BM03 from './components/BM03'

const router = createBrowserRouter([
  {
    path: "/",
    element:     <App />

  },
  {
    path: "/quy-trinh-tuyen-dung",
    element:     <QTTD />

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
    path: "/bieu-mau-4",
    element:     <App />

  },
  {
    path: "/bieu-mau-5",
    element:     <App />

  },
  {
    path: "/bieu-mau-6",
    element:     <App />

  },
  {
    path: "/bieu-mau-7",
    element:     <App />

  },
  {
    path: "/bieu-mau-8",
    element:     <App />

  },
  {
    path: "/bieu-mau-10",
    element:     <App />

  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
