import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { useHttp } from "./hooks/useHttp"
import { Home } from "./pages/home"
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

  return (
    <div className="App">
      <Header prodAmount={0} totalValue={0} />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home products={products} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
