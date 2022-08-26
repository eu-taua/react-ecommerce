import { useEffect, useState } from "react"
import { useHttp } from "./hooks/useHttp"
import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Category } from "./pages/Category"
import { Product } from "./pages/Product"

export const NavRoutes = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(
        await useHttp(
          //had to add a proxy at request, the api at heroku hasn't CORS enabled.
          "https://vast-plateau-19026.herokuapp.com/https://bob-teste-front-end.herokuapp.com/api/products.json"
        )
      )
    }
    fetchProducts()
  }, [])
  const routes = [
    {
      path: "/home",
      name: "Home Page",
      element: <Home products={products} />,
      exact: true,
    },
    {
      path: "/category/:category",
      name: "Category page",
      element: <Category products={products} />,
      exact: true,
    },
    {
      path: "/product/:id",
      name: "Product page",
      element: <Product products={products} />,
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
