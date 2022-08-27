import { HashRouter } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { NavRoutes } from "./routes"

import ProductsProvider from "./contexts/ProductsProvider"

import "./styles/global.scss"
function App() {
  return (
    <div className="App">
      <HashRouter>
        <ProductsProvider>
          {/* <Header prodAmount={0} totalValue={0} /> */}
          <NavRoutes />
          {/* <Footer /> */}
        </ProductsProvider>
      </HashRouter>
    </div>
  )
}

export default App
