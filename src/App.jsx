import { useEffect, useState } from "react"
import { Footer } from "./components/Footer"
import { useHttp } from "./hooks/useHttp"
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
      <h1>Hi, there!</h1>
      <Footer />
    </div>
  )
}

export default App
