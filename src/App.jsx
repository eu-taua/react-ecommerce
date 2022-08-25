import { useEffect, useState } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { useHttp } from "./hooks/useHttp"
import { Home } from "./pages/Home"
import { Category } from "./pages/Category"
import { Product } from "./pages/Product"
import "./styles/global.scss"
function App() {
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
      props: products,
      exact: false,
    },
    {
      path: "/category",
      name: "Category page",
      element: <Category />,
      exact: false,
    },
    {
      path: "/product",
      name: "Product page",
      element: <Product />,
      exact: false,
    },
  ]

  function Navigation() {
    return (
      <Routes>
        {routes.map(({ name, ...rest }) => (
          <Route key={name} {...rest} />
        ))}
      </Routes>
    )
  }

  return (
    <div className="App">
      <Header prodAmount={0} totalValue={0} />
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
