import { HashRouter, Navigate, Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Category } from "./pages/Category"
import { Product } from "./pages/Product"
import "./styles/global.scss"
function App() {
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

  const NavRoutes = () => {
    return (
      <Routes>
        {routes.map(({ name, ...rest }) => (
          <Route key={name} {...rest} />
        ))}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    )
  }

  return (
    <div className="App">
      <HashRouter>
        <Header prodAmount={0} totalValue={0} />
        <NavRoutes />
      </HashRouter>
      <Footer />
    </div>
  )
}

export default App
