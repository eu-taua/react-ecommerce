import { useEffect, useState } from "react"
import { useHttp } from "../../hooks/useHttp"
import { Grid } from "../../components/Grid"
import { ProductCard } from "../../components/ProductCard"
import { Slider } from "../../components/Slider"
import "./styles.scss"

export const Home = () => {
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
    <div className="home-container">
      <Slider />
      <main>
        <section className="trend">
          <h1>TENDÊNCIAS</h1>
          <Grid />
        </section>
        <section className="popular">
          <h1>POPULARES</h1>
          <div className="products-wrapper">
            {products &&
              products.map(prod => {
                return <ProductCard key={prod.id} product={prod} />
              })}
          </div>
        </section>
        <div className="custom-button">
          <button>VER MAIS PRODUTOS</button>
        </div>
      </main>
    </div>
  )
}
