import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Category } from "./pages/Category"
import { Product } from "./pages/Product"

export const NavRoutes = () => {
  const routes = [
    {
      path: "/home",
      name: "Home Page",
      element: <Home />,
      exact: true,
    },
    {
      path: "/category/:category",
      name: "Category page",
      element: <Category />,
      exact: true,
    },
    {
      path: "/product/:id",
      name: "Product page",
      element: <Product />,
      exact: true,
    },
  ]
  return (
    <Routes>
      {routes.map(({ name, ...rest }) => (
        <Route key={name} {...rest} />
      ))}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}
