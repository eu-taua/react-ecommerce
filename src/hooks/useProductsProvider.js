import { useEffect, useState } from "react"
import { useHttp } from "./useHttp"

export default function Provider() {
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

  return {
    products,
  }
}
