import { Grid } from "../../components/Grid"
import { Slider } from "../../components/Slider"
import { ProductList } from "../../components/ProductList"
import useProducts from "../../hooks/useProducts"
import "./styles.scss"

export const Home = () => {
  const { products } = useProducts()
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
          <ProductList products={products} />
        </section>
        <div className="custom-button">
          <button>VER MAIS PRODUTOS</button>
        </div>
      </main>
    </div>
  )
}
