import {createBrowserRouter, RouterProvider, Outlet} from "react-router"
import Home from "./pages/home.jsx"
import Order from "./pages/order.jsx"
import RootLayout from "./layout/rootLayout.jsx"
import Product from "./pages/productDetail.jsx"


const router = createBrowserRouter([
    {
        path:'/',
        element: <RootLayout/>,
        children: [
                {index: true, path: "/", element: <Home />},
                {path:"order", element: <Order />},
                {path:"product/:id", element: <Product />}
        ]
    }
])

export default function App(){
    return <RouterProvider router={router} /> 
}


